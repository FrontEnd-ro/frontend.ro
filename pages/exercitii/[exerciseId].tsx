import NotFoundPage from '../404';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import SEOTags from '~/components/SEOTags';
import { ViewOrEditExercise } from '~/components/create-view-edit-exercise';
import LessonExerciseService from '~/services/api/LessonExercise.service';
import { API_LessonExerciseI } from '~/../shared/types/lesson-exercise.types';

function EditExercisePage({ exercise }: { exercise?: API_LessonExerciseI }) {
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
    const exercise = await LessonExerciseService.getLessonExercise(exerciseId, {
      headers: {
        cookie: `token=${token}`,
      },
    });
    return {
      props: { exercise, },
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
