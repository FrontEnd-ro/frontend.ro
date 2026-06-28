import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import { env } from '~/services/env';

class MyDocument extends Document {
  render() {
    return (
      <Html lang={env.LANGUAGE}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
