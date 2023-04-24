import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Link from '~/components/generic/Link';
import { RootState } from '~/redux/root.reducer';
import SVGArrow from '~/components/SVGArrow/SVGArrow';
import { HTML_TUTORIAL_ID } from '~/services/Constants';
import Highlight from '~/components/Highlight/Highlight';
import { Trans, useTranslation } from '~/services/typesafeNextTranslate';

import styles from './LandingHtml.module.scss';

const LandingHTML = ({ user, isLoggedIn, className = '' }: ConnectedProps<typeof connector> & { className?: string }) => {
  const { t } = useTranslation('common');
  const code = `
<!DOCTYPE html>
<html lang="ro">
  <head>
    <title>${t('Subscribe')}</title>
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
          <span> Name </span>
          <input type="text" name="name" required>
        </label>
        <label>
          <span> Email </span>
          <input type="email" name="email" required>
        </label>
        <button type="submit"> ${t('Subscribe')} </button>
      </form>
    </main>
  </body>
</html>`;

  const getCallToAction = (): { text: string; href: string; } => {
    if (!isLoggedIn || !user.tutorials.includes(HTML_TUTORIAL_ID)) {
      return {
        text: t('Find out more'),
        href: '/html',
      };
    }

    return {
      text: t('Continue the tutorial'),
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
              <Trans i18nKey='common:LandingHtml.headline' components={[
                <span key='0' className="text-blue"/>,
                <br key='1' />,
                <span key='2' className="text-bold" />,
              ]}/>
            </h2>
            <p className="text-xl mt-4">
              {t('LandingHtml.description')}
            </p>
            <SVGArrow className={`${styles.SVGArrow} absolute`} />
          </div>
          <div>
            <Link prefetch={false} href={callToAction.href} variant="contained" color="blue" className="mt-2 text-xl d-inline-block">
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
