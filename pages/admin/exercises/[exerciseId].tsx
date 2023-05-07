import Head from 'next/head';
import NotFoundPage from '../../404';
import { useRouter } from 'next/router';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import { RootState } from '~/redux/root.reducer';
import { useLoggedInOnly } from '~/services/Hooks';
import { ConnectedProps, connect } from 'react-redux';
import { UserRole } from '~/../shared/types/user.types';
import { CreateEditExercise } from '~/components/create-edit-exercise';
import LessonExerciseService from '~/services/api/LessonExercise.service';
import { API_LessonExerciseI } from '~/../shared/types/lesson-exercise.types';

function EditExercisePage({ exercise, userInfo, isLoggedIn }: ConnectedProps<typeof connector> & { exercise?: API_LessonExerciseI }) {
  const router = useRouter();
  useLoggedInOnly(isLoggedIn, router.asPath);

  if (!isLoggedIn) {
    return null;
  }

  if (userInfo?.role !== UserRole.ADMIN || !exercise) {
    return <NotFoundPage />
  }

  return (
    <>
      <Head>
        <title>Editează exercițiul | FrontEnd.ro</title>
      </Head>
      <>
        <Header />
        <CreateEditExercise exercise={exercise} />
        <Footer />
      </>
    </>
  );
}


function mapStateToProps(state: RootState) {
  return {
    isLoggedIn: !!state.user.info,
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
