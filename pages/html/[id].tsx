import Lesson from '~/components/lessons';
import SEOTags from '~/components/SEOTags';
import { NotWroteYet } from '~/components/404';
import NotFoundPage from '~/components/404/NotFound';
import AudioAndVideoContent from '~/curriculum/html/AudioAndVideo';
import { getLessonById, LessonDescription, LESSONS } from '~/services/DataModel';
import ContainersContent from '~/curriculum/html/Containers';
import AboutHtmlContent from '~/curriculum/html/AboutHtml/AboutHtml';
import FormsContent from '~/curriculum/html/Forms';
import ImagesContent from '~/curriculum/html/Images';
import LinksAndButtonsContent from '~/curriculum/html/LinksAndButtons';
import ListsContent from '~/curriculum/html/Lists';
import HTMLStructureContent from '~/curriculum/html/HTMLStructure/HTMLStructure';
import TextsContent from '~/curriculum/html/TextElements';
import HTMLValidationContent from '~/curriculum/html/HTMLValidation';

const LESSON_TO_COMPONENT = {
  'audio-video': <AudioAndVideoContent />,
  containere: <ContainersContent />,
  'despre-html': <AboutHtmlContent />,
  formulare: <FormsContent />,
  imagini: <ImagesContent />,
  'linkuri-si-butoane': <LinksAndButtonsContent />,
  liste: <ListsContent />,
  'structura-pagina-html': <HTMLStructureContent />,
  texte: <TextsContent />,
  validare: <HTMLValidationContent />,
};

const HtmlLesson = ({ lessonInfo }: { lessonInfo: LessonDescription | null }) => {
  if (lessonInfo === null) {
    return <NotFoundPage />;
  }

  if (lessonInfo.written === false) {
    return <NotWroteYet lesson={lessonInfo} />;
  }

  return (
    <>
      <SEOTags
        title={`${lessonInfo.title} | Lecție HTML`}
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
    .filter((lesson) => lesson.type === 'html')
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

export default HtmlLesson;