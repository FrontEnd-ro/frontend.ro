import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Demo, { DemoPreview } from '~/components/demo';
import Highlight from '~/components/Highlight/Highlight';

export default function AtributulSrcset() {
  const title = 'Responsive <img> via "srcset"';

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
        <Header demoPage />
        <Demo title={title}>
          <p>
            Specificarea mai multor surse posibile pentru imagine
            și încărcarea celei mai potrivite pentru ecranul dispozitivului.
          </p>
          <p>
            {' '}
            Deschide
            {' '}
            <Link href="/intro/devtools">
              <a>
                devtools în modul responsive
              </a>
            </Link>
            {' '}
            și joacă-te cu dimensiunea browserului pentru
            a vedea cum surse diferite sunt încărcate în funcție de rezoluție.
          </p>
          <DemoPreview>
            <img
              srcSet="
                https://d3tycb976jpudc.cloudfront.net/demo-assets/red_bycicle__high.jpg 4000w,
                https://d3tycb976jpudc.cloudfront.net/demo-assets/red_bycicle__med.jpg 2000w,
                https://d3tycb976jpudc.cloudfront.net/demo-assets/red_bycicle__low.jpg 800w,
              "
              style={{ maxWidth: '100%' }}
              alt="Red bycicle wheel"
            />
          </DemoPreview>
          <Highlight
            className="my-5"
            language="html"
            code={`
<img srcset="
    /red_bycicle__high.jpg 4000w,
    /red_bycicle__med.jpg 2000w,
    /red_bycicle__low.jpg 800w,
  " 
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
