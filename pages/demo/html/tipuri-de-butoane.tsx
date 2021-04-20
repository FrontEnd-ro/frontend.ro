/* eslint-disable react/button-has-type */
import React from 'react';
import Head from 'next/head';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Highlight from '~/components/Highlight/Highlight';

export default function ButtonsTypes() {
  const title = 'Tipuri de butoane';

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
          <DemoPreview>
            <form action="/" method="POST">
              <input type="text" name="name" id="name" style={{ padding: '0.7em', borderRadius: '5px' }} />

              {/* Dacă vrem să fie mai explicit...  */}
              <button
                type="submit"
                style={{
                  padding: '.5em',
                  border: 'none',
                  color: '#fff',
                  fontSize: '1.2em',
                  margin: '0 .5em',
                  borderRadius: '5px',
                  background: '#58af58',
                }}
              >
                Submit
              </button>
              {/*
 ...sau să resetăm inputurile la valoarea
  lor inițială (tinde să enerveze userii)  */}
              <button
                type="reset"
                style={{
                  padding: '.5em', border: 'none', color: '#fff', fontSize: '1.2em', margin: '0 .5em', borderRadius: '5px', background: '#77838b',
                }}
              >
                Reset
              </button>

              {/* Acesta împiedică ca acțiunea de submit să
  aibă loc,  ceea ce poate fi util uneori în cadrul
  unui form  */}
              <button
                type="button"
                style={{
                  padding: '.5em', border: 'none', color: '#fff', fontSize: '1.2em', margin: '0 .5em', borderRadius: '5px', background: '#2980b9',
                }}
              >
                Non-submitting button
              </button>
            </form>
          </DemoPreview>

          <Highlight
            className="my-5"
            language="html"
            code={`
<form action="/" method="POST">
  <input type="text" name="name" id="name" style="padding: 0.7em; border-radius: 5px; "/>

  <!-- Dacă vrem să fie mai explicit... -->
  <button type="submit" style="padding: .5em; border: none; color: #fff; font-size: 1.2em; border-radius: 5px; background: #58af58">Submit</button>

  <!-- ...sau să resetăm inputurile la valoarea
  lor inițială (tinde să enerveze userii) -->
  <button type="reset" style="padding: .5em; border: none; color: #fff; font-size: 1.2em; border-radius: 5px; background: #77838b">Reset</button>

  <!-- Acesta împiedică ca acțiunea de submit să 
  aibă loc,  ceea ce poate fi util uneori în cadrul 
  unui form -->
  <button type="button" style="padding: .5em; border: none; color: #fff; font-size: 1.2em; border-radius: 5px; background: #2980b9">Non-submitting button</button>
</form>
`}
          />
        </Demo>
        <Footer />
      </>
    </>
  );
}
