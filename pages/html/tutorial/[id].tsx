import SEOTags from '~/components/SEOTags';
import Tutorial from '~/tutorials/Tutorial';
import { NotWroteYet } from '~/components/404';
import NotFoundPage from '~/components/404/NotFound';
import { getLessonById, LessonDescription, LESSONS } from '~/services/DataModel';

// Curriculum components
import ListsContent from '~/curriculum/html/Lists';
import FormsContent from '~/curriculum/html/Forms';
import ImagesContent from '~/curriculum/html/Images';
import TextsContent from '~/curriculum/html/TextElements';
import ContainersContent from '~/curriculum/html/Containers';
import AudioAndVideoContent from '~/curriculum/html/AudioAndVideo';
import AboutHtmlContent from '~/curriculum/html/AboutHtml/AboutHtml';
import HTMLValidationContent from '~/curriculum/html/HTMLValidation';
import LinksAndButtonsContent from '~/curriculum/html/LinksAndButtons';
import HTMLStructureContent from '~/curriculum/html/HTMLStructure/HTMLStructure';

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

// Same reason as index.tsx for adding `Temp` to the name.
const HtmlLessonTemp = ({ lessonInfo }: { lessonInfo: LessonDescription | null }) => {
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
      <Tutorial
        tutorialId="html"
        lessonId={lessonInfo.id}
        lessonContent={LESSON_TO_COMPONENT[lessonInfo.id]}
      />
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

export default HtmlLessonTemp;
