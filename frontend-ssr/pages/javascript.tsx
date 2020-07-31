import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/pages/default-page.module.scss';

export default class JavaScript extends React.Component<any, any, any> {
  constructor(props) {
    super(props);

    this.state = {
      count: 2,
    };
  }

      increaseCount = () => {
        this.setState((prevState) => ({
          count: prevState.count,
        }));
      }

      render() {
        const { count } = this.state;
        return (
          <div className={styles.page}>
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

            {count}
            <button type="button" onClick={this.increaseCount}> Increase </button>

            <footer>
              Copyright
              {' '}
              {new Date().getFullYear()}
            </footer>
          </div>
        );
      }
}
