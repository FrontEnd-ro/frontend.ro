import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import List from '~/components/List';
import Login from '~/components/login';
import { RootState } from '~/redux/root.reducer';
import { startedTutorial } from '~/redux/user/user.actions';
import TutorialService from '~/services/api/Tutorial.service';
import StartTutorialForm from './StartTutorialForm/StartTutorialForm';

interface Props {
  tutorialId: string;
  tutorialName: string;
}

const TutorialDescription = ({
  tutorialId, tutorialName, isLoggedIn, dispatch,
}: Props & ConnectedProps<typeof connector>) => {
  const [error, setError] = useState<string>(null);
  const [isStarting, setIsStarting] = useState(false);

  const startTutorial = async () => {
    setIsStarting(true);
    try {
      await TutorialService.startTutorial(tutorialId);
      dispatch(startedTutorial(tutorialId));
    } catch (err) {
      console.error('TutorialDescription.startTutorial', err);
      setError(err.message ?? 'Nu am reușit să începem tutorialul. Încearcă din nou');
    } finally {
      setIsStarting(false);
    }
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
        {/*
          TEMPORARILY COMMENTING THE PART BELOW
          BECAUSE WE DON'T HAVE THE FEATURE REGARDING 7 DAYS OF
          INACTIVITY
        */}
        {/* <p>
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
        </List> */}
        <p className="mt-8">
          Dacă ești de acord, atunci hai să trecem la treabă!
        </p>
      </div>
      {isLoggedIn ? (
        <StartTutorialForm
          error={error}
          isStarting={isStarting}
          onSubmit={() => { startTutorial(); }}
        />
      ) : (
        <Login
          mode="register"
          onSuccess={(user) => {
            if (!user.tutorials.includes(tutorialId)) {
              startTutorial();
            }
          }}
          optionalTerms={[{
            name: 'startTutorial',
            description: 'Am citit și sunt de acord să încep tutorialul',
          }]}
        />
      )}
    </section>
  );
};

function mapStateToProps(state: RootState) {
  return {
    isLoggedIn: !!state.user?.info,
  };
}

const connector = connect(mapStateToProps);

export default connector(TutorialDescription);
