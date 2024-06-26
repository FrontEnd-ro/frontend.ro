import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import * as Fathom from 'fathom-client';
import { useRouter } from 'next/router';
import { noop } from '~/services/Utils';
import I18nProvider from 'next-translate/I18nProvider'
import { API_UserI, UserRole } from '../shared/types/user.types';
import UserService from '~/services/api/User.service';
import IdentifyLogRocket from '~/components/IdentifyLogRocket';
import LoadNotifications from '~/components/LoadNotifications/LoadNotifications';
import { loadConfig } from '~/redux/application-config.reducer';
import { createStoreWithPreloadedData } from '~/redux/store';
import { defaultUserState } from '~/redux/user/user.reducer';
import { ApplicationConfig } from '../shared/types/application-config.types';
import ApplicationConfigService from '~/services/api/ApplicationConfig.service';

import '~/styles/index.scss';

export default function MyApp({ Component, pageProps }: any) {
  const store = createStoreWithPreloadedData({
    user: {
      ...defaultUserState,
      info: pageProps._serverUser,
    },
    applicationConfig: pageProps._applicationConfig,
  });

  useFathom('MVWDOLLT', pageProps._serverUser);
  useApplicationConfig((config) => store.dispatch(loadConfig(config)));

  return (
    <Provider store={store}>
      <I18nProvider lang={process.env.LANGUAGE} namespaces={pageProps.namespaces}>
        <IdentifyLogRocket />
        <LoadNotifications />
        <Component {...pageProps} />
      </I18nProvider>
    </Provider>
  );
}

/**
 * Fetch user on all pages and add it to store.
 * This way we already have the user when rendering most pages thus the overall
 * render experience should be faster.

 * ⚠⚠⚠ WARNING ⚠⚠⚠
 * This function gets called on both SERVER and CLIENT.
 * Unfortunately `getServerSideProps` is not supported
 * for the `App` component so we're stuck with this one.
 *
 * On the client however, we don't want to call the DB methods,
 * so we found a little "hack" by checking the `req` parameter.
 */

MyApp.getInitialProps = async ({ ctx }) => {
  const pageProps = {
    _serverUser: null,
    _applicationConfig: {
      navItems: [],
    },
    namespaces: {}
  };

  const isClientSide = !ctx.req;
  if (isClientSide) {
    pageProps.namespaces = await loadLocaleNamespaces(process.env.LANGUAGE);
    return { pageProps };
  }

  const [applicationConfig, namespaces] = await Promise.all([
    fetchApplicationConfigServerSide(),
    loadLocaleNamespaces(process.env.LANGUAGE)
  ]);
  pageProps.namespaces = namespaces;
  pageProps._applicationConfig = applicationConfig;

  const { token } = ctx.req?.cookies ?? {};
  if (typeof token === 'string') {
    try {
      const user = await UserService.ping({
        headers: {
          cookie: `token=${token}`,
        }
      });
      pageProps._serverUser = user;
    } catch (err) {
      console.log('[getInitialProps] Failed to fetch user', err);
      // Do nothing. We will continue rendering the app in an non-authenticated state
    }
  }

  return { pageProps };
};

async function fetchApplicationConfigServerSide(): Promise<ApplicationConfig> {
  const SPAN = '[fetchApplicationConfigServerSide]';

  const emptyConfig = { navItems: [] };
  try {
    const applicationConfig = await ApplicationConfigService.get();
    return applicationConfig;
  } catch (err) {
    console.error(`${SPAN} Failed to fetch ApplicationConfig server side`, err);
  }

  return emptyConfig;
}

function useApplicationConfig(callback: (config: ApplicationConfig) => void) {
  const fetchApplicationConfig = () => {
    ApplicationConfigService.get()
      .then(callback)
      .catch((err) => {
        console.error('[useApplicationConfig]', err);
      });
  };

  useEffect(() => {
    fetchApplicationConfig();
    setInterval(fetchApplicationConfig, 30 * 60 * 1000); // 30 mins
  }, []);
}

function useFathom(trackingCode: string, userInfo?: API_UserI) {
  // https://vercel.com/guides/deploying-nextjs-using-fathom-analytics-with-vercel
  const SPAN = `[useFathom, trackingCode=${trackingCode}, userInfo=${userInfo}]`;
  const router = useRouter();

  useEffect(() => {
    const isAdminRole = userInfo?.role === UserRole.ADMIN;

    if (isAdminRole) {
      console.info(`${SPAN} Don't initialize Fathom for admin users.`);
      return noop;
    }

    Fathom.load(trackingCode, {
      includedDomains: [
        'frontend.ro',
        'www.frontend.ro',
      ],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete);
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, [trackingCode, userInfo?.role]);
}

async function loadLocaleNamespaces(lang: string): Promise<{
  common: Record<string, any>
}> {
  const common = await import(`../locales/${lang}/common.json`).then(resp => resp.default);

  return { common };
}
