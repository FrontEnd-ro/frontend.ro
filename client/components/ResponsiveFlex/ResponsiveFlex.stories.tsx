import React from 'react';
import ResponsiveFlex from './ResponsiveFlex';

export default {
  title: 'ResponsiveFlex',
};

export const Default = () => (
  <>
    <ResponsiveFlex breakpoint={1024}>
      <div>
        <img
          src="https://FrontEnd.ro/logo.png"
          alt="FrontEnd.ro logo"
        />
      </div>
      <div>
        <h2>
          Ce e FrontEnd.ro?
        </h2>
        <p>
          FrontEnd.ro este o comunitate de oameni ce învață FrontEnd de la zero.
        </p>
        <p>
          Comunitatea gravitează în jurul unei serii de lecții și exerciții gratuite
          ce constituie - în opinia noastră - fundamentele unei cariere moderne
          în FrontEnd Development.
        </p>
      </div>
    </ResponsiveFlex>
  </>
);
