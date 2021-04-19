import React from 'react';
import Head from 'next/head';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Highlight from '~/components/Highlight/Highlight';

export default function ButtonDisabled() {
  const title = 'Atributul disabled';

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
            <form className="login-container">
              <label htmlFor="email">Introdu adresa de email:</label>
              <input type="email" id="email" placeholder="Email" />
              <label htmlFor="password">Introdu parola:</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
              />
              <button type="submit" disabled>Loghează-te</button>
            </form>
          </DemoPreview>

          <Highlight
            className="my-5"
            language="html"
            code={`
<form className="login-container">
  <label htmlFor="email">Introdu adresa de email:</label>
  <input type="email" id="email" placeholder="Email" />
  <label htmlFor="password">Introdu parola:</label>
  <input type="password" id="password" placeholder="Password" />
  <button type="submit" disabled>Loghează-te</button>
</form>
`}
          />
        </Demo>
        <Footer />
      </>
    </>
  );
}
