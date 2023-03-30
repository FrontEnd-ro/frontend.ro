import Lesson from '~/components/lessons';
import SEOTags from '~/components/SEOTags';
import { NotWroteYet } from '~/components/404';
import NotFoundPage from '~/components/404/NotFound';
import VSCodeContent from '~/curriculum/intro/VSCode';
import AboutUsContent from '~/curriculum/intro/despre-noi';
import { GITHUB_URL } from '~/services/Constants';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { compile } from '@mdx-js/mdx';
import { getLessonById, LessonDescription } from '~/services/DataModel';
import appConfig from '~/../server/config/config';

const LESSON_TO_COMPONENT = {
  'vs-code': <VSCodeContent />,
};

const IntroLesson = ({ lessonInfo, mdxContent }: { lessonInfo: LessonDescription | null, mdxContent: string }) => {
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
      <Lesson lessonInfo={lessonInfo}>
        {lessonInfo.id === 'despre-noi' ? (
          <AboutUsContent mdxContent={mdxContent} />
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
export async function getServerSideProps({ req, res, params }) {
  const { id } = params;
  const lessonInfo = getLessonById(id);
  let mdxContent = '';

  if (lessonInfo === null) {
    res.statusCode = 404;
  }

  if (lessonInfo.id === 'despre-noi') {
    const { default: mdxAsString } = await import('!raw-loader!../../client/curriculum/intro/despre-noi.mdx');

    const MDX_SCOPE = {
      GITHUB_URL,
      headings:  lessonInfo.chapters,
      icons: { faShare },
      urlToShare: `${appConfig.APP.app_url}${req.url}`
    }
    mdxContent = String(await compile(appendMdxScope(mdxAsString as unknown as string, MDX_SCOPE), {
      development: false,
      outputFormat: 'function-body',
      // This is what the next-mdx-remote also does,
      // so let's put the same values (instead of `#`).
      providerImportSource: '@mdx-js/react',
    }));
  }

  return {
    props: {
      lessonInfo,
      mdxContent,
    },
  };
}

// Kinda hackish way to inject outside variables/scope into MDX Files
// As you can see we're doing this by specifically exporting a `SCOPE` variable
// from the MDX file. Looks a bit weird, but should work as long as]
// 1. The scope can be serialized to JSON
// 2. We don't have another variable in the file called SCOPE
// TODO: once we add more and more articles with MDX content, let's
// move this into a separate file
function appendMdxScope(compiledMdx: string, scope: Record<string, any>) {
  return `export const SCOPE = ${JSON.stringify(scope)};\n\n${compiledMdx}`;
}

export default IntroLesson;
