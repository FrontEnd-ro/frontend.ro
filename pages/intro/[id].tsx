import Lesson from '~/components/lessons';
import SEOTags from '~/components/SEOTags';
import { NotWroteYet } from '~/components/404';
import { GITHUB_URL } from '~/services/Constants';
import appConfig from '~/../server/config/config';
import { MDXService } from '~/services/MDXService';
import NotFoundPage from '~/components/404/NotFound';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { getLessonById, LessonDescription } from '~/services/DataModel';

const IntroLesson = ({ lessonInfo, mdxContent = '' }: { lessonInfo: LessonDescription | null, mdxContent?: string }) => {
  if (lessonInfo === null) {
    return <NotFoundPage />;
  }

  if (lessonInfo.written === false) {
    return <NotWroteYet lesson={lessonInfo} />;
  }

  return (
    <>
      <SEOTags
        title={`${lessonInfo.title} | Lecție introductivă`}
        description={lessonInfo.description}
        url={`https://FrontEnd.ro${lessonInfo.url}`}
        shareImage={lessonInfo.ogImage}
      />
      <Lesson lessonInfo={lessonInfo} mdxContent={mdxContent} />
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
    GITHUB_URL,
    lessonInfo,
    icons: { faShare },
    CLOUDFRONT_PUBLIC: process.env.CLOUDFRONT_PUBLIC,
    urlToShare: `${appConfig.APP.app_url}/intro/${id}`
  }
  const compiledMDX = await MDXService.compile(resp.content, MDX_SCOPE);

  return {
    props: {
      lessonInfo,
      mdxContent: compiledMDX,
    },
  };
}

export default IntroLesson;
