import React from 'react';
import Head from 'next/head';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Demo, { DemoPreview } from '~/components/demo';
import { LessonTip } from '~/components/lessons';
import Highlight from '~/components/Highlight/Highlight';

export default function ContentShifting() {
  const title = 'Content shifting';

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
            Imaginea nu are specificate atributele
            {' '}
            <strong>width</strong>
            {' '}
            și
            {' '}
            <strong>height</strong>
            ,
            deci întreg conținutul se mută atunci când imaginea s-a încărcat complet.
          </p>
          <DemoPreview>
            <section>
              <h2> Turnul Eiffel</h2>
              <div style={{ display: 'flex' }}>
                <img
                  src={`${process.env.ENDPOINT}/demo/slow-image`}
                  style={{ marginRight: '1em', maxHeight: '250px' }}
                  alt="Eiffel tower during night"
                />
                <p>
                  Cel mai popular obiectiv turistic din Paris, capitala Franței.
                </p>
              </div>
            </section>
          </DemoPreview>
          <Highlight
            className="my-5"
            language="html"
            code={`
<section>
  <h2> Turnul Eiffel</h2>
  <div style="display: flex">
    <img 
      src="/api/demo/slow-image" 
      style="margin-right: 1em; max-height: 250px" 
      alt="Eiffel tower during night" />
    <p>
      Cel mai popular obiectiv turistic din Paris, capitala Franței.
    </p>
  </div>
</section>`}
          />
          <LessonTip>
            Am simulat o conexiune înceată prin întârzierea artificială a răspunsului de la server.
          </LessonTip>
        </Demo>
        <Footer />
      </>
    </>
  );
}
