import React from 'react';
import Image from 'next/image';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import {
  LessonCover,
  LessonHeading,
  LessonTip,
  LessonFigure,
  LessonResources,
  LessonFirstSentence,
} from '~/components/lessons';
import Highlight from '~/components/Highlight/Highlight';
import FormattedText from '~/components/FormattedText';
import { getLessonById } from '~/services/Constants';
import List from '~/components/List';

export default function ListsContent() {
  const lessonInfo = getLessonById('liste');

  return (
    <>
      <LessonCover>
        <Image
          width="2400"
          height="1260"
          alt="Doodle pentru un todo list"
          src={`${process.env.CLOUDFRONT_PUBLIC}/public/seo/lists_2400w.jpg`}
        />
      </LessonCover>
      <LessonFirstSentence>
        În dezvoltarea modernă a web-ului, listele sunt elemente HTML
        utilizate frecvent atât pentru navigație cât și pentru conținut
        general, contribuind la crearea unui document bine structurat,
        accesibil și ușor de întreținut.
      </LessonFirstSentence>
      <section>
        <LessonHeading as="h3" id={lessonInfo.chapters[0].id}>
          {lessonInfo.chapters[0].title}
        </LessonHeading>
        <p>Există două tipuri de liste des folosite în HTML:</p>
        <List variant="bullets">
          <li className="mb-4">
            <FormattedText as="strong">Liste neordonate</FormattedText>
            {' '}
            -
            utilizate pentru a grupa un set de elemente ce nu necesită o
            anumită ordine
          </li>
          <li>
            <FormattedText as="strong">Liste ordonate</FormattedText>
            {' '}
            - utilizate
            pentru a grupa un set de elemente ce au o ordine specifică
          </li>
        </List>
        <p>
          Fiecare tip de listă are un înțeles și un scop specific într-o
          pagină web. Să le luam pe rînd:
        </p>
      </section>
      <section>
        <LessonHeading as="h3" id={lessonInfo.chapters[1].id}>
          {lessonInfo.chapters[1].title}
        </LessonHeading>
        <p>
          Sunt utilizate cînd un set de elemente pot fi folosite în orice
          ordine, ca în lista de cumpărături de mai jos:
        </p>
        <Highlight
          className="my-5"
          language="html"
          code={`
<ul>
  <li> pâine </li>
  <li> cafea </li>
  <li> lapte </li>
  <li> unt </li>
</ul>
`}
        />
        <LessonFigure
          withBorder
          src="https://d3tycb976jpudc.cloudfront.net/demo-assets/liste-neordonate.png"
          alt="Listă neordonată"
          demo="/demo/html/liste-neordonate"
        />
        <LessonTip>
          Observă cum ne folosim de 2 tipuri de elemente pentru a defini o
          listă: în exterior avem
          {' '}
          <FormattedText as="strong">{'<ul>'}</FormattedText>
          {' '}
          (unordered list)
          pentru a defini lista, iar apoi fiecare element în propriul tag
          {' '}
          <FormattedText as="strong">{'<li>'}</FormattedText>
          {' '}
          (list item) .
        </LessonTip>
        <p>
          Cu o stilizare potrivită, listele neordonate sunt folosite la
          {' '}
          <strong>
            realizarea meniurilor paginilor web
          </strong>
          .
          {' '}
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
          {' '}
          e un exemplu bun, ei folosind liste neordonate pentru meniul de
          navigare:
        </p>
        <LessonFigure
          withBorder
          src="https://d3tycb976jpudc.cloudfront.net/demo-assets/github_unordered-list.jpeg"
          alt="GitHub folosește o listă neordonată în meniul de navigație"
        />
        <LessonTip>
          Deși nu am ajuns încă la partea de CSS, e bine să știm că listele
          neordonate au ca și stil implicit niște buline. Putem să le
          personalizăm folosind propria noastră imagine sau putem renunța la
          ele cu totul. Vom discuta mai multe în cadrul capitolului de
          stilizare.
        </LessonTip>
      </section>
      <section>
        <LessonHeading as="h3" id={lessonInfo.chapters[2].id}>
          {lessonInfo.chapters[2].title}
        </LessonHeading>
        <p>
          Listele ordonate afișează elementele enumerate într-o ordine
          specifică, fie că este vorba de enumerări cu cifre arabe, cifre
          romane sau litere. Un exemplu potrivit ar fi instrucțiunile pentru a
          găti o prăjitură:
        </p>
        <Highlight
          className="my-5"
          language="html"
          code={`
<ol>
  <li> Cumpără ingredientele necesare </li>
  <li> Amestecă ingredientele </li>
  <li> Pune amestecul într-un vas de gătit </li>
  <li> Coace în cuptor prăjitura timp de o oră </li>
  <li> Scoate prăjitura din cuptor </li>
</ol>     
`}
        />
        <p>
          Acestea au o structura similară cu cele neordonate, singura
          diferență fiind tag-ul:
          {' '}
          <FormattedText as="strong">{'<ol>'}</FormattedText>
          {' '}
          (ordered list). E
          evident că dacă vom schimba ordinea elementelor din cadrul listei,
          aceasta nu va mai avea nici un sens.
        </p>
        <LessonFigure
          withBorder
          src="https://d3tycb976jpudc.cloudfront.net/demo-assets/liste-ordonate.png"
          alt="Listă ordonată"
          demo="/demo/html/liste-ordonate"
        />
      </section>
      <section>
        <LessonHeading as="h3" id={lessonInfo.chapters[3].id}>
          {lessonInfo.chapters[3].title}
        </LessonHeading>
        <p>
          Dacă vrem ca enumerarea elementelor din listă să se facă cu un
          anumit tip de cifră sau cu litere, ne putem folosi de atributul
          {' '}
          <FormattedText as="strong"> type</FormattedText>
          . Acesta acceptă ca
          valori:
        </p>
        <List variant="bullets">
          <li className="mb-4">
            {' '}
            <FormattedText as="strong">1</FormattedText>
            {' '}
            – pentru enumerare cu
            {' '}
            cifre arabe;
          </li>
          <li className="mb-4">
            {' '}
            <FormattedText as="strong">i</FormattedText>
            {' '}
            sau
            {' '}
            <FormattedText as="strong">I</FormattedText>
            {' '}
            – pentru enumerare cu
            cifre romane mici, respectiv mari
          </li>
          <li className="mb-4">
            {' '}
            <FormattedText as="strong">a</FormattedText>
            {' '}
            sau
            {' '}
            <FormattedText as="strong">A</FormattedText>
            {' '}
            – pentru enumerare cu
            litere mici, respectiv mari.
          </li>
        </List>
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
        <LessonFigure
          withBorder
          src="https://d3tycb976jpudc.cloudfront.net/demo-assets/atributul-type-pentru-liste-ordonate.png"
          alt="Atributul 'type' pentru liste ordonate"
          demo="/demo/html/atributul-type-pentru-liste-ordonate"
        />
        <p>
          Dacă vrem ca lista să înceapă enumerarea de la cifra/litera cea mai
          avansată și să se termine cu prima, vom folosi atributul
          {' '}
          <FormattedText as="strong">reversed</FormattedText>
          {' '}
          .
        </p>
        <LessonFigure
          withBorder
          src="https://d3tycb976jpudc.cloudfront.net/demo-assets/atributul-reversed-pentru-liste-ordonate.png"
          alt="Atributul 'reversed' pentru liste ordonate"
          demo="/demo/html/atributul-reversed-pentru-liste-ordonate"
        />
        <p>
          Putem opta chiar să enumerăm elementele unei liste ordonate începând
          de la un anumit număr/literă. Pentru asta ne vom folosi de atributul
          {' '}
          <FormattedText as="strong">start</FormattedText>
          {' '}
          dând ca valoare numărul
          sau litera de la care vrem sa începem numărătoarea:
        </p>
        <LessonFigure
          withBorder
          src="https://d3tycb976jpudc.cloudfront.net/demo-assets/atributul-start-pentru-liste-ordonate.png"
          alt="Atributul 'start' pentru liste ordonate"
          demo="/demo/html/atributul-start-pentru-liste-ordonate"
        />
      </section>
      <section>
        <LessonHeading as="h3" id={lessonInfo.chapters[4].id}>
          {lessonInfo.chapters[4].title}
        </LessonHeading>
        <p>
          O listă poate conține o altă listă. Acest lucru este foarte util
          dacă vrem să reprezentăm un meniu de navigare pe mai multe nivele:
        </p>
        <Highlight
          className="my-5"
          language="html"
          code={`
<ol>
  <li> 
    FrontEnd
    <ol>
      <li> HTML </li>
      <li> CSS </li>
      <li> JavaScript </li>
    </ol>
  </li>
  <li> Back-end </li>
  <li> Mobile development </li>
</ol>
`}
        />
        <LessonFigure
          withBorder
          src="https://d3tycb976jpudc.cloudfront.net/demo-assets/sub-liste.png"
          alt="Sub-liste"
          demo="/demo/html/sub-liste"
        />
        <p>
          În exemplul de mai sus am inclus o listă ordonată în cadrul
          unei liste neordonate, dar putem foarte bine să includem orice tip
          de listă în oricare altul. Ce e important să reținem este că nivelul
          de nesting să nu fie mai mare de 3 căci lucrurile pot deveni
          confuze.
        </p>
      </section>
      <section>
        <LessonHeading as="h3" id={lessonInfo.chapters[5].id}>
          {lessonInfo.chapters[5].title}
        </LessonHeading>
        <p>
          Există și un al treilea tip de listă pe care-l vei întâlni mai rar
          dar e totuși bine să-l știi:
          {' '}
          <FormattedText as="strong">{'<dl>'}</FormattedText>
          {' '}
          (description list).
          Îl vom folosi când definim termeni sau asociem perechi de valori, ca
          în exemplul de mai jos:
        </p>
        <Highlight
          language="html"
          code={`
<dl>
  <dt> HTML </dt>
  <dd> Hyper Text Markup Language </dd>

  <dt> CSS </dt>
  <dd> Cascading Style Sheets </dd>
</dl>`}
        />

        <LessonFigure
          withBorder
          src="https://d3tycb976jpudc.cloudfront.net/demo-assets/liste-de-descrieri.png"
          alt="Liste de descrieri"
          demo="/demo/html/liste-de-descrieri"
        />

        <div className="dots" />

        <p>
          Pentru a alege ce tip de listă să folosim ne putem adresa două
          întrebări:
        </p>
        <dl>
          <dt className="text-bold">
            Definesc termeni sau asociez alte perechi nume/valoare?
          </dt>
          <dd className="mb-4">
            {' '}
            Dacă da, vom folosi o listă de descrieri.
            {' '}
          </dd>

          <dt className="text-bold">
            Este importantă ordinea elementelor din listă?
          </dt>
          <dd>
            {' '}
            Dacă da, folosim o listă ordonată, altfel vom folosi o listă
            neordonată.
            {' '}
          </dd>
        </dl>
        <LessonTip icon={faThumbsUp}>
          Iar pe final, nu uita că elementele
          {' '}
          <strong>{'<ul>'}</strong>
          ,
          <strong>{'<ol>'}</strong>
          {' '}
          și
          {' '}
          <strong>{'<dl>'}</strong>
          {' '}
          ajută atât în cazul
          screen-readere-lor cât și pe ceilalți developeri care vor înțelege
          mai ușor codul tău. Hai să le folosim când e vorba de liste.
        </LessonTip>
      </section>
      <div className="dots" />
      <LessonResources
        className="my-5"
        links={[
          {
            text: 'Documentația completă a <ul> pe MDN',
            url:
                'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul',
          },
          {
            text: 'Documentația completă a <ol> pe MDN',
            url:
                'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol',
          },
          {
            text: 'Documentația completă a <dl> pe MDN',
            url:
                'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl',
          },
        ]}
      />
    </>
  );
}
