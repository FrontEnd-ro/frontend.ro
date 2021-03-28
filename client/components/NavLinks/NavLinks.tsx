import React from 'react';
import Link from 'next/link';
import styles from './NavLinks.module.scss';

function NavLinks() {
  return (
    <nav className={styles['nav-links']}>
      <ol>
        <li>
          <Link href="/lectii">
            <a>
              Lecții
            </a>
          </Link>
        </li>
        <li>
          <Link href="/exercitii">
            <a>
              Exerciții
            </a>
          </Link>
        </li>
        <li>
          <Link href="/evenimente">
            <a>
              Evenimente
            </a>
          </Link>
        </li>
        <li>
          <Link href="/slides">
            <a>
              Slide-uri
            </a>
          </Link>
        </li>
        <li className={styles.login}>
          <Link href="/auth">
            <a>
              Intră în cont
            </a>
          </Link>
        </li>
      </ol>
    </nav>
  );
}

export default NavLinks;
