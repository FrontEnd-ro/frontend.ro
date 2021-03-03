import React, { useState } from 'react';
import EventService from '~/services/Event.service';
import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';

import styles from './WaitListConfirmation.module.scss';

export default function EventButtons() {
  const [isLoading, setIsLoading] = useState(false);

  const succesfullyAddedToWaitList = async (userData) => {
    setIsLoading(true);
    let shouldResetForm = true;

    try {
      await EventService.addToWaitList(userData, 'fără locuri');
      SweetAlertService.toast({
        type: 'success',
        text: 'Te-am adăugat pe lista de așteptare, te vom contacta în curând!',
      });
    } catch (err) {
      shouldResetForm = false;
      SweetAlertService.toast({
        type: 'error',
        text: err.message || 'Ne pare rău! Nu am putut să te adăugam pe lista de așteptare. Te rugăm să mai încerci o dată.',
      });
    } finally {
      setIsLoading(false);
    }
    return shouldResetForm;
  };
  const refuseAddingToWaitList = () => {
    SweetAlertService.closePopup();
  };
  return (
    <div
      className={`${styles['event-buttons']}`}
    >
      <p>Ne pare rău, dar locurile la acest eveniment s-au ocupat.</p>
      <p>
        E posibil ca unii participanți să se retragă, deci dacă vrei, te putem
        pune pe o listă de așteptare.
      </p>
      <div className="d-flex justify-content-between align-items-center">
        <button
          type="submit"
          className="btn btn--light"
          onClick={refuseAddingToWaitList}
        >
          Nu, m-am răzgândit
        </button>
        <button
          type="submit"
          className={`btn btn--blue mb-2 ${isLoading ? 'btn--loading' : ''}`}
          disabled={isLoading}
          onClick={succesfullyAddedToWaitList}
        >
          Adaugă-mă pe listă
        </button>
      </div>
    </div>
  );
}
