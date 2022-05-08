import Link from 'next/link';
import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import List from '~/components/List';
import { RootState } from '~/redux/root.reducer';
import TutorialService from '~/services/api/Tutorial.service';
import { withAuthModal } from '~/services/Hooks';
import StartTutorialForm from './StartTutorialForm/StartTutorialForm';

interface Props {
  tutorialId: string;
  tutorialName: string;
}

const TutorialDescription = ({
  tutorialId, tutorialName, user,
}: Props & ConnectedProps<typeof connector>) => {
  const isLoggedIn = !!user.info;
  const [error, setError] = useState<string>(null);

  const startTutorial = () => {
    TutorialService.startTutorial(tutorialId)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.error('TutorialDescription.startTutorial', err);
        setError(err.message ?? 'Nu am reușit să începem tutorialul. Încearcă din nou');
      });
  };

  return (
    <section className="d-flex flex-column justify-content-between pb-5">
      <div style={{ marginBottom: '5em' }} className="font-light">
        <p className="text-2xl mb-0 text-bold">
          Hey 👋,
        </p>
        <p className="font-light">
          Și felicitări pentru că vrei să începi
          {' '}
          {tutorialName}
          !
        </p>
        <p>
          Acest tutorial este un efort comun: tu
          {' '}
          <span className="text-bold">
            citești lecțiile și
            rezolvi exercițiile
          </span>
          , iar noi le
          {' '}
          <span className="text-bold">
            verificăm și-ți dăm feedback de
            îmbunătățire
          </span>
          .
        </p>
        <p>
          Spre deosebire de alte tutoriale, vom fi stricți cu tine
          și-ți vom aproba o soluție doar când
          {' '}
          <span className="text-bold">respectă cele mai înalte standarde</span>
          .
          Ne dorim să lucrăm cu studenți determinați, ce-și doresc cu adevărat
          să învețe FrontEnd și care nu vor renunța ușor la acest tutorial.
        </p>
        <p>
          Așadar, pentru a ne asigura că amândoi vom avea o experiență de succes,
          am adăugat următoarele:
        </p>
        <List variant="checkmark">
          <li className="mb-2">
            Vei primi notificare prin email de fiecare daca cand
            iti dam feedback la un exercitiu
          </li>
          <li className="mb-2">
            Daca esti inactiv pentru mai mult de 7 zile, vei pierde accesul la tutorial
          </li>
        </List>
        <p className="mt-8">
          Dacă ești de acord, atunci hai să trecem la treabă!
        </p>
      </div>
      <StartTutorialForm
        error={error}
        onSubmit={withAuthModal(isLoggedIn, startTutorial)}
      />
    </section>
  );
};

function mapStateToProps(state: RootState) {
  return {
    user: state.user,
  };
}

const connector = connect(mapStateToProps);

export default connector(TutorialDescription);
