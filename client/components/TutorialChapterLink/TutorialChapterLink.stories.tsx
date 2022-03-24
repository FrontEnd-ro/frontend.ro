import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TutorialChapterLinkComponent from './TutorialChapterLink';

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
  active: boolean,
  ribbonPosition: 'top-right' | 'bottom-right';
} = {
  href: '#',
  title: 'HTML Lesson',
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
