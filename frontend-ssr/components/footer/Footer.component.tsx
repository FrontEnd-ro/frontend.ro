import React from 'react';

import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className="branding">
        <h5> FrontEnd.ro </h5>
        <p> © 2020 FrontEnd.ro</p>
        <p> All rights reserved</p>
      </section>

      <section>
        <h5> About </h5>
        <p>
          Made with
          {' '}
          <span className="text-red">❤</span>
          {' '}
          by the open-source community
        </p>
      </section>
      <section className="social">
        <h5> Social </h5>
        <div>
          <p>
            <a href="https://github.com/iampava/frontend.ro">
              GitHub
            </a>
          </p>
          <p>
            <a href="https://twitter.com/FrontEndRo">
              Twitter
            </a>
          </p>
          <p>
            <a href="https://facebook.com/FrontEndRo">
              Facebook
            </a>
          </p>
        </div>
      </section>
    </footer>
  );
}
