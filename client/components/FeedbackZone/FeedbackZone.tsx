import { format } from 'date-fns';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button';
import Markdown from '../Markdown';
import { timeAgo } from '~/services/Utils';
import { FeedbackType } from '~/../shared/types/submission.types';

import styles from './FeedbackZone.module.scss';

/**
 * Component that displays feedback.
 * Usually rendered as a View Zone in the Monaco Editor.
 */

interface Props {
  author?: {
    name?: string;
    avatar?: string;
  }
  timestamp?: number;
  type: FeedbackType;
  // This is the actual feedback in Markdown format.
  markdown: string;
  onResolve?: () => Promise<void>;
  loading?: boolean;
}

const FeedbackZone = ({
  markdown,
  author,
  timestamp,
  type,
  onResolve,
  loading = false,
}: Props) => {
  return (
    <section className={`
      bg-darker-white
      ${styles.FeedbackZone}
      ${styles[`FeedbackZone--${type}`]}
      ${(author !== undefined || timestamp !== undefined) ? 'pt-3' : ''
      }`}
    >
      <div className="d-flex gap-x-4 mb-4">
        {author !== undefined && (
          <>
            {author?.avatar !== undefined ? (
              <img src={author.avatar} alt={author.name ?? 'Unknown'} className={styles.avatar} />
            ) : (
              <PlaceholderAvatar />
            )}
          </>
        )}
        <div>
          {author !== undefined && (
            <p className="m-0">{author?.name ?? 'Unknown author'}</p>
          )}
          {timestamp !== undefined && (
            <time className="text-grey" dateTime={format(timestamp, 'yyyy-MM-dd')}>
              {timeAgo(new Date(timestamp))}
            </time>
          )}
        </div>
      </div>
      <Markdown
        variant="transparent"
        markdownString={markdown}
        className="mb-8"
      />
      <Button
        outline
        type="button"
        loading={loading}
        variant="transparent"
        onClick={onResolve}
        className={styles.button}
      >
        Marchează ca rezolvat
      </Button>
    </section>
  );
};

const PlaceholderAvatar = () => {
  const size = 40;
  return (
    <div
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`${styles.avatar} d-flex justify-content-center align-items-end bg-silver text-white`}
    >
      <FontAwesomeIcon fontSize="2em" icon={faUser} />
    </div>
  );
};

export default FeedbackZone;
