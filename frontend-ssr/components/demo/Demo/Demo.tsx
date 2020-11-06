import React, { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';

import styles from './Demo.module.scss';

export default function Demo({ title, children }: PropsWithChildren<{ title: string }>) {
  const baseURL = 'https://github.com/iampava/frontend.ro/tree/master/frontend-ssr';
  const { pathname } = useRouter();

  return (
    <>
      <main className={`${styles.demo} my-5`}>
        <h1>
          {title}
        </h1>
        {children}
      </main>
      <div className="text-right mr-2">
        <p>
          E vreo problemă cu acest demo?
          {' '}
          <a href={`${baseURL}/pages${pathname}`} target="_blank" rel="noreferrer">
            Corectează-l pe GitHub
          </a>
        </p>
      </div>
    </>
  );
}
