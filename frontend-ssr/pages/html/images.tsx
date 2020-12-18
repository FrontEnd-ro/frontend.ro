import React from 'react';
import Head from 'next/head';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';
import SEOTags from '~/components/SEOTags';
import Lesson, {
  LessonContributors,
  LessonCover,
  LessonFigure,
  LessonHeading,
  LessonResources,
  LessonTable,
  LessonTableProps,
  LessonTip,
} from '~/components/lessons';
import { Pava } from '~/services/contributors';
import Highlight from '~/components/Highlight/Highlight';
import SideBySidePictures from '~/components/SideBySidePictures';
import AudioPlayer from '~/components/AudioPlayer';

const contributors = [Pava];
const chapters = [
  { title: '<img> element', id: 'img-element' },
  { title: 'Width & Height', id: 'width-and-height' },
  { title: 'Lazy loading', id: 'lazy-loading' },
  { title: 'Responsive images', id: 'responsive-images' },
  { title: '<picture> element', id: 'picture-element' },
];

const sizesTable: LessonTableProps = {
  head: ['JPG', 'WebP', 'AVIF'],
  side: ['4000 x 2666', '2000 x 1333', '800 x 533'],
  rows: [
    [
      '<a href="https://d3tycb976jpudc.cloudfront.net/demo-assets/red_bycicle__high.jpg" target="_blank" rel="noreferrer">2.7MB</a>',
      '<a href="https://d3tycb976jpudc.cloudfront.net/demo-assets/red_bycicle__high.webp" target="_blank" rel="noreferrer">2MB</a>',
      '<a href="https://d3tycb976jpudc.cloudfront.net/demo-assets/red_bycicle__high.avif" target="_blank" rel="noreferrer">376kb</a>',
    ],
    [
      '<a href="https://d3tycb976jpudc.cloudfront.net/demo-assets/red_bycicle__med.jpg" target="_blank" rel="noreferrer">947kb</a>',
      '<a href="https://d3tycb976jpudc.cloudfront.net/demo-assets/red_bycicle__med.webp" target="_blank" rel="noreferrer">838kb</a>',
      '<a href="https://d3tycb976jpudc.cloudfront.net/demo-assets/red_bycicle__med.avif" target="_blank" rel="noreferrer">181kb</a>',
    ],
    [
      '<a href="https://d3tycb976jpudc.cloudfront.net/demo-assets/red_bycicle__med.jpg" target="_blank" rel="noreferrer">169kb</a>',
      '<a href="https://d3tycb976jpudc.cloudfront.net/demo-assets/red_bycicle__med.webp" target="_blank" rel="noreferrer">150kb</a>',
      '<a href="https://d3tycb976jpudc.cloudfront.net/demo-assets/red_bycicle__med.avif" target="_blank" rel="noreferrer">35kb</a>',
    ],
  ],
};

export default function ImagesLesson() {
  return (
    <>
      <Head>
        <SEOTags
          title="Imagini | Lecție HTML"
          description="Învață să adaugi și optimizezi imagini în paginile Web."
          url="https://FrontEnd.ro/html/images"
        />
      </Head>
      <Lesson title="Imagini" chapters={chapters}>
        <LessonContributors contributors={contributors} />
        <LessonCover>
          <CoverSVG />
        </LessonCover>
        <p>
          Cred că putem cu toții admite că un Internet fără imagini ar
          fi destul de plictisitor. Deci hai să
          încheiem așteptarea și să vedem cum adăugăm imagini
          în site-urile noastre și care sunt cele mai bune practici legate de acest subiect.
        </p>
        <section>
          <h2> The Basics </h2>
          <LessonHeading as="h3" id="img-element">
            {'<img> element'}
          </LessonHeading>
          <p>
            Primul și cel mai comun mod de a adăuga o imagine este folosind elementul
            {' '}
            <strong>img</strong>
            {' '}
            alături de 2 atribute:
          </p>
          <ul className="with--bullets">
            <li>
              <strong>src</strong>
              : pentru a specifica URL-ul imaginii
            </li>
            <li>
              <strong>alt</strong>
              : pentru a descrie conținutul imaginii - în caz că aceasta nu poate fi încărcată
            </li>
          </ul>
          <Highlight
            className="my-5"
            language="html"
            code={`
<img 
  src="golden-retrieve-and-ball.jpg" 
  alt="Golden retriever biting blue ball"
/>`}
          />
          <p>
            Dacă imaginea se află la acel URL și avem conexiune la internet
            vom obține o pagina ca în imaginea din stânga. Însă, dacă
            browserul nu a putut încărca imaginea, vom vedea descrierea
            text ca în exemplul din dreapta.
          </p>
          <SideBySidePictures
            img1={{
              src: 'https://d3tycb976jpudc.cloudfront.net/demo-assets/golden-retriever-and-ball.jpg',
              alt: 'Imagine încărcată cu succes într-o pagină Web',
              demo: '/demo/html/basic-image',
            }}
            img2={{
              src: '/images/lessons/images/image-alt.png',
              alt: 'Descrierea text a imaginii, dacă aceasta nu a putut fi încărcată',
              demo: '/demo/html/image-alt',
            }}
          />
          <p>
            Este foarte important să nu uităm de atributul
            {' '}
            <strong>alt</strong>
            .
            Pe langă cazul menționat mai sus, acesta ajută și persoanele cu dizabilități
            ce consumă continut Web via screen readere.
            {/* Uite un demo folosind progamul XXX? */}
          </p>

          {/* TODO: add audio demo */}
          {/* <AudioPlayer className="my-5" src="" title="Web captions demo" /> */}

          <LessonTip>
            De aceea, o pagină ce conține imagini
            {' '}
            <strong>fără atributul alt</strong>
            {' '}
            nu este
            {' '}
            <Link href="/html/validation">
              <a>
                considerată validă
              </a>
            </Link>
            .
          </LessonTip>
        </section>
        <section>
          <LessonHeading as="h3" id="width-and-height">
            Width & Height
          </LessonHeading>
          <p>
            De multe ori imaginile de pe site-uri își vor adapta dimensiunea în funcție de
            ecranul dispozitivul folosit: mai mici pe telefoane și tablete, mai mari
            pe laptop-uri și desktop-uri.
          </p>
          <p>
            În galeria de mai jos avem 2 imagini pe fiecare rând, fiecare ocupând
            exact 45% din lățimea ecranului - indiferent care e aceasta.
          </p>
          <LessonFigure
            withBorder
            src="https://d3tycb976jpudc.cloudfront.net/demo-assets/fixed-gallery.png"
            alt="Galerie cu 2 imagini pe fiecare rand"
            demo="/demo/html/fixed-gallery"
          />
          <p>
            Însă există situații în care o imagine va avea aceleași dimensiuni fixe indiferent
            de dispozitiv. Un exemplu ar putea fi logo-ul unei companii
            aflat de obicei în
            {' '}
            <strong className="formatted">{'<header>'}</strong>
            {' '}
            -ul paginii.
          </p>
          <LessonFigure
            withBorder
            src="https://d3tycb976jpudc.cloudfront.net/demo-assets/fixed-size-image.png"
            alt="Imagine cu dimensiunile fixe"
            demo="/demo/html/fixed-size-image"
          />
          <p>
            În astfel de cazuri, în care știm dinainte dimensiunea, este recomandat
            să adăugam și atributele
            <strong> width </strong>
            și
            {' '}
            <strong> height </strong>
            .
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<img 
  src="logo.png" 
  width="212" 
  height="70"
  alt="FrontEnd.ro logo" 
/>`}
          />
          <p>
            Astfel, browser-ul va ști dimensiunile imaginii înainte de a o descărca
            iar experienta utilizatorilor va fi extrem de fluidă. Spre deosebire
            de situația de mai jos unde textul se re-aranjează după încărcarea imaginii
            - problema cunoscută sub numele de
            {' '}
            <strong>content/layout shifting</strong>
            .
          </p>
          <LessonFigure
            isVideo
            withBorder
            src="https://d3tycb976jpudc.cloudfront.net/demo-assets/content-shift.mp4"
            alt="Conținutul text se re-aranjează după încărcarea imaginii"
            demo="/demo/html/content-shifting"
          />
        </section>
        <div className="dots" />
        <section>
          <p>
            Ce am arătat până acum reprezintă fundamentele imaginilor în HTML.
            Sunt lucrurile pe care le vei folosi în marea majoritate a cazurilor...
          </p>

          <p>
            Mai jos continuăm să discutăm despre diverse tehnici
            pentru a optimiza servirea imaginilor și a oferi cea mai
            bună experiența posibilă, care la randul ei va mări
            șansele ca
            {' '}
            <a href="https://web.dev/site-speed-and-business-metrics/" target="_blank" rel="noreferrer">
              proiectul/business-ul nostru să aibă succes.
            </a>
            .
          </p>
        </section>
        <section>
          <LessonHeading as="h3" id="lazy-loading">
            Lazy loading
          </LessonHeading>
          <blockquote>
            Most of the images on the web are downloaded,
            decoded and rendered only never to be seen, as [...]
            the user never scrolled that far.
            -
            {' '}
            <small>
              <a href="https://twitter.com/yoavweiss" target="_blank" rel="noopener noreferrer">Yoav Weiss</a>
            </small>
          </blockquote>
          <p>
            Citatul de mai sus a rămas - din păcate - la fel de adevărat...
            De cate ori nu ai deschis un articol și apoi ai ieșit de pe pagină fără
            a citi mai mult de primul paragraf?
          </p>
          <p>
            In background însă, browser-ul a încărcat toate imaginile,
            ceea ce e o risipa pentru ca noi nu le-am văzut pe toate.
            Ideal ar fi sa încărcăm imaginile
            <strong>
              {' '}
              doar atunci când avem nevoie de ele
              {' '}
            </strong>
            .
            {/* , */}
            {/* cum se întâmplă în video-ul din dreapta. */}
          </p>
          {/* TODO: video demo */}
          {/* <h1> VIDEO DEMO </h1> */}
          <p>
            Pentru a rezolva aceasta problema vom
            folosi atributul
            {' '}
            <strong>loading</strong>
            {' '}
            si valoarea
            {' '}
            <strong>lazy</strong>
            .
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<img 
  alt="Eiffel tower during night"
  src="eiffel-tower-during-night.jpg"
  loading="lazy"
/>
`}
          />
          <p>
            Acum browserul va descărca imaginea doar când ne
            <em>"apropiem"</em>
            {' '}
            de ea. Fiecare browser are propriile metrici legate
            de ce înseamnă această apropiere, însă nu trebuie să ne batem
            capul cu asta. Regula generala e să adăugăm atributul
            {' '}
            <span className="formatted">loading="lazy"</span>
            {' '}
            dacă avem multe imagini în pagină.
          </p>
        </section>
        <section>
          <LessonHeading as="h3" id="responsive-images">
            Responsive images
          </LessonHeading>
          <p>
            Am pornit de la imagini simple, am optimizat experienta folosind
            atributele width/height iar apoi am reusit sa incarcam doar imaginile
            de care avem nevoie folosind atributul
            {' '}
            <span className="formatted">
              loading
            </span>
            . Acum e momentul să mergem un pas mai departe în călătoria spre performanță
            și să încărcăm imaginea cea mai optimă din punct de vedere al rezoluției.
          </p>
          <p>
            De exemplu, să presupunem că avem o imagine care va acoperi întreaga pagină:
          </p>
          <LessonFigure
            withBorder
            src="https://d3tycb976jpudc.cloudfront.net/demo-assets/full-screen-image-illustration.jpg"
            alt="Imagine full-screen intr-o pagină Web"
          />
          <blockquote>
            La ce rezoluție salvăm imaginea pentru a fi 100% clară pe toate dispozitivele?
          </blockquote>
          <p>
            Știind că site-ul poate fi văzut atât de pe dispozitive mobile,
            cu ecrane mai mici, cât și de pe desktop-uri sau chiar televizoare,
            o primă soluție ar fi să salvăm imaginea la o rezoluție cât mai
            înaltă - să zicem 4K- pentru a ne asigura că totul e ok.
            {/* Pentru imaginea folosita ca demo in acest capitol inseamna o dimensiune de xMB. */}
          </p>
          <p>
            Deși soluția ar funcționa, ea nu e deloc eficientă căci vom încărca
            mereu aceeași imagine de rezoluție înaltă și mulți MBs.
            Pe telefon de exemplu, unde ecranul e mai mic, nu avem nevoie
            de toți cei 8+ milioane de pixeli (3840 x 2160).
            Dacă luăm în calcul și conexiunea la internet, experiența poate arăta așa:
          </p>
          <LessonFigure
            isVideo
            withBorder
            demo="/demo/html/huge-image-loading"
            src="https://d3tycb976jpudc.cloudfront.net/demo-assets/huge-image-loading.mp4"
            alt="Încărcarea unei imagini mari pe o conexiune înceată"
          />
          <p>
            Ideal ar fi ca pe telefon să încărcăm exact aceeasi imagine dar la o
            rezolutie mai mică, pe tabletă la o rezolutie mijlocie și la o rezolutie
            cat mai inalta pe ecrane mari: desktop and beyond.
          </p>
          <p>
            Din fericire putem rezolva aceasta problema folosindu-ne de atributul
            {' '}
            <strong>srcset</strong>
            . Mai întâi hai să luăm imaginea noastră și să facem resize la 3 rezoluții diferite:
          </p>
          <LessonFigure
            withBorder
            src="https://d3tycb976jpudc.cloudfront.net/demo-assets/red_bycicle_resize_infographic.jpg"
            alt="Aceeași imagine în 3 dimensiuni diferite"
          />
          <LessonTip>
            Pe Windows putem face resize cu
            {' '}
            <strong>Paint</strong>
            {' '}
            iar pe MacOS folosind
            {' '}
            <strong>
              <a href="https://support.apple.com/guide/preview/resize-rotate-or-flip-an-image-prvw2015/mac" target="_blank" rel="noreferrer">Preview App</a>
            </strong>
            {' '}
            .
          </LessonTip>
          <p>
            Apoi vom adăuga atributul srcset unde definim diferitele
            surse ale imaginii împreună cu dimensiunea (în lățime) a fiecăreia:
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<img srcset="
    /red_bycicle__high.jpg 4000w,
    /red_bycicle__med.jpg 2000w,
    /red_bycicle__low.jpg 800w,
  " 
  style="max-width: 100%" 
  alt="Red bycicle wheel" 
/>`}
          />
          {/* <LessonTip icon={faQuestionCircle}>
            Atributul
            {' '}
            <strong>style</strong>
            {' '}
            este folosit pentru a adauga reguli
            CSS elementelor.
            {' '}
            Inca nu am ajuns la acel capitol deci e absolut normal sa nu stii ce face.
            <br />
            {' '}
            <br />
            Totusi, te rugam sa-l pui acolo, impreuna cu valoarea `max-width: 100%.
            Astfel ne asiguram ca imaginile nu vor iesi din pagina.
          </LessonTip> */}
          <p>
            Siiii voilà. Daca mergem in
            {' '}
            <a href="/intro/devtools">modul responsive</a>
            {' '}
            - și tinem tabul
            {' '}
            <strong>network</strong>
            {' '}
            deschis vom observa cum diferite surse ale imaginii
            se descărca la rezoluții diferite.
          </p>
          <LessonFigure
            isVideo
            withBorder
            demo="/demo/html/img-srcset"
            src="https://d3tycb976jpudc.cloudfront.net/demo-assets/img-srcset.mp4"
            alt="Diferite surse ale imaginii se încarcă la rezoluții diferite"
          />
          <p>
            Te incurajam sa experimentezi si cu optiunea
            {' '}
            <Link href="intro/devtools">
              <a target="_blank">
                DRP (Device Pixel Ratio)
              </a>
            </Link>
            {' '}
            De exemplu, cu o valoarea
            de 2 si o latime de 650px se va incarca imaginea
            {' '}
            <strong>red_bycicle__med.jpg</strong>
            .
          </p>
        </section>
        <section>
          <LessonHeading as="h3" id="picture-element">
            {'<picture> element'}
          </LessonHeading>
          <p>
            Dupa cum ai vazut pana acum, elementul
            {' '}
            <span className="formatted">{'<img>'}</span>
            {' '}
            - desi destul de simplu in utilizare - ne ofera mai multe functionalitati
            care ne permit sa optimizam imaginile si experienta utilizatorilor.
            Cu toate acestea, mai avem o posibila optimizare
            - folosirea unor formate moderne pentru imagini.
          </p>
          <blockquote>
            De ce am vrea alte formate? Nu e
            {' '}
            <strong>JPG</strong>
            {' '}
            sau
            {' '}
            <strong>PNG</strong>
            {' '}
            de ajuns?
          </blockquote>
          <p>
            Hmmm.... nu chiar. Exista formate mai moderne precum WebP sau AVIF care
            ofera aceeasi calitate a imaginii la o dimensiune mai mica.
            De exemplu, uite diferentele de dimensiune ale acestei imagini in functie de format:
          </p>
          <LessonTable {...sizesTable} className="my-5" />
          <p>
            Dupa cum vezi formatele WebP si AVIF sunt mai mici decat JPG sau PNG,
            deci imaginile in acest format se vor incarca mai repede decat celelalte.
            Problema este ca nu toate browserele inteleg aceste noi formate.
          </p>
          <p>
            Dupa cum vedem pe
            {' '}
            <a href="https://CanIUse.com" target="_blank" rel="noreferrer">Can I use...</a>
            - AVIF are suport doar in ultimele versiuni
            de Google Chrome in timp ce WebP este mai comun insa tot lipseste din
            IOS 13 sau internet explorer 11.
          </p>
          <SideBySidePictures
            direction="column"
            img1={{
              src: 'https://d3tycb976jpudc.cloudfront.net/demo-assets/caniuse-webp.png',
              alt: 'Suportul browserelor pentru formatul WebP',
              demo: 'https://caniuse.com/?search=webp',
            }}
            img2={{
              src: 'https://d3tycb976jpudc.cloudfront.net/demo-assets/caniuse-avif.png',
              alt: 'Suportul browserelor pentru formatul Avif',
              demo: 'https://caniuse.com/?search=avif',
            }}
          />
          <p>
            Deci avem nevoie de o modalitate prin care browsere care inteleg
            <strong>WebP</strong>
            {' '}
            sau
            <strong> Avif</strong>
            sa descarce aceste formate, in timp ce celelalte sa ramana la JPG.
            Aceasta tehnica se numeste general
            {' '}
            <a href="/concepts/graceful-degradation">graceful degradation</a>
            .
          </p>
          <p>
            Thankfully, aceasta solutie ne este permisa de tagul
            <span className="formatted">{'<picture>'}</span>
            ,
            unde putem specifica mai multe surse pentru o imagine si sa lasam
            browserul sa aleaga pe cea pe care o intelege.
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<picture>
  <source 
    srcset="red_bycicle__high.avif 4000w, red_bycicle__med.avif 2000w, red_bycicle__low.avif 800w"
    type="image/avif">
  
  <source 
    srcset="red_bycicle__high.webp 4000w, red_bycicle__med.webp 2000w, red_bycicle__low.webp 800w"
    type="image/webp">
  
  <source 
    srcset="red_bycicle__high.jpg 4000w, red_bycicle__med.jpg 2000w, red_bycicle__low.jpg 800w" 
    type="image/jpeg">
  
  <img 
    alt="Red bycicle wheel" 
    srcset="red_bycicle__high.jpg 4000w, red_bycicle__med.jpg 2000w, red_bycicle__low.jpg 800w">
</picture>`}
          />
        </section>
        <p>
          Ordinea elementelor
          {' '}
          <span className="formatted">{'<source>'}</span>
          {' '}
          este extrem de importanta caci browserul le va parcurge
          de sus-in-jos si o va alege pe prima compatibila.
        </p>
        <div className="dots" />
        <LessonResources
          className="my-5"
          links={[{
            text: 'Todo',
            url: 'https://google.com',
          }, {
            text: 'Todo',
            url: 'https://linkedin.com',
          }]}
        />
      </Lesson>
    </>
  );
}

function CoverSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      data-name="Layer 1"
      viewBox="0 0 922.73 636.56"
      width="922.73"
      height="636.56"
      preserveAspectRatio="xMinYMax slice"
    >
      <defs>
        <linearGradient
          id="a"
          x1="704.04"
          x2="704.04"
          y1="628.14"
          y2="138.69"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.01" stopColor="gray" stopOpacity="0.25" />
          <stop offset="0.54" stopColor="gray" stopOpacity="0.12" />
          <stop offset="1" stopColor="gray" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="560.05"
          x2="560.05"
          y1="462.46"
          y2="29.48"
          xlinkHref="#a"
        />
        <linearGradient
          id="d"
          x1="600"
          x2="600"
          y1="694.72"
          y2="205.28"
          xlinkHref="#a"
        />
        <linearGradient
          id="e"
          x1="456.01"
          x2="456.01"
          y1="529.04"
          y2="96.07"
          xlinkHref="#a"
        />
        <linearGradient
          id="g"
          x1="495.96"
          x2="495.96"
          y1="761.31"
          y2="271.86"
          xlinkHref="#a"
        />
        <linearGradient
          id="h"
          x1="351.97"
          x2="351.97"
          y1="595.63"
          y2="162.65"
          xlinkHref="#a"
        />
        <clipPath id="c" transform="translate(-144.57 -138.69)">
          <rect
            width="617.65"
            height="410.82"
            x="395.46"
            y="178.13"
            fill="#fff"
            rx="8.85"
            ry="8.85"
          />
        </clipPath>
        <clipPath id="f" transform="translate(-144.57 -138.69)">
          <rect
            width="617.65"
            height="410.82"
            x="291.42"
            y="244.72"
            fill="#fff"
            rx="8.85"
            ry="8.85"
          />
        </clipPath>
        <clipPath id="i" transform="translate(-144.57 -138.69)">
          <rect
            width="617.65"
            height="410.82"
            x="187.38"
            y="311.3"
            fill="#fff"
            rx="8.85"
            ry="8.85"
          />
        </clipPath>
      </defs>
      <path
        fill="url(#a)"
        d="M1055 612.72a15.34 15.34 0 01-15.26 15.42h-671.4a15.34 15.34 0 01-15.26-15.42V154.11a15.34 15.34 0 0115.26-15.42h671.4a15.34 15.34 0 0115.26 15.42"
        transform="translate(-144.57 -138.69)"
      />
      <path
        fill="#f8f8f8"
        d="M902.54 466.52a14.91 14.91 0 01-14.91 14.91H231.8a14.91 14.91 0 01-14.91-14.91V23.19A14.91 14.91 0 01231.8 8.31h655.83a14.91 14.91 0 0114.91 14.91"
      />
      <rect
        width="633.92"
        height="432.98"
        x="243.09"
        y="29.48"
        fill="url(#b)"
        data-name="&lt;Rectangle&gt;"
        rx="8.85"
        ry="8.85"
      />
      <rect
        width="617.65"
        height="410.82"
        x="250.89"
        y="39.44"
        fill="#fff"
        rx="8.85"
        ry="8.85"
      />
      <g clipPath="url(#c)">
        <path
          xmlns="http://www.w3.org/2000/svg"
          fill="#2980b9"
          d="M216.54 446.49L388.98 248.9a34.33 34.33 0 0148.57-3.17l48.29 42.58a34.33 34.33 0 0044.8.54l147.58-124.03a34.33 34.33 0 0147.49 3.19l181.11 199.3a34.33 34.33 0 018.78 20l7 78.63a34.33 34.33 0 01-34.17 37.45h-646a34.33 34.33 0 01-34.31-33.29 34.33 34.33 0 018.42-23.61z"
        />
      </g>
      <circle cx="325.27" cy="105.32" r="38.25" fill="#eb4d4b" />
      <path
        fill="url(#d)"
        d="M951 679.3a15.34 15.34 0 01-15.26 15.42H264.3A15.34 15.34 0 01249 679.3V220.7a15.34 15.34 0 0115.26-15.42H935.7A15.34 15.34 0 01951 220.7"
        transform="translate(-144.57 -138.69)"
      />
      <path
        fill="#f8f8f8"
        d="M798.5 533.11a14.91 14.91 0 01-14.91 14.91H127.76a14.91 14.91 0 01-14.91-14.91V89.77a14.91 14.91 0 0114.91-14.91h655.83a14.91 14.91 0 0114.91 14.91"
      />
      <rect
        width="633.92"
        height="432.98"
        x="139.05"
        y="96.07"
        fill="url(#e)"
        data-name="&lt;Rectangle&gt;"
        rx="8.85"
        ry="8.85"
      />
      <rect
        width="617.65"
        height="410.82"
        x="146.85"
        y="106.03"
        fill="#fff"
        rx="8.85"
        ry="8.85"
      />
      <g clipPath="url(#f)">
        <path
          xmlns="http://www.w3.org/2000/svg"
          fill="#2980b9"
          d="M112.5 513.08l172.44-197.6a34.33 34.33 0 0148.58-3.17l48.28 42.6a34.33 34.33 0 0044.8.54L574.18 231.4a34.33 34.33 0 0147.49 3.19l181.1 199.34a34.33 34.33 0 018.78 20l7 78.63a34.33 34.33 0 01-34.19 37.36h-646a34.33 34.33 0 01-34.31-33.29 34.33 34.33 0 018.45-23.55z"
        />
      </g>
      <circle cx="221.23" cy="171.9" r="38.25" fill="#eb4d4b" />
      <path
        fill="url(#g)"
        d="M846.92 745.89a15.34 15.34 0 01-15.26 15.42h-671.4A15.34 15.34 0 01145 745.89V287.28a15.34 15.34 0 0115.26-15.42h671.4a15.34 15.34 0 0115.26 15.42"
        transform="translate(-144.57 -138.69)"
      />
      <path
        fill="#fff"
        d="M694.43 599.69a14.91 14.91 0 01-14.91 14.91H23.72a14.91 14.91 0 01-14.91-14.91V156.31a14.91 14.91 0 0114.91-14.91h655.83a14.91 14.91 0 0114.88 14.91"
      />
      <rect
        width="633.92"
        height="432.98"
        x="35.01"
        y="162.65"
        fill="url(#h)"
        data-name="&lt;Rectangle&gt;"
        rx="8.85"
        ry="8.85"
      />
      <rect
        width="617.65"
        height="410.82"
        x="42.81"
        y="172.61"
        fill="#fff"
        rx="8.85"
        ry="8.85"
      />
      <g clipPath="url(#i)">
        <path
          xmlns="http://www.w3.org/2000/svg"
          fill="#2980b9"
          d="M8.43 579.66l172.48-197.59a34.33 34.33 0 0148.52-3.17l48.28 42.6a34.33 34.33 0 0044.8.54l147.63-124.05a34.33 34.33 0 0147.49 3.19l181.1 199.34a34.33 34.33 0 018.78 20l7 78.63a34.33 34.33 0 01-34.19 37.36h-646a34.33 34.33 0 01-34.31-33.2 34.33 34.33 0 018.42-23.65z"
        />
      </g>
      <circle cx="117.19" cy="238.49" r="38.25" fill="#eb4d4b" />
    </svg>
  );
}
