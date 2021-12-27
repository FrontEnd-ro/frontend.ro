import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import GradientTextComponent from './GradientText';

export default {
  title: 'Generic/Gradient',
  component: GradientTextComponent,
} as ComponentMeta<typeof GradientTextComponent>;

const Template: ComponentStory<typeof GradientTextComponent> = (args) => (
  <GradientTextComponent<React.ParamHTMLAttributes<HTMLParagraphElement>> className="d-inline-block" {...args}>
    Gradient Lorem Ipsum
  </GradientTextComponent>
);

export const GradientHeading = Template.bind({});
GradientHeading.args = {
  as: 'h1',
  angle: 45,
  toColor: '#0070f3',
  fromColor: '#ec008c',
};

export const GradientText = Template.bind({});
GradientText.args = {
  as: 'p',
  angle: 90,
  toColor: '#0070f3',
  fromColor: '#ec008c',
};
