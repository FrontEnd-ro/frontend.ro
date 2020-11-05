import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Header from '~/components/Header';
import Footer from '~/components/Footer';

import styles from './404.module.scss';

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>Not Found | FrontEnd.ro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Header />
        <main className={`${styles.page} ${styles['generic-404']}`}>
          <h1>
            Oops...
            <span aria-label="Sad face emoji" role="img">😞</span>
          </h1>
          <h2>
            Se pare că pagina pe care o cauți nu mai există.
          </h2>
          <Link href="/">
            <a className="btn btn--blue">Navighează acasă!</a>
          </Link>
        </main>
        <Footer />
      </>
    </>
  );
}
