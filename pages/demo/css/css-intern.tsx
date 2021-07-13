import React from 'react';
import Link from 'next/link';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Highlight from '~/components/Highlight/Highlight';
import SEOTags from '~/components/SEOTags';
import FormattedText from '~/components/FormattedText';

export default function InternalCSS() {
  const title = 'CSS Intern';
  return (
    <>
      <SEOTags
        title={`${title} | FrontEnd.ro`}
        description="Utilizarea metodei CSS-ului intern pentru stilizarea paginilor Web"
        url="https://FrontEnd.ro/demo/css/css-intern"
        shareImage="https://frontend.ro/seo/styling-methods.jpg"
      >
        <style>
          {`.css-intern main {
      padding: 1em;
      text-align: center;
      font-family: sans-serif;
      background-color: #282a36;
    }

    .css-intern h1 {
      color: white;
    }

    .css-intern p {
      color: white;
      font-size: 22px;
      font-weight: bold;
    }

    .css-intern span {
      color: #9f616a;
      font-weight: bold;
    }`}
        </style>
      </SEOTags>
      <>
        <Header demoPage withNavMenu />
        <Demo title={title}>
          <p>
            Metoda de integrare a codului CSS în pagina web se va face prin
            inserarea elementului
            {' '}
            <FormattedText as="strong">{'<style>'}</FormattedText>
            {' '}
            în secțiunea
            {' '}
            <FormattedText as="strong">{'<head>'}</FormattedText>
            {' '}
            a documentului
            HTML. Față de
            {' '}
            <Link href="/demo/css/css-inline">
              <a>metoda inline</a>
            </Link>
            {' '}
            , la aceasta trebuie să precizăm pentru ce elemente vom aplica
            regulile de stilizare folosind selectori.
          </p>
          <DemoPreview>
            <div className="css-intern">
              <main>
                <h1>Frontend.ro</h1>
                <p>
                  Învață alături de noi cum
                  <span> să stilizezi </span>
                  .
                </p>
              </main>
            </div>
          </DemoPreview>
          <Highlight
            className="my-5"
            language="html"
            code={`<!DOCTYPE html>
<html lang="ro">

<head>
  <title>Stiluri</title>
  <style>
    main {
      padding: 1em;
      text-align: center;
      font-family: sans-serif;
      background-color: #282a36;
    }

    h1 {
      color: white;
    }

    p {
      color: white;
      font-size: 22px;
      font-weight: bold;
    }

    span {
      color: #9f616a;
      font-weight: bold;
    }
  </style>
</head>

<body>
  <main>
    <h1>Frontend.ro</h1>
    <p>
      Învață alături de noi cum
      <span> să stilizezi </span>
      .
    </p>
  </main>
</body>

</html>`}
          />
        </Demo>
        <Footer />
      </>
    </>
  );
}
