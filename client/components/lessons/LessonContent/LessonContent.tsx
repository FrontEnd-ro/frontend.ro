import { MDXProvider } from '@mdx-js/react';
import { PropsWithChildren } from 'react';
import { Contributor } from '~/services/contributors';
import { MDXService } from '~/services/MDXService';

import styles from './LessonContent.module.scss';
import List from '~/components/List/List';
import Highlight from '~/components/Highlight/Highlight';
import CodePenEmbed from '~/components/CodePenEmbed/CodePenEmbed';
import FormattedText from '~/components/FormattedText/FormattedText';
import {
  LessonCover,
  LessonContributors,
  LessonFigure,
  LessonFirstSentence,
  LessonFloatContent,
  LessonHeading,
  LessonQuote,
  LessonResources,
  LessonTip,
  LessonTable
} from '../index';
import { CopyLinkButton, FacebookButton, LinkedInButton, WhatsAppButton } from '~/components/SocialMediaButtons';
import OptionsDrawer from '~/components/OptionsDrawer/OptionsDrawer';
import Link from '~/components/generic/Link';
import ResponsiveFlex from '~/components/ResponsiveFlex/ResponsiveFlex';
import SideBySidePictures from '~/components/SideBySidePictures/SideBySidePictures';
import { DeprecatedBasicEditor } from '~/components/Editor/BasicEditor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DemoPreview } from '~/components/demo';

interface Props {
  title: string;
  contributors: Contributor[];
  mdxContent?: string;
}

const LessonContent = ({ title, contributors, mdxContent = '', children }: PropsWithChildren<Props>) => {
  const MDX_COMPONENTS = {
    List,
    Link,
    Highlight,
    LessonCover,
    CodePenEmbed,
    LessonFigure,
    LessonHeading,
    FormattedText,
    CopyLinkButton,
    LessonResources,
    LessonFloatContent,
    LessonFirstSentence,
    OptionsDrawer,
    FacebookButton,
    LinkedInButton,
    WhatsAppButton,
    LessonQuote,
    LessonTip,
    ResponsiveFlex,
    SideBySidePictures,
    DeprecatedBasicEditor,
    FontAwesomeIcon,
    LessonTable,
    DemoPreview,
  }

  const Content = mdxContent !== ''
    ? MDXService.getComponent(mdxContent)
    : <></>;

  return (
    <article className={styles.LessonContent}>
      <h1>
        {title}
      </h1>
      {contributors.length > 0 && (
        <LessonContributors className="absolute" contributors={contributors} />
      )}
      {mdxContent !== '' && (
        <MDXProvider components={MDX_COMPONENTS}>
          <Content />
        </MDXProvider>
      )}
      {children}
    </article>
  );
};

export default LessonContent;
