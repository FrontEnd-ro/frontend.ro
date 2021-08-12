import React from 'react';
import List from '~/components/List';
import styles from './LandingHowItWorks.module.scss';

export default function LandingHowItWorks() {
  return (
    <section className={`${styles['landing-how-it-works']} bg-white`}>
      <h2 className="text-center">
        Un site de tutoriale
        {' '}
        <em>altfel</em>
      </h2>
      <br />
      <br />
      <List as="ol">
        <li className="d-flex align-items-center">
          <img src="/images/landing/doodles/reading_doodle.png" width="160" alt="Stick figure reading" />
          <div>
            <h3>Citește lecțiile</h3>
            <p>
              Învață despre HTML, CSS și JavaScript - cele 3 limbaje ce compun
              aria de FrontEnd development. Le-am scris cu gândul
              la cei ce învață programare de la zero, deci sunt
              {' '}
              <em>ușor digerabile</em>
              .
            </p>
          </div>
        </li>
        <li className="d-flex align-items-center">
          <img src="/images/landing/doodles/laptop_doodle.png" width="150" alt="Stick figure at laptop" />
          <div>
            <h3>Rezolvă exercițiile</h3>
            <p>
              La finalul fiecărei lecții am adăugat exerciții
              unde vei pune în aplicare lucrurile despre care tocmai ai citit.
              Nu sări peste ele - doar codând vei învăța cu adevărat programare.
            </p>
          </div>
        </li>
        <li className="d-flex align-items-center">
          <img src="/images/landing/doodles/delivery_doodle.png" width="150" alt="2 hands hi 5'ing" />
          <div>
            <h3> Trimite-ne soluțiile </h3>
            <p>
              Nu vrem să fim doar un alt site de tutoriale, ci o
              întreagă plaformă de învățare. De aceea, după ce ai
              terminat exercițiile, trimite-ne soluțiile chiar aici, doar cu un click!
            </p>
          </div>
        </li>
        <li className="d-flex align-items-center">
          <img src="/images/landing/doodles/hi_5_doodle.png" width="150" alt="2 hands hi 5'ing" />
          <div>
            <h3> Învață din feedback-ul primit </h3>
            <p>
              Programatori cu experiență îți vor da feedback pentru fiecare exercițiu trimis.
              Astfel vei înțelege ce ai greșit și cum poți deveni mai bun.
            </p>
          </div>
        </li>
      </List>
    </section>
  );
}
