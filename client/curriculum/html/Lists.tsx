import React from 'react';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import {
  LessonCover,
  LessonHeading,
  LessonTip,
  LessonFigure,
  LessonFirstSentence,
} from '~/components/lessons';
import Highlight from '~/components/Highlight/Highlight';
import FormattedText from '~/components/FormattedText';
import { MDXProvider } from '@mdx-js/react';
import { MDXService } from '~/services/MDXService';
import List from '~/components/List';

const MDX_COMPONENTS={
  LessonFirstSentence,
  LessonHeading,
  List,
  FormattedText,
  Highlight,
  LessonFigure,
  LessonTip,
};

export default function ListsContent({
  mdxContent,
}: {
  mdxContent: string;
}) {
  const Content = MDXService.getComponent(mdxContent);

  return (
    <>
      <LessonCover>
        <img
          width="2400"
          style={{ aspectRatio: '2400/1260' }}
          alt="Doodle pentru un todo list"
          src={`${process.env.CLOUDFRONT_PUBLIC}/public/seo/lists_2400w.jpg`}
        />
      </LessonCover>
      <MDXProvider components={MDX_COMPONENTS}>
        <Content />
      </MDXProvider>
    </>
  );
}
