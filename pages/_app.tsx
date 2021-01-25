import { Provider } from 'react-redux';
import { createStoreWithPreloadedData } from '~/redux/store';
import { defaultUserState } from '~/redux/user/user.reducer';

import '~/styles/index.scss';

export default function MyApp({ Component, pageProps }: any) {
  const store = createStoreWithPreloadedData({
    user: {
      ...defaultUserState,
      info: pageProps.user,
    },
  });

  return (
    <Provider store={store}>
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

 MyApp.getInitialProps = async ({ ctx, req }) => {
  const pageProps = {
    user: null,
  };

  const isClientSide = !ctx.req;

  if (isClientSide) {
    return { pageProps };
  }

  try {
    const [databaseImport, userModelImport] = await Promise.all([
      import('../server/database'),
      import('../server/user/user.model'),
    ]);

    const { connectToDb } = databaseImport;
    const UserModel = userModelImport.default;
    const { token } = ctx.req.cookies;

    if (!token) {
      return { pageProps };
    }

    connectToDb();

    const user = await UserModel.ping(token);
    const sanitizedUser = UserModel.sanitize(user);

    sanitizedUser.lastLogin = sanitizedUser.lastLogin.toString();
    pageProps.user = sanitizedUser;
  } catch (err) {
    console.error('[getServerSideProps][pingUser]: ', err);
  }

  return { pageProps };
};
