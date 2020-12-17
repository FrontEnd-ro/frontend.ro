import React, { useState } from 'react';
import styles from './LandingHero.module.scss';
import LandingSchmoes from './LandingSchmoes/LandingSchmoes';

export default function LandingHero() {
  const [showInProgress, setShowInProgress] = useState(false);

  const startLearningOrTeaching = () => {
    setShowInProgress(true);
  };

  return (
    <section className={`${styles['landing-hero']} d-flex justify-content-between`}>
      <div className="call-to-action">
        <h1> FrontEnd.ro </h1>
        <h2>
          Învață FrontEnd de la zero,
          {' '}
          <span>
            cu ajutorul comunității open source.
          </span>
        </h2>
        <div>
          {!showInProgress && (
          <>
            <button onClick={startLearningOrTeaching} type="button" className="text-center btn btn--default">
              Vreau să învăț
            </button>
            <button onClick={startLearningOrTeaching} type="button" className="text-center btn btn--light">Vreau să predau</button>
          </>
          )}

          {showInProgress && (
          <p style={{ width: '750px', maxWidth: '100%' }}>
            {' '}
            Ai venit în locul potrivit dar puțin cam devreme
            căci mai avem câteva mici ajustări de făcut până lansăm o primă variantă
            a platformei. Revino în câteva zile sau lasă-ți email-ul
            {' '}
            <a href="#subscribe">
              mai jos
            </a>
            {' '}
            și te contactăm noi.
          </p>
          )}
        </div>
      </div>

      <LandingSchmoes />
    </section>
  );
}
