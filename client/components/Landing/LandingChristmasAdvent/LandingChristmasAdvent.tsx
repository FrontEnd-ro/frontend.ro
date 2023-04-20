import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Spinner from '~/components/Spinner';
import Link from '~/components/generic/Link';
import SVGArrow from '~/components/SVGArrow/SVGArrow';
import { CHRISTMAS_ADVENT_ID } from '~/services/Constants';
import { Trans, useTranslation } from '~/services/typesafeNextTranslate';
import { useStartingCode } from '~/services/api/Challenge.service';
import FolderStructure, { toSandPackFiles } from '~/../shared/utils/FolderStructure';

import styles from './LandingChristmasAdvent.module.scss';

const Sandpack = React.lazy(() => import('../../Sandpack/Sandpack'));
const LandingChristmasAdvent = ({ className = '' }: { className?: string }) => {
  const { t } = useTranslation('common');
  // Extracting the text here so we can easily send it to the Google Fonts API
  // and load only the font for this text.
  const TITLE_TEXT = t('LandingChristmasAdvent.title');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { challenge } = useStartingCode(CHRISTMAS_ADVENT_ID);
  const [didLoadSandpack, setDidLoadSandpack] = useState(false);

  const folderStructure = (challenge !== undefined && challenge !== null)
    ? new FolderStructure(JSON.parse(challenge.startingCode))
    : new FolderStructure();

  const sandpackFiles = toSandPackFiles(folderStructure);

  return (
    <section ref={ref} className={`${className} relative`}>
      <link
        rel="stylesheet"
        href={`https://fonts.googleapis.com/css2?family=Merienda:wght@700&display=swap&text=${TITLE_TEXT.split(' ').join('')}`}
      /> 
      <div className={styles.LandingChristmasAdvent}>
        <div>
          <div className="d-inline-block relative">
            <h2 className={`mb-0 ${styles.Merienda}`}>{TITLE_TEXT}</h2>
            <p className="text-xl mt-4">
              <Trans i18nKey='common:LandingChristmasAdvent.description' components={[
                <a
                  key='0'
                  target="_blank"
                  rel="noreferrer"
                  className="text-bold"
                  href="https://colorfulcoding.com/"
                />,
                <span key='1' className="text-red text-bold"/>,
              ]}/>
            </p>
            <SVGArrow color="#58af58" className={`${styles.SVGArrow} absolute`} />
          </div>
          <div>
            <Link prefetch={false} href={CHRISTMAS_ADVENT_ID} variant="contained" color="green" className="mt-2 text-xl d-inline-block">
              {t('LandingChristmasAdvent.Start the tutorial')}
            </Link>
          </div>
        </div>
        <div className={`${styles.Preview} relative d-flex align-items-center justify-content-center mt-16`}>
          {(challenge === undefined || didLoadSandpack === false) && (
            <Spinner />
          )}
          {challenge === null && (
            <p> {t('LandingChristmasAdvent.loadingError')} </p>
          )}

          {(challenge !== undefined && challenge !== null && inView) && (
            <Sandpack
              files={sandpackFiles}
              template="react-ts"
              onLoad={() => setDidLoadSandpack(true)}
              className={`${styles.Sandpack} ${!didLoadSandpack ? styles['Sandpack--hidden'] : ''}`}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default LandingChristmasAdvent;
