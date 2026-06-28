import React from 'react';

import Header from '~/components/Header';
import Footer from '~/components/Footer';
import SEOTags from '~/components/SEOTags';
import PageContainer from '~/components/PageContainer';
import Link from '~/components/generic/Link';

import styles from './ArchivedNotice.module.scss';

interface Props {
  title?: string;
  message?: string;
  seoTitle?: string;
}

export default function ArchivedNotice({
  title = 'Această secțiune nu mai este disponibilă',
  message = 'FrontEnd.ro este acum o arhivă păstrată în mod read-only, așa că funcționalitățile interactive nu mai sunt disponibile. Poți totuși să explorezi lecțiile și conținutul rămas.',
  seoTitle = 'Secțiune arhivată | FrontEnd.ro',
}: Props) {
  return (
    <>
      <SEOTags
        title={seoTitle}
        url="https://FrontEnd.ro"
        description="FrontEnd.ro este acum o arhivă păstrată în mod read-only."
      />
      <Header withNavMenu />
      <PageContainer className={`${styles.page} text-center`}>
        <h1>
          {title}
          {' '}
          <span aria-label="Books emoji" role="img">📚</span>
        </h1>
        <p className={styles.message}>
          {message}
        </p>
        <div className={styles.actions}>
          <Link
            prefetch={false}
            variant="contained"
            color="blue"
            className={styles.cta}
            href="/"
          >
            Mergi la pagina principală
          </Link>
          <Link
            prefetch={false}
            variant="text"
            color="blue"
            className={styles.cta}
            href="/lectii"
          >
            Vezi lecțiile
          </Link>
        </div>
      </PageContainer>
      <Footer />
    </>
  );
}
