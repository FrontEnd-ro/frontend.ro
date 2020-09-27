import React from 'react';

interface Props {
  title: string;
  description: string;
  url: string;
}

export default function SEOTags({ title, description, url }: Props) {
  return (
    <>
      <meta name="description" content={description} />

      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:locale" content="ro_RO" />
      <meta property="og:image" content="https://FrontEnd.ro/assets/share-image.jpg" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="400" />
    </>
  );
}
