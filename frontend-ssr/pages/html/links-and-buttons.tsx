import React from 'react';
import Head from 'next/head';
import { faQuestionCircle, faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import SEOTags from '~/components/SEOTags';
import Lesson, {
  LessonContributors,
  LessonCover,
  LessonFigure,
  LessonHeading,
  LessonResources,
  LessonTip,
} from '~/components/lessons';
import { Pava, Diana } from '~/services/contributors';
import Highlight from '~/components/Highlight/Highlight';

const contributors = [Diana, Pava];
const chapters = [
  { title: '<a> element', id: 'a-element' },
  {
    title: 'Exemple unde folosim tag-ul a',
    id: 'exemple-unde-folosim-tagul-a',
  },
  {
    title: 'Atributul target=”_blank” și vulnerabilitățile lui',
    id: 'atributul-target-blank-si-vulnerabilitatile-lui',
  },
  { title: 'Bune practici', id: 'bune-practici' },
  { title: 'Întrebări BONUS', id: 'intrebari-bonus' },
  { title: '<button> element', id: 'button-element' },
  { title: 'Atributul type', id: 'atributul-type' },
  { title: 'Atributul disabled', id: 'atributul-disabled' },
  { title: 'Link-uri vs butoane', id: 'linkuri-vs-butoane' },
];

export default function LinksAndButtonsLesson() {
  return (
    <>
      <Head>
        <title> Introducere | FrontEnd.ro</title>
        <link rel="icon" href="/favicon.ico" />
        <SEOTags
          title="Imagini | Lecție HTML"
          description="Învață să adaugi și optimizezi imagini în paginile Web."
          url="https://FrontEnd.ro/html/linksAndButtons"
        />
      </Head>
      <Lesson title="Link-uri si butoane" chapters={chapters}>
        <LessonContributors contributors={contributors} />
        <LessonCover>
          <CoverSVG />
        </LessonCover>
        <p>
          Deși la prima vedere pare un subiect simplu, sunt totuși multe de
          știut despre link-uri și butoane în HTML. În acest articol vom discuta
          despre markup, atribute și cele mai bune practici. Totodată vom trata
          împreună cele două concepte pentru că de multe ori se folosesc
          link-uri în loc de butoane și invers. Astfel la sfîrșitul articolului
          vom ști exact cum să implementăm un UX corect folosind cele 2
          elemente.
        </p>
        <section>
          <h2> The Basics </h2>
          <LessonHeading as="h3" id="a-element">
            {'<a> element'}
          </LessonHeading>
          <p>
            Elementul a denumit și
            {' '}
            <i>ancoră</i>
            {' '}
            sau
            {' '}
            <i>link</i>
            {' '}
            este unul din
            cele mai uzuale elemente folosite pentru construirea paginilor web.
            Dacă vrem să ne mutam la o altă pagină sau la o altă zonă în cadrul
            aceleiași pagini, atunci vom folosi acest element. Modalitatea prin
            care adăugăm un link într-o pagină este prin folosirea atributului
            {' '}
            <strong>href</strong>
            {' '}
            care indică URL-ul link-ului.
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
            În cazul acesta, spunem că este un link către un URL
            {' '}
            <strong>absolut</strong>
            {' '}
            - adică un URL care conține întreaga adresă
            a unei pagini. Acest tip de URL este deseori întîlnit atunci cînd un
            website face legătura către un alt website.
          </p>
          <p>
            Putem avea și URL-uri
            {' '}
            <strong>relative</strong>
            , de obicei folosite
            la realizarea meniurilor paginilor web:
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<a href="/pages/about.html">About</a>`}
          />
          <p>
            Foarte utile sunt și link-urile care duc către o secțiune ale
            aceleiași pagini sau așa numitele
            {' '}
            <strong>jump links</strong>
            .
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<a href="#Section-further-down"> 
  Sari la secțiunea de mai jos 
</a> 
<h2 id="Section-further-down">Section further down</h2>
            `}
          />
          <LessonTip>
            Observați atributul
            {' '}
            <strong>ID</strong>
            . Aceasta este modalitatea
            prin care facem legătura între link și secțiunea paginii la care
            vrem să ajungem.
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
          <h1>Video DEMO </h1>
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
            <strong>mailto</strong>
            :
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<a href="mailto:hello@frontend.ro">
  Send email to Frontend.ro”
</a>`}
          />
          <p>
            Totodată, link-urile către numere de telefon sunt foarte uzuale mai
            ales cînd navigăm de pe dispozitive mobile:
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
            Împreuna cu atributul
            {' '}
            <strong>download</strong>
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
            Oky, acum că ne-am familiarizat cu situații din practică unde putem
            folosi link-uri, ne-am obișnuit puțin cu markup-ul și cu cîteva
            dintre atributele ce pot însoți elementul, putem să trecem la ceva
            detalii legate de cele mai bune practici pe care să le avem în
            vedere.
          </p>
        </section>
        <section>
          <LessonHeading
            as="h3"
            id="atributul-target-blank-si-vulnerabilitatile-lui"
          >
            Atributul target=”_blank” și vulnerabilitățile lui
          </LessonHeading>
          <p>
            În afară de atributele prezentate, un alt atribut folosit este
            <strong> target</strong>
            {' '}
            , care ne indică unde să deschidem link-ul
            din href.
          </p>
          <p>
            Ca și developeri cel mai des ne vom întîlni cu situația de a folosi
            {' '}
            <strong>
              target=”_blank” (link-ul va fi deschis într-o fereastră sau un tab
              nou)
            </strong>
            {' '}
            ce vine la pachet cu o serie de
            {' '}
            <i>vulnerabilități</i>
            {' '}
            care pot avea
            consecințe majore asupra securității userilor.
          </p>
        </section>
        <section>
          <LessonHeading as="h3" id="bune-practici">
            Bune practici
          </LessonHeading>
          <p>
            Cînd folosim valoarea _blank, e recomandat să adăugăm un nou atribut
            pentru securitate și anume :
            {' '}
            <strong>rel cu valorile ”noopener noreferrer”.</strong>
            {' '}
            Atributul
            {' '}
            <strong>rel</strong>
            {' '}
            poate avea mai multe valori, dar le vom
            prezenta aici doar pe cele 2 recomandate a se folosi împreuna cu
            atributul target=”_blank”.
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<a href="http://website.com" target="_blank" rel="noopener noreferrer">
  Link-ul se deschide într-un nou tab
</a>
            `}
          />
          <ul className="with--bullets">
            <li>
              <strong>rel="noopener"</strong>
              : blochează accesul tabului nou la
              pagina ce conține link-ul, și astfel ne protejează de atacuri ca
              cel de mai jos:
              <h1>Video DEMO</h1>
            </li>
            <li>
              <strong>rel="noreferrer"</strong>
              : împiedică alte site-uri sau
              servicii de urmărire (de exemplu, Google Analytics) să identifice
              pagina ca sursă a link-ului pe care s-a dat click.
            </li>
          </ul>
        </section>
        <section>
          <LessonHeading as="h3" id="intrebari-bonus">
            Întrebări BONUS
          </LessonHeading>
          <p>
            În continuare vom raspunde la cîteva întrebări pe care noi ca și
            developeri ni le putem adresa pe măsură ce codăm și ne întîlnim cu
            diverse situații:
          </p>
          <blockquote>
            Ar trebui să folosim atributul
            {' '}
            <strong>title</strong>
            {' '}
            împreuna cu
            tag-ul a?
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
            Acest pop-up nu este atît de accesibil și nu poate fi stilizat. Plus
            că pe device-urile cu touch este imposibil de folosit. Trebuie să ne
            asigurăm întotdeauna că oferim un text suficient de descriptiv
            pentru a ști la ce să ne așteptăm cînd dăm click pe un link.
          </p>
          <blockquote>
            Putem folosi doar un
            {' '}
            <strong>icon</strong>
            {' '}
            în interiorul unui link?
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
          <LessonTip icon={faQuestionCircle}>
            Atributul
            {' '}
            <strong>style</strong>
            {' '}
            este folosit pentru a adăuga reguli
            CSS elementelor. Încă nu am ajuns la acel capitol deci e absolut
            normal să nu știi ce face.
            <br />
            {' '}
            <br />
            Totuși, te rugăm să-l pui acolo, e un exemplu bun de avut în vedere.
          </LessonTip>
          <blockquote>
            Putem folosi o
            {' '}
            <strong>imagine</strong>
            {' '}
            în interiorul unui link?
          </blockquote>
          <p>
            Daaa. Vom avea nevoie de multe ori să facem asta în proiectele
            noastre.
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<a href="/buy/puppies/now">
  <img src="puppy.jpg" alt="A happy puppy.">
</a>`}
          />
          <p>
            Nu e nevoie să folosim atributul
            {' '}
            <strong>alt</strong>
            {' '}
            pentru a
            preciza că imaginea este un link, tehnologiile assistive vor face
            deja asta pentru noi.
          </p>
          <blockquote>Putem folosi bucăți mari de cod în interiorul unui link?</blockquote>
          <p>Răspunsul la această întrebare este că nu e tocmai o idee bună.</p>
          <h1>DEMO </h1>
          <LessonFigure
            withBorder
            src="/images/lessons/links-and-buttons/demo_link.png"
            alt="2 metode diferite prin care putem folosi link-urile în raport cu bucăți mai mari de cod și implica
            țiile lor"
            demo="/demo/html/links-around-bigger-chunks-of-content"
          />

        </section>
        <section>
          <LessonHeading as="h3" id="button-element">
            {'<button> element'}
          </LessonHeading>
          <p>
            Elementul html
            {' '}
            <strong>button</strong>
            {' '}
            este folosit atunci cînd vrem
            să facem o acțiune (exemple uzuale de acțiuni: selectăm un element
            sau mergem cu mouse-ul deasupra lui (hover) , o pagină web se
            încarcă (load), dăm click pe un buton sau alegem o cheie de la
            tastatură, facem resize la o fereastră sau o închidem, dăm play sau
            pause la un video, etc.
          </p>
          <p>
            Spre deosebire de link-uri, butoanele
            {' '}
            <strong>nu</strong>
            {' '}
            schimbă
            pagina.
          </p>
          <p>
            Un alt mod de a ne gîndi la asta este: daca dăm click pe element și
            acesta nu face nimic fără Javascript, atunci ar trebui să fie un
            buton.
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
              <strong>type="button"</strong>
            </li>
            <li>
              <strong>type="submit"</strong>
              : (utilizate în cadrul formularelor
              - vom discuta mai multe în momentul în care vom ajunge la această
              lecție)
            </li>
          </ul>
          <p>O bună practica este să specificăm mereu tipul acestora.</p>
          <p>
            Pe lîngă submit și button, type mai pot avea și valoarea
            {' '}
            <strong>reset</strong>
            .
          </p>
          <p>Un exemplu care le include pe toate 3:</p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<form action="/" method="POST">
  <input type="text" name="name" id="name">
  <button>Submit</button>
              
  <!-- Dacă vrem să fie mai explicit... -->
  <button type="submit">Submit</button>
              
  <!-- ...sau să resetăm inputurile la valoarea
  lor inițială (tinde să enerveze userii) -->
  <button type="reset">Reset</button>
              
  <!-- Acesta împiedică ca acțiunea de submit să 
  aibă loc,  ceea ce poate fi util uneori în cadrul 
  unui form -->
  <button type="button">Non-submitting button</button>
</form>
          `}
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
          <Highlight
            className="my-5"
            language="html"
            code={`
<form class="login-container">
  <label for="email">Introdu adresa de email:</label>
  <input type="email" id="email" placeholder="Email">
  <label for="password">Introdu parola:</label>
  <input type="password" id=”password” 
  placeholder="Password">
  <button type="submit" disabled>Loghează-te</ button>
</form>         
          `}
          />
          <p>
            Avem un form, ne logăm, butonul devine disabled cît se face logarea
            pentru a nu mai încerca din nou pînă la final.
          </p>
          <p>
            Dacă logarea eșuează, putem afișa un mesaj de validare în care să
            explicăm de ce nu a putut avea loc și să facem enabled la buton.
          </p>
          <h1>Video DEMO</h1>
        </section>
        <section>
          <LessonHeading as="h3" id="linkuri-vs-butoane">
            Link-uri versus butoane
          </LessonHeading>
          <p>
            Ca o scurtă recapitulare, vorbim de linkuri dacă se schimbă pagina,
            sau facem jump la o secțiune din pagină, iar de butoane dacă facem o
            acțiune.
          </p>
          <LessonTip icon={faThumbsDown}>
            Nu putem avea link-uri în butoane sau butoane în linkuri - nu e valid
            markup-ul.
          </LessonTip>
        </section>
        <div className="dots" />
        <LessonResources
          className="my-5"
          links={[
            {
              text: 'Link1',
              url: 'https://google.com',
            },
            {
              text: 'Link2',
              url: 'https://linkedin.com',
            },
          ]}
        />
      </Lesson>
    </>
  );
}

function CoverSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="b4f08fc7-2376-4427-aaee-2fcb33ba957a"
      viewBox="0 0 920.657 698"
      width="920.657"
      height="698"
      data-name="Layer 1"
    >
      <path
        fill="#e6e6e6"
        transform="translate(-139.671 -101)"
        d="M 1032.14 753.934 l 3.66231 -9.02216 a 122.561 122.561 0 0 1 13.5191 -2.84147 l -0.301 4.38652 l 1.87512 -4.61937 c 5.64237 -0.8 9.42953 -0.97256 9.42953 -0.97256 s -7.609 18.2791 -20.0749 31.3351 l -12.4866 0.457 l 9.28206 2.674 a 49.585 49.585 0 0 1 -4.85668 3.9041 c -17.1716 12.0242 -35.0188 16.1635 -39.8631 9.24554 s 5.14891 -22.2737 22.3204 -34.2979 a 65.28 65.28 0 0 1 18.0512 -8.3695 Z"
      />
      <path
        fill="#e6e6e6"
        transform="translate(-139.671 -101)"
        d="M 999.746 712.541 l -4.64573 -13.3292 a 177.676 177.676 0 0 1 12.0023 -16.0313 l 3.86987 5.06475 l -2.37861 -6.82462 c 5.37859 -6.27066 9.33749 -10.0826 9.33749 -10.0826 s 9.2065 27.1863 8.12584 53.3326 l -13.1598 12.4468 l 12.6665 -5.97061 a 71.8831 71.8831 0 0 1 -1.55261 8.89894 c -7.19225 29.5259 -22.6657 51.1123 -34.561 48.2148 s -15.708 -29.1819 -8.51578 -58.7078 a 94.634 94.634 0 0 1 11.6475 -26.388 Z"
      />
      <ellipse
        fill="#e6e6e6"
        cx="760.462"
        cy="690.339"
        rx="148.434"
        ry="7.6611"
      />
      <path
        fill="#e6e6e6"
        transform="translate(-139.671 -101)"
        d="M 400.958 220.049 H 296.098 v 1.91528 H 400.958 a 19.4656 19.4656 0 1 1 0 38.9311 H 242.287 a 19.4656 19.4656 0 0 1 0 -38.9311 h 5.92959 v -1.91528 H 242.287 a 21.3808 21.3808 0 0 0 0 42.7617 H 400.958 a 21.3808 21.3808 0 0 0 0 -42.7617 Z"
      />
      <path
        fill="#6c63ff"
        transform="translate(-139.671 -101)"
        d="M 400.958 286.126 H 296.098 v 1.91528 H 400.958 a 19.4656 19.4656 0 0 1 0 38.9311 H 242.287 a 19.4656 19.4656 0 1 1 0 -38.9311 h 5.92959 v -1.91528 H 242.287 a 21.3808 21.3808 0 0 0 0 42.7617 H 400.958 a 21.3808 21.3808 0 0 0 0 -42.7617 Z"
      />
      <path
        fill="#e6e6e6"
        transform="translate(-139.671 -101)"
        d="M 400.958 352.203 H 296.098 v 1.91527 H 400.958 a 19.4656 19.4656 0 1 1 0 38.9311 H 242.287 a 19.4656 19.4656 0 1 1 0 -38.9311 h 5.92959 v -1.91527 H 242.287 a 21.3808 21.3808 0 0 0 0 42.7617 H 400.958 a 21.3808 21.3808 0 0 0 0 -42.7617 Z"
      />
      <path
        id="bcf0cfa3-66a2-4303-bdd5-8030f4bfd15a"
        fill="#3f3d56"
        transform="translate(-139.671 -101)"
        d="M 260.052 214.989 a 5.69491 5.69491 0 0 0 0 11.3883 H 285.033 a 5.69491 5.69491 0 0 0 0.187 -11.3883 q -0.09348 -0.00158 -0.187 0 Z"
        data-name="Path 40"
      />
      <path
        id="ec7ee251-c029-4a40-a2db-c56bfeeebca2"
        fill="#3f3d56"
        transform="translate(-139.671 -101)"
        d="M 260.052 282.024 a 5.6949 5.6949 0 0 0 0 11.3883 H 285.033 a 5.6949 5.6949 0 0 0 0.187 -11.3883 q -0.09348 -0.00159 -0.187 0 Z"
        data-name="Path 40"
      />
      <path
        id="a580efb3-72c6-475f-9d34-6093d6a0cbd0"
        fill="#3f3d56"
        transform="translate(-139.671 -101)"
        d="M 260.052 347.143 a 5.6949 5.6949 0 0 0 0 11.3883 H 285.033 a 5.6949 5.6949 0 0 0 0.187 -11.3883 q -0.09348 -0.00159 -0.187 0 Z"
        data-name="Path 40"
      />
      <path
        id="fe8fe944-e2e2-4630-bb61-cdb395efd789"
        fill="#e6e6e6"
        transform="translate(-139.671 -101)"
        d="M 250.144 235.736 a 5.6949 5.6949 0 0 0 0 11.3883 H 392.914 a 5.6949 5.6949 0 1 0 0.187 -11.3883 q -0.09349 -0.00158 -0.187 0 Z"
        data-name="Path 40"
      />
      <path
        fill="#e6e6e6"
        transform="translate(-139.671 -101)"
        d="M 400.958 157.803 H 296.098 v 1.91527 H 400.958 a 19.4656 19.4656 0 0 1 0 38.9311 H 242.287 a 19.4656 19.4656 0 0 1 0 -38.9311 h 5.92959 v -1.91527 H 242.287 a 21.3808 21.3808 0 0 0 0 42.7617 H 400.958 a 21.3808 21.3808 0 0 0 0 -42.7617 Z"
      />
      <path
        id="bcfa29a8-6865-4c73-8c61-6a785352b808"
        fill="#3f3d56"
        transform="translate(-139.671 -101)"
        d="M 260.052 152.743 a 5.6949 5.6949 0 0 0 0 11.3883 H 285.033 a 5.6949 5.6949 0 0 0 0.187 -11.3883 q -0.09348 -0.00159 -0.187 0 Z"
        data-name="Path 40"
      />
      <path
        id="e794b9a0-7aca-4299-a24e-8f26dee3f545"
        fill="#e6e6e6"
        transform="translate(-139.671 -101)"
        d="M 250.144 173.49 a 5.69491 5.69491 0 0 0 0 11.3883 H 392.914 a 5.69491 5.69491 0 1 0 0.187 -11.3883 q -0.09349 -0.00158 -0.187 0 Z"
        data-name="Path 40"
      />
      <path
        id="bf86555d-9ede-426e-830a-ea26134fbb4f"
        fill="#6c63ff"
        transform="translate(-139.671 -101)"
        d="M 250.144 301.813 a 5.6949 5.6949 0 0 0 0 11.3883 H 392.914 a 5.6949 5.6949 0 1 0 0.187 -11.3883 q -0.09349 -0.00159 -0.187 0 Z"
        data-name="Path 40"
      />
      <path
        id="bd15929f-7f71-4330-8805-c384166b6a45"
        fill="#e6e6e6"
        transform="translate(-139.671 -101)"
        d="M 250.144 367.89 a 5.6949 5.6949 0 0 0 0 11.3883 H 392.914 a 5.6949 5.6949 0 1 0 0.187 -11.3883 q -0.09349 -0.00158 -0.187 0 Z"
        data-name="Path 40"
      />
      <polygon
        fill="#6c63ff"
        points="325.216,206.951 303.669,194.511 303.669,219.391 325.216,206.951 303.669,194.511 303.669,219.391 325.216,206.951"
      />
      <path
        fill="#e6e6e6"
        transform="translate(-139.671 -101)"
        d="M 483.561 443.834 H 146.854 a 4.31409 4.31409 0 0 1 -4.30937 -4.30937 V 108.182 a 4.31409 4.31409 0 0 1 4.30937 -4.30937 H 496.391 a 4.31408 4.31408 0 0 1 4.30937 4.30937 V 304.36 h 2.87291 V 108.182 A 7.19014 7.19014 0 0 0 496.391 101 H 146.854 a 7.19014 7.19014 0 0 0 -7.18228 7.18228 V 439.525 a 7.19014 7.19014 0 0 0 7.18228 7.18228 H 483.561 Z"
      />
      <path
        fill="#6c63ff"
        transform="translate(-139.671 -101)"
        d="M 792.485 299.572 H 490.657 c -3.91715 0 -7.09626 2.48027 -7.09626 5.53634 v 65.3288 H 799.582 V 305.108 C 799.582 302.052 796.402 299.572 792.485 299.572 Z"
      />
      <path
        fill="#e6e6e6"
        transform="translate(-139.671 -101)"
        d="M 794.315 297.656 H 488.828 a 7.18489 7.18489 0 0 0 -7.18228 7.18228 V 549.036 a 7.18489 7.18489 0 0 0 7.18228 7.18228 H 794.315 a 7.18489 7.18489 0 0 0 7.18228 -7.18228 V 304.839 A 7.18489 7.18489 0 0 0 794.315 297.656 Z m 4.30937 251.38 a 4.31589 4.31589 0 0 1 -4.30937 4.30937 H 488.828 a 4.31588 4.31588 0 0 1 -4.30936 -4.30937 V 304.839 a 4.31584 4.31584 0 0 1 4.30936 -4.30937 H 794.315 a 4.31585 4.31585 0 0 1 4.30937 4.30937 Z"
      />
      <path
        fill="#e6e6e6"
        transform="translate(-139.671 -101)"
        d="M 720.907 406.171 H 616.047 v 1.91528 H 720.907 a 19.4656 19.4656 0 1 1 0 38.9311 H 562.235 a 19.4656 19.4656 0 1 1 0 -38.9311 H 568.165 v -1.91528 h -5.92959 a 21.3808 21.3808 0 0 0 0 42.7617 H 720.907 a 21.3808 21.3808 0 0 0 0 -42.7617 Z"
      />
      <path
        fill="#e6e6e6"
        transform="translate(-139.671 -101)"
        d="M 720.907 472.248 H 616.047 v 1.91528 H 720.907 a 19.4656 19.4656 0 1 1 0 38.9311 H 562.235 a 19.4656 19.4656 0 1 1 0 -38.9311 H 568.165 v -1.91528 h -5.92959 a 21.3808 21.3808 0 1 0 0 42.7617 H 720.907 a 21.3808 21.3808 0 0 0 0 -42.7617 Z"
      />
      <path
        id="f0e892c8-c763-4555-99cb-2aee4aa2c1bd"
        fill="#3f3d56"
        transform="translate(-139.671 -101)"
        d="M 580.001 402.069 a 5.6949 5.6949 0 0 0 0 11.3883 h 24.9807 a 5.6949 5.6949 0 0 0 0.187 -11.3883 q -0.09349 -0.00157 -0.187 0 Z"
        data-name="Path 40"
      />
      <path
        id="b030a2e8-ef2c-42ed-9562-f4777aec2710"
        fill="#3f3d56"
        transform="translate(-139.671 -101)"
        d="M 580.001 467.189 a 5.6949 5.6949 0 0 0 0 11.3883 h 24.9807 a 5.6949 5.6949 0 0 0 0.187 -11.3883 q -0.09349 -0.00159 -0.187 0 Z"
        data-name="Path 40"
      />
      <path
        id="b7b74475-3363-467c-a0a1-8003b6263e2a"
        fill="#e6e6e6"
        transform="translate(-139.671 -101)"
        d="M 570.093 421.858 a 5.6949 5.6949 0 0 0 0 11.3883 H 712.863 a 5.6949 5.6949 0 1 0 0.187 -11.3883 q -0.09349 -0.00159 -0.187 0 Z"
        data-name="Path 40"
      />
      <path
        id="ef56dfc7-cfad-4aec-8de6-97ba4c392594"
        fill="#e6e6e6"
        transform="translate(-139.671 -101)"
        d="M 570.093 487.935 a 5.6949 5.6949 0 0 0 0 11.3883 H 712.863 a 5.6949 5.6949 0 1 0 0.187 -11.3883 q -0.09349 -0.00159 -0.187 0 Z"
        data-name="Path 40"
      />
      <circle fill="#fff" cx="385.946" cy="234.004" r="20.6006" />
      <path
        id="b00574f6-7832-428e-9f30-d233874666a9"
        fill="#fff"
        transform="translate(-139.671 -101)"
        d="M 562.566 318.742 a 5.10451 5.10451 0 0 0 0 10.2077 H 690.535 a 5.10451 5.10451 0 1 0 0.16759 -10.2077 q -0.08379 -0.00142 -0.16759 0 Z"
        data-name="Path 40"
      />
      <path
        id="a75f2174-018f-4ccd-a38d-4db47ce7fed4"
        fill="#fff"
        transform="translate(-139.671 -101)"
        d="M 562.566 341.059 a 5.10451 5.10451 0 0 0 0 10.2077 h 210.372 a 5.10451 5.10451 0 1 0 0.16759 -10.2077 q -0.08379 -0.00141 -0.16759 0 Z"
        data-name="Path 40"
      />
      <path
        fill="#a0616a"
        transform="translate(-139.671 -101)"
        d="M 967.789 361.027 L 925.653 365.815 c 0.5752 -12.9427 -0.51886 -25.0152 -4.78819 -35.4326 l 34.475 -12.4493 C 952.25 330.822 958.052 345.523 967.789 361.027 Z"
      />
      <path
        fill="#a0616a"
        transform="translate(-139.671 -101)"
        d="M 972.87 504.754 L 986.519 529.119 a 12.6599 12.6599 0 0 1 -4.85786 17.2322 q -0.08163 0.04577 -0.16389 0.09025 h 0 a 12.6599 12.6599 0 0 1 -18.6261 -9.934 l -2.21945 -23.2846 l -7.56144 -88.8781 L 940.192 365.885 l 26.7792 -7.6025 l 12.4649 65.7401 Z"
      />
      <path
        fill="#2f2e41"
        transform="translate(-139.671 -101)"
        d="M 995.561 764.193 l -17.2375 -0.95763 l -38.3055 -170.459 l -81.3992 171.417 l -17.2375 -0.95763 l 49.7971 -264.308 l 0.95763 -47.8819 l 62.2464 -3.83055 c 23.2643 25.5848 36.4398 52.0442 38.3055 79.4839 Z"
      />
      <path
        fill="#2f2e41"
        transform="translate(-139.671 -101)"
        d="M 857.22 794.122 c -3.26283 1.48912 -6.3997 -10.9329 -8.74809 -7.87105 c -7.8866 10.2828 -26.2486 7.05726 -26.1664 5.86951 a 4.81229 4.81229 0 0 1 -3.10888 -6.054 q 0.03516 -0.10942 0.07558 -0.21714 h 0 a 4.81234 4.81234 0 0 1 3.33875 -2.97894 l 8.18721 -2.04679 l 12.8552 -22.6073 l 13.1233 -0.88656 h 0 a 31.3532 31.3532 0 0 1 5.79884 26.7466 C 861.385 788.937 859.547 793.061 857.22 794.122 Z"
      />
      <path
        fill="#2f2e41"
        transform="translate(-139.671 -101)"
        d="M 993.282 794.122 c -3.26282 1.48912 -6.39905 -10.9324 -8.74814 -7.87105 c -9.08592 11.8408 -26.778 7.754 -26.1664 5.86951 a 4.81229 4.81229 0 0 1 -3.10876 -6.05409 q 0.03516 -0.10941 0.07552 -0.21708 h 0 a 4.81234 4.81234 0 0 1 3.33875 -2.97894 l 8.18727 -2.04685 l 12.8552 -22.6073 l 14.0099 -1.77307 l 0.35386 0.57871 a 36.1228 36.1228 0 0 1 3.871 29.5374 C 996.785 790.293 995.199 793.247 993.282 794.122 Z"
      />
      <circle fill="#a0616a" cx="789.812" cy="208.315" r="29.6868" />
      <path
        fill="#e6e6e6"
        transform="translate(-139.671 -101)"
        d="M 956.297 452.003 l -64.1617 3.83055 l -5.74582 -36.3902 c -5.94806 -16.3581 1.48614 -31.3854 13.4069 -45.9666 l 24.8986 -27.7715 l 34.475 -0.95764 h 0 a 25.7491 25.7491 0 0 1 17.5205 21.3052 a 101.921 101.921 0 0 1 -10.6601 59.2067 Z"
      />
      <path
        fill="#a0616a"
        transform="translate(-139.671 -101)"
        d="M 886.39 533.402 l 4.59121 27.5472 a 12.6599 12.6599 0 0 1 -10.4064 14.5689 q -0.09231 0.01544 -0.18476 0.0294 h 0 a 12.6599 12.6599 0 0 1 -14.1615 -15.6546 l 5.79686 -22.6604 l 22.9833 -86.1874 l 7.6611 -59.3735 l 27.7715 1.91527 l -10.534 66.077 Z"
      />
      <path
        fill="#2f2e41"
        transform="translate(-139.671 -101)"
        d="M 965.084 423.753 h -0.68678 c -12.9493 -11.2205 -24.2024 -23.799 -15.1146 -39.5465 c -7.70733 -19.5621 -16.2998 -39.8767 -15.7805 -52.4443 a 36.8555 36.8555 0 0 0 -8.37243 -25.624 c -8.19 -9.56691 -10.0128 -13.8395 -24.9709 -10.2216 h 0 a 28.3433 28.3433 0 0 1 27.947 -28.7342 q 0.71191 -0.00992 1.4236 0.016 l 9.34526 0.33982 c 7.14891 0.26 29.9964 3.18237 34.9017 7.89995 a 22.7591 22.7591 0 0 1 6.51537 19.1369 c -0.91689 7.80021 1.544 14.6874 8.11871 20.4625 c 12.5874 13.0162 17.779 26.522 10.6424 40.8437 c -5.38688 15.1616 -5.12959 27.6413 8.76551 33.6409 h 0 C 1012.33 406.841 982.982 423.753 965.084 423.753 Z"
      />
      <path
        fill="#e6e6e6"
        transform="translate(-139.671 -101)"
        d="M 933.314 403.163 c -11.8869 -9.09367 -23.7014 -9.812 -35.4326 -0.95764 l 3.20356 -36.3647 a 19.7722 19.7722 0 0 1 18.8288 -20.0907 h 0 a 19.7722 19.7722 0 0 1 20.6902 18.8094 q 0.03026 0.63446 0.01964 1.26988 Z"
      />
      <ellipse
        fill="#a0616a"
        cx="790.291"
        cy="214.061"
        rx="3.83055"
        ry="7.18228"
      />
    </svg>
  );
}
