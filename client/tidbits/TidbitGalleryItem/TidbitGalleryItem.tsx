import React from 'react';
import Link from 'next/link';
import BaseTidbitItem from '../BaseTidbitItem';
import { TidbitI } from '~/../shared/types/tidbit.types';

import styles from './TidbitGalleryItem.module.scss';

interface Props {
  tidbit: TidbitI;
  itemIndex: number;
  active?: boolean;
  borderColor?: string;
}

const TidbitGalleryItem = ({
  tidbit,
  itemIndex,
  active = false,
  // Default to the background color of the Tidbit
  borderColor = tidbit.backgroundColor,
}: Props) => (
  <Link key={tidbit.tidbitId} href={`/tidbits/${tidbit.tidbitId}/${itemIndex + 1}`}>
    <a
      style={{ borderColor }}
      className={`
        ${styles.TidbitGalleryItem}
        ${active ? styles['TidbitGalleryItem--active'] : ''}
        d-flex
        relative
        overflow-hidden
      `}
    >
      <BaseTidbitItem className="w-100" src={tidbit.items[itemIndex].imageSrc} title={tidbit.title} controls={false} />
    </a>
  </Link>
);

export default TidbitGalleryItem;
