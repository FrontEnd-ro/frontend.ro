import React from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import Link from 'next/link';

import { dummyIncrement, dummyDecrement } from '../redux/dummy/dummy-reducer';

import styles from '../styles/pages/default-page.module.scss';

function JavaScript(props : any) {
  const { count, dispatch } = props;

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

      <h3>
        Dummy count:
        {count}
      </h3>
      <button type="button" onClick={() => dispatch(dummyIncrement())}> Increase </button>
      &nbsp;
      <button type="button" onClick={() => dispatch(dummyDecrement())}> Decrease </button>

      <footer>
        Copyright
        {' '}
        {new Date().getFullYear()}
      </footer>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.dummy,
  };
}

export default connect(mapStateToProps)(JavaScript);
