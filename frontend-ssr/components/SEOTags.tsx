import Head from 'next/head';
import React from 'react';

interface Props {
  url: string;
  title: string;
  description: string;
  shareImage?: string;
  bigShareImage?: boolean;
}

export default function SEOTags({
  title, description, url, shareImage = 'https://frontend.ro/main-seo-image.jpg', bigShareImage = true,
}: Props) {
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />

      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:locale" content="ro_RO" />
      <meta property="og:image" content={shareImage} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content={bigShareImage ? '1200' : '400'} />
      <meta property="og:image:height" content={bigShareImage ? '630' : '400'} />

      {/* Twitter */}
      <meta name="twitter:image" content={shareImage} />
      <meta name="twitter:site" content="@FrontEndRo" />
      <meta name="twitter:creator" content="@FrontEndRo" />
      <meta name="twitter:card" content={bigShareImage ? 'summary_large_image' : 'summary'} />
    </Head>
  );
}
