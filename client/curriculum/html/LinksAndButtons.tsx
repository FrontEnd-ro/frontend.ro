import React from 'react';
import {
  LessonCover,
  LessonFigure,
  LessonHeading,
  LessonTip,
  LessonQuote,
  LessonFirstSentence,
} from '~/components/lessons';
import Highlight from '~/components/Highlight/Highlight';
import { DeprecatedBasicEditor } from '~/components/Editor/BasicEditor';
import FormattedText from '~/components/FormattedText';
import { MDXProvider } from '@mdx-js/react';
import { MDXService } from '~/services/MDXService';
import List from '~/components/List';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MDX_COMPONENTS={
  LessonFirstSentence,
  LessonHeading,
  FormattedText,
  Highlight,
  DeprecatedBasicEditor,
  LessonTip,
  LessonFigure,
  List,
  FontAwesomeIcon,
  LessonQuote,
};

export default function LinksAndButtonsContent({
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
          alt="Doodle reprezentând un buton și mai multe linkuri"
          src={`${process.env.CLOUDFRONT_PUBLIC}/seo/links-and-buttons_2400w.jpg`}
        />
      </LessonCover>
      <MDXProvider components={MDX_COMPONENTS}>
        <Content />
      </MDXProvider>
    </>
  );
}


