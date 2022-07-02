import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import Link from '~/components/generic/Link';
import { useKeyDown } from '~/services/Hooks';
import BaseTidbitItem from '../BaseTidbitItem';
import { TidbitI } from '~/../shared/types/tidbit.types';
import TidbitService from '~/services/api/Tidbit.service';
import Highlight, { Language } from '~/components/Highlight/Highlight';
import TidbitGalleryItem from '../TidbitGalleryItem/TidbitGalleryItem';

import styles from './Tidbit.module.scss';

interface Props {
  index: number;
  tidbit: TidbitI;
}

const Tidbit = ({ tidbit, index }: Props) => {
  const router = useRouter();
  const [nextTidbit, setNextTidbit] = useState<TidbitI>(null);
  const [previousTidbit, setPreviousTidbit] = useState<TidbitI>(null);

  const currentItem = tidbit.items[index];

  const isFirstItem = index === 0;
  const isLastItem = index === tidbit.items.length - 1;

  const increaseViewCount = async () => {
    try {
      await TidbitService.increaseTidbitView(tidbit.tidbitId);
    } catch (err) {
      // We want to silently fail this function because
      // it's not mission critical.
      console.warn(`Couldn't increase view count for tidbit ${tidbit.tidbitId}. Is the server down?`, err);
    }
  };

  useEffect(() => {
    TidbitService.getPreviousAndNextTidbit(tidbit.tidbitId)
      .then((response) => {
        setNextTidbit(response.next);
        setPreviousTidbit(response.previous);
      })
      .catch((err) => {
        console.error('[TidbitPage.useEffect] got while fetching next tidbit', err);
      });

    increaseViewCount();
  }, [tidbit.tidbitId]);

  useKeyDown('ArrowRight', () => {
    if (!isLastItem) {
      // We're doing `+2` because the index in the URL path starts from 0
      router.replace(`/tidbits/${tidbit.tidbitId}/${index + 2}`);
    }
  }, [index]);
  useKeyDown('ArrowLeft', () => {
    if (!isFirstItem) {
      router.push(`/tidbits/${tidbit.tidbitId}/${index}`);
    }
  }, [index]);

  return (
    <main className={styles.Tidbit}>
      <div className={`${styles.hero} d-flex relative justify-content-evenly align-items-center overflow-hidden`}>
        {isFirstItem && previousTidbit && (<PrevTidbitLink previousTidbit={previousTidbit} />)}

        <Link
          href={`/tidbits/${tidbit.tidbitId}/${index}`}
          className={`
          ${styles['arrow-link']}
          ${styles['arrow-link--left']}
          ${isFirstItem ? 'invisible' : ''}
        `}
        >
          <FontAwesomeIcon width={48} icon={faArrowAltCircleLeft} />
        </Link>
        <BaseTidbitItem
          controls
          title={tidbit.title}
          src={currentItem.imageSrc}
          className={`${styles['main-image']} d-block`}
        />
        <Link
          href={`/tidbits/${tidbit.tidbitId}/${index + 2}`}
          className={`
            ${styles['arrow-link']}
            ${styles['arrow-link--right']}
            ${isLastItem ? 'invisible' : ''}
          `}
        >
          <FontAwesomeIcon width={48} icon={faArrowAltCircleRight} />
        </Link>

        {isLastItem && nextTidbit && (<NextTidbitLink nextTidbit={nextTidbit} />)}
      </div>

      {currentItem.codeSnippets !== undefined && (
        <div className={`${styles['center-container']} d-flex flex-column align-items-center`}>
          {currentItem.codeSnippets.map((codeSnippet, index) => (
            <Highlight
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              code={codeSnippet}
              className={`${styles['code-snippet']} mt-8 mb-8`}
              language={currentItem.language as Language}
            />
          ))}
        </div>
      )}

      <div className={styles['center-container']}>
        <div className={styles.grid}>
          {tidbit.items.map((item, itemIndex) => (
            <TidbitGalleryItem
              // eslint-disable-next-line react/no-array-index-key
              key={itemIndex}
              tidbit={tidbit}
              itemIndex={itemIndex}
              active={itemIndex === index}
            />
          ))}
        </div>
        <nav className={`${styles['footer-nav']} d-flex justify-content-between mb-8`}>
          <Link href={previousTidbit !== null ? `/tidbits/${previousTidbit.tidbitId}/1` : '/tidbits'} className="d-flex">
            <FontAwesomeIcon className="mr-2" width={14} icon={faArrowLeft} />
            {previousTidbit !== null ? previousTidbit.title : 'Toate Tidbit\'s-urile'}
          </Link>

          {nextTidbit !== null && (
            <Link href={`/tidbits/${nextTidbit.tidbitId}/1`} className="d-flex justify-content-end">
              {nextTidbit.title}
              <FontAwesomeIcon className="ml-2" width={14} icon={faArrowRight} />
            </Link>
          )}
        </nav>
      </div>
    </main>
  );
};

const PrevTidbitLink = ({ previousTidbit }: { previousTidbit: TidbitI }) => (
  <Link
    href={`/tidbits/${previousTidbit.tidbitId}/${previousTidbit.items.length}`}
    className={`
      ${styles['prev-tidbit']}
      d-flex
      text-2xl
      absolute
      text-bold
      no-underline
      align-items-center
    `}
    style={{ backgroundImage: `url(${previousTidbit.items[0].imageSrc})` }}
  >
    <span className="d-flex relative w-100 justify-content-end">
      <span> Prev Tidbit </span>
      <FontAwesomeIcon className="ml-2" width={24} icon={faArrowAltCircleLeft} />
    </span>
  </Link>
);

const NextTidbitLink = ({ nextTidbit }: { nextTidbit: TidbitI }) => (
  <Link
    href={`/tidbits/${nextTidbit.tidbitId}/1`}
    className={`
      ${styles['next-tidbit']}
      d-flex
      text-2xl
      absolute
      text-bold
      no-underline
      align-items-center
    `}
    style={{ backgroundImage: `url(${nextTidbit.items[0].imageSrc})` }}
  >
    <span className="d-flex relative w-100">
      <FontAwesomeIcon width={24} icon={faArrowAltCircleRight} />
      <span className="ml-2"> Next Tidbit </span>
    </span>
  </Link>
);

export default Tidbit;
