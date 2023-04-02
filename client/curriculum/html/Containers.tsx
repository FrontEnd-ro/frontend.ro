import React from 'react';
import {
  LessonQuote,
  LessonCover,
  LessonFigure,
  LessonHeading,
  LessonFirstSentence,
} from '~/components/lessons';
import SideBySidePictures from '~/components/SideBySidePictures';
import FormattedText from '~/components/FormattedText';
import { MDXProvider } from '@mdx-js/react';
import { MDXService } from '~/services/MDXService';
import Highlight from '~/components/Highlight/Highlight';
import CodePenEmbed from '~/components/CodePenEmbed/CodePenEmbed';
import List from '~/components/List';

const MDX_COMPONENTS= {
  LessonFirstSentence,
  LessonHeading,
  LessonFigure,
  Highlight,
  FormattedText,
  List,
  SideBySidePictures,
  CodePenEmbed,
  LessonQuote,
};

function ContainersContent({
  mdxContent,
}: {
  mdxContent: string;
})  {
  const Content = MDXService.getComponent(mdxContent);
  const coverImage = `${process.env.CLOUDFRONT_PUBLIC}/public/seo/containers_2400w.jpg`;

  return (
    <>
      <LessonCover>
        <img width="2400" style={{ aspectRatio: '2400/1260' }} alt="Doodle cu o cutie" src={coverImage} />
      </LessonCover>
      <MDXProvider components={MDX_COMPONENTS}>
        <Content />
      </MDXProvider>
    </>
  );
}

export default ContainersContent;
