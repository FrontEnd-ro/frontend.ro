import Lesson from '~/components/lessons';
import SEOTags from '~/components/SEOTags';
import NotFoundPage from '~/components/NotFound/NotFound';
import { getLessonById, LessonConfig } from '~/curriculum/Curriculum';
import BoxModelContent from '~/curriculum/css/BoxModel';
import { MDXService } from '~/services/MDXService';

const LESSON_TO_COMPONENT = {
  'box-model': <BoxModelContent />,
  'moduri-stilizare': <></>,
};

const CssLesson = ({ lessonInfo,  mdxContent = ''  }: { lessonInfo: LessonConfig | null;  mdxContent?: string; }) => {
  if (lessonInfo === null || lessonInfo.written === false) {
    return <NotFoundPage />;
  }

  return (
    <>
      <SEOTags
        title={`${lessonInfo.title} | Lecție CSS`}
        description={lessonInfo.description}
        url={`https://FrontEnd.ro${lessonInfo.url}`}
        shareImage={lessonInfo.ogImage}
      />
      <Lesson lessonInfo={lessonInfo} mdxContent={mdxContent}>
        {LESSON_TO_COMPONENT[lessonInfo.id]}
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
  const resp = await MDXService.serverFetchMDX(lessonInfo?.id, lessonInfo.type, process.env.LANGUAGE);


  if (lessonInfo === null || !resp.ok) {
    res.statusCode = 404;
    return {
      props: {lessonInfo}
    }
  }
  const MDX_SCOPE = {
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

export default CssLesson;
