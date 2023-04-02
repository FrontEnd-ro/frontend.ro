import React from 'react';
import {
  LessonTip,
  LessonCover,
  LessonFigure,
  LessonHeading,
  LessonQuote,
  LessonFirstSentence,
} from '~/components/lessons';
import Highlight from '~/components/Highlight/Highlight';
import FormattedText from '~/components/FormattedText';
import { MDXProvider } from '@mdx-js/react';
import { MDXService } from '~/services/MDXService';
import List from '~/components/List';

const MDX_COMPONENTS = {
  LessonFirstSentence,
  LessonHeading,
  LessonFigure,
  LessonTip,
  LessonQuote,
  FormattedText,
  Highlight,
  List
};

function HTMLValidationContent({ mdxContent }: { mdxContent: string }) {
  const Content = MDXService.getComponent(mdxContent);

  return (
    <>
      <LessonCover>
        <img
          width="2400"
          style={{ aspectRatio: '2400/1260' }}
          alt="Angry doodle to Valid HTML"
          src={`${process.env.CLOUDFRONT_PUBLIC}/public/seo/html-validation_2400w.jpg`}
        />
      </LessonCover>
      <MDXProvider components={MDX_COMPONENTS}>
        <Content />
      </MDXProvider>
    </>
  );
}

export default HTMLValidationContent;
