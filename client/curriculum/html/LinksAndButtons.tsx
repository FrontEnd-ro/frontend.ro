import React from 'react';
import Head from 'next/head';
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
} from '~/components/lessons';
import { Diana } from '~/services/contributors';
import Highlight from '~/components/Highlight/Highlight';
import coverSvg from '~/public/images/lessons/links-and-buttons/cover.svg';
import BasicEditorLazy from '~/components/Editor/BasicEditor/BasicEditor.lazy';
import { ExerciseFile, ExerciseFolder } from '~/services/utils/FolderStructure';

const contributors = [Diana];
const chapters = [
  { title: '<a> element', id: 'a-element' },
  {
    title: 'Exemple unde folosim tag-ul a',
    id: 'exemple-unde-folosim-tagul-a',
  },
  {
    title: 'Atributul target=”_blank”',
    id: 'atributul-target-blank',
  },
  // { title: 'Bune practici', id: 'bune-practici' },
  { title: 'Întrebări BONUS', id: 'intrebari-bonus' },
  { title: '<button> element', id: 'button-element' },
  { title: 'Atributul type', id: 'atributul-type' },
  { title: 'Atributul disabled', id: 'atributul-disabled' },
  { title: 'Link-uri vs butoane', id: 'linkuri-vs-butoane' },
  { title: 'Exerciții', id: 'exercitii' },
];

export default function LinksAndButtonsLesson() {
  return (
    <>
      <Head>
        <title> Introducere | FrontEnd.ro</title>
        <link rel="icon" href="/favicon.ico" />
        <SEOTags
          title="Link-uri și butoane | Lecție HTML"
          description="Învață să adaugi link-uri și butoane în HTML și diferența dintre acestea."
          url="https://FrontEnd.ro/html/linkuri-si-butoane"
        />
      </Head>
      <Lesson
        id="linkuriSiButoane"
        title="Link-uri si butoane"
        chapters={chapters}
        withExercises
      >
        <LessonContributors className="absolute" contributors={contributors} />
        <LessonCover>
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: coverSvg,
            }}
          />
        </LessonCover>
        <p>
          Deși la prima vedere pare un subiect simplu, sunt totuși multe de
          știut despre link-uri și butoane în HTML. În acest articol vom discuta
          despre markup, atribute și cele mai bune practici. Totodată vom trata
          împreună cele două concepte pentru că de multe ori se folosesc
          link-uri în loc de butoane și invers. Astfel la sfârșitul articolului
          vom ști exact cum să implementăm un UX corect folosind cele 2
          elemente.
        </p>
        <section>
          <h2> The Basics </h2>
          <LessonHeading as="h3" id="a-element">
            {'<a> element'}
          </LessonHeading>
          <p>
            Elementul
            {' '}
            <strong className="formatted">{'<a>'}</strong>
            {' '}
            denumit și
            {' '}
            <i>ancoră</i>
            {' '}
            sau
            <i>link</i>
            {' '}
            este unul din cele mai uzuale elemente folosite pentru
            construirea paginilor web. Dacă vrem să ne mutam la o altă pagină
            sau la o altă zonă în cadrul aceleiași pagini, atunci vom folosi
            acest element. Pentru a specifica destinația link-ului, vom folosi
            atributul
            <strong className="formatted">href</strong>
            {' '}
            .
          </p>
        </section>
        <section>
          <LessonHeading as="h3" id="exemple-unde-folosim-tagul-a">
            Exemple unde folosim tag-ul a
          </LessonHeading>
          <LessonHeading as="h4" id="cele-mai-uzuale">
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
            {' '}
            .Un exemplu ar putea fi un meniu dintr-o pagină web.
          </p>
          <BasicEditorLazy folderStructure={relativUrlExample} readOnly />
          <p>
            Foarte utile sunt și link-urile care duc către o secțiune ale
            aceleiași pagini sau așa numitele
            {' '}
            <strong className="formatted">jump links</strong>
            .
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<a href="#Section-further-down"> 
  Sari la secțiunea de mai jos 
</a> 
<h2 id="Section-further-down">Section further down</h2>`}
          />
          <LessonTip>
            Observați atributul
            {' '}
            <strong className="formatted">id</strong>
            .
            Aceasta este modalitatea prin care facem legătura între link și
            secțiunea paginii la care vrem să ajungem.
          </LessonTip>
          <p>
            Deși nu am ajuns la partea de CSS, merită menționat că jump links
            trebuie să beneficieze de
            {' '}
            <a href="/concepts/smooth-scrolling">smooth scrolling</a>
            {' '}
            pentru ca
            userii să aibă o experiență plăcută. Un usage case este chiar pe
            platforma noastră:
          </p>
          <LessonFigure
            isVideo
            withBorder
            src="/videos/lessons/links-and-buttons/smooth-scrolling.mp4"
            alt="Redarea comportamentului de smooth scrolling"
            demo="/demo/html/jump-links"
          />
        </section>
        <section>
          <LessonHeading as="h4" id="alte-exemple-unde-vom-folosi-linkuri">
            Alte exemple unde vom folosi link-uri
          </LessonHeading>
          <p>
            Sunt situații în care vrem să oferim unui user posibilitatea de a
            deschide email-ul pentru a trimite un mesaj nou. În cazul acesta ne
            vom folosi de
            {' '}
            <strong className="formatted">mailto</strong>
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
            <a href="mailto:hello@frontend.ro">Trimite email la Frontend.ro</a>
          </p>
          <LessonFigure
            isVideo
            withBorder
            src="/videos/lessons/links-and-buttons/mailto.mp4"
            alt="Opțiunea mailto care ne permite să deschidem email-ul"
            demo="/demo/html/mail-to"
          />
          <p>
            Totodată, link-urile către numere de telefon sunt foarte uzuale mai
            ales când navigăm de pe dispozitive mobile:
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
            Apelează unul din numerele de telefon:
            <br />
            <a href="tel:+49.157.0156">+49 157 0156</a>
            <br />
            <a href="tel:+1(555)5309">(555) 5309</a>
          </p>
          <LessonFigure
            isVideo
            withBorder
            src="/videos/lessons/links-and-buttons/link-to-tel.mp4"
            alt="Link-uri către numere de telefon"
            demo="/demo/html/linkuri-catre-numere-de-telefon"
          />
          <p>
            Împreuna cu atributul
            {' '}
            <strong className="formatted">download</strong>
            , putem instrui
            browser-ul să downloadeze fișierul din cadrul link-ului în loc să îl
            deschidă în pagina curentă:
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<a href="/files/test.pdf" download>Download PDF</a>
`}
          />
          <p>
            <a href="/files/test.pdf" download>
              Download PDF
            </a>
          </p>
          <p>
            Iată cum putem downloada VSCode:
          </p>
          <LessonFigure
            isVideo
            withBorder
            src="/videos/lessons/links-and-buttons/download-link.mp4"
            alt="Atributul download"
            demo="/demo/html/linkuri-atributul-download"
          />
          <p>
            Oky, acum că ne-am familiarizat cu situații din practică unde putem
            folosi link-uri, ne-am obișnuit puțin cu markup-ul și cu câteva
            dintre atributele ce pot însoți elementul, putem să trecem la ceva
            detalii legate de cele mai bune practici pe care să le avem în
            vedere.
          </p>
        </section>
        <section>
          <LessonHeading as="h3" id="atributul-target-blank">
            Atributul target=”_blank”
          </LessonHeading>
          <p>
            În afară de atributele prezentate, un alt atribut folosit este
            {' '}
            <strong className="formatted"> target</strong>
            {' '}
            , care ne indică unde
            să deschidem link-ul din href.
          </p>
          <p>
            Ca și developeri cel mai des ne vom întâlni cu situația de a folosi
            {' '}
            <strong>
              target=”_blank” (link-ul va fi deschis într-o fereastră sau un tab
              nou)
            </strong>
          </p>
        </section>
        <section>
          <LessonHeading as="h3" id="bune-practici">
            Bune practici
          </LessonHeading>
          <p>
            Când folosim valoarea _blank, e recomandat să adăugăm un nou atribut
            pentru securitate și anume :
            {' '}
            <strong className="formatted">
              rel cu valorile ”noopener noreferrer”.
            </strong>
            {' '}
            Atributul
            {' '}
            <strong className="formatted">rel</strong>
            {' '}
            poate avea mai
            multe valori, dar le vom prezenta aici doar pe cele 2 recomandate a
            se folosi împreuna cu atributul target=”_blank”.
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
            <a
              href="http://frontend.ro"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link-ul se deschide într-un nou tab
            </a>
          </p>

          <ul className="with--bullets">
            <li>
              <strong className="formatted">rel="noopener"</strong>
              : blochează
              accesul tabului nou la pagina ce conține link-ul
            </li>
            <li>
              <strong className="formatted">rel="noreferrer"</strong>
              : împiedică
              alte site-uri sau servicii de urmărire (de exemplu, Google
              Analytics) să identifice pagina ca sursă a link-ului pe care s-a
              dat click.
            </li>
          </ul>
        </section>
        <section>
          <LessonHeading as="h3" id="intrebari-bonus">
            Întrebări BONUS
          </LessonHeading>
          <p>
            În continuare vom raspunde la câteva întrebări pe care noi ca și
            developeri ni le putem adresa pe măsură ce codăm și ne întâlnim cu
            diverse situații:
          </p>
          <blockquote>
            Ar trebui să folosim atributul
            {' '}
            <strong className="formatted">title</strong>
            {' '}
            împreuna cu tag-ul a?
          </blockquote>
          <p>
            Hmmm..probabil că nu. În momentul în care mergem cu mouse-ul în
            dreptul elementului (facem
            {' '}
            <i>hover</i>
            ) ce are ca și atribut title
            vom vedea un pop-up cu textul pe care l-am scris.
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<a title="Nu ar trebui să fiu aici" href="/">
  Un simplu exemplu
</a>`}
          />
          <p>
            <a title="Nu ar trebui să fiu aici" href="/">
              Un simplu exemplu
            </a>
          </p>
          <LessonFigure
            withBorder
            src="/images/lessons/links-and-buttons/title.png"
            alt="Atributul title"
          />
          <p>
            Acest pop-up nu este atât de accesibil și nu poate fi stilizat. Plus
            că pe device-urile cu touch este imposibil de folosit. Trebuie să ne
            asigurăm întotdeauna că oferim un text suficient de descriptiv
            pentru a ști la ce să ne așteptăm când dăm click pe un link.
          </p>
          <blockquote>
            Putem folosi doar un
            {' '}
            <strong className="formatted">icon</strong>
            {' '}
            în
            interiorul unui link?
          </blockquote>
          <p>
            Așa cum am precizat deja, un simplu icon nu ne-ar oferi suficientă
            informație contextuală despre link, deci nu ar fi chiar recomandat.
            Dacă totuși suntem nevoiți să folosim un astfel de icon, o bună
            practică ar fi să utilizam un pattern de genul în care adăugam niște
            text ascuns ce va oferi context pentru screen readere:
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<a href="/">
  <!-- Ascundem icon-ul de assistive technology -->
  <svg viewBox="0 0 32 32" width="32px" height="32px" 
  aria-hidden="true" focusable="false">
  <circle cx="16" cy="16" r="16"/>
  </svg>
  <!--Se comporta ca un label ce e ascuns -->
  <span style="position: absolute; opacity: 0">
  Useful link text
  </span>
 </a>`}
          />
          <p>
            <a href="/">
              {/* Ascundem icon-ul de assistive technology */}
              <svg
                viewBox="0 0 32 32"
                width="32px"
                height="32px"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="16" cy="16" r="16" />
              </svg>
              {/* Se comporta ca un label ce e ascuns  */}
              <span style={{ position: 'absolute', opacity: '0' }}>
                Useful link text
              </span>
            </a>
          </p>
          <LessonFigure
            withBorder
            src="/images/lessons/links-and-buttons/icon-inside-link.png"
            alt="Doar un icon în interiorul unui link"
            demo="/demo/html/icon-in-link"
          />
          <LessonTip icon={faQuestionCircle}>
            Atributul
            {' '}
            <strong className="formatted">style</strong>
            {' '}
            este folosit
            pentru a adăuga reguli CSS elementelor. Încă nu am ajuns la acel
            capitol deci e absolut normal să nu știi ce face.
            <br />
            {' '}
            <br />
            Totuși, te rugăm să-l pui acolo, e un exemplu bun de avut în vedere.
          </LessonTip>
          <blockquote>
            Putem folosi o
            {' '}
            <strong className="formatted">imagine</strong>
            {' '}
            în
            interiorul unui link?
          </blockquote>
          <p>
            Daaa. Vom avea nevoie de multe ori să facem asta în proiectele
            noastre.
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<a href="/">
  <img src="images/logo.png" alt="Frontend.ro LOGO." />
</a>`}
          />
          <p>
            <a href="/">
              <img src="/logo.png" alt="Frontend.ro LOGO." />
            </a>
          </p>
          <LessonFigure
            withBorder
            src="/images/lessons/links-and-buttons/card.png"
            alt="O imagine în interiorul unui link"
            demo="/demo/html/imagine-in-link"
          />
          <p>
            Nu e nevoie să folosim atributul
            {' '}
            <strong className="formatted">alt</strong>
            {' '}
            pentru a preciza că
            imaginea este un link, tehnologiile assistive vor face deja asta
            pentru noi.
          </p>
          {/* this demo 👇 is not very clear at this moment, when we will have more CSS lessons,
           maybe we can uncomment this part */}
          {/* <blockquote>
            Putem folosi bucăți mari de cod în interiorul unui link?
          </blockquote>
          <p>Răspunsul la această întrebare este că nu e tocmai o idee bună.</p>
          <LessonFigure
            withBorder
            src="/images/lessons/links-and-buttons/demo-link.png"
            alt="2 metode diferite prin care putem folosi link-urile în raport cu bucăți
            mai mari de cod și implicațiile lor"
            demo="/demo/html/linkuri-care-contin-bucati-mari-de-continut"
          /> */}
        </section>
        <section>
          <LessonHeading as="h3" id="button-element">
            {'<button> element'}
          </LessonHeading>
          <p>
            Elementul html
            {' '}
            <strong className="formatted">{'<button>'}</strong>
            {' '}
            este folosit atunci când vrem să facem o acțiune (exemple: mergem cu
            mouse-ul deasupra unui element (hover) , o pagină web se încarcă
            (load), dăm click pe un buton sau alegem o cheie de la tastatură,
            facem resize la o fereastră sau o închidem, dăm play sau pause la un
            video, etc.
          </p>
          <p>
            Spre deosebire de link-uri, butoanele
            {' '}
            <strong>NU</strong>
            {' '}
            schimbă
            pagina. Totuși dacă avem un form cu un buton de login, dăm click pe
            el, așteptăm, apoi suntem direcționați către o nouă pagină, putem
            spune că butonul a schimbat pagina. În cazul ăsta e ok.
          </p>
        </section>
        <section>
          <LessonHeading as="h3" id="atributul-type">
            Atributul type
          </LessonHeading>
          <p>
            Cele 2 tipuri de butoane pe care le vom folosi cel mai des în
            aplicațiile noastre sunt :
          </p>
          <ul className="with--bullets">
            <li>
              <strong className="formatted">type="button"</strong>
            </li>
            <li>
              <strong className="formatted">type="submit"</strong>
              : (utilizate
              în cadrul formularelor - vom discuta mai multe în momentul în care
              vom ajunge la această lecție)
            </li>
          </ul>
          <p>O bună practica este să specificăm mereu tipul acestora.</p>
          <p>
            Pe lîngă submit și button, type mai pot avea și valoarea
            {' '}
            <strong className="formatted">reset</strong>
            .
          </p>
          <p>Un exemplu care le include pe toate 3:</p>
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
            src="/images/lessons/links-and-buttons/buttons-types.png"
            alt="Tipuri de butoane"
            demo="/demo/html/tipuri-de-butoane"
          />
        </section>
        <section>
          <LessonHeading as="h3" id="atributul-disabled">
            Atributul disabled
          </LessonHeading>
          <p>
            Acest atribut boolean împiedică interactivitatea cu butonul: nu
            poate fi apăsat sau focusat. Cel mai comun pattern este în cazul
            logării :
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
            src="/images/lessons/links-and-buttons/disabled-button.png"
            alt="Atributul disabled"
            demo="/demo/html/butoane-atributul-disabled"
          /> */}
          <p>
            Avem un form, ne logăm, butonul devine disabled cât se face logarea
            pentru a nu mai încerca din nou.
          </p>
          <p>
            Dacă logarea eșuează, putem afișa un mesaj de validare în care să
            explicăm de ce nu a putut avea loc și să facem enabled la buton abia
            la final, când totul e ok.
          </p>
          <LessonFigure
            isVideo
            withBorder
            src="/videos/lessons/links-and-buttons/form_validation_with_disabled_button.mp4"
            alt="Validare form cu button disabled"
          />
        </section>
        <section>
          <LessonHeading as="h3" id="linkuri-vs-butoane">
            Link-uri versus butoane
          </LessonHeading>
          <p>
            Ca o scurtă recapitulare, vorbim de link-uri dacă se schimbă pagina,
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
          ]}
        />
        <section>
          <LessonHeading as="h3" id="exercitii">
            Exerciții
          </LessonHeading>
          <p className="text-bold text-center">În curând!</p>
        </section>
      </Lesson>
    </>
  );
}
const relativUrlExample: {
  folders: ExerciseFolder[];
  files: ExerciseFile[];
} = {

  files: [
    {
      key: 'home.html',
      name: 'home.html',
      content: `<!DOCTYPE html>
<html>
<head>
  <title>Url relativ</title>
</head>
<body>
    <h1>Home Page</h1>
    <nav>
      <ul>
        <li>
          <a href="home.html">Home</a>
        </li>
        <li>
        <a href="about.html">About</a>
      </li>
      </ul>
    </nav>
</body>
</html>
      `,
    },
    {
      key: 'about.html',
      name: 'about.html',
      content: `<!DOCTYPE html>
<html>
<head>
  <title>Url relativ</title>
</head>
<body>
    <h1>About page</h1>
    <nav>
      <ul>
        <li>
          <a href="home.html">Home</a>
        </li>
        <li>
        <a href="about.html">About</a>
      </li>
      </ul>
    </nav>
</body>
</html>
`,
    },
  ],
};
