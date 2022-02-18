import SEOTags from '~/components/SEOTags';
import Tutorial from '~/tutorials/Tutorial';
import NotFoundPage from '~/components/404/NotFound';
import { getLessonById, LessonDescription } from '~/services/DataModel';
import LessonExercises from '~/components/lessons/LessonExercises/LessonExercises';
// Same reason as index.tsx for adding `Temp` to the name.
const HtmlLessonExercisesTemp = ({ lessonInfo }: { lessonInfo: LessonDescription | null }) => {
  if (lessonInfo === null) {
    return <NotFoundPage />;
  }

  return (
    <>
      <SEOTags
        title={`Exerciții ${lessonInfo.title} | Lecție HTML`}
        description={lessonInfo.description}
        url={`https://FrontEnd.ro/html/tutorial/${lessonInfo.id}/exercitii`}
        shareImage={lessonInfo.ogImage}
      />
      <Tutorial
        isExercisesPage
        tutorialId="html"
        lessonId={lessonInfo.id}
        lessonContent={lessonInfo.withExercises ? (
          <LessonExercises lessonId={lessonInfo.id} />
        ) : (
          <h2>
            Această lecție nu are exerciții!
          </h2>
        )}
      />
    </>
  );
};

export async function getServerSideProps({ res, params }) {
  const { id } = params;
  const lessonInfo = getLessonById(id);

  if (lessonInfo === null || lessonInfo.withExercises === false) {
    res.statusCode = 404;
  }

  return {
    props: {
      lessonInfo,
    },
  };
}

export default HtmlLessonExercisesTemp;
