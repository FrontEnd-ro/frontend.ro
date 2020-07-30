import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/pages/default-page.module.scss';

export default function Html() {
  return (
    <div className={styles.page}>
      <Head>
        <title>HTML</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Lectii HTML
        </h1>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </main>

      <footer>
        Copyright {new Date().getFullYear()}
      </footer>
    </div>
  )
}
