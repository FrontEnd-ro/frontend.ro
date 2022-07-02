import React, { ReactNode } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import LinkComponent from './Link';

export default {
  title: 'Generic/Link',
  component: LinkComponent,
} as ComponentMeta<typeof LinkComponent>;

const Template: ComponentStory<typeof LinkComponent> = (args) => (
  <LinkComponent {...args}>
    Link Component
  </LinkComponent>
);

export const Contained = () => (
  <Wrapper>
    <LinkComponent href="#" variant="contained" color="inherit"> Contained Inherit </LinkComponent>
    <LinkComponent href="#" variant="contained" color="white"> Contained White </LinkComponent>
    <LinkComponent href="#" variant="contained" color="black"> Contained Black </LinkComponent>
    <LinkComponent href="#" variant="contained" color="green"> Contained Green </LinkComponent>
    <LinkComponent href="#" variant="contained" color="blue"> Contained Blue </LinkComponent>
    <LinkComponent href="#" variant="contained" color="red"> Contained Red </LinkComponent>
    <LinkComponent href="#" variant="contained" color="yellow"> Contained Yellow </LinkComponent>
    <LinkComponent href="#" variant="contained" color="grey"> Contained Grey </LinkComponent>
  </Wrapper>
);

export const Text = () => (
  <Wrapper>
    <LinkComponent href="#" variant="text" color="inherit"> Text Inherit </LinkComponent>
    <LinkComponent href="#" variant="text" color="white"> Text White </LinkComponent>
    <LinkComponent href="#" variant="text" color="black"> Text Black </LinkComponent>
    <LinkComponent href="#" variant="text" color="green"> Text Green </LinkComponent>
    <LinkComponent href="#" variant="text" color="blue"> Text Blue </LinkComponent>
    <LinkComponent href="#" variant="text" color="red"> Text Red </LinkComponent>
    <LinkComponent href="#" variant="text" color="yellow"> Text Yellow </LinkComponent>
    <LinkComponent href="#" variant="text" color="grey"> Text Grey </LinkComponent>
  </Wrapper>
);

export const Link = Template.bind({});
Link.args = {
  href: '#',
};

const Wrapper = ({ children }: {children: ReactNode}) => (
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1em',
    // Adding a background so that even the `white` variant is visible
    background: '#ddd',
    padding: '2em',
  }}
  >
    {children}
  </div>
);
