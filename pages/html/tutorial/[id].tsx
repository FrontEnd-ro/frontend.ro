import Link from '~/components/generic/Link';
import SEOTags from '~/components/SEOTags';
import { NotWroteYet } from '~/components/404';
import { MDXService } from '~/services/MDXService';
import NotFoundPage from '~/components/404/NotFound';
import { withSmoothScroll } from '~/services/Hooks';
import { faThumbsUp,faQuestionCircle, faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { faExclamationCircle,faQuestion, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { LessonHeading, LessonResources } from '~/components/lessons';
import PageContainer from '~/components/PageContainer';
import { getLessonById, LessonDescription } from '~/services/DataModel';
import LessonContent from '~/components/lessons/LessonContent/LessonContent';
import LessonExercises from '~/components/lessons/LessonExercises/LessonExercises';
import PageWithAsideMenu from '~/components/layout/PageWithAsideMenu/PageWithAsideMenu';
import TableOfContents, { Chapter, parseChapters } from '~/components/TableOfContents';

// Naming this component `Temp` because eventually
// will move this to the /html folder. So right now
// it's just a Temporary solution while we're finishing
// development on the Tutorial functionality.
const HtmlLessonTemp = ({ lessonInfo, mdxContent = '' }: { lessonInfo: LessonDescription | null, mdxContent?: string }) => {
  const getChapters = (lessonDescription: LessonDescription): Chapter[] => {
    if (!lessonDescription.withExercises) {
      return parseChapters(lessonDescription.chapters);
    }

    return [
      {
        title: 'Lectie',
        id: 'lectie',
        href: '#lectie',
        subchapters: parseChapters(lessonInfo.chapters),
      },
      {
        title: 'Exerciții',
        id: 'exercitii',
        href: '#exercitii',
      },
    ];
  };

  withSmoothScroll();

  if (lessonInfo === null) {
    return <NotFoundPage />;
  }

  if (lessonInfo.written === false) {
    return <NotWroteYet lesson={lessonInfo} />;
  }

  const chapters = getChapters(lessonInfo);

  return (
    <>
      <SEOTags
        title={`${lessonInfo.title} | Lecție HTML`}
        description={lessonInfo.description}
        url={`https://FrontEnd.ro${lessonInfo.url}`}
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
            {lessonInfo.resources !== undefined && (
              <LessonResources className="my-5" links={lessonInfo.resources} />
            )}
            {lessonInfo.withExercises === true && (
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

export default HtmlLessonTemp;
