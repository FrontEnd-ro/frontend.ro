import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '~/redux/root.reducer';
import Link from '~/components/generic/Link';
import List from '../List';

import styles from './NavLinks.module.scss';

function NavLinks({ navItems }: ConnectedProps<typeof connector>) {
  return (
    <nav className={styles['nav-links']}>
      <List as="ol">
        {navItems.map((navItem) => (
          <li key={navItem.href}>
            <Link
              prefetch={false}
              href={navItem.href}
              className={`${navItem.highlighted === true ? styles.highlighted : ''}`}
            >
              {navItem.text}
            </Link>
          </li>
        ))}
      </List>
    </nav>
  );
}

function mapStateToProps(state: RootState) {
  return {
    navItems: state.applicationConfig.navItems,
  };
}

const connector = connect(mapStateToProps);

export default connector(NavLinks);
