import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import MatchWordsFC from '../components/cli_git/git_commands_fc';

import styles from '../styles/pages/default-page.module.scss';
import MatchCommandClassComponent from '../components/cli_git/git_commands_fc';

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
    let expressionToMatch = ['hello'];
  
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

          <MatchCommandClassComponent 
            defaultValue={expressionToMatch} />
        </main>

        <footer>
          Copyright
          {new Date().getFullYear()}
        </footer>
      </div>
    );
  }
}
