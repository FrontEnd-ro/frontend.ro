import React from 'react';
import {
  LessonCover,
  LessonFigure,
  LessonHeading,
  LessonQuote,
  LessonTable,
  LessonTableProps,
  LessonTip,
  LessonFirstSentence,
} from '~/components/lessons';
import Link from '~/components/generic/Link';
import Highlight from '~/components/Highlight/Highlight';
import SideBySidePictures from '~/components/SideBySidePictures';
import { MDXProvider } from '@mdx-js/react';
import { MDXService } from '~/services/MDXService';
import FormattedText from '~/components/FormattedText';
import List from '~/components/List';

const MDX_COMPONENTS={
  LessonFirstSentence,
  LessonHeading,
  List,
  Highlight,
  SideBySidePictures,
  LessonTip,
  Link,
  FormattedText,
  LessonFigure,
  LessonQuote,
  LessonTable,
};

export default function ImagesContent({
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
          alt="Doodle cu rama unei imagini"
          src={`${process.env.CLOUDFRONT_PUBLIC}/public/seo/html-images_2400w.jpg`}
        />
      </LessonCover>
      <MDXProvider components={MDX_COMPONENTS}>
        <Content />
      </MDXProvider>
    </>
  );
}
