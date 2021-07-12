import React from 'react';
import Head from 'next/head';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Highlight from '~/components/Highlight/Highlight';
import FormattedText from '~/components/FormattedText';

export default function OrderedListsType() {
  const title = "Atributul 'type' pentru liste ordonate";

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
            Dacă vrem ca enumerarea elementelor din listă să se facă cu un
            anumit tip de cifră sau cu litere, ne putem folosi de atributul{' '}
            <strong>type</strong>:
          </p>
          <DemoPreview>
            <ol type="I">
              <li> Pornește laptopul </li>
              <li> Deschide Visual Studio Code </li>
              <li> Începe să codezi </li>
            </ol>
          </DemoPreview>
          <Highlight
            className="my-5"
            language="html"
            code={`
<ol type="I">
  <li> Pornește laptopul </li>
  <li> Deschide Visual Studio Code </li>
  <li> Începe să codezi </li>
</ol>
                   
`}
          />
          <p>Acesta acceptă și alte valori:</p>
          <ul className="with--bullets">
            <li className="mb-4">
              <FormattedText as="strong">1</FormattedText> – pentru enumerare cu{' '}
              cifre arabe
            </li>
            <li className="mb-4">
              <FormattedText as="strong">i</FormattedText> – pentru enumerare
              cifre romane mici
            </li>
            <li>
              <FormattedText as="strong">a</FormattedText> sau{' '}
              <FormattedText as="strong">A</FormattedText> – pentru enumerare cu
              litere mici, respectiv mari
            </li>
          </ul>
        </Demo>
        <Footer />
      </>
    </>
  );
}
