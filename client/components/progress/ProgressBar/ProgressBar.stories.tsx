import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProgressBarComponent from './ProgressBar';

export default {
  title: 'Generic/Progress/Bar',
  component: ProgressBarComponent,
} as ComponentMeta<typeof ProgressBarComponent>;

const Template: ComponentStory<typeof ProgressBarComponent> = (args) => (
  <div style={{
    margin: '2em auto',
    width: '90%',
    height: '500px',
    maxWidth: '1200px',
  }}
  >
    <ProgressBarComponent {...args} />
  </div>
);

const baseArgs = {
  count: 10,
  items: [{
    count: 2,
    color: 'green',
  }, {
    count: 5,
    color: 'yellow',
  }],
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  ...baseArgs,
  direction: 'horizontal',
};

export const Vertical = Template.bind({});
Vertical.args = {
  ...baseArgs,
  direction: 'vertical',
};
