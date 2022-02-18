import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TutorialChapterLinkComponent from './TutorialChapterLink';
import { Chapter } from '../TableOfContents';

export default {
  title: 'Tutoria/TutorialChapterLink',
  component: TutorialChapterLinkComponent,
} as ComponentMeta<typeof TutorialChapterLinkComponent>;

const Template: ComponentStory<typeof TutorialChapterLinkComponent> = (args) => (
  <TutorialChapterLinkComponent {...args} />
);

const BASE_PROPS: {
  href: string,
  title: string,
  chapters: Chapter[],
  showChapters: boolean,
  active: boolean,
  ribbonPosition: 'top-right' | 'bottom-right';
} = {
  href: '#',
  title: 'HTML Lesson',

  chapters: [{
    id: 'ch-1',
    href: '#',
    title: 'Head element',
  }, {
    id: 'ch-2',
    href: '#',
    title: 'Body element',
  }, {
    id: 'ch-3',
    href: '#',
    title: 'Image elements',
  }],
  showChapters: false,
  active: true,
  ribbonPosition: 'top-right',
};

export const Initial = Template.bind({});
Initial.args = {
  ...BASE_PROPS,
  completePercentage: 0,
};

export const InProgress = Template.bind({});
InProgress.args = {
  ...BASE_PROPS,
  completePercentage: 33,
};

export const Done = Template.bind({});
Done.args = {
  ...BASE_PROPS,
  completePercentage: 100,
};

export const WithChapters = Template.bind({});
WithChapters.args = {
  ...BASE_PROPS,
  completePercentage: 33,
  showChapters: true,
};
