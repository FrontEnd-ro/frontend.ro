import Link from '~/components/generic/Link';
import SEOTags from '~/components/SEOTags';
import { MDXService } from '~/services/MDXService';
import { getExamples } from '~/curriculum/examples';
import NotFoundPage from '~/components/NotFound/NotFound';
import { withSmoothScroll } from '~/services/Hooks';
import { faThumbsUp,faQuestionCircle, faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { faExclamationCircle,faQuestion, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { LessonHeading, LessonResources } from '~/components/lessons';
import PageContainer from '~/components/PageContainer';
import { useTranslation } from '~/services/typesafeNextTranslate';
import LessonExerciseService from '~/services/api/LessonExercise.service';
import { getLessonById, LessonConfig, MDXLessonConfig } from '~/curriculum/Curriculum';
import LessonContent from '~/components/lessons/LessonContent/LessonContent';
import LessonExercises from '~/components/lessons/LessonExercises/LessonExercises';
import PageWithAsideMenu from '~/components/layout/PageWithAsideMenu/PageWithAsideMenu';
import TableOfContents, { Chapter, parseChapters } from '~/components/TableOfContents';

// Naming this component `Temp` because eventually
// will move this to the /html folder. So right now
// it's just a Temporary solution while we're finishing
// development on the Tutorial functionality.
const HtmlLessonTemp = ({ lessonInfo, exerciseCount = 0, mdxContent = '' }: { lessonInfo: LessonConfig | null, exerciseCount?: number, mdxContent?: string }) => {
  const { t } = useTranslation('common');
  const getChapters = (chapters: MDXLessonConfig['chapters']): Chapter[] => {
    if (!exerciseCount) {
      return parseChapters(chapters);
    }

    return [
      {
        title: 'Lectie',
        id: 'lectie',
        href: '#lectie',
        subchapters: parseChapters(chapters),
      },
      {
        title: 'Exerciții',
        id: 'exercitii',
        href: '#exercitii',
      },
    ];
  };

  withSmoothScroll();

  if (lessonInfo === null || lessonInfo.written === false) {
    return <NotFoundPage />;
  }

  const { Content, CONFIG } = MDXService.getComponent(mdxContent);
  const chapters = getChapters(CONFIG.chapters);

  return (
    <>
      <SEOTags
        title={`${lessonInfo.title} | ${t('lessons.HTML Lesson')}`}
        description={lessonInfo.description}
        url={`https://FrontEnd.ro/html/tutorial/${lessonInfo.id}`}
        shareImage={lessonInfo.ogImage}
      />
      <PageWithAsideMenu menu={{
        title: lessonInfo.title,
        Component: (
          <div className="d-flex flex-column justify-content-between flex-1 pb-5">
            <TableOfContents
              onChapterClick={() => {
                // FIXME
                // THIS SHOULD CLOSE THE MENU
              }}
              chapters={chapters}
            />
            {/* TODO|FIXME: get the tutorial ID dynamically */}
            <Link variant="duo-tone" color="white" href="/html/tutorial">
              Înapoi la tutorial
            </Link>
          </div>
        ),
      }}
      >
        <PageContainer>
          <LessonContent
            mdxContent={mdxContent}
            title={lessonInfo.title}
            contributors={lessonInfo.contributors}
          >
            <Content />
            {lessonInfo.resources !== undefined && (
              <LessonResources className="my-5" links={lessonInfo.resources} />
            )}
            {exerciseCount > 0 && (
              <div>
                <LessonHeading as="h3" id="exercitii">
                  Exerciții
                </LessonHeading>
                <LessonExercises tutorialId="html" lessonId={lessonInfo.id} />
              </div>
            )}
          </LessonContent>
          {/*
            TEMPORARILY DISABLING THIS COMPONENT
            https://github.com/FrontEnd-ro/frontend.ro/issues/745
            <LessonNavigation className="mt-16" lessonId={lessonInfo.id} />
          */}
        </PageContainer>
      </PageWithAsideMenu>
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
    examples: getExamples(lessonInfo.id),
    icons: { faThumbsUp, faExclamationCircle, faQuestion, faQuestionCircle, faThumbsDown, faShoppingCart },
    CLOUDFRONT_PUBLIC: process.env.CLOUDFRONT_PUBLIC,
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

export default HtmlLessonTemp;
