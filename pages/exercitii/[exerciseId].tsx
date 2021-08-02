import React from 'react';
import NotFoundPage from '../404';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import SEOTags from '~/components/SEOTags';
import SharedUserModel from '~/../shared/user.shared-model';
import SharedExerciseModel from '~/../shared/exercise.shared-model';
import { Exercise } from '~/redux/user/types';
import { ViewOrEditExercise } from '~/components/create-view-edit-exercise';
// import UserInterface from '~/../server/types/user.types';

function EditExercisePage({ exercise }: { exercise?: Exercise }) {
  const authorNameOrUsername = exercise?.user?.name || exercise?.user?.username;
  const exerciseChapter = exercise?.type;

  return exercise ? (
    <>
      <SEOTags
        title={`Exercițiu ${exerciseChapter.toUpperCase()} | FrontEnd.ro`}
        description={`${authorNameOrUsername} a scris un exercițiu pentru ${exerciseChapter.toUpperCase()}.`}
        bigShareImage={false}
        shareImage={exercise.user.avatar}
        url={`https://FrontEnd.ro/exercitii/${exercise._id}`}
      />
      <>
        <Header />
        <ViewOrEditExercise exercise={exercise} />
        <Footer />
      </>
    </>

  ) : <NotFoundPage />;
}

export default EditExercisePage;

export async function getServerSideProps({ req, res, params }) {
  const { token } = req.cookies;
  const { exerciseId } = params;

  try {
    const exercise = await SharedExerciseModel.getById(exerciseId);

    if (!exercise) {
      return send404();
    }

    if (!token) {
      if (exercise.private) {
        return send404();
      }
      return {
        props: {
          exercise: SharedExerciseModel.sanitize(exercise),
        },
      };
    }

    const user = await SharedUserModel.ping(token);

    if (exercise.private && (!user || (user.username !== exercise.user.username))) {
      return send404();
    }

    return {
      props: {
        exercise: SharedExerciseModel.sanitize(exercise),
      },
    };
  } catch (err) {
    console.error('[exerciseId.tsx][getServerSideProps]', err);
    return send404();
  }

  function send404() {
    res.statusCode = 404;

    return {
      props: {},
    };
  }
}
