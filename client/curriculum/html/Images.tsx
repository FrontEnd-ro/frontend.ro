import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { faExclamationCircle, faExclamationTriangle, faQuestion } from '@fortawesome/free-solid-svg-icons';
import {
  LessonCover,
  LessonFigure,
  LessonHeading,
  LessonQuote,
  LessonResources,
  LessonTable,
  LessonTableProps,
  LessonTip,
  LessonFirstSentence,
} from '~/components/lessons';
import Highlight from '~/components/Highlight/Highlight';
import SideBySidePictures from '~/components/SideBySidePictures';
import FormattedText from '~/components/FormattedText';
import { getLessonById } from '~/services/Constants';
import List from '~/components/List';

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

export default function ImagesContent() {
  const lessonInfo = getLessonById('imagini');

  return (
    <>
      <LessonCover>
        <Image
          width="2400"
          height="1260"
          alt="Doodle cu rama unei imagini"
          src={`${process.env.CLOUDFRONT_PUBLIC}/public/seo/html-images_2400w.jpg`}
        />
      </LessonCover>
      <LessonFirstSentence>
        Cred că putem cu toții admite că un Internet fără imagini ar
        fi destul de plictisitor. Deci hai să
        încheiem așteptarea și să vedem cum adăugăm imagini
        în site-urile noastre și care sunt cele mai bune practici legate de acest subiect.
      </LessonFirstSentence>
      <section>
        <LessonHeading as="h2" id={lessonInfo.chapters[0].id}>
          {lessonInfo.chapters[0].title}
        </LessonHeading>
        <p>
          Primul și cel mai comun mod de a adăuga o imagine este folosind elementul
          {' '}
          <strong>img</strong>
          {' '}
          alături de 2 atribute:
        </p>
        <List variant="bullets">
          <li>
            <strong>src</strong>
            : pentru a specifica URL-ul imaginii
          </li>
          <li>
            <strong>alt</strong>
            : pentru a descrie conținutul imaginii - în caz că aceasta nu poate fi încărcată
          </li>
        </List>
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
          vom obține o pagină ca în imaginea din stânga. Însă, dacă
          browserul nu a putut încărca imaginea, vom vedea descrierea
          text ca în exemplul din dreapta.
        </p>
        <SideBySidePictures
          img1={{
            src: 'https://d3tycb976jpudc.cloudfront.net/demo-assets/golden-retriever-and-ball.jpg',
            alt: 'Imagine încărcată cu succes într-o pagină Web',
            demo: '/demo/html/imagine-incarcata-cu-succes',
          }}
          img2={{
            src: '/images/lessons/images/image-alt.png',
            alt: 'Descrierea text a imaginii, dacă aceasta nu a putut fi încărcată',
            demo: '/demo/html/text-alternativ-imagine',
          }}
        />
        <p>
          Este foarte important să nu uităm de atributul
          {' '}
          <strong>alt</strong>
          .
          Pe lângă cazul menționat mai sus, acesta ajută și persoanele cu dizabilități
          ce consumă conținut Web via screen readere.
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
          <Link href="/html/validarea-paginilor-html">
            <a>
              considerată validă
            </a>
          </Link>
          .
        </LessonTip>
      </section>
      <section>
        <LessonHeading as="h2" id={lessonInfo.chapters[1].id}>
          {lessonInfo.chapters[1].title}
        </LessonHeading>
        <p>
          De multe ori imaginile de pe site-uri își vor adapta dimensiunea în funcție de
          ecranul dispozitivului folosit: mai mici pe telefoane și tablete, mai mari
          pe laptop-uri și desktop-uri.
        </p>
        <p>
          În galeria de mai jos avem 2 imagini pe fiecare rând, fiecare ocupând
          exact 45% din lățimea ecranului - indiferent care e aceasta.
        </p>
        <LessonFigure
          withBorder
          src="https://d3tycb976jpudc.cloudfront.net/demo-assets/fixed-gallery.png"
          alt="Galerie cu 2 imagini pe fiecare rând"
          demo="/demo/html/galerie-imagini-fixa"
        />
        <p>
          Însă există situații în care o imagine va avea aceleași dimensiuni fixe indiferent
          de dispozitiv. Un exemplu ar putea fi logo-ul unei companii
          aflat de obicei în
          {' '}
          <FormattedText as="strong">{'<header>'}</FormattedText>
          {' '}
          -ul paginii.
        </p>
        <LessonFigure
          withBorder
          src="https://d3tycb976jpudc.cloudfront.net/demo-assets/fixed-size-image.png"
          alt="Imagine cu dimensiunile fixe"
          demo="/demo/html/imagine-cu-dimensiuni-fixe"
        />
        <p>
          În astfel de cazuri, în care
          {' '}
          <strong>știm dinainte dimensiunea</strong>
          {' '}
          , este recomandat
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
          iar experiența utilizatorilor va fi extrem de fluidă. Astfel evităm
          situația de mai jos unde textul se re-aranjează după încărcarea imaginii
          - problemă cunoscută sub numele de
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
          bună experiență posibilă, care la randul ei va mări
          șansele ca
          {' '}
          <a href="https://web.dev/site-speed-and-business-metrics/" target="_blank" rel="noreferrer">
            proiectul/business-ul nostru să aibă succes.
          </a>
          .
        </p>
      </section>
      <section>
        <LessonHeading as="h2" id={lessonInfo.chapters[2].id}>
          {lessonInfo.chapters[2].title}
        </LessonHeading>
        <LessonQuote>
          Most of the images on the web are downloaded,
          decoded and rendered only never to be seen, as [...]
          the user never scrolled that far.
          -
          {' '}
          <small>
            <a href="https://twitter.com/yoavweiss" target="_blank" rel="noopener noreferrer">Yoav Weiss</a>
          </small>
        </LessonQuote>
        <p>
          Citatul de mai sus a rămas - din păcate - la fel de adevărat...
          De câte ori nu ai deschis o pagină Web și apoi ai ieșit de acolo fără
          a citi mai mult de primul paragraf?
        </p>
        <p>
          În background însă, browser-ul a încărcat toate imaginile,
          ceea ce e o risipă pentru că noi nu le-am văzut pe toate.
          Ideal ar fi să încărcăm imaginile
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
          Pentru a rezolva această problemă vom
          folosi atributul
          {' '}
          <strong>loading</strong>
          {' '}
          și valoarea
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
          capul cu asta. Regula generală e să adăugăm atributul
          {' '}
          <FormattedText as="strong">loading="lazy"</FormattedText>
          {' '}
          dacă avem multe imagini în pagină.
        </p>
      </section>
      <section>
        <LessonHeading as="h2" id={lessonInfo.chapters[3].id}>
          {lessonInfo.chapters[3].title}
        </LessonHeading>
        <p>
          Am pornit de la imagini simple, am optimizat experiența folosind
          atributele width/height iar apoi am reușit să incărcăm doar imaginile
          de care avem nevoie folosind atributul
          {' '}
          <FormattedText as="strong">
            loading
          </FormattedText>
          . Acum e momentul să mergem un pas mai departe în călătoria spre performanță
          și să încărcăm imaginea cea mai potrivită din punct de vedere al rezoluției.
        </p>
        <p>
          De exemplu, să presupunem că avem o imagine care va acoperi întreaga pagină:
        </p>
        <LessonFigure
          withBorder
          src="https://d3tycb976jpudc.cloudfront.net/demo-assets/full-screen-image-illustration.jpg"
          alt="Imagine full-screen intr-o pagină Web"
        />
        <LessonQuote>
          La ce rezoluție salvăm imaginea pentru a fi 100% clară pe toate dispozitivele?
        </LessonQuote>
        <p>
          Știind că site-ul poate fi văzut atât de pe dispozitive mobile,
          cu ecrane mai mici, cât și de pe desktop-uri sau chiar televizoare,
          o primă soluție ar fi să salvăm imaginea la o rezoluție cât mai
          înaltă - să zicem 4K- pentru a ne asigura că totul e ok.
          {/* Pentru imaginea folosita ca demo in acest capitol inseamna o dimensiune de xMB. */}
        </p>
        <p>
          <strong>
            Deși soluția ar funcționa, ea nu e deloc eficientă
          </strong>
          , căci vom încărca
          mereu aceeași imagine de rezoluție înaltă și mulți MBs.
          Pe telefon de exemplu, unde ecranul e mai mic, nu avem nevoie
          de toți cei 8+ milioane de pixeli (3840 x 2160).
          Dacă luăm în calcul și conexiunea la internet, experiența poate arăta așa:
        </p>
        <LessonFigure
          isVideo
          withBorder
          demo="/demo/html/incarcarea-unei-imagini-mari"
          src="https://d3tycb976jpudc.cloudfront.net/demo-assets/huge-image-loading.mp4"
          alt="Încărcarea unei imagini mari pe o conexiune înceată"
        />
        <p>
          Ideal ar fi ca pe telefon să încărcăm exact aceeași imagine dar la o
          rezoluție mai mică, pe tabletă la o rezoluție mijlocie și la o rezoluție
          cât mai inaltă pe ecrane mari: desktop and beyond.
        </p>
        <section>
          <LessonHeading as="h3" id={lessonInfo.chapters[3].subchapters[0].id}>
            {lessonInfo.chapters[3].subchapters[0].title}
          </LessonHeading>
          <p>
            Din fericire putem rezolva această problemă folosindu-ne de atributele
            {' '}
            <strong>srcset</strong>
            {' '}
            și
            {' '}
            <strong>sizes</strong>
            . Hai să luăm imaginea noastră și să facem resize la 3 rezoluții diferite:
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
            Apoi vom adăuga atributul
            {' '}
            <strong>srcset</strong>
            {' '}
            unde definim diferitele
            surse ale imaginii împreună cu dimensiunea (în lățime) a fiecăreia.
            Iar cu atributul
            <strong>sizes</strong>
            vom specifica ce dimensiuni va avea imaginea
            în funcție de dimensiunea ecranului:
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
  sizes="(max-width: 800px) 700px, 1000px"
  alt="Red bycicle wheel"
  src="/red_bycicle__med.jpg"
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
            Șiiii voilà. Dacă mergem în
            {' '}
            <a href="/intro/devtools">modul responsive</a>
            {' '}
            - și ținem tabul
            {' '}
            <strong>network</strong>
            {' '}
            deschis vom observa cum diferite surse ale imaginii
            se încarcă la rezoluții diferite.
          </p>
          <LessonFigure
            isVideo
            withBorder
            demo="/demo/html/atributul-srcset"
            src="https://d3tycb976jpudc.cloudfront.net/demo-assets/img-srcset.mp4"
            alt="Diferite surse ale imaginii se încarcă la rezoluții diferite"
          />
          <LessonTip icon={faExclamationCircle}>
            O imagine cu
            {' '}
            <FormattedText as="span">srcset=""</FormattedText>
            {' '}
            trebuie să conțină și atributul
            {' '}
            <FormattedText as="span">src=""</FormattedText>
            {' '}
            pentru a fi validă.
            Motivul îl reprezintă browserele mai vechi
            ce nu înțeleg atributul
            {' '}
            <FormattedText as="span">srcset</FormattedText>
            , așadar îl vor ignora și
            vor arăta imaginea de la
            {' '}
            <FormattedText as="span">src</FormattedText>
            .
          </LessonTip>

          <p>
            Te încurajăm să experimentezi și cu opțiunea
            {' '}
            <Link href="intro/devtools">
              <a target="_blank">
                DRP (Device Pixel Ratio)
              </a>
            </Link>
            {' '}
            De exemplu, cu o valoare
            de 2 și o lățime de 650px se va incărca imaginea
            {' '}
            <strong>red_bycicle__med.jpg</strong>
            .
          </p>
        </section>
        <section>
          <LessonHeading as="h3" id={lessonInfo.chapters[3].subchapters[1].id}>
            {lessonInfo.chapters[3].subchapters[1].title}
          </LessonHeading>
          <p>
            Până de curând singurul mod de a face imaginile din CSS (cele puse prin
            {' '}
            <FormattedText as="strong">background-image:</FormattedText>
            {' '}
            )
            responsive a fost să punem mai multe reguli
            {' '}
            <FormattedText as="strong">@media-query</FormattedText>
            {' '}
            și să specificăm pentru fiecare o altă imagine.
          </p>
          <p>
            Dar odată cu introducerea proprietății
            {' '}
            <a
              target="_blank"
              className="text-bold"
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/image/image-set()"
              rel="noreferrer"
            >
              image-set()
            </a>
            {' '}
            putem lăsa browserul să aleagă cea mai bună imagine în funcție de rezoluția ecranului:
          </p>
          <Highlight
            language="css"
            code={`
.cover {
  height: 50vh;

  background-image: -webkit-image-set(
    url("red_bycicle__low.jpg") 1x,
    url("red_bycicle__med.jpg") 2x, 
    url("red_bycicle__high.jpg") 4x
  );

  background-image: image-set(
    url("red_bycicle__low.jpg") 1x,
    url("red_bycicle__med.jpg") 2x, 
    url("red_bycicle__high.jpg") 4x
  );
}
              `}
          />
          <LessonTip icon={faQuestion}>
            Această proprietate nu are încă suport nativ în toate Browserele,
            așa că în exemplul de mai sus am prefixat regulat cu
            {' '}
            <FormattedText as="span">-webkit</FormattedText>
            {' '}
            pentru a funcționa și în Chrome sau Safari.
          </LessonTip>
        </section>
      </section>
      <section>
        <LessonHeading as="h2" id={lessonInfo.chapters[4].id}>
          {lessonInfo.chapters[4].title}
        </LessonHeading>
        <p>
          După cum ai văzut până acum, elementul
          {' '}
          <FormattedText as="span">{'<img>'}</FormattedText>
          {' '}
          - deși destul de simplu în utilizare - ne oferă mai multe funcționalități
          care ne permit să optimizăm imaginile și experiența utilizatorilor.
          Cu toate acestea, a mai rămas totuși o ultimă optimizare,
          și anume folosirea unor formate moderne pentru imagini.
        </p>
        <LessonQuote>
          De ce am vrea alte formate? Nu sunt
          {' '}
          <strong>JPG</strong>
          {' '}
          sau
          {' '}
          <strong>PNG</strong>
          {' '}
          de ajuns?
        </LessonQuote>
        <p>
          Hmmm.... nu chiar. Există formate mai moderne precum
          {' '}
          <strong>WebP</strong>
          {' '}
          sau
          {' '}
          <strong>AVIF</strong>
          {' '}
          care
          oferă aceeași calitate a imaginii la o dimensiune mai mică.
          Uite diferențele de dimensiune ale acestei imagini în funcție de format:
        </p>
        <LessonTable {...sizesTable} className="my-5" />
        <p>
          După cum vezi formatele WebP și AVIF sunt mai mici decât JPG sau PNG,
          deci imaginile în acest format se vor incărca mai repede decât celelalte.
          Problema este că nu toate browserele înțeleg aceste noi formate.
        </p>
        <p>
          După cum vedem pe
          {' '}
          <a href="https://CanIUse.com" target="_blank" rel="noreferrer">Can I use...</a>
          - AVIF are suport doar în ultimele versiuni
          de Google Chrome în timp ce WebP este mai comun însă tot lipsește din
          IOS 13 sau Internet Explorer 11.
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
          Deci avem nevoie de o modalitate prin care browsere care înțeleg
          {' '}
          <strong>WebP</strong>
          {' '}
          sau
          {' '}
          <strong> Avif</strong>
          {' '}
          să descarce aceste formate, în timp ce celelalte să rămână la JPG.
          Această tehnică se numește general
          {' '}
          <a href="/concepte/graceful-degradation">graceful degradation</a>
          .
        </p>
        <p>
          Thankfully, această soluție ne este permisă de tag-ul
          {' '}
          <FormattedText as="strong">{'<picture>'}</FormattedText>
          {' '}
          ,
          unde putem specifica mai multe surse pentru o imagine și să lăsăm
          browserul să o aleagă pe cea pe care o înțelege.
        </p>
        <Highlight
          className="my-5"
          language="html"
          code={`
<picture>
  <source 
    srcset="
      red_bycicle__high.avif 4000w, 
      red_bycicle__med.avif 2000w, 
      red_bycicle__low.avif 800w" 
    type="image/avif">

  <source 
    srcset="
      red_bycicle__high.webp 4000w, 
      red_bycicle__med.webp 2000w, 
      red_bycicle__low.webp 800w"
    type="image/webp">

  <source 
    srcset="
      red_bycicle__high.jpg 4000w, 
      red_bycicle__med.jpg 2000w, 
      red_bycicle__low.jpg 800w" 
    type="image/jpeg">

  <img 
    alt="Red bycicle wheel"
    loading="lazy"
    srcset="
      red_bycicle__high.jpg 4000w, 
      red_bycicle__med.jpg 2000w, 
      red_bycicle__low.jpg 800w
    "
    src="red_bycicle__med.jpg"
  >
</picture>`}
        />
      </section>
      <p>
        Ordinea elementelor
        {' '}
        <FormattedText as="strong">{'<source>'}</FormattedText>
        {' '}
        este extrem de importantă căci browserul le va parcurge
        de sus-in-jos și o va alege pe prima compatibilă. De asemenea,
        în fiecare dintre ele trebuie adăugat - via atributul
        {' '}
        <strong>srcset</strong>
        {' '}
        - mai multe surse de dimensiuni diferite.
        Astfel browserul nu alege numai formatul cel mai bun, cât și
        dimensiunea optimă a imaginii. Best of both worlds! 💪
      </p>
      <p>
        PS: poate ai observat acel ultim
        {' '}
        <FormattedText as="strong">{'<img>'}</FormattedText>
        {' '}
        tag. Ei bine, avem nevoie de el pentru
        a specifica descrierea imaginii - în caz că aceasta nu poate fi încărcată,
        cât și pentru eventuala adaugare a unor atribute extra - cum ar fi
        {' '}
        <strong>loading</strong>
        . Iar în cazurile mai rare în care utilizatorii folosesc browsere
        destul de vechi, ce nu înțeleg elementul
        {' '}
        <FormattedText as="strong">{'<picture>'}</FormattedText>
        {' '}
        , acestea vor înțelege
        totuși tag-ul
        {' '}
        <FormattedText as="strong">{'<img>'}</FormattedText>
        {' '}
        și îl vor arăta pe acesta.
      </p>
      <div className="dots" />
      <LessonResources
        className="my-5"
        links={[{
          text: 'Documentația completă a elementului <img> pe MDN',
          url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img',
        }, {
          text: 'Documentația completă a elementului <picture> pe MDN',
          url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture',
        }, {
          text: 'Mai multe detalii despre imagini Responsive',
          url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture',
        },
        ]}
      />
    </>
  );
}
