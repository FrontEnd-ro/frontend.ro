import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import HighlightComponent from './Highlight';

export default {
  title: 'Generic/Highlight',
  component: HighlightComponent,
} as ComponentMeta<typeof HighlightComponent>;

const Template: ComponentStory<typeof HighlightComponent> = (args) => (
  <HighlightComponent {...args} />
);

const code = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1> Hello World </h1>
</body>
</html>`;

export const Highlight = Template.bind({});
Highlight.args = {
  code,
  variant: 'default',
  textWrap: 'wrap',
  language: 'html',
};
