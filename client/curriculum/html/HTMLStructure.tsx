import {
  LessonCover,
  LessonHeading,
  LessonTip,
  LessonFigure,
  LessonFirstSentence,
} from '~/components/lessons';
import { MDXProvider } from '@mdx-js/react';
import { MDXService } from '~/services/MDXService';
import Highlight from '~/components/Highlight/Highlight';
import SideBySidePictures from '~/components/SideBySidePictures';

import FormattedText from '~/components/FormattedText';
import ResponsiveFlex from '~/components/ResponsiveFlex';
import List from '~/components/List';

const MDX_COMPONENTS = {
  List,
  LessonTip,
  Highlight,
  LessonFigure,
  LessonHeading,
  FormattedText,
  ResponsiveFlex,
  SideBySidePictures,
  LessonFirstSentence,
}

function HTMLStructureContent({ mdxContent }: { mdxContent: string }) {
  const Content = MDXService.getComponent(mdxContent);
  return (
    <>
      <LessonCover>
        <img
          width="2400"
          style={{ aspectRatio: '2400/1260' }}
          alt="Stickman reprezentând elementele Head și Body"
          src={`${process.env.CLOUDFRONT_PUBLIC}/seo/html-structure_2400w.jpg`}
        />
      </LessonCover>
      <MDXProvider components={MDX_COMPONENTS}>
        <Content />
      </MDXProvider>
    </>
  );
}

export default HTMLStructureContent;
