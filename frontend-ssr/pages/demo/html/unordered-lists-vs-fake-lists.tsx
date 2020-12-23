import React from 'react';
import Head from 'next/head';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Highlight from '~/components/Highlight/Highlight';

export default function UnorderedListsVsFakeLists() {
  const title = 'Elementul <ul> folosit corect vs o listă fake';
  return (
    <>
      <Head>
        <title>
          {title}
          {' '}
          | FrontEnd.ro
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Header demoPage />
        <Demo title={title}>
          <p>Un exemplu de listă neordonată definită corect:</p>
          <p>
            O listă folosită corect, va putea permite screen readere-lor să
            anunțe utilizatorii cu deficiențe de vedere că citesc o listă
          </p>
          <DemoPreview>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
            </ul>
          </DemoPreview>
          <Highlight
            className="my-5"
            language="html"
            code={`
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JAVASCRIPT</li>
</ul>         
`}
          />
          <p>
            și nu o combinație confuză de texte și numere. Când un screen reader
            va ajunge la această listă falsă nu va anunța utilizatorul că
            urmează o listă și nici cîte item-uri sunt în interiorul ei.
          </p>
          <p>
            Deși vizual efectul produs este aceleiași, corect este să folosim
            tag-urile adecvate atunci când descriem conținutul unui document
            HTML.
          </p>
          <DemoPreview>
            <p>
              HTML
              <br />
              CSS
              <br />
              JAVASCRIPT
              <br />
            </p>
          </DemoPreview>
          <Highlight
            className="my-5"
            language="html"
            code={`
HTML <br />
CSS <br />
JAVASCRIPT <br />                    
`}
          />
        </Demo>
        <Footer />
      </>
    </>
  );
}
