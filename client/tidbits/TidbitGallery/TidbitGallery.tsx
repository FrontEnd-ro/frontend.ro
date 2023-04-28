import React from 'react';
import PageContainer from '~/components/PageContainer';
import { TidbitI } from '~/../shared/types/tidbit.types';
import { useTranslation } from '~/services/typesafeNextTranslate';
import TidbitGalleryItem from '../TidbitGalleryItem/TidbitGalleryItem';

import styles from './TidbitGallery.module.scss';

const TidbitGallery = ({ tidbits }: {tidbits: Pick<TidbitI, 'tidbitId' | 'backgroundColor' | 'items' | 'title'>[]}) => {
  const { t } = useTranslation('common');
  return (
    <PageContainer className={styles.TidbitGallery}>
      <div className="text-center">
        <h1 className="mt-4 mb-0"> Tidbits </h1>
        <p className="mt-0 mb-12 font-light text-2xl">
          {t('Tidbits.description')}
        </p>
      </div>
      <div className={styles.gallery}>
        {tidbits.map((tidbit) => (
          <TidbitGalleryItem
            itemIndex={0}
            key={tidbit.tidbitId}
            tidbit={tidbit}
            borderColor="var(--black)"
          />
        ))}
      </div>
    </PageContainer>
  );
};

export default TidbitGallery;
