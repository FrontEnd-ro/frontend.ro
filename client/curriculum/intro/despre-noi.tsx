import {
  LessonCover, LessonHeading, LessonFigure, LessonQuote,
} from '~/components/lessons';
import {
  FacebookButton, LinkedInButton, WhatsAppButton, CopyLinkButton,
} from '~/components/SocialMediaButtons';
import List from '~/components/List';
import { MDXProvider } from '@mdx-js/react';
import coverSvg from './despre-noi-cover.svg';
import { MDXService } from '~/services/MDXService';
import FormattedText from '~/components/FormattedText';
import OptionsDrawer from '~/components/OptionsDrawer/OptionsDrawer';

const MDX_COMPONENTS = {
  List,
  LessonHeading,
  LessonQuote,
  OptionsDrawer,
  CopyLinkButton,
  FacebookButton,
  LinkedInButton,
  WhatsAppButton,
  LessonFigure,
  FormattedText
}

export default function AboutUsContent({ mdxContent }: { mdxContent: string }) {
  const Content = MDXService.getComponent(mdxContent);

  return (
    <>
      <LessonCover resizeOffset={100}>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{
          __html: coverSvg,
        }}
        />

      </LessonCover>
      <MDXProvider components={MDX_COMPONENTS}>
        <Content />
      </MDXProvider>
    </>
  );
}
