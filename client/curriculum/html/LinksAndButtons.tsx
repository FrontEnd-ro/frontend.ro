import React from 'react';
import {
  faQuestionCircle,
  faThumbsDown,
} from '@fortawesome/free-regular-svg-icons';
import SEOTags from '~/components/SEOTags';
import Lesson, {
  LessonContributors,
  LessonCover,
  LessonFigure,
  LessonHeading,
  LessonResources,
  LessonTip,
  LessonQuote,
  LessonFirstSentence,
} from '~/components/lessons';
import Highlight from '~/components/Highlight/Highlight';
import BasicEditorLazy from '~/components/Editor/BasicEditor/BasicEditor.lazy';
import FormattedText from '~/components/FormattedText';
import { getLessonById } from '~/services/Constants';
import List from '~/components/List';

const chapters = [
  { title: '<a> element', id: 'a-element' },
  {
    title: 'Exemple unde folosim tag-ul a',
    id: 'exemple-unde-folosim-tagul-a',
  },
  {
    title: 'Link-uri către email-uri',
    id: 'emails',
  },
  {
    title: 'Link-uri către numere de telefon',
    id: 'tel',
  },
  {
    title: 'Link-uri de download',
    id: 'download',
  },
  {
    title: 'Atributul target=”_blank”',
    id: 'atributul-target-blank',
  },
  { title: 'Întrebări BONUS', id: 'intrebari-bonus' },
  { title: '<button> element', id: 'button-element' },
  { title: 'Atributul type', id: 'atributul-type' },
  { title: 'Atributul disabled', id: 'atributul-disabled' },
  { title: 'Link-uri vs butoane', id: 'linkuri-vs-butoane' },
];

export default function LinksAndButtonsLesson() {
  const lessonInfo = getLessonById('linkuri-si-butoane');

  return (
    <>
      <SEOTags
        title={`${lessonInfo.title} | Lecție HTML`}
        description={lessonInfo.description}
        url={`https://FrontEnd.ro${lessonInfo.url}`}
        shareImage={`${process.env.CLOUDFRONT_PUBLIC}/seo/links-and-buttons_1200w.jpg`}
      />
      <Lesson
        id={lessonInfo.id}
        title={lessonInfo.title}
        chapters={chapters}
        withExercises
      >
        <LessonContributors className="absolute" contributors={lessonInfo.contributors} />
        <LessonCover>
          <img
            alt="Doodle reprezentând un buton și mai multe linkuri"
            src={`${process.env.CLOUDFRONT_PUBLIC}/seo/links-and-buttons_2400w.jpg`}
          />
        </LessonCover>
        <LessonFirstSentence>
          Deși la prima vedere pare un subiect simplu, sunt totuși multe de
          știut despre link-uri și butoane în HTML. În acest articol vom discuta
          despre markup, atribute și cele mai bune practici. Totodată, vom trata
          împreună cele două concepte pentru că de multe ori se folosesc
          link-uri în loc de butoane și invers.
        </LessonFirstSentence>
        <section>
          <LessonHeading as="h2" id="a-element">
            {'<a> element'}
          </LessonHeading>
          <p>
            Elementul
            {' '}
            <FormattedText as="strong">{'<a>'}</FormattedText>
            {' '}
            denumit și
            {' '}
            <i>ancoră</i>
            {' '}
            sau
            {' '}
            <i>link</i>
            {' '}
            este unul din cele mai uzuale elemente folosite pentru
            construirea paginilor web. Dacă vrem să ne mutam la o altă pagină
            sau la o altă zonă în cadrul aceleiași pagini, atunci vom folosi
            acest element. Pentru a specifica destinația link-ului vom folosi
            atributul
            {' '}
            <FormattedText as="strong">href</FormattedText>
            {' '}
            .
          </p>
        </section>
        <section>
          <LessonHeading as="h2" id="exemple-unde-folosim-tagul-a">
            Exemple unde folosim tag-ul a
          </LessonHeading>
          <LessonHeading as="h3" id="cele-mai-uzuale">
            Cele mai uzuale
          </LessonHeading>
          <Highlight
            className="my-5"
            language="html"
            code={`
<a href="https://frontend.ro/"> Frontend.ro </a>`}
          />
          <p>
            În cazul acesta, spunem că este un
            {' '}
            <strong>link către un URL absolut</strong>
            {' '}
            - adică un URL care
            conține întreaga adresă a unei pagini. Acest tip de URL este deseori
            întâlnit atunci când un website face legătura către un alt website.
          </p>
          <p>
            Putem avea și
            {' '}
            <strong>URL-uri relative</strong>
            ,
            a căror destinție finală se calculează în funcție de
            pagina pe cară ne aflăm. În exemplul de mai jos avem același
            link atât în
            {' '}
            <FormattedText as="strong">
              about.html
            </FormattedText>
            {' '}
            cât și în
            {' '}
            <FormattedText as="strong">
              home.html
            </FormattedText>
            :
          </p>
          <Highlight
            language="html"
            code={`
<a href="info.html"> Go to info page </a>`}
          />
          <p>
            Totuși, ajungem la destinații diferite în funcție de pagina
            pe care suntem.
          </p>

          <BasicEditorLazy folderStructure={relativeUrlExample} readOnly />
          <p>
            Foarte utile sunt și link-urile care duc către o secțiune ale
            aceleiași pagini sau așa numitele
            {' '}
            <FormattedText as="strong">jump links</FormattedText>
            .
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<a href="#comments"> 
  Sari la secțiunea de comentarii
</a> 
<h2 id="comments">Comentarii</h2>
<!-- ... -->`}
          />
          <LessonTip>
            Observați atributul
            {' '}
            <FormattedText as="strong">id</FormattedText>
            .
            Aceasta este modalitatea prin care facem legătura între link și
            secțiunea paginii la care vrem să ajungem.
          </LessonTip>
          <p>
            Deși nu am ajuns la partea de CSS, merită menționat că jump links
            pot să beneficieze de
            {' '}
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior">smooth scrolling</a>
            {' '}
            pentru ca utilizatorii să aibă o experiență mai plăcută:
          </p>
          <LessonFigure
            isVideo
            withBorder
            src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/links-and-buttons/smooth-scrolling.mp4`}
            alt="Redarea comportamentului de smooth scrolling"
            demo="/demo/html/jump-links"
          />
        </section>
        <section>
          <LessonHeading as="h3" id="emails">
            Link-uri către email-uri
          </LessonHeading>
          <p>
            Sunt situații în care vrem să oferim unui utilizator posibilitatea de a
            {' '}
            <strong>
              deschide email-ul precompletat către o adresă
            </strong>
            . În cazul acesta ne
            vom folosi de
            {' '}
            <FormattedText as="strong">mailto</FormattedText>
            :
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<a href="mailto:hello@frontend.ro">
  Trimite email la Frontend.ro
</a>`}
          />
          <p>
            Apasă pe linkul alăturat și ți se va deschide clientul de email,
            precompletat cu adresa noastră 👉
            {' '}
            <a href="mailto:hello@frontend.ro">Trimite email la Frontend.ro</a>
            .
          </p>
          <LessonFigure
            isVideo
            withBorder
            src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/links-and-buttons/mailto.mp4`}
            alt="Opțiunea mailto pentru a ușura trimiterea de email-uri"
          />
          <LessonHeading as="h3" id="tel">
            Link-uri către numere de telefon
          </LessonHeading>
          <p>
            Mai mult, dacă vrem să arătăm în pagină
            numere de telefon e recomandat să folosim link-uri,
            pentru a ne deschide direct aplicația prin care sunăm:
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<a href="tel:+49.157.0156">+49 157 0156</a>
<a href="tel:+1(555)5309">(555) 5309</a>
`}
          />
          <p>
            Apasă pe unul din numerele de mai jos pentru a vedea cum sunt
            precompletate pe telefon (poți să dai click fără griji, nu le vei apela dacă faci asta)
          </p>
          <List variant="bullets">
            <li>
              <a href="tel:+49.157.0156">+49 157 0156</a>
            </li>
            <li>
              <a href="tel:+1(555)5309">(555) 5309</a>
            </li>
          </List>
          <LessonFigure
            isVideo
            withBorder
            src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/links-and-buttons/link-to-tel.mp4`}
            alt="Link-uri către numere de telefon"
          />
          <LessonHeading as="h3" id="download">
            Link-uri de download
          </LessonHeading>
          <p>
            Împreuna cu atributul
            {' '}
            <FormattedText as="strong">download</FormattedText>
            {' '}
            putem instrui
            browser-ul să downloadeze fișierul din cadrul link-ului în loc să îl
            deschidă în pagina curentă:
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<a href="https://FrontEnd.ro/logo.png" download> Download our logo </a>
`}
          />
          <p>
            Apasă pe linkul de alături pentru a downlada logo-ul nostru 👉
            {' '}
            <a href="/logo.png" download>
              Downloadează logo-ul nostru
            </a>
          </p>
          <p>
            Acum că ne-am familiarizat cu situații din practică unde putem
            folosi link-uri, ne-am obișnuit puțin cu markup-ul și cu câteva
            dintre atributele ce pot însoți elementul, putem să
            vorbim de câteva bune practici pe care să le avem în vedere.
          </p>
        </section>
        <section>
          <LessonHeading as="h2" id="atributul-target-blank">
            Atributul target=”_blank”
          </LessonHeading>
          <p>
            În afară de atributele prezentate, un alt atribut des folosit este
            {' '}
            <FormattedText as="strong"> target</FormattedText>
            {' '}
            , care ne indică cum
            să deschidem link-ul din href.
          </p>
          <p>
            Ca și developeri cel mai des ne vom întâlni cu situația de a folosi
            {' '}
            <FormattedText as="strong">
              target="_blank"
            </FormattedText>
            {' '}
            (link-ul va fi deschis într-o fereastră sau un tab
            nou)
            .
            Când folosim valoarea
            {' '}
            <strong>_blank</strong>
            , e recomandat să adăugăm un nou atribut
            pentru securitate și anume :
            {' '}
            <FormattedText as="strong">
              rel=”noopener noreferrer”
            </FormattedText>
            .
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<a href="http://frontend.ro" target="_blank" rel="noopener noreferrer">
  Link-ul se deschide într-un nou tab
</a>
            `}
          />
          <p>
            Apasă pe următorul link pentru a-l deschide într-un nou tab 👉
            {' '}
            <a
              href="http://frontend.ro"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link-ul se deschide într-un nou tab
            </a>
          </p>
        </section>
        <section>
          <LessonHeading as="h2" id="intrebari-bonus">
            Întrebări BONUS
          </LessonHeading>
          <p>
            În continuare vom raspunde la câteva întrebări pe care noi ca și
            developeri ni le putem adresa pe măsură ce codăm și ne întâlnim cu
            diverse situații:
          </p>
          <LessonQuote>
            Putem folosi doar un
            {' '}
            <FormattedText as="strong">icon</FormattedText>
            {' '}
            în
            interiorul unui link?
          </LessonQuote>
          <p>
            Din păcate un simplu icon nu ne-ar oferi suficientă
            informație contextuală despre link, deci nu ar fi chiar recomandat.
            Dacă totuși suntem nevoiți să folosim un astfel de icon, o bună
            practică ar fi să adăugăm în link niște text
            ascuns vizual, care va fi totuși citit de
            {' '}
            <strong>screen readers</strong>
            :
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<a href="https://fontawesome.com/">
  <svg width="24" height="24" viewBox="0 0 1024 1024">
    <g>
      <path d="M384 928c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z" />
      <path d="M1024 928c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z" />
      <path d="M1024 512v-384h-768c0-35.346-28.654-64-64-64h-192v64h128l48.074 412.054c-29.294 23.458-48.074 59.5-48.074 99.946 0 70.696 57.308 128 128 128h768v-64h-768c-35.346 0-64-28.654-64-64 0-0.218 0.014-0.436 0.016-0.656l831.984-127.344z" />
    </g>
  </svg>
  // Se comporta ca un label ce e ascuns
  <span style="position: absolute; opacity: 0">
    Coș de cumpărături
  </span>
 </a>`}
          />
          <p>
            Spre exemplu, link-ul alăturat conține doar un icon pentru un coș de cumpărături,
            dar e în același timp
            accesibil pentru cei ce folosesc screen readere 👉:
            {' '}
            <a href="https://fontawesome.com/">
              <svg width="24" height="24" viewBox="0 0 1024 1024">
                <g>
                  <path d="M384 928c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z" />
                  <path d="M1024 928c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z" />
                  <path d="M1024 512v-384h-768c0-35.346-28.654-64-64-64h-192v64h128l48.074 412.054c-29.294 23.458-48.074 59.5-48.074 99.946 0 70.696 57.308 128 128 128h768v-64h-768c-35.346 0-64-28.654-64-64 0-0.218 0.014-0.436 0.016-0.656l831.984-127.344z" />
                </g>
              </svg>
              {/* Se comporta ca un label ce e ascuns  */}
              <span style={{ position: 'absolute', opacity: '0' }}>
                Coș de cumpărături
              </span>
            </a>
          </p>
          <LessonTip icon={faQuestionCircle}>
            Atributul
            {' '}
            <FormattedText as="strong">style</FormattedText>
            {' '}
            este folosit
            pentru a adăuga reguli CSS elementelor. Încă nu am ajuns la acel
            capitol deci e ok dacă nu știi cum să-l folosești.
            Totuși, te rugăm să-l păstrezi în exemplu, pentu a funcționa
            cum ne așteptăm.
          </LessonTip>
          <LessonQuote>
            Putem folosi o
            {' '}
            <FormattedText as="strong">imagine</FormattedText>
            {' '}
            în
            interiorul unui link?
          </LessonQuote>
          <p>
            Daaa. Vom avea nevoie de multe ori să facem asta în proiectele
            noastre.
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<a href="https://FrontEnd.ro">
  <img 
    src="https://FrontEnd.ro/images/logo.png" 
    alt="Frontend.ro LOGO." 
    height="48" 
  />
</a>`}
          />
          <p>
            Alături avem o imagine într-un link. Dacă dăm click pe ea,
            ne va duce pa pagina principală (home page) 👉
            {' '}
            <a style={{ verticalAlign: 'middle' }} href="/">
              <img height="48" src="/logo.png" alt="Frontend.ro LOGO." />
            </a>
          </p>
          {/* this demo 👇 is not very clear at this moment, when we will have more CSS lessons,
           maybe we can uncomment this part */}
          {/* <LessonQuote>
            Putem folosi bucăți mari de cod în interiorul unui link?
          </LessonQuote>
          <p>Răspunsul la această întrebare este că nu e tocmai o idee bună.</p>
          <LessonFigure
            withBorder
            src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/links-and-buttons/demo-link.png`}
            alt="2 metode diferite prin care putem folosi link-urile în raport cu bucăți
            mai mari de cod și implicațiile lor"
            demo="/demo/html/linkuri-care-contin-bucati-mari-de-continut"
          /> */}
        </section>
        <section>
          <LessonHeading as="h2" id="button-element">
            {'<button> element'}
          </LessonHeading>
          <p>
            Elementul html
            {' '}
            <FormattedText as="strong">{'<button>'}</FormattedText>
            {' '}
            este folosit atunci când vrem să facem o acțiune (exemple: arată/ascunde
            un meniu, play sau pause la un video, trimite un comentariu, etc)
          </p>
          <Highlight
            language="html"
            code={`
<button type="button">
  Open menu
</button>`}
          />
          <p>
            Spre deosebire de link-uri, butoanele
            {' '}
            <strong>NU</strong>
            {' '}
            schimbă
            pagina. Totuși dacă avem un formular cu un buton de login, dăm click pe
            el, așteptăm, apoi suntem direcționați către o nouă pagină, putem
            spune că acțiunea declanșată de buton a schimbat pagina. În cazul acesta e ok :)
          </p>
        </section>
        <section>
          <LessonHeading as="h2" id="atributul-type">
            Atributul type
          </LessonHeading>
          <p>
            Cele 2 tipuri de butoane pe care le vom folosi cel mai des în
            aplicațiile noastre sunt :
          </p>
          <List variant="bullets">
            <li>
              <FormattedText as="strong">type="button"</FormattedText>
            </li>
            <li>
              <FormattedText as="strong">type="submit"</FormattedText>
              : (utilizate
              în cadrul formularelor - vom discuta mai multe în momentul în care
              vom ajunge la această lecție)
            </li>
          </List>
          <p>O bună practică este să specificăm mereu tipul acestora.</p>
          <p>
            Pe lîngă submit și button, type mai pot avea și valoarea
            {' '}
            <FormattedText as="strong">reset</FormattedText>
            . Uite un exemplu care le include pe toate 3:
          </p>
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
          <LessonFigure
            withBorder
            src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/links-and-buttons/buttons-types.png`}
            alt="Tipuri de butoane"
            demo="/demo/html/tipuri-de-butoane"
          />
        </section>
        <section>
          <LessonHeading as="h2" id="atributul-disabled">
            Atributul disabled
          </LessonHeading>
          <p>
            Acest atribut boolean împiedică interactivitatea cu butonul: nu
            poate fi apăsat sau focusat. Cel mai comun pattern este în cazul
            autentificării pe un site:
          </p>
          {/* <Highlight
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
          <LessonFigure
            withBorder
            src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/links-and-buttons/disabled-button.png`}
            alt="Atributul disabled"
            demo="/demo/html/butoane-atributul-disabled"
          /> */}
          <List as="ol" style={{ listStyle: 'revert' }}>
            <li>
              completăm formularul
            </li>
            <li>
              apăsăm butonul de login
            </li>
            <li>
              butonul devinde
              {' '}
              <strong> disabled </strong>
              {' '}
              cât timp
              se trimit datele la server și se așteaptă un răspuns
              (pentru a preveni cazul în care utilizatorul încearcă
              din nou în timp ce autentificarea e înca în proges)
            </li>
            <li>
              dacă logarea eșuează, putem afișa un mesaj informativ în care să
              explicăm de ce nu a putut avea loc și să facem enabled la buton abia
              la final, pentru a reîncerca.
            </li>
          </List>
          <LessonFigure
            isVideo
            withBorder
            src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/links-and-buttons/form_validation_with_disabled_button.mp4`}
            alt="Validare form cu button disabled"
          />
        </section>
        <section>
          <LessonHeading as="h2" id="linkuri-vs-butoane">
            Link-uri versus butoane
          </LessonHeading>
          <p>
            Ca o scurtă recapitulare, folosim link-uri dacă se schimbă pagina
            sau facem jump la o secțiune din pagină, iar de butoane dacă facem o
            acțiune.
          </p>
          <LessonTip icon={faThumbsDown}>
            Nu putem avea link-uri în butoane sau butoane în link-uri - nu e
            valid markup-ul.
          </LessonTip>
        </section>
        <div className="dots" />
        <LessonResources
          className="my-5"
          links={[
            {
              text: 'Documentația completă a link-urilor pe MDN',
              url:
                'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a',
            },
            {
              text: 'Documentația completă a <button> pe MDN',
              url:
                'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button',
            },
            {
              text: 'Valoarea "noreferrer" pentru atributul "rel"',
              url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/noreferrer',
            },
            {
              text: 'Valoarea "noopener" pentru atributul "rel"',
              url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/noopener',
            },
          ]}
        />
      </Lesson>
    </>
  );
}

const relativeUrlExample = {
  files: [],
  folders: [{
    key: 'home',
    name: 'home',
    files: [{
      key: 'home.html',
      name: 'home.html',
      content: `<!DOCTYPE html>
<html>
<head>
  <title>Url relativ</title>
</head>
<body>
    <h1>Home Page</h1>
    <a href="info.html"> Go to info page </a>
</body>
</html>
      `,
    }, {
      key: 'info.html',
      name: 'info.html',
      content: `<!DOCTYPE html>
<html>
<head>
  <title>Info | Home page</title>
</head>
<body>
    <h1>Info regarding the Home page</h1>
</body>
</html>
`,
    }],
    folders: [],
  }, {
    key: 'about',
    name: 'about',
    folders: [],
    files: [{
      key: 'about.html',
      name: 'about.html',
      content: `<!DOCTYPE html>
<html>
<head>
  <title>Url relativ</title>
</head>
<body>
    <h1>About page</h1>
    <a href="info.html"> Go to info page </a>
</body>
</html>
`,
    }, {
      key: 'info.html',
      name: 'info.html',
      content: `<!DOCTYPE html>
<html>
<head>
  <title>Info | About page</title>
</head>
<body>
    <h1>Info regarding the About page</h1>
</body>
</html>
`,
    }],
  }],
};
