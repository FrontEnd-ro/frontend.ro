import React from 'react';
import SEOTags from '~/components/SEOTags';
import Lesson, {
  LessonContributors,
  LessonCover,
  LessonHeading,
  LessonTip,
  LessonFigure,
  LessonResources,
  LessonFirstSentence,
} from '~/components/lessons';
import { getLessonById } from '~/services/Constants';
import Highlight from '~/components/Highlight/Highlight';
import SideBySidePictures from '~/components/SideBySidePictures';

import styles from './HTMLStructure.module.scss';
import FormattedText from '~/components/FormattedText';
import ResponsiveFlex from '~/components/ResponsiveFlex';

const chapters = [
  { title: 'Structura de bază', id: 'structura' },
  { title: 'Elementul <head>', id: 'head' },
  { title: 'Elementul <body>', id: 'body' },
  { title: 'Rezumat', id: 'rezumat' },
];

function HTMLStructure() {
  const lessonInfo = getLessonById('structura-pagina-html');

  return (
    <>
      <SEOTags
        title={`${lessonInfo.title} | Lecție HTML`}
        description={lessonInfo.description}
        url={`https://FrontEnd.ro${lessonInfo.url}`}
        shareImage={`${process.env.CLOUDFRONT_PUBLIC}/seo/html-structure_1200w.jpg`}
      >
        <link rel="preload" as="image" href={`${process.env.CLOUDFRONT_PUBLIC}/seo/html-structure_1200w.jpg`} />
      </SEOTags>
      <Lesson id={lessonInfo.id} title={lessonInfo.title} chapters={chapters} withExercises={false}>
        <LessonContributors className="absolute" contributors={lessonInfo.contributors} />
        <LessonCover>
          <img
            alt="Stickman reprezentând elementele Head și Body"
            src={`${process.env.CLOUDFRONT_PUBLIC}/seo/html-structure_2400w.jpg`}
          />
        </LessonCover>
        <LessonFirstSentence>
          Orice website, fie că este un site de prezentare sau un complex
          editor video, conține aceeași structură de bază cu mai
          multe elemente descriptive și nu numai.
        </LessonFirstSentence>
        <section>
          <LessonHeading as="h2" id="structura">
            Structura de bază
          </LessonHeading>
          <ResponsiveFlex breakpoint={1000}>
            <div>
              <p className="mb-4"> Fiecare pagină web este alcătuită din următoarele elemente principale: </p>
              <ol className="with--checkmark">
                <li className="mb-4">
                  <FormattedText as="strong">
                    {'<!DOCTYPE html>'}
                  </FormattedText>
                  {' '}
                  îi specifică browserului că acest document este de tipul HTML
                </li>
                <li className="mb-4">
                  <FormattedText as="strong">
                    {'<html>'}
                  </FormattedText>
                  {' '}
                  este elementul părinte al fiecărei pagini
                </li>
                <li className="mb-4">
                  <FormattedText as="strong">
                    {'<head>'}
                  </FormattedText>
                  {' '}
                  și
                  {' '}
                  <FormattedText as="strong">
                    {'<body>'}
                  </FormattedText>
                  {' '}
                  sunt descendenți ai elementului
                  {' '}
                  <FormattedText as="strong">
                    {'<html>'}
                  </FormattedText>
                  {' '}
                  și vor fi definiți o singură dată
                </li>
              </ol>
            </div>
            <Highlight
              language="html"
              className={styles['main-structure-wrapper']}
              code={`
<!DOCTYPE html>
<html> 
  <head>
    <!-- 
      ...
    -->
  </head>
  <body>
    <!-- 
      ...
    -->
  </body>
</html>`}
            />
          </ResponsiveFlex>
        </section>
        <section className="my-5">
          <LessonHeading as="h2" id="head">
            {'Elementul <head>'}
          </LessonHeading>
          <p>
            În
            {' '}
            <FormattedText as="strong">
              {'<head>'}
            </FormattedText>
            {' '}
            vom introduce elemente ce ne descriu website-ul, precum:
          </p>
          <ul className="with--bullets">
            <li>
              titlul paginii
            </li>
            <li>
              autorul
            </li>
            <li>
              descrierea
            </li>
          </ul>
          <Highlight
            className="my-5"
            language="html"
            code={`
<head>
  <title> FrontEnd.ro - Învață de la comunitatea open-source </title>

  <meta name="author" content="Alexandru Păvăloi">

  <meta 
    name="description"
    content="Vrei să înveți FrontEnd? Aici ai parte 
      de tutoriale gratuite și o comunitate de developeri care te vor ajuta să devii mai bun." 
  >
</head>
            `}
          />
          <p>
            <strong>Titlul va apărea în tabul browserului</strong>
            ,
            iar împreuna cu descrierea le vom vedea și în
            <strong>motoarele de căutare</strong>
            .
            Spre exemplu, uite cum arată site-ul nostru în urma unei căutări pe Google:
          </p>
          <LessonFigure
            withBorder
            alt="Titlul și descrierea vizible într-o căutare pe Google"
            src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/html-structure/frontend-ro-google-search.png`}
          />
          <p>
            Mai mult, via taguri
            {' '}
            <FormattedText as="strong">
              {'<meta>'}
            </FormattedText>
            {' '}
            putem controla cum apare site-ul când e distribuit pe rețele sociale precum Facebook,
            LinkedIn etc. Adică noi ca și programatori alegem ce imagine, titlu și descriere
            vor vedea utilizatorii acestor site-uri:
          </p>
          <SideBySidePictures
            img1={{
              alt: 'Share pe Facebook',
              src: `${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/html-structure/frontend-ro-facebook-share.png`,
            }}
            img2={{
              alt: 'Share pe LinkedIn',
              src: `${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/html-structure/frontend-ro-linkedin-share.png`,
            }}
          />
          <p>
            Ca să obținem rezultatul de mai sus, am folosit următoarele taguri în
            {' '}
            <FormattedText as="strong">
              {'<head>'}
            </FormattedText>
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<meta property="og:type" content="website" />
<meta property="og:url" content="https://FrontEnd.ro" />

<meta 
  property="og:title" 
  content="FrontEnd.ro - Învață de la comunitatea open-source" 
/>
<meta 
  property="og:description"
  content="Vrei să înveți FrontEnd? Aici ai parte 
    de tutoriale gratuite și o comunitate de developeri care te vor ajuta să devii mai bun." />

<meta property="og:image" content="https://frontend.ro/main-seo-image.jpg" />
<meta property="og:image:type" content="image/jpeg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />`}
          />
          <LessonTip>
            Valorile pentru
            {' '}
            <FormattedText as="strong">
              property=""
            </FormattedText>
            {' '}
            și
            {' '}
            <FormattedText as="strong">
              content=""
            </FormattedText>
            {' '}
            din codul de mai sus sunt specifice standardului
            {' '}
            <a href="https://ogp.me/">
              Open Graph
            </a>
            .
          </LessonTip>
          <p className="my-5">
            Dar asta nu e tot. În
            {' '}
            <FormattedText as="strong">
              {'<head>'}
            </FormattedText>
            {' '}
            vom adăuga și linkuri spre alte resurse folosite de site-ul nostru. De exemplu:
            foi de stiluri CSS, fișiere JavaScript etc.
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<link rel="stylesheet" href="/css/styles.css" />

<script src="/js/script.js"></script>
`}
          />
          <LessonTip>
            Nu uita că poți să vezi codul oricărui website prin
            {' '}
            <FormattedText as="span">
              Click Dreapta
              {' '}
              {'->'}
              {' '}
              View Page Source
            </FormattedText>
          </LessonTip>
        </section>
        <section className="my-5">
          <LessonHeading as="h2" id="body">
            {'Elementul <body>'}
          </LessonHeading>
          <p>
            De la sine prin denumirea lui, elementul body (trupul) este responsabil
            pentru
            {' '}
            <strong>conținutul care-l vedem și cu care interacționăm efectiv în website</strong>
            .
          </p>
          <p>
            Aici vom adăuga toate elementele de care are nevoie pagina noastră: texte,
            butoane, imagini, video-uri, liste, tabele, șamd.
            Practic, aproape toate elementele HTML pot fi adăugate aici,
            cu câteva excepții.
          </p>
          <Highlight
            language="html"
            className="my-5"
            code={`
<body>

  <header>
    <a href="https://FrontEnd.ro">
      FrontEnd.ro
    </a>
  </header>

  <main>
    <h1> Învață FrontEnd</h1>

    <ul>
      <li> HTML </li>
      <li> CSS </li>
      <li> JS </li>
    </ul>
  </main>

</body>`}
          />
          <LessonTip>
            Mai sus e un mic demo la elementul
            {'<body>'}
            ce conține un link, titlu si o lista ordonată.
          </LessonTip>
        </section>
        <section className="my-5">
          <LessonHeading as="h2" id="rezumat">
            Rezumat
          </LessonHeading>
          <p>
            În
            {' '}
            <FormattedText as="strong">
              {'<head>'}
            </FormattedText>
            {' '}
            adăugam două tipuri de elemente:
          </p>
          <ul className="with--bullets">
            <li>
              <strong>
                Elemente descriptive
              </strong>
              , care ne dau informații despre site/aplicație
              și sunt utile pentru SEO (search engine optimiation), inclusiv rețelele sociale
            </li>
            <li>
              <strong>
                Linkuri către resurse folosite de site-ul nostru
              </strong>
              precum: foi de stiluri
              CSS, fisiere JavaScript, imagini și fonturi pentu a îmbunătăți performanța, etc.
            </li>
          </ul>
          <p>
            În
            {' '}
            <FormattedText as="strong">
              {'<body>'}
            </FormattedText>
            {' '}
            adăugăm elementele ce fac parte efectiv din site-ul nostru,
            și cu care vor interacționa utilizatorii. Aproape toate elementele
            HTML (cu câteva excepții) vor fi adăugate aici.
          </p>
        </section>
        <LessonResources
          className="my-5"
          links={[{
            text: 'What\'s in head?',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML',
          }, {
            text: 'View Source',
            url: 'https://developer.mozilla.org/en-US/docs/Tools/View_source',
          }]}
        />
      </Lesson>
    </>
  );
}

export default HTMLStructure;
