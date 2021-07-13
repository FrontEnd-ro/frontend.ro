import React from 'react';
import CodePenEmbed from './CodePenEmbed';

export default {
  title: 'CodePenEmbed',
};

export const Default = () => (
  <>
    <h2> HTML (recommended) </h2>
    <CodePenEmbed
      user="iampava"
      slug="mdmENZO"
      defaultTab="html"
    />

    <h2> IFrame Embed </h2>
    <CodePenEmbed
      user="iampava"
      slug="mdmENZO"
      variant="iframe"
      defaultTab="html"
    />
  </>
);

export const Dark = () => (
  <>
    <h2> HTML (recommended) </h2>
    <CodePenEmbed
      user="iampava"
      slug="mdmENZO"
      defaultTab="html"
      theme="dark"
    />

    <h2> IFrame Embed </h2>
    <CodePenEmbed
      user="iampava"
      slug="mdmENZO"
      defaultTab="html"
      theme="dark"
      variant="iframe"
    />
  </>
);

export const WithClickToLoad = () => (
  <>
    <h2> HTML (recommended) </h2>
    <CodePenEmbed
      user="iampava"
      slug="mdmENZO"
      defaultTab="html"
      theme="dark"
      useClickToLoad
    />

    <h2> IFrame Embed </h2>
    <CodePenEmbed
      user="iampava"
      slug="mdmENZO"
      defaultTab="html"
      theme="dark"
      variant="iframe"
      useClickToLoad
    />
  </>
);
