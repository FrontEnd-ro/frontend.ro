import React from 'react';
import Head from 'next/head';

import Demo, { DemoPreview } from '~/components/demo';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Highlight from '~/components/Highlight/Highlight';

export default function JumpLinks() {
  const title = 'Link-uri care duc către o secțiune ale aceleiași pagini (jump links)';

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
              <div style={{
                scrollBehavior: 'smooth',
              }}>
                <section>
                  <a href="#o-simpla-sectiune">O simplă secțiune</a>
                  <h3 id="o-simpla-sectiune">O simplă secțiune</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda, autem eaque eius, voluptas veniam nihil fuga nisi
                    illo perspiciatis totam sunt sed minima fugiat iure maxime
                    animi itaque sequi? Autem.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta error eum quo magnam rem excepturi ea voluptatem quos
                    quam commodi, quaerat placeat quibusdam aperiam iusto nulla
                    modi, provident atque aliquam!
                  </p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Deleniti illum blanditiis excepturi soluta earum? Aliquam
                    consequatur dicta aliquid quae optio consequuntur, officiis
                    deleniti provident veritatis? Ullam earum quis veritatis
                    fugit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error architecto quae dolorem dolorum, at omnis voluptate
                    explicabo consectetur tempore eius ex expedita
                    exercitationem officiis id qui magni natus totam labore?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus, praesentium, molestiae error tempora ullam
                    deleniti cumque dignissimos fuga voluptate mollitia facere.
                    Quia quibusdam enim id amet quis. Facilis, reprehenderit
                    dolore.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero accusantium sed est, odio reprehenderit libero in id
                    soluta ipsam, adipisci eos nam dolorem excepturi possimus
                    veritatis velit quo nulla distinctio.
                  </p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                    tempore maxime minus doloribus, cumque libero nam in nemo
                    distinctio alias numquam consequuntur at! Voluptas corporis
                    pariatur esse, labore vitae officiis?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis quia, doloribus autem reprehenderit quidem
                    assumenda optio impedit at repellat eveniet iure animi
                    nesciunt illo temporibus labore, atque incidunt maiores id?
                  </p>
                </section>
                <section>
                  <a href="#o-alta-sectiune">O altă secțiune</a>
                  <h3 id="o-alta-sectiune">Altă secțiune din pagină</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quaerat omnis earum quidem veritatis accusamus ipsa, facere
                    dicta deserunt possimus ipsam vel esse reprehenderit
                    cupiditate magnam facilis, ullam repudiandae odio non?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim perferendis consequuntur esse molestias aliquid cum
                    porro dolores earum commodi, quaerat possimus doloremque!
                    Cupiditate reprehenderit officia fugiat quae ex temporibus
                    repellat.
                  </p>
                </section>
              </div>
          </DemoPreview>
          <Highlight
            className="my-5"
            language="html"
            code={`
  <html
  lang="en"
  style={{
    scrollBehavior: "smooth",
  }}
>
  <head>
    <title>Smooth scrolling</title>
  </head>
  <body>
    <section>
      <a href="#o-simpla-sectiune">O simplă secțiune</a>
      <h3 id="o-simpla-sectiune">O simplă secțiune</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Assumenda, autem eaque eius, voluptas veniam nihil fuga nisi
        illo perspiciatis totam sunt sed minima fugiat iure maxime
        animi itaque sequi? Autem.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Soluta error eum quo magnam rem excepturi ea voluptatem quos
        quam commodi, quaerat placeat quibusdam aperiam iusto nulla
        modi, provident atque aliquam!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Deleniti illum blanditiis excepturi soluta earum? Aliquam
        consequatur dicta aliquid quae optio consequuntur, officiis
        deleniti provident veritatis? Ullam earum quis veritatis
        fugit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Error architecto quae dolorem dolorum, at omnis voluptate
        explicabo consectetur tempore eius ex expedita
        exercitationem officiis id qui magni natus totam labore?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Accusamus, praesentium, molestiae error tempora ullam
        deleniti cumque dignissimos fuga voluptate mollitia facere.
        Quia quibusdam enim id amet quis. Facilis, reprehenderit
        dolore.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Vero accusantium sed est, odio reprehenderit libero in id
        soluta ipsam, adipisci eos nam dolorem excepturi possimus
        veritatis velit quo nulla distinctio.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
        tempore maxime minus doloribus, cumque libero nam in nemo
        distinctio alias numquam consequuntur at! Voluptas corporis
        pariatur esse, labore vitae officiis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Officiis quia, doloribus autem reprehenderit quidem
        assumenda optio impedit at repellat eveniet iure animi
        nesciunt illo temporibus labore, atque incidunt maiores id?
      </p>
    </section>
    <section>
      <a href="#o-alta-sectiune">O altă secțiune</a>
      <h3 id="o-alta-sectiune">Altă secțiune din pagină</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Quaerat omnis earum quidem veritatis accusamus ipsa, facere
        dicta deserunt possimus ipsam vel esse reprehenderit
        cupiditate magnam facilis, ullam repudiandae odio non?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Enim perferendis consequuntur esse molestias aliquid cum
        porro dolores earum commodi, quaerat possimus doloremque!
        Cupiditate reprehenderit officia fugiat quae ex temporibus
        repellat.
      </p>
    </section>
  </body>
</html>`}
          />
        </Demo>
        <Footer />
      </>
    </>
  );
}
