import Lesson from '~/components/lessons';
import SEOTags from '~/components/SEOTags';
import { NotWroteYet } from '~/components/404';
import NotFoundPage from '~/components/404/NotFound';
import { getLessonById, LessonConfig } from '~/curriculum/Curriculum';
import BoxModelContent from '~/curriculum/css/BoxModel';
import StylingMethodsContent from '~/curriculum/css/StylingMethods';

const LESSON_TO_COMPONENT = {
  'box-model': <BoxModelContent />,
  'moduri-stilizare': <StylingMethodsContent />,
};

const CssLesson = ({ lessonInfo }: { lessonInfo: LessonConfig | null }) => {
  if (lessonInfo === null) {
    return <NotFoundPage />;
  }

  if (lessonInfo.written === false) {
    return <NotWroteYet lesson={lessonInfo} />;
  }

  return (
    <>
      <SEOTags
        title={`${lessonInfo.title} | Lecție CSS`}
        description={lessonInfo.description}
        url={`https://FrontEnd.ro${lessonInfo.url}`}
        shareImage={lessonInfo.ogImage}
      />
      <Lesson lessonInfo={lessonInfo}>
        {LESSON_TO_COMPONENT[lessonInfo.id]}
      </Lesson>
    </>
  );
};

// We tried migrating to staticPaths BUT that conflicts
// with the user fetch inside `_app.tsx` which means that navigating
// directly to lesson pages leads to the website thinking you're logged out.
export function getServerSideProps({ res, params }) {
  const { id } = params;
  const lessonInfo = getLessonById(id);

  if (lessonInfo === null) {
    res.statusCode = 404;
  }

  return {
    props: {
      lessonInfo,
    },
  };
}

export default CssLesson;
