import React from 'react';
import CodePenEmbed from './CodePenEmbed';

export default {
  title: 'CodePenEmbed',
};

export const Default = () => (
  <CodePenEmbed
    user="iampava"
    slug="mdmENZO"
    defaultTab="html"
  />
);

export const Dark = () => (
  <CodePenEmbed
    user="iampava"
    slug="mdmENZO"
    defaultTab="html"
    theme="dark"
  />
);

export const WithClickToLoad = () => (
  <CodePenEmbed
    user="iampava"
    slug="mdmENZO"
    defaultTab="html"
    theme="dark"
    useClickToLoad
  />
);
