import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/pages/default-page.module.scss';

export default function Javascript() {
  return (
    <div className={styles['page']}>
      <Head>
        <title>Javascript</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Lectii Javascript
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
