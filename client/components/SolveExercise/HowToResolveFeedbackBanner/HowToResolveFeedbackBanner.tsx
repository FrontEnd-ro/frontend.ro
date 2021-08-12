import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import Button from '~/components/Button';
import List from '~/components/List';

import styles from './HowToResolveFeedbackBanner.module.scss';


function HowToResolveFeedbackBanner() {
  const [showExplanation, setShowExplanation] = useState(false);

  return (
    <div className={styles['how-to-resolve-feedback-banner']}>
      <div className="d-flex align-items-center">
        <FontAwesomeIcon
          size="2x"
          height="32"
          className="mr-1"
          icon={faQuestionCircle}
        />
        Trebuie să rezolvi feedback-ul din codul de mai jos
        pentru a putea trimite din nou exercițiul.
        <Button
          variant="transparent"
          className="text-bold"
          onClick={() => setShowExplanation(!showExplanation)}
        >
          {showExplanation ? 'Ascunde instrucțiunile' : 'Vrei să vezi cum?'}
        </Button>
      </div>
      {showExplanation && (
      <>
        <List as="ol" variant="count">
          <li> fiecare fișier cu feedback va fi marcat cu o linie roșie </li>
          <li> înăuntrul său, codul cu probleme va fi hașurat cu roșu </li>
          <li> pune mouse-ul deasupra codului marcat și așteaptă câteva secunde </li>
          <li> în partea de sus a paginii va apărea feedback-ul</li>
          <li>
            după ce l-ai citit, apasă pe butonul
            <em> Done </em>
            pentru a-l marca drept rezolvat
          </li>
          <li>
            după ce ai rezolvat toate feedback-urile poți trimite exercițiul
            din nou
          </li>
        </List>
        <p>
          Dacă dai de probleme scrie-ne la
          {' '}
          <a href="mailto:hello@frontend.ro">hello@frontend.ro</a>
        </p>
      </>
      )}
    </div>
  );
}

export default HowToResolveFeedbackBanner;
