import Lesson from '~/components/lessons';
import SEOTags from '~/components/SEOTags';
import { NotWroteYet } from '~/components/404';
import NotFoundPage from '~/components/404/NotFound';
import AudioAndVideoContent from '~/curriculum/html/AudioAndVideo';
import { getLessonById, LessonDescription } from '~/services/DataModel';
import ContainersContent from '~/curriculum/html/Containers';
import AboutHtmlContent from '~/curriculum/html/AboutHtml';
import FormsContent from '~/curriculum/html/Forms';
import ImagesContent from '~/curriculum/html/Images';
import LinksAndButtonsContent from '~/curriculum/html/LinksAndButtons';
import ListsContent from '~/curriculum/html/Lists';
import HTMLStructureContent from '~/curriculum/html/HTMLStructure';
import TextsContent from '~/curriculum/html/TextElements';
import { MDXService } from '~/services/MDXService';
import { faThumbsUp, faQuestionCircle, faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { faExclamationCircle,faQuestion, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import HTMLValidationContent from '~/curriculum/html/HTMLValidation';

const LESSON_TO_COMPONENT = {
  'despre-html': (mdxContent: string ) => <AboutHtmlContent mdxContent={mdxContent} />,
  'audio-video': (mdxContent: string ) => <AudioAndVideoContent mdxContent={mdxContent} />,
  containere: (mdxContent: string ) => <ContainersContent mdxContent={mdxContent} />,
  formulare: (mdxContent: string ) => <FormsContent mdxContent={mdxContent} />,
  imagini: (mdxContent: string ) => <ImagesContent mdxContent={mdxContent} />,
  'linkuri-si-butoane': (mdxContent: string ) => <LinksAndButtonsContent mdxContent={mdxContent} />,
  liste: (mdxContent: string ) => <ListsContent mdxContent={mdxContent} />,
  'structura-pagina-html': (mdxContent: string ) => <HTMLStructureContent mdxContent={mdxContent} />,
  texte: (mdxContent: string ) => <TextsContent mdxContent={mdxContent} />,
  validare: (mdxContent: string ) => <HTMLValidationContent mdxContent={mdxContent} />,
};

const HtmlLesson = ({ lessonInfo, mdxContent = '' }: { lessonInfo: LessonDescription | null; mdxContent?: string; }) => {
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
        {mdxContent !== '' ? (
          LESSON_TO_COMPONENT[lessonInfo.id](mdxContent)
        ) : (
          LESSON_TO_COMPONENT[lessonInfo.id]
        )}
      </Lesson>
    </>
  );
};

// We tried migrating to staticPaths BUT that conflicts
// with the user fetch inside `_app.tsx` which means that navigating
// directly to lesson pages leads to the website thinking you're logged out.
export async function getServerSideProps({ res, params }) {
  const { id } = params;
  const lessonInfo = getLessonById(id);
  const resp = await MDXService.serverFetchMDX(lessonInfo?.id, lessonInfo.type);

  if (lessonInfo === null || !resp.ok) {
    res.statusCode = 404;
    return {
      props: { lessonInfo }
    }
  }
  const MDX_SCOPE = {
    lessonInfo,
    icons: { faThumbsUp, faExclamationCircle, faQuestion, faQuestionCircle, faThumbsDown, faShoppingCart },
    CLOUDFRONT_PUBLIC: process.env.CLOUDFRONT_PUBLIC,
  }
  const compiledMDX = await MDXService.compile(resp.content, MDX_SCOPE);

  return {
    props: {
      lessonInfo,
      mdxContent: compiledMDX,
    },
  };
}

export default HtmlLesson;
