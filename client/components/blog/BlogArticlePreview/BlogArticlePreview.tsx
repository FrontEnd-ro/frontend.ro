import React from 'react';
import Image from 'next/image';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { timeAgo } from '~/services/Utils';
import Link from '~/components/generic/Link';

import styles from './BlogArticlePreview.module.scss';

interface Props {
  title: string;
  href: string;
  timestamp: number;
  firstParagraph: string;
  cover: Pick<HTMLImageElement, 'width' | 'height' | 'src'>;
  className?: string;
  variant?: 'row' | 'column';
}

const BlogArticlePreview = ({
  title, href, cover, firstParagraph, variant = 'row', timestamp, className = '',
}: Props) => {
  return (
    <Link href={href} className={`${className} ${styles.BlogArticlePreview} ${styles[variant]} no-underline`}>
      <article className="d-flex justify-content-between align-items-start">
        <div className="cover-wrapper overflow-hidden">
          <Image
            className={styles.cover}
            width={cover.width}
            height={cover.height}
            src={cover.src}
            alt={`${title} cover photo `}
          />
        </div>
        <div className="content-wrapper d-flex justify-content-between flex-column">
          <div>
            <h2 className={styles.title}>
              {title}
            </h2>
            <p className="text-xl font-light">
              {firstParagraph}
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <time
              dateTime={format(timestamp, 'yyyy-MM-dd')}
              className={`${styles.date} text-grey uppercase`}
            >
              {timeAgo(new Date(timestamp))}
            </time>
            <span className={`${styles['read-more']} border-bottom-1px`}>
              Citește mai mult
              <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogArticlePreview;
