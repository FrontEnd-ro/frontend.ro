import React from 'react';
import Head from 'next/head';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Highlight from '~/components/Highlight/Highlight';
import FormattedText from '~/components/FormattedText';

export default function HorizontalLine() {
  const title = 'Elementul <hr> adaugă o linie de separare';
  return (
    <>
      <Head>
        <title>{title} | FrontEnd.ro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Header demoPage withNavMenu />
        <Demo title={title}>
          <p>
            Elementul <FormattedText as="strong">{'<hr>'}</FormattedText>{' '}
            (horizontal line) este un separator între secțiuni/elemente din
            pagină. .
          </p>
          <DemoPreview>
            <p> O primă regulă în această casă: Întotdeauna zîmbește! </p>
            <hr />
            <p> A doua regulă: Vino cu prăjituri! </p>
          </DemoPreview>
          <Highlight
            className="my-5"
            language="html"
            code={`
<p> O primă regulă în această casă: Întotdeauna zîmbește! </p>
<hr>
<p> A doua regulă: Vino cu prăjituri! </p>
`}
          />
        </Demo>
        <Footer />
      </>
    </>
  );
}
