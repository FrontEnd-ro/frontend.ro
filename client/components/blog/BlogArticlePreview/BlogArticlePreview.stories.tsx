import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import BlogArticlePreviewComponent from './BlogArticlePreview';

export default {
  title: 'Blog/Article Preview',
  component: BlogArticlePreviewComponent,
} as ComponentMeta<typeof BlogArticlePreviewComponent>;

const Template: ComponentStory<typeof BlogArticlePreviewComponent> = (args) => (
  <BlogArticlePreviewComponent {...args} />

);

export const ArticlePreview = Template.bind({});
ArticlePreview.args = {
  href: '/',
  title: 'Changelog #1: De ce am început FrontEnd.ro și modulul de HTML',
  firstParagraph: 'Pe scurt, proiectul a inceput anul trecut in 2020 cand am vazut ca domeniul FrontEnd.ro era de vanzare si l-am cumparat. Dar motivul pentru care am facut asta este unul mai din vechi, deci hai să vă dau și puțin context dinainte.',
  variant: 'row',
  cover: {
    width: 1920,
    height: 1080,
    src: `${process.env.CLOUDFRONT_PUBLIC}/public/images/blog/changelog1__800w.jpg`,
  },
  timestamp: 1633055672610,
};
