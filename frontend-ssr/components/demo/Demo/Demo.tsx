import React, { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import { GITHUB_URL } from '~/services/Constants';

import styles from './Demo.module.scss';
import { withClientMonitoring } from '~/services/Hooks';

export default function Demo({ title, children }: PropsWithChildren<{ title: string }>) {
  const baseURL = `${GITHUB_URL}/tree/master/frontend-ssr`;
  const { pathname } = useRouter();

  withClientMonitoring();

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
