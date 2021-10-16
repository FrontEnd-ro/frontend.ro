import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import List from '~/components/List';
import { RootState } from '~/redux/root.reducer';
import { BlogArticle } from '~/components/blog/types';
import PageContainer from '~/components/PageContainer';
import { SubscribeFormWithText } from '~/components/SubscribeForm';
import BlogArticlePreview from '~/components/blog/BlogArticlePreview/BlogArticlePreview';

import styles from './Blog.module.scss';

interface Props {
  articles: BlogArticle[]
}

const Blog = ({ articles, isLoggedIn }: ConnectedProps<typeof connector> & Props) => {
  return (
    <PageContainer className={styles.blog}>
      <h1 className="mb-0"> Blogul FrontEnd.ro</h1>
      <p className={`${styles.about} text-2xl font-light mt-0`}>
        Deși suntem prezenți pe toate platformele din social media, vrem să avem un loc numai
        al nostru unde vă ținem la curent cu
        {' '}
        <span className="border-bottom-1px">
          ce lucrăm
        </span>
        ,
        {' '}
        <span className="border-bottom-1px">
          ce urmează
        </span>
        {' '}
        și
        {' '}
        <span className="border-bottom-1px">
          cum ne puteți ajuta
        </span>
        !
      </p>
      <List as="ol" className={styles.articles}>
        {articles.map(({ id, ...rest }) => (
          <li key={id}>
            <BlogArticlePreview className={styles['article-preview']} href={`/blog/${id}`} {...rest} />
          </li>
        ))}
      </List>

      {!isLoggedIn && (
        <SubscribeFormWithText className={styles['subscribe-form']}>
          <h2>Rămâi conectat la noutăți</h2>
          <p>
            Dacă-ți place proiectul și vrei să te ținem la curent
            cu noutățile - atunci lasă-ți email-ul aici și hai în comunitate.
          </p>
        </SubscribeFormWithText>
      )}

    </PageContainer>
  );
};

function mapStateToProps(state: RootState) {
  return {
    isLoggedIn: !!state.user.info,
  };
}

const connector = connect(mapStateToProps);

export default connector(Blog);
