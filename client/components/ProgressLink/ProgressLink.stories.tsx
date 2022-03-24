import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProgressLinkComponent from './ProgressLink';

export default {
  title: 'Generic/ProgressLink',
  component: ProgressLinkComponent,
} as ComponentMeta<typeof ProgressLinkComponent>;

const Template: ComponentStory<typeof ProgressLinkComponent> = (args) => (
  <ProgressLinkComponent {...args} />
);

const BASE_PROPS: {
  href: string,
  title: string,
  active: boolean,
  variant: 'default' | 'waiting' | 'error';
} = {
  href: '#',
  title: 'HTML Lesson',
  active: true,
  variant: 'default',
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

export const Waiting = Template.bind({});
Waiting.args = {
  ...BASE_PROPS,
  variant: 'waiting',
};

export const Error = Template.bind({});
Error.args = {
  ...BASE_PROPS,
  variant: 'error',
};
