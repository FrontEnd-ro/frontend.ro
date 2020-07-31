import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/pages/default-page.module.scss';

export default function Css() {
  return (
    <div className={styles.page}>
      <Head>
        <title>CSS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Lectii CSS
        </h1>
        <Link href="/">
          Back to home
        </Link>
      </main>

      <footer>
        Copyright
        {new Date().getFullYear()}
      </footer>
    </div>
  );
}
