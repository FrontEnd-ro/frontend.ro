import React from 'react';
import Link from '~/components/generic/Link';

import styles from './PresentationLink.module.scss';

interface Props {
  id: string;
  href?: string;
  title: string;
  thumb: string;
  description: string;
  created: number;
  views?: number;
  className?: string;
}

function PresentationLink({
  id, href, title, description, thumb, created, views, className = '',
}: Props) {
  const formattedDate = new Date(created).toLocaleDateString('ro-RO', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <Link href={href ?? `/slides/${id}`} prefetch={false} className={`${styles['presentation-link']} ${className}`}>
      <img width="256" height="256" src={thumb} alt={`${title} slides thumb`} />
      <div
        className="img"
        style={{
          backgroundImage: `url(${thumb})`,
        }}
      />
      <section>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="footer">
          <p>
            {formattedDate}
            {views ? (
              <span>
                {' '}
                |
                {views}
                {' '}
                vizualizări
              </span>
            ) : null}
          </p>
          <div className="btn btn--light">
            Vezi slide-urile
          </div>
        </div>
      </section>
    </Link>
  );
}

export default PresentationLink;
