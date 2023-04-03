import React from 'react';
import {
  LessonCover,
  LessonHeading,
  LessonTip,
  LessonFirstSentence,
} from '~/components/lessons';
import Highlight from '~/components/Highlight/Highlight';
import { MDXProvider } from '@mdx-js/react';
import { MDXService } from '~/services/MDXService';
import CodePenEmbed from '~/components/CodePenEmbed/CodePenEmbed';
import FormattedText from '~/components/FormattedText';
import List from '~/components/List';

const MDX_COMPONENTS={
  LessonFirstSentence,
  LessonHeading,
  CodePenEmbed,
  LessonTip,
  FormattedText,
  Highlight,
  List,
};

export default function FormsContent({
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
          alt="Doodle cu elemente din formulare"
          src={`${process.env.CLOUDFRONT_PUBLIC}/public/seo/forms_2400w.jpg`}
        />
      </LessonCover>
      <MDXProvider components={MDX_COMPONENTS}>
        <Content />
      </MDXProvider>
    </>
  );
}
