import { useMemo } from 'react';
import * as runtime from 'react/jsx-runtime'
import {
  LessonCover, LessonHeading, LessonFigure, LessonQuote,
} from '~/components/lessons';
import {
  FacebookButton, LinkedInButton, WhatsAppButton, CopyLinkButton,
} from '~/components/SocialMediaButtons';
import coverSvg from './despre-noi-cover.svg';
import FormattedText from '~/components/FormattedText';
import List from '~/components/List';
import { runSync } from '@mdx-js/mdx';
import OptionsDrawer from '~/components/OptionsDrawer/OptionsDrawer';
import { MDXProvider, useMDXComponents } from '@mdx-js/react';


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
  const { default: Content } = useMemo(() => runSync(mdxContent, {
    ...runtime,
    useMDXComponents,
  }), [mdxContent]);

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
