import Lesson from '~/components/lessons';
import SEOTags from '~/components/SEOTags';
import { NotWroteYet } from '~/components/404';
import NotFoundPage from '~/components/404/NotFound';
import { getLessonById, LessonDescription, LESSONS } from '~/services/DataModel';
import BoxModelContent from '~/curriculum/css/BoxModel';
import StylingMethodsContent from '~/curriculum/css/StylingMethods';

const LESSON_TO_COMPONENT = {
  'box-model': <BoxModelContent />,
  'moduri-stilizare': <StylingMethodsContent />,
};

const CssLesson = ({ lessonInfo }: { lessonInfo: LessonDescription | null }) => {
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

export function getStaticPaths() {
  const paths = LESSONS
    .filter((lesson) => lesson.type === 'css')
    .map((lesson) => ({
      params: {
        id: lesson.id,
      },
    }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const lessonInfo = getLessonById(id);

  return {
    props: {
      lessonInfo,
    },
  };
}

export default CssLesson;
