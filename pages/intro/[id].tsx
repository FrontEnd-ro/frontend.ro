import Lesson from '~/components/lessons';
import SEOTags from '~/components/SEOTags';
import { GITHUB_URL } from '~/services/Constants';
import appConfig from '~/../server/config';
import { MDXService } from '~/services/MDXService';
import { getExamples } from '~/curriculum/examples';
import NotFoundPage from '~/components/NotFound/NotFound';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from '~/services/typesafeNextTranslate';
import { getLessonById, LessonConfig } from '~/curriculum/Curriculum';
import LessonExerciseService from '~/services/api/LessonExercise.service';

const IntroLesson = ({ lessonInfo, exerciseCount, mdxContent = '' }: { lessonInfo: LessonConfig | null, exerciseCount?: number, mdxContent?: string }) => {
  const { t } = useTranslation('common');
  if (lessonInfo === null || lessonInfo.written === false) {
    return <NotFoundPage />;
  }

  return (
    <>
      <SEOTags
        title={`${lessonInfo.title} | ${t('lessons.Introductive Lesson')}`}
        description={lessonInfo.description}
        url={`https://FrontEnd.ro/intro/${lessonInfo.id}`}
        shareImage={lessonInfo.ogImage}
      />
      <Lesson
        lessonInfo={lessonInfo}
        exerciseCount={exerciseCount}
        mdxContent={mdxContent}
      />
    </>
  );
};

// We tried migrating to staticPaths BUT that conflicts
// with the user fetch inside `_app.tsx` which means that navigating
// directly to lesson pages leads to the website thinking you're logged out.
export async function getServerSideProps({ res, params }) {
  const { id } = params;
  const lessonInfo = getLessonById(id, process.env.LANGUAGE as 'en' | 'ro');
  const [mdxResp, exerciseCount] = await Promise.all([
    MDXService.serverFetchMDX(lessonInfo?.id, lessonInfo?.type, process.env.LANGUAGE),
    LessonExerciseService.getCountOfExercisesForLesson(id)
  ]);

  if (lessonInfo === null || !mdxResp.ok) {
    res.statusCode = 404;
    return {
      props: { lessonInfo }
    }
  }
  const MDX_SCOPE = {
    GITHUB_URL,
    icons: { faShare },
    examples: getExamples(lessonInfo.id),
    CLOUDFRONT_PUBLIC: process.env.CLOUDFRONT_PUBLIC,
    urlToShare: `${appConfig.APP.app_url}/intro/${id}`
  }
  const compiledMDX = await MDXService.compile(mdxResp.content, MDX_SCOPE);

  return {
    props: {
      lessonInfo,
      exerciseCount,
      mdxContent: compiledMDX,
    },
  };
}

export default IntroLesson;
