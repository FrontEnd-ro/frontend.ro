import React from 'react';
import { getLessonById } from '~/services/DataModel';
import {
  LessonTip,
  LessonCover,
  LessonFigure,
  LessonHeading,
  LessonQuote,
  LessonFirstSentence,
} from '~/components/lessons';
import Highlight from '~/components/Highlight/Highlight';
import FormattedText from '~/components/FormattedText';
import List from '~/components/List';

function HTMLValidationContent() {
  const lessonId = 'validare';
  const lessonInfo = getLessonById(lessonId);

  return (
    <>
      <LessonCover>
        <img
          width="2400"
          style={{ aspectRatio: '2400/1260' }}
          alt="Angry doodle to Valid HTML"
          src={`${process.env.CLOUDFRONT_PUBLIC}/public/seo/html-validation_2400w.jpg`}
        />
      </LessonCover>
      <LessonFirstSentence>
        Deși putem "scăpa" fără să scriem HTML valid, acest lucru nu e deloc încurajat.
        Hai să vedem de ce, și cum ne putem asigura că scriem cod corect.
      </LessonFirstSentence>
      <section>
        <LessonHeading as="h2" id={lessonInfo.chapters[0].id}>
          {lessonInfo.chapters[0].title}
        </LessonHeading>
        <p>
          Site-ul
          {' '}
          <a
            target="_blank"
            rel="noreferrer"
            className="text-bold"
            href="https://validator.w3.org/"
          >
            W3C Validator
          </a>
          {' '}
          este cea mai bună resursă pe care o știm pentru a valida
          paginile Web.
          Putem introduce URL-ul paginii pe care vrem să o validăm,
          sau direct codul HTML ce ne interesează.
        </p>
        <LessonFigure
          withBorder
          alt="Erori de validare"
          src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/html-validation/invalid-page.png`}
        />
        <LessonFigure
          withBorder
          alt="O pagină 100% validă"
          src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/html-validation/valid-page.png`}
        />

        <LessonTip>
          E posibil ca anumite pagini să nu aibă erori dar să aibă
          warning-uri (marcate cu galben). Nu-ți fă griji, ele sunt ok :)
        </LessonTip>
      </section>
      <section>
        <LessonHeading as="h2" id={lessonInfo.chapters[1].id}>
          {lessonInfo.chapters[1].title}
        </LessonHeading>
        <p>
          Spre deosebire de alte limbaje,
          chiar dacă nu scriem un HTML corect site-ul nostru va funcționa,
          poate chiar exact cum ne dorim. Motivul e următorul:
        </p>
        <LessonQuote variant="centered">
          Decât să arate o pagină goală, sau un mesaj
          de eroare, browserul încearcă el să rezolve problemele
          pentru a arăta ceva utilizatorilor.
        </LessonQuote>
        <p>
          Mai concret, să presupunem că avem următoarea bucată de cod
          unde nu am folosit corect tagul de închidere
          {' '}
          <FormattedText as="span">
            {'</h1>'}
          </FormattedText>
          {' '}
          :
        </p>
        <Highlight
          language="html"
          className="my-5"
          code={`
<h1> FrontEnd.ro </h2>
<p>
  Bine ai venit și spor la 
  învățat.
</p>`}
        />
        <p>
          Totuși, dacă deschidem browserul, vom vedea rezultatul pe care
          ni-l doream: titlul urmat de un paragraf de text.
          Browserul isi da seama de eroare si incearca sa o rezolve,
          inlocuind
          {' '}
          <FormattedText as="span">
            {'</h2>'}
          </FormattedText>
          {' '}
          cu
          {' '}
          <FormattedText as="span">
            {'</h1>'}
          </FormattedText>
          {' '}
          .
        </p>
        <p>
          Pentru a ne convinge de asta putem deschide panoul
          {' '}
          <span className="text-bold">Elements/Inspector</span>
          {' '}
          din DevTools:
        </p>
        <LessonFigure
          withBorder
          src="/images/lessons/html-validation/valid-elements-panel.png"
          alt="Browserul își dă seama de problemă și închide corect tagul <h1>"
        />
      </section>
      <section>
        <LessonHeading as="h2" id={lessonInfo.chapters[2].id}>
          {lessonInfo.chapters[2].title}
        </LessonHeading>
        <LessonQuote variant="centered">
          Pe scurt, un site valid este un site bine făcut!
        </LessonQuote>
        <List as="ol" variant="checkmark">
          <li>
            ajută la partea de
            <a
              rel="noreferrer"
              target="_blank"
              href="https://developers.google.com/search/docs/advanced/guidelines/webmaster-guidelines?visit_id=637616726211009973-2385660763&rd=1#help-visitors-use-your-pages"
            >
              SEO și accesibilitate
            </a>
          </li>
          <li>
            îmbunătățește performanța
          </li>
          <li>
            iar în final, nu lăsăm nimic la "ghici". Site-ul arată și
            se comportă exact cum vrem în toate browserele
          </li>
        </List>

      </section>
    </>
  );
}

export default HTMLValidationContent;
