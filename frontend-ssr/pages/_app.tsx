import { Provider } from 'react-redux';
import store from '../redux/store';
import '../styles/index.scss';

export default function MyApp({ Component, pageProps } : any) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
