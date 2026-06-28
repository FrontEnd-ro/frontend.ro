import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import * as Fathom from 'fathom-client';
import { useRouter } from 'next/router';
import I18nProvider from 'next-translate/I18nProvider'
import ArchiveBanner from '~/components/ArchiveBanner';
import { loadConfig } from '~/redux/application-config.reducer';
import { createStoreWithPreloadedData } from '~/redux/store';
import { defaultUserState } from '~/redux/user/user.reducer';
import { ApplicationConfig } from '../shared/types/application-config.types';
import ApplicationConfigService from '~/services/api/ApplicationConfig.service';

import '~/styles/index.scss';
import { env } from '~/services/env';

// Read-only archive: there is no authentication anymore, so the app always
// renders in a logged-out state. The navigation config (and optional landing
// ad) is still read from MongoDB so the header stays accurate.
export default function MyApp({ Component, pageProps }: any) {
  const store = createStoreWithPreloadedData({
    user: {
      ...defaultUserState,
      info: null,
    },
    applicationConfig: pageProps._applicationConfig,
  });

  useFathom('MVWDOLLT');
  useApplicationConfig((config) => store.dispatch(loadConfig(config)));

  return (
    <Provider store={store}>
      <I18nProvider lang={env.LANGUAGE} namespaces={pageProps.namespaces}>
        <ArchiveBanner />
        <Component {...pageProps} />
      </I18nProvider>
    </Provider>
  );
}

/**
 * Loads the navigation config + locale namespaces for every page.
 *
 * ⚠ This runs on BOTH server and client. The MongoDB read only happens
 * server-side (guarded by `ctx.req`); on the client the nav is refreshed via
 * the read-only `/api/application-config` endpoint in `useApplicationConfig`.
 */
MyApp.getInitialProps = async ({ ctx }) => {
  const pageProps = {
    _applicationConfig: {
      navItems: [],
    } as ApplicationConfig,
    namespaces: {}
  };

  const isClientSide = !ctx.req;
  if (isClientSide) {
    pageProps.namespaces = await loadLocaleNamespaces(env.LANGUAGE);
    return { pageProps };
  }

  const [applicationConfig, namespaces] = await Promise.all([
    fetchApplicationConfigServerSide(),
    loadLocaleNamespaces(env.LANGUAGE)
  ]);
  pageProps.namespaces = namespaces;
  pageProps._applicationConfig = applicationConfig;

  return { pageProps };
};

async function fetchApplicationConfigServerSide(): Promise<ApplicationConfig> {
  const SPAN = '[fetchApplicationConfigServerSide]';
  try {
    // Dynamic import (server-only): `lib/content` pulls in Mongoose, which must
    // NOT be bundled into the client. `_app`'s getInitialProps runs on both
    // server and client, so importing it at module top-level would crash the
    // browser ("mongoose.models is undefined"). This call only ever runs in the
    // server-side branch of getInitialProps, so the chunk never loads client-side.
    const { getApplicationConfig } = await import('../lib/content');
    return await getApplicationConfig();
  } catch (err) {
    console.error(`${SPAN} Failed to read ApplicationConfig`, err);
    return { ad: undefined, navItems: [] };
  }
}

function useApplicationConfig(callback: (config: ApplicationConfig) => void) {
  useEffect(() => {
    ApplicationConfigService.get()
      .then(callback)
      .catch((err) => {
        console.error('[useApplicationConfig]', err);
      });
  }, []);
}

function useFathom(trackingCode: string) {
  // https://vercel.com/guides/deploying-nextjs-using-fathom-analytics-with-vercel
  const router = useRouter();

  useEffect(() => {
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
  }, [trackingCode]);
}

async function loadLocaleNamespaces(lang: string): Promise<{
  common: Record<string, any>
}> {
  const common = await import(`../locales/${lang}/common.json`).then(resp => resp.default);

  return { common };
}
