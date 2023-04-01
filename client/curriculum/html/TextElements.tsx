import {
  LessonCover,
  LessonFigure,
  LessonFirstSentence,
  LessonHeading,
  LessonTip,
} from '~/components/lessons';
import Link from '~/components/generic/Link';
import Highlight from '~/components/Highlight/Highlight';
import FormattedText from '~/components/FormattedText';
import { MDXService } from '~/services/MDXService';
import { MDXProvider } from '@mdx-js/react';

const MDX_COMPONENTS = {
  Link,
  Highlight,
  LessonTip,
  LessonFigure,
  FormattedText,
  LessonFirstSentence,
  LessonHeading,
}

export default function TextsContent({ mdxContent }: { mdxContent: string }) {
  const Content = MDXService.getComponent(mdxContent);

  return (
    <>
      <LessonCover>
        <img
          width="2400"
          style={{ aspectRatio: '2400/1260' }}
          alt="Elemente HTML pentru texte"
          src={`${process.env.CLOUDFRONT_PUBLIC}/seo/texts_2400w.jpg`}
        />
      </LessonCover>
      <MDXProvider components={MDX_COMPONENTS}>
        <Content />
      </MDXProvider>
    </>
  );
}
