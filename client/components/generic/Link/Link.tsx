import React, { PropsWithChildren } from 'react';
import NextLink, { LinkProps } from 'next/link';

import styles from './Link.module.scss';

type Variant = 'text' | 'contained' | 'duo-tone';

type Color = 'inherit' | 'white' | 'black' | 'green' | 'blue' | 'red' | 'yellow' | 'grey';

type Props = {
  color?: Color;
  variant?: Variant;
  className?: string;
} & LinkProps & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

const Link = ({
  href,
  children,
  variant = 'text',
  color = 'inherit',
  className = '',

  // Next Link props 👇
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  locale,
  ...rest
}: PropsWithChildren<Props>) => (
  <NextLink
    href={href}
    replace={replace}
    scroll={scroll}
    shallow={shallow}
    passHref={passHref}
    prefetch={prefetch}
    locale={locale}
  >
    <a className={`${className} ${styles[variant]} ${styles[color]} cursor-pointer`} {...rest}>
      {children}
    </a>
  </NextLink>
);

export default Link;
