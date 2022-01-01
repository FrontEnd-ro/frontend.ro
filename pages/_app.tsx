import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import IdentifyLogRocket from '~/components/IdentifyLogRocket';
import LoadNotifications from '~/components/LoadNotifications/LoadNotifications';
import { ApplicationConfig, loadConfig } from '~/redux/application-config.reducer';
import { createStoreWithPreloadedData } from '~/redux/store';
import { defaultUserState } from '~/redux/user/user.reducer';
import ApplicationConfigService from '~/services/api/ApplicationConfig.service';

import '~/styles/index.scss';

export default function MyApp({ Component, pageProps }: any) {
  const store = createStoreWithPreloadedData({
    user: {
      ...defaultUserState,
      info: pageProps._serverUser,
    },
  });

  useApplicationConfig((config) => store.dispatch(loadConfig(config)));

  return (
    <Provider store={store}>
      <IdentifyLogRocket />
      <LoadNotifications />
      <Component {...pageProps} />
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
  };

  const isClientSide = !ctx.req;

  if (isClientSide) {
    return { pageProps };
  }

  const { token } = ctx.req.cookies;
  if (!token) {
    return { pageProps };
  }

  try {
    const { default: fetch } = await import('node-fetch');

    // Accessing the DB code directly fails (cannot find module 'fs').
    // It happened after adding the `node-config` package. Thus, to fix
    // it we refactored this code to use `fetch`.
    const resp = await fetch(`${process.env.ENDPOINT}/auth/ping`, {
      headers: {
        cookie: `token=${token}`,
      },
    });
    if (!resp.ok) {
      return { pageProps };
    }

    const user = await resp.json();

    pageProps._serverUser = user;
  } catch (err) {
    console.error('[getServerSideProps][pingUser]: ', err);
  }

  return { pageProps };
};

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
