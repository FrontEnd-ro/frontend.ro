import React from 'react';
import { getLessonById } from '~/services/DataModel';
import {
  LessonQuote,
  LessonCover,
  LessonFigure,
  LessonHeading,
  LessonFirstSentence,
} from '~/components/lessons';
import SideBySidePictures from '~/components/SideBySidePictures';
import FormattedText from '~/components/FormattedText';
import Highlight from '~/components/Highlight/Highlight';
import CodePenEmbed from '~/components/CodePenEmbed/CodePenEmbed';
import List from '~/components/List';

function ContainersContent() {
  const lessonInfo = getLessonById('containere');
  const coverImage = `${process.env.CLOUDFRONT_PUBLIC}/public/seo/containers_2400w.jpg`;

  return (
    <>
      <LessonCover>
        <img width="2400" style={{ aspectRatio: '2400/1260' }} alt="Doodle cu o cutie" src={coverImage} />
      </LessonCover>
      <LessonFirstSentence>
        Am parcurs câteva elemente de bază, dar nu am vorbit despre cum le organizăm pentru
        a crea layout-uri mai complexe. Aici intervin elementele de tip “container”.
      </LessonFirstSentence>
      <section>
        <LessonHeading as="h2" id={lessonInfo.chapters[0].id}>
          {lessonInfo.chapters[0].title}
        </LessonHeading>
        <p>
          Fiecare pagina Web are un layout specific - adică o structură
          generală după care elementele sunt aranjate. Spre exemplu,
          pagina
          {' '}
          <a href="https://developer.mozilla.org"> Mozilla Developer Network</a>
          {' '}
          de mai jos are 4 mari secțiuni:
        </p>
        <LessonFigure
          withBorder
          width={400}
          alt="MDN Layout"
          src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/containers/MDN-layout.png`}
        />
        <p>
          Pagina
          {' '}
          <a href="https://codepen.io/pen/" target="_blank" rel="noreferrer">
            https://codepen.io/pen/
          </a>
          {' '}
          pe de altă parte e organizată diferit, în 3 secțiuni principale:
        </p>
        <LessonFigure
          withBorder
          alt="CodePen Layout"
          src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/containers/CodePen-layout.png`}
        />
        <p>
          Aceste dreptunghiuri pe care noi le-am numerotat sunt
          {' '}
          <em className="text-bold">
            elementele de tip container
          </em>
          . Ele nu au o funcționalitate și nici stiluri specifice,
          ci sunt folosite ca să grupeze alte elemente, ușurând astfel crearea layout-ului.
          Deseori, numele lor ne va da un indiciu despre situațiile în care trebuie să le folosim.
          Mai jos le vom rezuma pe
          {' '}
          <span className="text-bold"> cele mai des folosite </span>
          {' '}
          de noi:
        </p>
      </section>
      <section>
        <LessonHeading as="h2" id={lessonInfo.chapters[1].id}>
          {lessonInfo.chapters[1].title}
        </LessonHeading>
        <p> Așa cum sugerează și numele lor: </p>
        <div className="float-right">
          <Highlight
            language="html"
            code={`
<body>
  <header> ... </header>
  <main> 
    ... 
  </main>
  <footer> ... </footer>
</body>`}
          />
        </div>
        <List as="ol" variant="checkmark" className="mr-2 ml-0">
          <li className="mb-4">
            Elementul
            {' '}
            <FormattedText as="strong">
              {'<header>'}
            </FormattedText>
            {' '}
            grupează elemente aflate în antetul paginii (deseori în partea de sus).
            Des întâlnite aici sunt logo-ul, meniul de navigație, etc…
          </li>
          <li className="mb-4">
            Elementul
            {' '}
            <FormattedText as="strong">
              {'<main>'}
            </FormattedText>
            {' '}
            este locul unde vom adăuga elementele ce reprezintă “esența” paginii noastre.
            Cu alte cuvinte, cea mai importantă parte din pagină trebuie să se afle în
            aceste element
          </li>
          <li>
            Elementul
            {' '}
            <FormattedText as="strong">
              {'<footer>'}
            </FormattedText>
            {' '}
            grupează elementele aflate în “subsol”-ul paginii.
            De obicei vom găsi aici logo-ul cât și alte link-uri de navigație
            pentru pagini mai puțin importante din site-ul nostrue
          </li>
        </List>
        <p>
          Cam orice pagina web are aceste 3 elemente (lăsăm mai jos 2 exemple).
        </p>
        <SideBySidePictures
          direction="column"
          img1={{
            alt: 'MDN Header, Main & Footer',
            src: `${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/containers/MDN-layout-with-elements.png`,
          }}
          img2={{
            alt: 'Instagram Main & Footer',
            src: `${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/containers/Instagram-layout.png`,
          }}
        />
      </section>
      <section>
        <LessonHeading as="h2" id={lessonInfo.chapters[2].id}>
          {lessonInfo.chapters[2].title}
        </LessonHeading>
        <p>
          Așa cum îi spune și numele, aici vom grupa elemente de navigație către
          alte pagini din site-ul nostru. Spre exemplu, meniul lateral de navigație din
          această pagină se află într-un
          {' '}
          <FormattedText as="strong">
            {'<nav>'}
          </FormattedText>
          :
        </p>
        <CodePenEmbed
          user="iampava"
          slug="NWjMBbY"
          theme="dark"
          defaultTab="html"
          className="my-5"
        />
      </section>
      <section>
        <LessonHeading as="h2" id={lessonInfo.chapters[3].id}>
          {lessonInfo.chapters[3].title}
        </LessonHeading>
        <p>
          Este folosit pentru a marca un articol - cel mai des în
          bloguri sau site-uri de știri. Spre exemplu
          {' '}
          <a href="https://css-tricks.com" target="_blank" rel="noreferrer"> CSS Tricks</a>
          {' '}
          are pe prima pagină 29 elemente de tip
          {' '}
          <FormattedText as="strong">
            {'<article>'}
          </FormattedText>
          .
        </p>
        <LessonFigure
          withBorder
          alt="Elementul <article> in site-ul CSS Tricks"
          src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/containers/article-screenshot.png`}
        />
      </section>
      <section>
        <LessonHeading as="h2" id={lessonInfo.chapters[4].id}>
          {lessonInfo.chapters[4].title}
        </LessonHeading>
        <p>
          Elementul
          {' '}
          <FormattedText as="strong">
            {'<section>'}
          </FormattedText>
          {' '}
          îl vom folosi pentru secțiuni generice dintr-un document/articol, fiecare cu
          titlul (heading) propriu.
        </p>
        <p>
          În această pagină de exemplu, fiecare sub-capitol se află într-o secțiune proprie:
        </p>
        <Highlight
          language="html"
          className="my-5"
          code={`
<article>
  <section>
    <h2> De ce e important ce container folosim? </h2>
    <p>
      ...
    </p>
  </section>
  <section>
    <h2> Exerciții </h2>
    <p>
      ...
    </p>
  </section>
</article>`}
        />
      </section>
      <section>
        <LessonHeading as="h2" id={lessonInfo.chapters[5].id}>
          {lessonInfo.chapters[5].title}
        </LessonHeading>
        <p>
          Și am ajuns în sfârșit și la
          {' '}
          <FormattedText as="strong">
            {'<div>'}
          </FormattedText>
          {' '}
          , cel mai popular element de tip container iar din păcate,
          de multe ori folosit incorect.
        </p>
        <p>
          Elementul
          {' '}
          <FormattedText as="strong">
            {'<div>'}
          </FormattedText>
          {' '}
          este un container generic, fără vreo însemnătate specială.
          Dacă
          {' '}
          {' '}
          <FormattedText>
            {'<nav>'}
          </FormattedText>
          {' '}
          ne sugerează elemente de navigație, sau
          {' '}
          <FormattedText>
            {'<main>'}
          </FormattedText>
          {' '}
          specifică că acolo e cea mai importantă
          parte a paginii,
          {' '}
          <FormattedText>
            {'<div>'}
          </FormattedText>
          {' '}
          nu reprezinta nimic deci ar trebui folosit doar cand
          {' '}
          <span className="text-bold">
            nici unul din celelalte elemente de tip container nu are sens
          </span>
          . Spre exemplu,
          în galeria de imagini de pe Unsplash elementul
          {' '}
          <FormattedText>
            {'<div>'}
          </FormattedText>
          {' '}
          e perfect ca și container pentru aceste elemente căci nu au vreo
          însemnătate specială, având nevoie de un container doar ca să
          le poziționăm în colțurile imaginii.
        </p>
        <LessonFigure
          withBorder
          alt="Exemplu de bună folosire a elementului <div>"
          src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/containers/correct-div-usage.png`}
        />
      </section>
      <section>
        <LessonHeading as="h2" id={lessonInfo.chapters[6].id}>
          {lessonInfo.chapters[6].title}
        </LessonHeading>
        <p>
          La prima vedere ai putea crede că nu prea contează ce containere folosim.
          Nu au stilizări proprii și nici funcționalități specifice,
          deci cele doua snippet-uri de mai jos sunt identice din punct de vedere
          vizual și funcțional.
        </p>
        <div className="d-flex justify-content-between flex-wrap">
          <div className="max-w-full mr-16 my-5">
            <Highlight
              language="html"
              code={`
<body>
  <nav>
    <a href="/"> Home </a>
  </nav>
  <main>
    <p> Is there any difference? </p>
  </main>
</body>`}
            />
          </div>
          <div className="max-w-full my-5">
            <Highlight
              language="html"
              code={`
<body>
  <div>
    <a href="/"> Home </a>
  </div>
  <div>
    <p> Is there any difference? </p>
  </div>
</body>`}
            />
          </div>
        </div>
        <p>
          Totuși, problema devine evidentă atunci când încercăm să citim și
          să înțelegem cod ce nu folosește corect containerele.
          Spre exemplu, ce indicii despre layout și continut
          îți oferă codul de mai jos?
        </p>
        <Highlight
          className="my-5"
          language="html"
          code={`
<body>
  <div>
    <img src="logo" alt="logo">
    <div>
      <a href="/home"> Home </a>
      <a href="/profile"> Profile </a>
    </div>
  </div>
  <div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div>
    <p> Copyright 2021 </p>
  </div>
</body>`}
        />
        <p>
          Hmm, din păcate codul de mai sus care folosește doar div-uri nu e foarte
          explicit. Ar trebui să pornim aplicația în browser ca să ne dăm
          seama de mai multe detalii.
        </p>
        <LessonQuote>
          Dar,  dacă am încerca să folosim și alte containere?
        </LessonQuote>
        <Highlight
          className="my-5"
          language="html"
          code={`
<body>
  <header>
    <img src="logo" alt="logo">
    <nav>
      <a href="/home"> Home </a>
      <a href="/profile"> Profile </a>
    </nav>
  </header>
  <main>
    <article></article>
    <article></article>
    <article></article>
    <article></article>
  </main>
  <footer>
    <p> Copyright 2021 </p>
  </footer>
</body>`}
        />
        <p>
          Deja lucrurile sunt mult mai clare 💪!
          Ne dăm ușor seama că avem
          un container în partea de sus (header) cu logo-ul și câteva linkuri
          de navigare, apoi partea principală a paginii
          ce conține o serie de articole, iar jos un footer cu informații de
          copyright.
        </p>
        <LessonQuote variant="centered">
          Iar aici e esența folosirii corecte a containerelor. Nu pentru
          utilizatorii site-ului ci pentru colegii tăi developeri sau
          pentru tine din viitor, care vei citi codul și vei înțelege
          imediat despre ce e vorba!
        </LessonQuote>
      </section>
    </>
  );
}

export default ContainersContent;
