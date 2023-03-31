import {
  LessonCover,
  LessonFigure,
  LessonHeading,
  LessonResources,
  LessonFloatContent,
  LessonFirstSentence,
} from '~/components/lessons';
import { MDXProvider } from '@mdx-js/react';
import { MDXService } from '~/services/MDXService';
import FormattedText from '~/components/FormattedText';
import Highlight from '~/components/Highlight/Highlight';
import CodePenEmbed from '~/components/CodePenEmbed/CodePenEmbed';
import List from '~/components/List';

const MDX_COMPONENTS = {
  List,
  Highlight,
  CodePenEmbed,
  LessonFigure,
  LessonHeading,
  FormattedText,
  LessonResources,
  LessonFloatContent,
  LessonFirstSentence,
}

export default function AboutHtmlContent({ mdxContent }: { mdxContent: string }) {
  const Content = MDXService.getComponent(mdxContent);

  return (
    <>
      <LessonCover>
        <img
          width="2400"
          style={{ aspectRatio: '2400 / 1260' }}
          alt="Road-sign doodle with HTML, CSS and JS"
          src={`${process.env.CLOUDFRONT_PUBLIC}/seo/about-html_2400w.jpg`}
        />
      </LessonCover>
      <MDXProvider components={MDX_COMPONENTS}>
        <Content />
      </MDXProvider>
    </>
  );
}
