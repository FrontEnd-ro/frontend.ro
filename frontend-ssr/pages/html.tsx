import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/pages/default-page.module.scss';

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
    const { name = 'Not John Doe' } = this.state;

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
            Back to home
          </Link>

          <h3>
            {name}
          </h3>
        </main>

        <footer>
          Copyright
          {new Date().getFullYear()}
        </footer>
      </div>
    );
  }
}
