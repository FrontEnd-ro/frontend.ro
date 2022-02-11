import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PasswordRevealComponent from './PasswordReveal';

export default {
  title: 'PasswordReveal',
  component: PasswordRevealComponent,
} as ComponentMeta<typeof PasswordRevealComponent>;

const Template: ComponentStory<typeof PasswordRevealComponent> = (args) => (
  <PasswordRevealComponent {...args} />
);

export const PassworReveal = Template.bind({});
PassworReveal.args = {
  required: true,
  name: 'password',
};
