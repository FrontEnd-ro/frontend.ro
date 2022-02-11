import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import HorizontalSeparator from './HorizontalSeparator';

export default {
  title: 'HorizontalSeparator',
  component: HorizontalSeparator,
} as ComponentMeta<typeof HorizontalSeparator>;

const Template: ComponentStory<typeof HorizontalSeparator> = (args) => (
  <HorizontalSeparator {...args} />
);

export const Default = Template.bind({});

export const WithText = Template.bind({});
WithText.args = {
  text: 'Separator Text',
};
