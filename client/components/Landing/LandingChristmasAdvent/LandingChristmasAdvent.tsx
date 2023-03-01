import { useState } from 'react';
import Spinner from '~/components/Spinner';
import Link from '~/components/generic/Link';
import SVGArrow from '~/components/SVGArrow/SVGArrow';
import { CHRISTMAS_ADVENT_ID } from '~/services/Constants';
import FolderStructure from '~/../shared/utils/FolderStructure';
import { useStartingCode } from '~/services/api/Challenge.service';
import Sandpack, { toSandPackFiles } from '~/components/Sandpack/Sandpack';

import styles from './LandingChristmasAdvent.module.scss';

const LandingChristmasAdvent = ({ className = '' }: { className?: string }) => {
  const { challenge } = useStartingCode(CHRISTMAS_ADVENT_ID);
  const [didLoadSandpack, setDidLoadSandpack] = useState(false);

  const folderStructure = (challenge !== undefined && challenge !== null)
    ? new FolderStructure(JSON.parse(challenge.startingCode))
    : new FolderStructure();

  const sandpackFiles = toSandPackFiles(folderStructure);

  return (
    <section className={`${className} relative`}>
      <link href="https://fonts.googleapis.com/css2?family=Merienda:wght@700&display=swap" rel="stylesheet" /> 
      <div className={styles.LandingChristmasAdvent}>
        <div>
          <div className="d-inline-block relative">
            <h2 className="mb-0">
              Învață să programezi 3D cu Three.js și React!
            </h2>
            <p className="text-xl mt-4">
              Împreună cu
              {' '}
              <a
                target="_blank"
                rel="noreferrer"
                className="text-bold"
                href="https://colorfulcoding.com/"
              >
                Colorful Coding
              </a>
              {' '}
              v-am pregătit un tutorial 100% interactiv în care-l ajutați pe
              <span className="text-red text-bold"> Moș Crăciun </span>
              să repare fabrica de cadouri!
            </p>
            <SVGArrow color="#58af58" className={`${styles.SVGArrow} absolute`} />
          </div>
          <div>
            <Link href={CHRISTMAS_ADVENT_ID} variant="contained" color="green" className="mt-2 text-xl d-inline-block">
              Începe tutorialul
            </Link>
          </div>
        </div>
        <div className={`${styles.Preview} relative d-flex align-items-center justify-content-center mt-16`}>
          {(challenge === undefined || didLoadSandpack === false) && (
            <Spinner />
          )}
          {challenge === null && (
            <p> Nu am putut încărca exemplul. Încearcă să reîncarci pagina.</p>
          )}
          {(challenge !== undefined && challenge !== null) && (
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
