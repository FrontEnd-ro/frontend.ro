import React from 'react';
import Head from 'next/head';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Link from '~/components/generic/Link';
import Demo, { DemoPreview } from '~/components/demo';
import Highlight from '~/components/Highlight/Highlight';

export default function HugeImageLoading() {
  const title = 'Încărcarea greoaie a unei imagini 4K';

  return (
    <>
      <Head>
        <title>
          {title}
          {' '}
          | DEMO - FrontEnd.ro
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Header demoPage withNavMenu />
        <Demo title={title}>
          <p>
            Încărcarea unei imagini uriașe - 2+MB - pe o conexiune înceată.
          </p>
          <p>
            {' '}
            Deschide
            {' '}
            <Link prefetch={false} href="/intro/devtools">
              panoul Network din DevTools
            </Link>
            {' '}
            și încetinește conexiunea, iar apoi refreshuiește pagina.
          </p>
          <DemoPreview>
            <img
              src="https://d3tycb976jpudc.cloudfront.net/demo-assets/red_bycicle__high.jpg"
              style={{ maxWidth: '100%' }}
              alt="Red bycicle wheel"
            />
          </DemoPreview>
          <Highlight
            className="my-5"
            language="html"
            code={`
<img 
  src="/red_bycicle__high.jpg" 
  style="max-width: 100%" 
  alt="Red bycicle wheel" 
/>`}
          />
        </Demo>
        <Footer />
      </>
    </>
  );
}
