import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Link from '~/components/generic/Link';
import { RootState } from '~/redux/root.reducer';
import SVGArrow from '~/components/SVGArrow/SVGArrow';
import { HTML_TUTORIAL_ID } from '~/services/Constants';
import Highlight from '~/components/Highlight/Highlight';

import styles from './LandingHtml.module.scss';

const LandingHTML = ({ user, isLoggedIn, className = '' }: ConnectedProps<typeof connector> & { className?: string }) => {
  const code = `
<!DOCTYPE html>
<html lang="ro">
  <head>
    <title>Abonează-te</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
    <header>
      <a href="/">
        <img src="logo.png" alt="logo" width="180" height="50" />
      </a>
    </header>
    <main>
      <form>
        <label>
          <span> Nume </span>
          <input type="text" name="name" required>
        </label>
        <label>
          <span> Email </span>
          <input type="email" name="email" required>
        </label>
        <button type="submit"> Abonează-te </button>
      </form>
    </main>
  </body>
</html>`;

  const getCallToAction = (): { text: string; href: string; } => {
    if (!isLoggedIn || !user.tutorials.includes(HTML_TUTORIAL_ID)) {
      return {
        text: 'Află mai multe',
        href: '/html',
      };
    }

    return {
      text: 'Continuă tutorialul',
      href: '/html/tutorial',
    };
  };

  const callToAction = getCallToAction();

  return (
    <section className={`${className} relative`}>
      <div className={styles.LandingHTML}>
        <div>
          <div className="d-inline-block relative">
            <h2 className="mb-0">
              Dacă vrei să înveți
              {' '}
              <span className="text-blue">FrontEnd</span>
              {' '}
              de la zero
              <br />
              Începe cu
              <span className="text-bold"> Modulul de HTML </span>
            </h2>
            <p className="text-xl mt-4">
              E special făcut pentru începători, și vei învăța să
              înțelegi și să scrii cod ca cel de jos
            </p>
            <SVGArrow className={`${styles.SVGArrow} absolute`} />
          </div>
          <div>
            <Link href={callToAction.href} variant="contained" color="blue" className="mt-2 text-xl d-inline-block">
              {callToAction.text}
            </Link>
          </div>
        </div>
        <div>
          <Highlight
            language="html"
            withCopy={false}
            code={code}
            textWrap="wrap"
            className="mt-16"
          />
        </div>
      </div>
    </section>
  );
};

function mapStateToProps(state: RootState) {
  return {
    user: state.user.info,
    isLoggedIn: !!state.user.info,
  };
}

const connector = connect(mapStateToProps);

export default connector(LandingHTML);
