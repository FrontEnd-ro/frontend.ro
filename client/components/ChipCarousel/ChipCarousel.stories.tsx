import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ChipCarouselComponent from './ChipCarousel';

export default {
  title: 'Generic/Chip Carousel',
  component: ChipCarouselComponent,
} as ComponentMeta<typeof ChipCarouselComponent>;

const Template: ComponentStory<typeof ChipCarouselComponent> = (args) => (
  <ChipCarouselComponent {...args} />
);

export const ChipCarousel = Template.bind({});
ChipCarousel.args = {
  rows: [
    ['<html>', '<div>', '<form>', '<head>', '<span>', '<article>', '<video>', '<button>', '<title>', '<main>', '<label>', '<summary>'],
    ['<aside>', '<pre>', '<code>', '<em>', '<br>', '<body>', '<header>', '<section>', '<p>', '<nav>', '<tbody>', '<progress>', '<h1>'],
    ['<blockquote>', '<ol>', '<footer>', '<audio>', '<img>', '<picture>', '<h2>', '<canvas>', '<figure>', '<hr>', '<ul>', '<select>'],
    ['<a>', '<time>', '<h3>', '<track>', '<iframe>', '<svg>', '<script>', '<link>', '<table>', '<input>', '<textarea>', '<details>']
  ]  
};
