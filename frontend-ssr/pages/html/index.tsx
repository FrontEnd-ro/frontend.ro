import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '~/components/footer/Footer.component';
import Header from '~/components/header/Header.component';

import styles from '../../styles/pages/default-page.module.scss';
import MatchCommandClassComponent from '../../components/cli_git/GitCli_CC';
import AddPostForm from '../../redux/crud_redux/AddPostForm';
import PostsList from '../../redux/crud_redux/PostsList';

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
    let expressionToMatch = [
      { command: 'git add .', message: 'you successfully added your files' },
      { command: 'git commit -m "something to commit"', message: 'you successfully committed your files with the message //' },
      { command: /^git push$/, message: 'you successfully pushed your files into master' },
    ];
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
          <MatchCommandClassComponent
            commands={expressionToMatch}
          />
          <AddPostForm />
          <PostsList />
        </main>

        <Footer />
      </>
    );
  }
}
