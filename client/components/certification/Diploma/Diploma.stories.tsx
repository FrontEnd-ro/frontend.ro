import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import DiplomaComponent from './Diploma';

export default {
  title: 'Certification/Diploma',
  component: DiplomaComponent,
} as ComponentMeta<typeof DiplomaComponent>;

const Template: ComponentStory<typeof DiplomaComponent> = (args) => (
  <div style={{
    margin: '2em auto',
    width: '90%',
    maxWidth: '1200px',
  }}
  >
    <DiplomaComponent {...args} />
  </div>
);

const baseArgs = {
  student: {
    name: 'Jon Doe',
    username: 'jondoe',
    avatar: 'https://iampava.com/images/pava.jpg',
  },
  tutorial: {
    name: 'Modulul de HTML',
    href: '#html',
  },
  certification: {
    date: new Date(),
    exerciseCount: 18,
    url: 'https://frontend.ro',
  },
};

export const Large = Template.bind({});
Large.args = {
  ...baseArgs,
  variant: 'large',
};

export const Medium = Template.bind({});
Medium.args = {
  ...baseArgs,
  variant: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  ...baseArgs,
  variant: 'small',
};
