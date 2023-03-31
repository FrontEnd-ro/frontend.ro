import {
  LessonCover,
  LessonFigure,
  LessonHeading,
  LessonResources,
  LessonTip,
  LessonFirstSentence,
} from '~/components/lessons';
import List from '~/components/List';
import { MDXProvider } from '@mdx-js/react';
import Link from '~/components/generic/Link';
import { MDXService } from '~/services/MDXService';
import FormattedText from '~/components/FormattedText';

const MDX_COMPONENTS = {
  List,
  Link,
  LessonTip,
  LessonFigure,
  LessonHeading,
  FormattedText,
  LessonResources,
  LessonFirstSentence,
}

export default function VSCodeContent({ mdxContent }: { mdxContent: string }) {
  const Content = MDXService.getComponent(mdxContent);
  return (
    <>
      <LessonCover>
        <img
          width="1200"
          alt="Logo-ul VSCode"
          style={{ aspectRatio: '1200/630' }}
          src={`${process.env.CLOUDFRONT_PUBLIC}/seo/vs-code.jpg`}
        />
      </LessonCover>
      <MDXProvider components={MDX_COMPONENTS}>
        <Content />
      </MDXProvider>
    </>
  );
}
