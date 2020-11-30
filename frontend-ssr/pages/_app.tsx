import { Provider } from 'react-redux';
import { createStoreWithPreloadedData } from '~/redux/store';
import { defaultUserState } from '~/redux/user/user.reducer';
import { connectToDb } from '~/server/database';
import UserModel from '~/server/model/user.model';

import '../styles/index.scss';

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

/** Fetch user on all pages and add it to store */
MyApp.getInitialProps = async ({ ctx }) => {
  const pageProps = {
    user: null,
  };

  try {
    connectToDb();

    const { token } = ctx.req.cookies;

    if (!token) {
      return { pageProps };
    }

    const user = await UserModel.ping(token);
    const sanitizedUser = UserModel.sanitize(user);

    sanitizedUser.lastLogin = sanitizedUser.lastLogin.toString();
    pageProps.user = sanitizedUser;
  } catch (err) {
    console.error('[getServerSideProps][pingUser]: ', err);
  }

  return { pageProps };
};
