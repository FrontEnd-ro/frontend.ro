import React from 'react';
import styles from './ArchiveBanner.module.scss';

// Site-wide announcement shown on every page (rendered from `_app.tsx`).
const ArchiveBanner = () => (
  <aside className={styles.banner} role="note">
    <p className={styles.message}>
      <span aria-hidden="true">👋</span>
      {' '}
      Hey salutare! Alex aici, creatorul acestui proiect. Din păcate focusul meu e acum în
      alte direcții, deci acest site a devenit read only. Dacă încă ești interesat să înveți
      FrontEnd, atunci aruncă un ochi pe
      {' '}
      <a href="https://100jsfunctions.com" target="_blank" rel="noopener noreferrer">
        100JSFunctions.com
      </a>
      {' '}
      sau
      {' '}
      <a href="https://100reactcomponents.com" target="_blank" rel="noopener noreferrer">
        100ReactComponents.com
      </a>
      . Zi faină!
    </p>
  </aside>
);

export default ArchiveBanner;
