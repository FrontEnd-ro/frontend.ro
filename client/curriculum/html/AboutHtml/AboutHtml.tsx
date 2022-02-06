import React from 'react';
import Image from 'next/image';
import {
  LessonCover,
  LessonFigure,
  LessonHeading,
  LessonResources,
  LessonFirstSentence,
} from '~/components/lessons';
import { getLessonById } from '~/services/Constants';
import FormattedText from '~/components/FormattedText';
import Highlight from '~/components/Highlight/Highlight';
import CodePenEmbed from '~/components/CodePenEmbed/CodePenEmbed';
import List from '~/components/List';

import styles from './AboutHtml.module.scss';

export default function AboutHtmlContent() {
  const lessonInfo = getLessonById('despre-html');

  return (
    <>
      <LessonCover>
        <Image
          width="2400"
          height="1260"
          alt="Road-sign doodle with HTML, CSS and JS"
          src={`${process.env.CLOUDFRONT_PUBLIC}/seo/about-html_2400w.jpg`}
        />
      </LessonCover>
      <LessonFirstSentence>
        La baza oricărei aplicații web stau, de obicei, trei limbaje:
        {' '}
        <span className="border-bottom-1px">HTML</span>
        {', '}
        <span className="border-bottom-1px">CSS</span>
        {' și '}
        <span className="border-bottom-1px">Javascript</span>
        . Dacă vă întrebați de ce e nevoie de toate,
        ei bine fiecare are propriul scop bine definit.
      </LessonFirstSentence>
      <section>
        <LessonHeading as="h2" id={lessonInfo.chapters[0].id}>
          {lessonInfo.chapters[0].title}
        </LessonHeading>

        <div className="my-10">
          <img
            width="140"
            loading="lazy"
            className={`${styles['foundation-image']} float-right ml-10`}
            alt="House foundation doodle"
            src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/about-html/house-foundation.png`}
          />
          <p>
            Pentru o înțelegere mai bună, ne putem gândi la
            {' '}
            <span className="text-bold">construcția unei case</span>
            .
          </p>
          <img
            width="140"
            loading="lazy"
            className={`${styles['foundation-image']} d-none`}
            alt="House foundation doodle"
            src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/about-html/house-foundation.png`}
          />
          <p>
            Fundația, pereții și acoperișul fac parte din structura de bază a
            casei, fără de care nu putem ajunge la un rezultat final. Corespondentul
            acestei structuri în cazul unei aplicații web este
            {' '}
            <em>HTML</em>
            .
          </p>
          <p>
            Așa cum o casă începe cu fundația, construcția unei aplicații web începe
            cu partea de HTML.
          </p>
        </div>
        <div className="my-10">
          <img
            width="200"
            loading="lazy"
            className={`${styles['chair-lightbulb-window-image']} float-left my-5 mr-10`}
            alt="Chair, Lightbulb and window doodle"
            src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/about-html/chair-lightbulb-window.png`}
          />
          <p>
            După ce structura de bază este gata, urmeaza să definim culorile folosite,
            plasamentul geamurilor, a ușilor, becurilor, mobilei și al altor
            lucruri ce țin de design.
          </p>
          <img
            width="200"
            loading="lazy"
            className={`${styles['chair-lightbulb-window-image']} d-none my-5`}
            alt="Chair, Lightbulb and window doodle"
            src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/about-html/chair-lightbulb-window.png`}
          />
          <p>
            Pentru un programator FrontEnd, acesta este pasul
            în care se introduce
            {' '}
            <em>CSS</em>
            -ul.
          </p>
        </div>
        <div className="clear-both">
          <img
            width="100"
            loading="lazy"
            className="float-right ml-10"
            alt="Pulsating lightbulb"
            style={{ position: 'relative', bottom: '1em' }}
            src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/about-html/pulsating-lightbulb.gif`}
          />
          <p>
            La final, trebuie ca geamurile, ușile și becurile puse la pasul anterior să
            funcționeze corespunzător și să putem interacționa cu ele. Așa cum probabil
            ați ghicit, în cazul unei aplicații web, aceste operații îi revin
            {' '}
            <em>Javascript</em>
            -ului.
          </p>

        </div>
        <p>
          Noi ne vom concentra aici pe primul limbaj dintre cele trei enumerate
          mai sus, și anume HTML.
        </p>
      </section>
      <section>
        <LessonHeading as="h2" id={lessonInfo.chapters[1].id}>
          {lessonInfo.chapters[1].title}
        </LessonHeading>
        <p>
          <strong>HTML (Hyper Text Markup Language)</strong>
          {' '}
          este limbajul standard de markup folosit pentru a defini
          structura de bază a unei pagini web. Nu este un limbaj de
          programare propriu-zis, ci doar un limbaj descriptiv, bazat pe
          {' '}
          <em>XML</em>
          .
        </p>
        <p>
          Majoritatea persoanelor consideră că HTML este foarte usor și îl tratează
          destul de superficial. Chiar dacă HTML este, într-adevăr, mai ușor decât celelalte
          două limbaje, el trebuie învățat bine și corect. Dacă vei face asta, vei avea o
          fundație foarte bună peste care vei putea așeza cunoștințele de CSS și JS 💪.
        </p>
      </section>
      <section>
        <LessonHeading as="h2" id={lessonInfo.chapters[2].id}>
          {lessonInfo.chapters[2].title}
        </LessonHeading>
        <p>
          Orice fișier HTML este construit din elemente, numite și
          {' '}
          <strong>tags</strong>
          . Ele sunt formate din perechi de forma
          {' '}
          <FormattedText as="strong">
            {'<element> </element>'}
          </FormattedText>
          . Primul se numește
          {' '}
          <strong>tag de deschidere </strong>
          <em>(opening tag)</em>
          , iar al doilea
          {' '}
          <strong>tag de închidere </strong>
          <em>(closing tag)</em>
          .
        </p>
        <LessonFigure
          alt="Tag de deschidere și închidere"
          src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/about-html/opening-closing-tag.png`}
        />
        <p>
          În interiorul acestei perechi putem avea alte elemente sau
          conținut de tip text, precum în exemplul de mai jos:
        </p>
        <CodePenEmbed
          user="iampava"
          slug="GRmxmMj"
          theme="dark"
          defaultTab="html"
          className="my-5"
        />
        <p>
          Concret, elementul
          {' '}
          <FormattedText as="strong">
            {'<section>'}
          </FormattedText>
          {' '}
          are drept conținut alte două elemente (
          <FormattedText as="strong">
            {'<h1>'}
          </FormattedText>
          {' și '}
          <FormattedText as="strong">
            {'<p>'}
          </FormattedText>
          ), în timp ce aceste două elemente au în interior doar
          conținut de tip text.
        </p>
        <p>
          Există și elemente care nu au nevoie de conținut
          (de exemplu, elementul
          {' '}
          <FormattedText as="strong">
            input
          </FormattedText>
          sau
          <FormattedText as="strong">
            img
          </FormattedText>
          ). Acestea se numesc
          {' '}
          <strong>self-closing tags</strong>
          , iar modul de scriere este putin diferit, și anume
          {' '}
          <FormattedText as="strong">
            {'<element />'}
          </FormattedText>
          . În exemplul de mai jos
          putem vedea modul de folosire al unor taguri self-closing:
        </p>
        <CodePenEmbed
          user="iampava"
          slug="jOmzmYZ"
          theme="dark"
          defaultTab="html"
          className="my-5"
        />
        <p>
          Probabil te intrebi ce înseamnă
          {' '}
          <strong>type="text"</strong>
          {' si '}
          <strong>placeholder="Nume"</strong>
          . Ele se numesc
          {' '}
          <em className="text-bold">atribute</em>
          . Hai să vedem care este scopul acestora.
        </p>
      </section>
      <section>
        <LessonHeading as="h2" id={lessonInfo.chapters[3].id}>
          {lessonInfo.chapters[3].title}
        </LessonHeading>
        <p>
          Fiecare element poate avea o serie de atribute prin care noi putem fie
          să
          {' '}
          <em className="text-bold">
            controlam comportamentul acestuia
          </em>
          , fie să îl
          {' '}
          <em className="text-bold">
            identificăm ulterior
          </em>
          {' '}
          din CSS sau JS. Atributele sunt perechi de tip
          {' '}
          <FormattedText as="strong">
            cheie=“valoare”
          </FormattedText>
          {' '}
          care sunt scrise în interiorul unui opening tag.
        </p>
        <p>
          Revenind la analogia de la început, dacă ne gândim la un bec, atribute
          posibile ar putea fi tipul becului (LED sau incandescent), culoarea becului,
          intensitatea acestuia, mărimea, etc.
          În HTML, un element bec care este de
          {' '}
          <strong>tip LED</strong>
          , de
          {' '}
          <strong>culoare albastră</strong>
          , ar putea fi scris după cum urmeaza:
        </p>
        <LessonFigure
          alt="Atribute pentru un self-closing tag"
          src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/about-html/attributes.png`}
        />
      </section>
      <section>
        <LessonHeading as="h2" id={lessonInfo.chapters[4].id}>
          {lessonInfo.chapters[4].title}
        </LessonHeading>
        <p>
          Bineințeles că o aplicatie web nu contine doar unul sau două elemente.
          În majoritatea cazurilor, avem nevoie de zeci sau sute de elemente doar
          pentru o singură pagină. Aceste elemente sunt adăugate pe baza unor
          {' '}
          <strong>relații de rudenie</strong>
          .
        </p>
        <p>Exista trei tipuri de elemente, în funcție de aceste relații:</p>
        <List variant="bullets">
          <li>
            elemente de tip părinte -
            {' '}
            <strong>parent elements</strong>
          </li>
          <li>
            elemente de tip copil -
            {' '}
            <strong>child elements</strong>
          </li>
          <li>
            elemente de tip frate / sora -
            {' '}
            <strong>sibling elements</strong>
          </li>
        </List>
        <p>
          În exemplul de mai sus, titlul (
          <FormattedText as="strong">
            h1
          </FormattedText>
          ) și paragraful (
          <FormattedText as="strong">
            p
          </FormattedText>
          ) sunt siblings, pentru că se află pe acelasi nivel.
        </p>
        <p>
          Mai jos, se poate observa relația de tip
          {' '}
          <FormattedText as="strong">
            părinte-copil
          </FormattedText>
          , unde elementul
          {' '}
          <FormattedText as="strong">
            {'<div>'}
          </FormattedText>
          {' '}
          este părinte pentru elementul
          {' '}
          <FormattedText as="strong">
            {'<p>'}
          </FormattedText>
          .
        </p>
        <Highlight
          className="my-5"
          language="html"
          code={`
<div>
  <p>Acesta este un paragraf</p>
</div>
`}
        />
      </section>
      <div className="dots" />
      <section>
        <LessonHeading as="h2" id={lessonInfo.chapters[5].id}>
          {lessonInfo.chapters[5].title}
        </LessonHeading>
        <p>
          Ceea ce am prezentat mai sus este doar vârful iceberg-ului.
          În lecțiile următoare vei învăța care este structura de bază a unei
          aplicații web, cum să îți validezi HTML-ul scris, precum și informații
          mai detaliate despre cele mai importante elemente. Până atunci, îti vom lăsa mai jos
          o listă de resurse cu elemente și atribute de bază"
        </p>
        <LessonResources
          className="my-5"
          links={[
            {
              text: 'Lista completă de elemente HTML de pe MDN',
              url:
                  'https://developer.mozilla.org/en-US/docs/Web/HTML/Element',
            },
            {
              text: 'Lista completă de atribute posibile de pe MDN',
              url:
                  'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes',
            },
          ]}
        />
      </section>
    </>
  );
}
