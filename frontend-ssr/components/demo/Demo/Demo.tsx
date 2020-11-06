import React, { PropsWithChildren } from 'react';
import styles from './Demo.module.scss';

export default function Demo({ title, children }: PropsWithChildren<{title: string}>) {
  return (
    <main className={`${styles.demo} my-5`}>
      <h1>
        { title }
      </h1>
      {children}
    </main>
  );
}
