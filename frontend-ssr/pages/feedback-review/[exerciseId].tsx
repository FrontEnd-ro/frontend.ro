import React, { useState, useEffect } from 'react';
import Head from 'next/head';

import Header from '~/components/header/Header.component';
import styles from '~/components/feedback-review/feedback-review.module.scss';
import { Exercise, Comment } from '~/components/feedback-review/entities';
import NotFoundPage from '../404';
import Editor from '~/components/feedback-review/Editor';
import Comments from '~/components/feedback-review/Comments';
import Http from '~/services/Http';

interface FeedbackReviewProps {
  exerciseId: string;
}

const initialExerciseState: Exercise = {
  id: null,
  title: '',
  description: '',
  solution: '',
};

export default function FeedbackReview(props: FeedbackReviewProps) {
  /**
   * You can test this using either 1 or 2 as the exerciseId
   * Example URL: /feedback-review/1
   */
  const { exerciseId } = props;

  const [isLoadingExercise, setIsLoadingExercise] = useState(true);
  const [isLoadingComments, setIsLoadingComments] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [exercise, setExercise] = useState(initialExerciseState);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const dataPromises = [
      Http.get(`/api/exercises/${exerciseId}`),
      Http.get(`/api/comments/${exerciseId}`),
    ];

    Promise.all(dataPromises)
      .then((response) => {
        const [exerciseResponse, commentsResponse] = response;
        setExercise(exerciseResponse);
        setComments(commentsResponse);
      })
      .catch(() => setHasError(true))
      .finally(() => {
        setIsLoadingExercise(false);
        setIsLoadingComments(false);
      });
  }, []);

  if (hasError) return <NotFoundPage />; // temporary

  return (
    <>
      <Head>
        <title>Review Feedback | FrontEnd.ro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.page}>
        {
          isLoadingExercise
            ? <p>Loading...</p>
            : (
              <>
                <h1>
                  Exercitiu:
                  {' '}
                  <strong>{exercise.title}</strong>
                </h1>
                <p>
                  {exercise.description}
                </p>
                <Editor solution={exercise.solution} />
                {!isLoadingComments && (<Comments comments={comments} />)}
              </>
            )
        }
      </main>
    </>
  );
}

FeedbackReview.getInitialProps = async ({ query }) => {
  const { exerciseId } = query;

  return {
    exerciseId,
  };
};
