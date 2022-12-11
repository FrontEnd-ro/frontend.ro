import React from 'react';
import SchmoeJacques from './SchmoeJacques';
import SchmoeJaqueline from './SchmoeJaqueline';
import SchmoeJazabelle from './SchmoeJazebelle';
import SchmoeJeri from './SchmoeJeri';
import SchmoeJodi from './SchmoeJodi';
import SchmoeJoe from './SchmoeJoe';
import SchmoeJon from './SchmoeJon';
import SchmoeJude from './SchmoeJude';
import SchmoePirate from './SchmoePirate';

import styles from './LandingSchmoes.module.scss';

// The website that offered the "schmoes" for free was https://joeschmoe.io
// However, that is now down because of the changes to free Heroku Plans.
export default function LandingSchmoes() {
  return (
    <div className={`${styles['landing-schmoes']} absolute w-100 overflow-hidden`}>
      <SchmoeJeri />
      <SchmoeJoe style={{ transform: 'translateX(-30%)' }} />
      <SchmoeJazabelle style={{ transform: 'translateX(-60%)' }} />
      <SchmoeJude style={{ transform: 'translateX(-90%)' }} />
      <SchmoeJon style={{ transform: 'translateX(-120%)' }} />
      <SchmoeJodi style={{ transform: 'translateX(-150%)' }} />
      <SchmoePirate style={{ transform: 'translateX(-180%)' }} />
      <SchmoeJaqueline style={{ transform: 'translateX(-210%)' }} />
      <SchmoeJacques style={{ transform: 'translateX(-240%)' }} />
    </div>
  );
}
