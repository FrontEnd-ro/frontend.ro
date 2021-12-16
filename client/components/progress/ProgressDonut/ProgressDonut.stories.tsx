import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProgressDonutComponent from './ProgressDonut';

export default {
  title: 'Generic/Progress/Donut',
  component: ProgressDonutComponent,
} as ComponentMeta<typeof ProgressDonutComponent>;

const Template: ComponentStory<typeof ProgressDonutComponent> = (args) => (
  <div style={{
    margin: '2em auto',
    width: '90%',
    height: '500px',
    maxWidth: '1200px',
  }}
  >
    <ProgressDonutComponent {...args} />
  </div>
);

const baseArgs = {
  size: '256px',
  count: 10,
  className: 'text-silver',
  items: [{
    count: 2,
    color: 'green',
  }, {
    count: 5,
    color: 'yellow',
  }, {
    count: 1,
    color: 'red',
  }, {
    count: 1,
    color: 'blue',
  }, {
    count: 0.5,
    color: 'orange',
  }],
};

export const ProgressDonut = Template.bind({});
ProgressDonut.args = {
  ...baseArgs,
};
