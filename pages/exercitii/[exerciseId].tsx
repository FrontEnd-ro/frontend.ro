import NotFoundPage from '../404';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import SEOTags from '~/components/SEOTags';
import { RootState } from '~/redux/root.reducer';
import { ConnectedProps, connect } from 'react-redux';
import { UserRole } from '~/../shared/types/user.types';
import { EditExercise } from '~/components/create-edit-exercise';
import LessonExerciseService from '~/services/api/LessonExercise.service';
import { API_LessonExerciseI } from '~/../shared/types/lesson-exercise.types';

function EditExercisePage({ exercise, userInfo }: ConnectedProps<typeof connector> & { exercise?: API_LessonExerciseI }) {
  const authorNameOrUsername = exercise?.user?.name || exercise?.user?.username;
  const exerciseChapter = exercise?.type;

  if (userInfo?.role !== UserRole.ADMIN || !exercise) {
    return <NotFoundPage />
  }

  return (
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
        <EditExercise exercise={exercise} />
        <Footer />
      </>
    </>
  );
}


function mapStateToProps(state: RootState) {
  return {
    userInfo: state.user.info,
  };
}

const connector = connect(mapStateToProps);

export default connector(EditExercisePage);

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
