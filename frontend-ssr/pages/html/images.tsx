import React from 'react';
import Head from 'next/head';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import SEOTags from '~/components/SEOTags';
import Lesson, {
  LessonContributors, LessonCover, LessonHeading, LessonResources, LessonTable, LessonTableProps, LessonTip,
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

const sizesTable : LessonTableProps = {
  head: ['JPG', 'PNG', 'WebP', 'AVIF'],
  side: ['SD', 'HD', 'FullHD'],
  rows: [
    ['XXX MB', 'XXX MB', 'XXX MB', 'XXX MB'],
    ['XXX MB', 'XXX MB', 'XXX MB', 'XXX MB'],
    ['XXX MB', 'XXX MB', 'XXX MB', 'XXX MB'],
  ],
};

export default function ImagesLesson() {
  return (
    <>
      <Head>
        <title> Introducere | FrontEnd.ro</title>
        <link rel="icon" href="/favicon.ico" />
        <SEOTags
          title="Imagini | Lecție HTML"
          description="Învață să adaugi și optimizezi imagini în paginile Web."
          url="https://FrontEnd.ro/html/images"
        />
      </Head>
      <Lesson chapters={chapters}>
        <h1> Imagini </h1>

        <LessonContributors contributors={contributors} />
        <LessonCover>
          <CoverSVG />
        </LessonCover>
        <p>
          Cred ca putem cu totii admite ca aplicatiile Web ar
          fi mult mult mai boring fara imagini. Deci hai sa
          incheiem asteptarea si sa vedem cum adaugam imagini
          in site-urile noastre si care sunt cele mai bune practici legate de acest subiect.
        </p>
        <section>
          <h2> The Basics </h2>
          <LessonHeading as="h3" id="img-element">
            {'<img> element'}
          </LessonHeading>
          <p>
            Primul si cel mai obisnuit mod de a adauga o imagine este folosind
            elementul img alaturi de 2 atribute:
          </p>
          <ul className="with--bullets">
            <li>
              <strong>src</strong>
              : pentru a specifica URL-ul imaginii
            </li>
            <li>
              <strong>alt</strong>
              : pentru a descrie imaginea in format text - in caz ca aceasta nu poate fi incarcata
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
            Daca imaginea se afla la acel URL si avem conexiune la internet,
            vom obtine o pagina ca in imaginea din stanga. Insa, daca
            browserul nu a putut incarca imaginea - vom vedea descrierea
            text - imaginea din dreapta.
          </p>
          <SideBySidePictures
            img1={{ src: '/images/lessons/images/golden-retriever-and-ball.jpg', alt: 'Imagine încărcată cu succes într-o pagină Web' }}
            img2={{ src: '/images/lessons/images/golden-retriever-and-ball.jpg', alt: 'Descrierea text a imaginii, dacă aceasta nu a putut fi încărcată' }}
          />
          <p>
            Este foarte important sa nu uitam de atributul
            {' '}
            <strong>alt</strong>
            .
            Pe langa cazul mentionat mai sus, acesta ajuta si persoanele cu dizabilitati
            ce consuma continut Web via screen readere. Uite un demo folosind progamul XXX?
          </p>
          <AudioPlayer className="my-5" src="" title="Web captions demo" />
        </section>
        <section>
          <LessonHeading as="h3" id="width-and-height">
            Width & Height
          </LessonHeading>
          <p>
            De multe ori imaginile de pe site-uri isi vor adapta dimensiunea in functie de
            ecranul dispozitivul folosit: mai mici pe telefoane si tablete, mai mari
            pe laptop-uri si desktop-uri.
          </p>
          <p>
            In demo-ul de mai jos imaginea este  "full-screen" deci in functie
            de ecran ea va avea alta dimensiuni.
          </p>
          <h1> DEMO </h1>
          <p>
            La fel si in galeria de mai jos, unde avem exact 3 imagini pe fiecare rand.
            Dimensiunea acestora e proportionala cu ecranul, mai exact 30% din dimensiunea lui.
          </p>
          <h1> DEMO </h1>
          <p>
            Insa exista situatii in care o imagine va avea aceleași dimensiuni indiferent
            de dispozitiv. Un exemplu ar putea fi logo-ul unui site/companii
            aflat de obicei in
            {' '}
            <strong className="formatted">{'<header>'}</strong>
            {' '}
            -ul paginii.
          </p>
          <h1> DEMO </h1>
          <p>
            In aceste cazuri  - in care stim dinainte dimensiunea - este recomandat
            sa adaugam si atributele
            <strong> width </strong>
            si
            <strong>
              {' '}
              height
              {' '}
            </strong>
            pe imagine.
            Astfel, browser-ul va sti dimensiunile acesteia inainte de a incarca
            imaginea iar experienta utilizatorilor va fi extrem de fluida.
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<img 
  src="" 
  width="" 
  height="" 
/>`}
          />
        </section>
        <section>
          <p>
            Ce am discutat mai sus reprezinta fundamentele imaginilor in HTML.
            Sunt lucrurile fara de care site-urile noastre ar fi doar text...

          </p>

          <p>
            Mai jos continuam sa discutam despre diverse tehnici
            pentru a optimiza servirea imaginilor si a oferi cea mai
            buna experienta posibila, care la randul ei va mari
            sansele ca proiectul/business-ul nostru sa aiba succes.
            Daca esti curios sa citesti mai multe despre importanta
            performantei, arunca un ochi pe [acest articol].
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
            Citatul de mai sus a ramas - din pacate - la fel de adevarat...
            De cate ori nu ai deschis un articol si apoi ai iesit de pe pagina fara
            a citi mai mult de primul paragraf?
          </p>
          <p>
            In background insa, browser-ul a incarcat toate imaginile,
            ceea ce e o risipa pentru ca noi nu le-am vazut pe toate.
          </p>
          <p>
            Ideal ar fi sa incarcam imaginile
            <strong>doar atunci cand avem nevoie de ele</strong>
            .
            Cum se intampla in video-ul din dreapta, unde imaginile sunt incarcate
            cand ne apropiem de ele, versus in cel din stanga unde vedem comportamentul default.
          </p>
          <h1> VIDEO DEMO </h1>
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
  src=""
  loading="lazy"
/>
`}
          />
          <p>
            In acest mod, browserul va downloada imaginea doar cand ne
            "apropiem" de ea. Fiecare browser are propriile metrici legate
            de ce inseamna aceasta apropiere, insa nu trebuie sa ne batem
            capul cu asta. Regula generala e sa adaugam atributul loading
            cu valoarea lazy daca avem un articol sau o galerie cu multe
            imagini pentru a le incarca doar pe cele de care avem nevoie.
          </p>
        </section>
        <section>
          <LessonHeading as="h3" id="responsive-images">
            Responsive images
          </LessonHeading>
          <p>
            Am pornit de la imagini simple, am optimizat experienta folosind
            atributele width/height iar apoi am reusit sa incarcam doar imaginile
            de care avem nevoie folosind atributul loading.
          </p>
          <p>
            Acum e momentul sa mergem un pas mai departe in calatoria spre performanta
            si sa incarcam imaginea cea mai optima din punct de vedere al rezolutiei.
          </p>
          <p>
            De exemplu, sa presupunem ca avem o imagine care va acoperi intreaga pagina,
            ca in poza de mai jos.
          </p>
          <h1> DEMO </h1>
          <p>
            Intrebarea la care trebuie sa raspundem este: la ce rezolutie salvam imaginea
            pentru a fi 100% clara pe toate dispozitivele?
          </p>
          <p>
            Stiind ca site-ul poate fi vazut atat de pe dispozitive cu ecrane mici cat
            si de pe ecrane uriase, o prima solutie ar fi sa salvam imaginea la o
            rezolutie cat mai inalta - sa zicem 4K- pentru a ne asigura ca totul e
            ok. Pentru imaginea folosita ca demo in acest capitol inseamna o dimensiune de xMB.
          </p>
          <p>
            Desi solutia aceasta functioneaza, ea nu e cea mai eficienta. Pe telefon,
            vom incarca aceeasi imagine uriasa, desi ecranul e mult mai mic si nu
            avem nevoie de toti acesti pixeli. Daca luam in calcul si conexiunea
            la internet, experienta poate arata asa:
          </p>
          <h1> VIDEO DEMO </h1>
          <p>
            Ideal ar fi ca pe telefon sa incarcam exact aceeasi imagine dar la o
            rezolutie mai mica, pe tableta la o rezolutie mijlocie si la o rezolutie
            cat mai inalta pe ecrane mari, desktop and beyond.
          </p>
          <p>
            Din fericire putem rezolva aceasta problema folosindu-ne de atributele
            <strong>srcset</strong>
            {' '}
            si
            <strong>sizes</strong>
            .
          </p>
          <p>
            Mai intai hai sa luam imaginea noastra si sa facem resize la 3 rezolutii diferite:
          </p>
          <ul>
            <li> X </li>
            <li> Y </li>
            <li> Z </li>
          </ul>
          <LessonTip>
            Pe Windows putem face resize cu Paint, pe MacOS folosind X iar pe Linux Y.
          </LessonTip>
          <p>
            Apoi vom adauga atributul srcset unde definim diferitele
            surse ale imaginii impreuna cu dimensiunea (in latime) a fiecareia.
            In cazul nostru vom adauga urmatoarea bucata de cod:
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<img 
  srcset=""
  style="max-width: 100%"
  alt=""
/>`}
          />
          <LessonTip icon={faQuestionCircle}>
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
            Totusi, te rugam sa-l pui acolo, impreuna cu valoarea `max-width: 100%. Astfel ne asiguram ca imaginile nu vor iesi din pagina.
          </LessonTip>
          <p>
            Siiii voilà. Daca mergem in
            {' '}
            <a href="/intro/devtools">modul responsive</a>
            {' '}
            - si tinem tabul
            {' '}
            <strong>network</strong>
            {' '}
            deschis vom observa cum diferite surse ale imaginii
            se vor descarca la rezolutii diferite.
          </p>
          <h1> VIDEO </h1>
          <p>
            Te incurajam sa te "joci" si cu optiunea DRP (pixels per inch or smth like that) pentru
            a vedea ce imagini se incarca la rezolutii diferite. De exemplu, cu o valoarea de 2 si o latime de 450px se va incarca imaginea HD. Asta nu e o greseala, pentru ca avand setat DRP = 2 practic avem dublu numarul de pixeli pe ecran.
          </p>
          <div className="dots" />
          <p>
            Mergand mai departe, e posibil ca in pagina finala imaginea sa aiba
            o dimensiune fixa - de exemplu 200px pe telefon si 500px pe tablete.
            In cazuri de genul, e recomandat sa specificam asta prin atributul `sizes`, dandu-i browserului mai multe informatii despre care e cea mai buna sursa.
          </p>
          <p>
            Dupa cum vezi, avem mai multe instructiuni separate din virgula. Primele 2 contin asa numitele
            {' '}
            <a href="/css/media-queries">media-query</a>
            In cazul asta ele spun asta:
          </p>
          <ul>
            <li> daca X - Y </li>
            <li> daca X - Y </li>
            <li> daca X - Y </li>
          </ul>
          <p>
            Si uite ce imagini se incarca cand ne jucam cu dimensiunile ecranului:
          </p>
          <p>
            Te incurajam sa experiementezi cu valorile de acolo in timp ce tii
            tabul network deschis, pentru a intelege si mai bine ce/de ce anumite imagini vor fi incarcate.
          </p>
        </section>
        <section>
          <LessonHeading as="h3" id="picture-element">
            {'<picture> element'}
          </LessonHeading>
          <p>
            Dupa cum ai vazut pana acum, elementul `
            <img />
            ` - desi destul de simplu in utilizare - ne ofera mai multe functionalitati care ne permit sa optimizam imaginile si experienta utilizatorilor. Cu toate acestea, mai avem o posibila optimizare pe care din pacate acesta nu o suporta - si anume formate multiple ale imaginii.
          </p>
          <blockquote>
            De ce am vrea mai multe formate? Nu e
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
            Hmmm.... nu chiar. Exista formate mai moderne precum WebP sau AVIF care ofera aceeasi calitate a imaginii la o dimensiune mai mica.
            De exemplu, uite diferentele de dimensiune ale acestei imagini in functie de format:
          </p>
          <LessonTable {...sizesTable} className="my-5" />
          <p>
            Dupa cum vezi formatele WebP si AVIF sunt mai mici decat JPG sau PNG,
            deci imaginile in acest format se vor incarca mai repede decat celelalte.
            Problema este ca nu toate browserele inteleg aceste noi formate `webp`.
            Dupa cum vedem pe `caniuse.com` - AVIF are suport doar in ultimele versiuni
            de Google Chrome in timp ce WebP este mai comun insa tot lipseste din
            IOS 13 sau internet explorer 11.
          </p>
          <h1> DEMO can i use</h1>
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
 <!-- -->
</picture>`}
          />
        </section>
        <p>
          Ordinea elementelor
          {' '}
          <span className="formatted">{'<source>'}</span>
          {' '}
          este extrem de importanta caci browserul le va parcurge de sus-in-jos si o va alege pe prima compatibila.
        </p>
        <h1> DEMOOO </h1>
        <p>
          Deci, pentru cea mai buna si optima experienta posibila, putem converti imaginea la 3 formate, iar apoi fiecarui format ii vom face resize la 3 rezolutii diferite. Astfel indiferent de browser si dispozitiv, utilizatorii vor avea o experienta excelenta.
        </p>
        <LessonResources
          className="my-5"
          links={[{
            text: 'Link1',
            url: 'https://google.com',
          }, {
            text: 'Link2',
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
