import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import styles from '../../styles/pages/default-page.module.scss';

export default class Html extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch('/api/hello')
      .then((resp) => resp.json())
      .then((jsonResp) => {
        this.setState(jsonResp);
      });
  }

  render() {
    return (
      <>
        <Head>
          <title>HTML</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className={styles.page}>
          <h1 className={styles.title}>
            Lectii HTML
          </h1>
          <Link href="/">
            Back to home
          </Link>
        </main>

        <Footer />
      </>
    );
  }
}
