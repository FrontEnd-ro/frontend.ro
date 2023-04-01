import React from 'react';
import {
  LessonCover,
  LessonHeading,
  LessonTip,
  LessonFigure,
  LessonFirstSentence,
} from '~/components/lessons';
import Link from '~/components/generic/Link';
import Highlight from '~/components/Highlight/Highlight';
import { DemoPreview } from '~/components/demo';
import FormattedText from '~/components/FormattedText';
import { MDXProvider } from '@mdx-js/react';
import { MDXService } from '~/services/MDXService';
import List from '~/components/List';

const MDX_COMPONENTS = {
  LessonFirstSentence,
  LessonHeading,
  FormattedText,
  Highlight,
  LessonTip,
  DemoPreview,
  Link,
  List,
  LessonFigure
};

export default function AudioAndVideoContent({
  mdxContent,
}: {
  mdxContent: string;
}) {
  const Content = MDXService.getComponent(mdxContent);
  const coverImage = `${process.env.CLOUDFRONT_PUBLIC}/public/seo/video-audio_2400w.jpg`;

  return (
    <>
      <LessonCover>
        <img
          width="2400"
          style={{ aspectRatio: "2400/1260" }}
          alt="Doodle cu un audio waveform și un video"
          src={coverImage}
        />
      </LessonCover>
      <MDXProvider components={MDX_COMPONENTS}>
        <Content />
      </MDXProvider>
    </>
  );
}
