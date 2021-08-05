import React from 'react';
import { GITHUB_URL } from '~/services/Constants';

import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section>
        <h5> FrontEnd.ro </h5>
        <p>
          Contribuie pe
          {' '}
          <a href={GITHUB_URL}>
            GitHub
          </a>
        </p>
        <p>
          Vezi componentele în
          {' '}
          <a href="https://storybook.frontend.ro">
            Storybook
          </a>
        </p>
      </section>

      <section>
        <h5> Contact </h5>
        <p>
          <a href="mailto:hello@frontend.ro">hello@frontend.ro</a>
        </p>
        <p>
          Un proiect open-source pornit din Iași, România
          {' '}
          <span className="text-red">
            ❤
          </span>
        </p>
      </section>
      <section className="social">
        <h5> Social </h5>
        <div>
          <p>
            <a href="https://ro.linkedin.com/company/frontend-ro">
              LinkedIn
            </a>
          </p>
          <p>
            <a href="https://facebook.com/FrontEndRo">
              Facebook
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/frontend.ro/">
              Instagram
            </a>
          </p>
          <p>
            <a href="https://www.youtube.com/channel/UC2p6MkYMKNok7pjo7z5TK0Q">
              YouTube
            </a>
          </p>
        </div>
      </section>
    </footer>
  );
}
