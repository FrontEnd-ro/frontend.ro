import React from 'react';
import Head from 'next/head';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Highlight from '~/components/Highlight/Highlight';

export default function ImageInsideLink() {
  const title = 'O imagine în interiorul unui link';

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
            <article>
              <div>
                <img
                  src="/images/lessons/links-and-buttons/laptop.png"
                  width="1000"
                  height="420"
                  style={{ backgroundColor: '#ddd' }}
                  alt="Cover img"
                />
              </div>

              <div>
                <h1>10 HTML Elements You Didn&#39;t Know You Needed</h1>

                <div>
                  <a
                    href="#"
                    style={{
                      padding: '.3em', marginBottom: '1em', display: 'inline-block', borderRadius: '5px', textDecoration: 'none', backgroundColor: '#F53900', color: '#FFF',
                    }}
                  >
                    <span>#</span>
                    html
                  </a>
                </div>

                <div>
                  <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <span>
                      <img
                        style={{ borderRadius: '50%', border: '1px solid #fff' }}
                        src="https://res.cloudinary.com/practicaldev/image/fetch/s--aiingxgF--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/123155/cac9093b-f5a4-49e8-92c8-13c44121115a.jpg"
                        alt="emma pic"
                      />
                    </span>
                    Emma Bostian ✨
                  </a>

                  <p>
                    <time dateTime="2019-03-18T12:50:44Z">Mar 18, 2019</time>
                    <span>・4 min read</span>
                  </p>
                </div>
                <p>
                  I’ve heard the sentiment “HTML is easy” more times than I can
                  count. And while I would agree that HTML is perhaps easier to
                  learn than other programming languages, you shouldn’t take it
                  for granted.
                </p>
                <p>
                  HTML is a powerful markup language which can be used to give
                  our web applications structure and provide powerful
                  accessibility benefits, but only when used appropriately.
                </p>
              </div>
            </article>
          </DemoPreview>

          <Highlight
            className="my-5"
            language="html"
            code={`
<article>
  <div>
    <img
      src="/images/lessons/links-and-buttons/laptop.png"
      width="1000"
      height="420"
      style="background-color:#ddd"
      alt="Cover img"
    />
  </div>

  <div>
    <h1>10 HTML Elements You Didn&#39;t Know You Needed</h1>

    <div>
      <a
        href="#"
        style="
          padding:0.3em, margin-bottom: 1em, display: inline-block, border-radius: 5px, text-decoration: none, background-color: #F53900, color: #FFF,
        "
      >
        <span>#</span>
        html
      </a>
    </div>

    <div>
      <a href="https://dev.to/emmabostian" style="display: flex, align-items: center">
        <span>
          <img
            style="border-radius: 50%, border: 1px solid #fff"
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--aiingxgF--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/123155/cac9093b-f5a4-49e8-92c8-13c44121115a.jpg"
            alt="emma pic"
          />
        </span>
        Emma Bostian ✨
      </a>

      <p>
        <time dateTime="2019-03-18T12:50:44Z">Mar 18, 2019</time>
        <span>・4 min read</span>
      </p>
    </div>
    <p>
      I’ve heard the sentiment “HTML is easy” more times than I can
      count. And while I would agree that HTML is perhaps easier to
      learn than other programming languages, you shouldn’t take it
      for granted.
    </p>
    <p>
      HTML is a powerful markup language which can be used to give
      our web applications structure and provide powerful
      accessibility benefits, but only when used appropriately.
    </p>
  </div>
</article>
`}
          />
        </Demo>
        <Footer />
      </>
    </>
  );
}
