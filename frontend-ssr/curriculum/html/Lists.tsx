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
  LessonHeading,
  LessonTip,
  LessonFigure,
  LessonResources,
} from '~/components/lessons';
import { Diana, Pava } from '~/services/contributors';
import Highlight from '~/components/Highlight/Highlight';

const contributors = [Diana, Pava];
const chapters = [
  { title: 'Introducere', id: 'introducere' },
  { title: 'Tipuri de liste', id: 'tipuri-de-liste' },
  {
    title: 'Liste neordonate cu buline sau fără',
    id: 'liste-neordonate-cu-buline-sau-fara',
  },
  { title: 'Liste ordonate', id: 'liste-ordonate' },
  {
    title: 'Atributele acceptate de listele ordonate',
    id: 'atributele-acceptate-de-listele-ordonate',
  },
  {
    title: 'Nesting lists',
    id: 'nesting-lists',
  },
  {
    title: 'BONUS tips și concluzii',
    id: 'bonus-tips-si-concluzii',
  },
  { title: 'Exerciții', id: 'exercitii' },
];

export default function ListsLesson() {
  return (
    <>
      <Head>
        <title> Introducere | FrontEnd.ro</title>
        <link rel="icon" href="/favicon.ico" />
        <SEOTags
          title="Liste | Lecție HTML"
          description="Învață despre tipurile de liste în HTML."
          url="https://FrontEnd.ro/html/lists"
        />
      </Head>
      <Lesson title="Liste" chapters={chapters}>
        <LessonContributors contributors={contributors} />
        <LessonCover>
          <CoverSVG />
        </LessonCover>
        <section>
          <h2> Introducere </h2>
          <LessonHeading as="h3" id="introducere">
            Introducere
          </LessonHeading>
          <p>
            Listele sunt folosite pentru a grupa informații, astfel încât să fie
            clar asociate între ele și ușor de citit. În dezvoltarea modernă a
            web-ului, listele sunt elemente HTML utilizate frecvent atât pentru
            navigație, cât și pentru conținut general, contribuind la crearea
            unui document bine structurat, accesibil și ușor de întreținut. Iată
            un exemplu de listă neordonată definită corect:
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JAVASCRIPT</li>
</ul>         
`}
          />
          <p>vs.</p>
          <p>
            o
            <em> listă fake :</em>
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
HTML <br />
CSS <br />
JAVASCRIPT <br />                    
`}
          />
          <p>
            Când un screen reader va ajunge la această listă falsă (noi am
            folosit tag-ul break (vom afla mai multe despre acest tag într-o
            altă lecție) pentru a o face să arate ca o listă) nu va anunța
            utilizatorul că urmează o listă și nici cîte item-uri sunt în
            interiorul ei.
          </p>
          <p>
            Aici merită punctat că e bine să ținem cont întotdeauna de folosirea
            tag-urilor adecvate atunci când descriem conținutul unui document
            HTML.
          </p>
          <LessonFigure
            withBorder
            src=""
            alt="O listă folosită corect versus o listă fake"
            demo="/demo/html/unordered-lists-vs-fake-lists"
          />
          <LessonTip>
            O listă folosită corect, va putea permite screen readere-lor să
            anunțe utilizatorii cu deficiente de vedere că citesc o listă și nu
            o combinație confuză de texte și numere.
          </LessonTip>
        </section>
        <section>
          <LessonHeading as="h3" id="tipuri-de-liste">
            Tipuri de liste
          </LessonHeading>
          <p>Există două tipuri de liste foarte folosite în HTML:</p>
          <ul className="with--bullets">
            <li>
              <strong className="formatted">Liste neordonate</strong>
              - utilizate pentru a grupa un set
              de item-uri ce nu necesită o anumită ordine.
            </li>
            <li>
              <strong className="formatted">Liste ordonate</strong>
              {' '}
              - utilizate pentru a grupa un set
              de item-uri ce au o ordine specifică.
            </li>
          </ul>
          <p>
            Fiecare tip de listă are un înțeles și un scop specific într-o
            pagină web. Să le luam pe rînd:
          </p>
        </section>
        <section>
          <LessonHeading as="h3" id="liste-neordonate-cu-buline-sau-fara">
            Liste neordonate cu buline sau fără
          </LessonHeading>
          <p>
            Sunt utilizate cînd un set de item-uri pot fi folosite în orice
            ordine. Ele sunt definite prin tag-ul
            {' '}
            <strong className="formatted">{'(<ul>)'}</strong>
            {' '}
            (unordered lists),
            care inconjoară unul sau mai multe tag-uri
            {' '}
            <strong className="formatted">{'(<li>)'}</strong>
            {' '}
            (list item). Un
            exemplu bun ar fi o listă de cumpărături:
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<ul>
  <li>pîine</li>
  <li>cafea</li>
  <li>lapte</li>
  <li>unt</li>
</ul>
          
`}
          />
          <LessonFigure
            withBorder
            src=""
            alt="O listă neordonată folosită la realizarea unui meniu în cadrul unei pagini web"
            demo="/demo/html/unordered-lists"
          />
          <p>
            Observăm că articolele au legătură între ele, sunt parte ale
            aceleiași liste, iar dacă le vom schimba ordinea, lista va avea sens
            în continuare.
          </p>
          <p>
            Cu o stilizare potrivită, listele neordonate sunt folosite la
            realizarea
            {' '}
            <em>meniurilor</em>
            {' '}
            paginilor web.
          </p>
          <LessonTip>
            Deși nu am ajuns incă la partea de CSS, e bine să știm că listele
            neordonate au ca și stil implicit niște buline. Putem să le
            personalizăm folosind propria noastră imagine sau putem renunța la
            ele cu totul. Vom discuta mai multe în cadrul capitolului de
            stilizare.
          </LessonTip>
        </section>
        <section>
          <LessonHeading as="h3" id="liste-ordonate">
            Liste ordonate
          </LessonHeading>
          <p>
            Listele ordonate afișează elementele enumerate într-o ordine
            specifică, fie că este vorba de enumerări cu cifre arabe, cifre
            romane sau litere. O listă ordonată este definită prin elementul
            {' '}
            <strong className="formatted">{'(<ol>)'}</strong>
            {' '}
            (ordered list),
            itemii care sunt cuprinsi de aceasta aflandu-se intre tag-urile
            {' '}
            <strong className="formatted">{'(<li>)'}</strong>
            {' '}
            (list item). Un
            exemplu potrivit ar fi instrucțiunile pentru a găti o prăjitură:
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<ol>
  <li>Cumpără ingredientele necesare</li>
  <li>Amestecă ingredientele</li>
  <li>Pune amestecul într-un vas de gătit</li>
  <li>Coace în cuptor prăjitura timp de o oră</li>
  <li>Scoate prăjitura din cuptor</li>
  <li>Las-o la răcit 10 minute</li>
  <li>Servește prăjitura</li>
</ol>     
`}
          />
          <p>
            E evident că dacă vom schimba ordinea elementelor din cadrul listei,
            aceasta nu va mai avea nici un sens.
          </p>
          <LessonFigure
            withBorder
            src=""
            alt="O listă ordonată"
            demo="/demo/html/ordered-lists"
          />
        </section>
        <section>
          <LessonHeading as="h3" id="atributele-acceptate-de-listele-ordonate">
            Atributele acceptate de listele ordonate
          </LessonHeading>
          <p>
            Dacă vrem ca enumerarea elementelor din listă să se faca cu un
            anumit tip de cifră sau cu litere, ne putem folosi de atributul
            <strong> type .</strong>
            {' '}
          </p>
          Acesta acceptă ca valori:
          <ul className="with--bullets">
            <li>
              {' '}
              <strong className="formatted">1</strong>
              {' '}
              – pentru enumerare cu
              {' '}
              cifre arabe;
            </li>
            <li>
              {' '}
              <strong className="formatted">i sau I</strong>
              {' '}
              – pentru enumerare
              cu cifre romane mici, respectiv mari
            </li>
            <li>
              {' '}
              <strong className="formatted">a sau A</strong>
              {' '}
              – pentru enumerare
              cu litere mici, respectiv mari.
            </li>
          </ul>
          <Highlight
            className="my-5"
            language="html"
            code={`
<ol type="I">
  <li>Cumpără ingredientele necesare</li>
  <li>Amestecă ingredientele</li>
  <li>Pune amestecul într-un vas de gătit</li>
  <li>Coace în cuptor prăjitura timp de o oră</li>
  <li>Scoate prăjitura din cuptor</li>
  <li>Las-o la răcit 10 minute</li>
  <li>Servește prăjitura</li>
</ol>
`}
          />
          <LessonFigure
            withBorder
            src=""
            alt="O listă ordonată cu atributul type"
            demo="/demo/html/ordered-lists-type"
          />
          <p>
            Dacă vrem ca lista să înceapă enumerarea de la cifra/litera cea mai
            avansată și să se termine cu prima, vom folosi atributul
            {' '}
            <strong className="formatted">reversed</strong>
            {' '}
            .
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<ol reversed>
  <li>Cumpără ingredientele necesare</li>
  <li>Amestecă ingredientele</li>
  <li>Pune amestecul într-un vas de gătit</li>
  <li>Coace în cuptor prăjitura timp de o oră</li>
  <li>Scoate prăjitura din cuptor</li>
  <li>Las-o la răcit 10 minute</li>
  <li>Servește prăjitura</li>
</ol>
`}
          />
          <LessonFigure
            withBorder
            src=""
            alt="O listă ordonată cu atributul reversed"
            demo="/demo/html/ordered-lists-reversed"
          />
          <p>
            Putem opta chiar să enumerăm elementele unei liste ordonate începînd
            de la un anumit număr/literă. Pentru asta ne vom folosi de atributul
            {' '}
            <strong className="formatted">start</strong>
            {' '}
            dînd ca valoare numărul
            de la care vrem sa începem numărătoarea:
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<ol start="2">
  <li>Cumpără ingredientele necesare</li>
  <li>Amestecă ingredientele</li>
  <li>Pune amestecul într-un vas de gătit</li>
  <li>Coace în cuptor prăjitura timp de o oră</li>
  <li>Scoate prăjitura din cuptor</li>
  <li>Las-o la răcit 10 minute</li>
  <li>Servește prăjitura</li>
</ol>
`}
          />
          <LessonFigure
            withBorder
            src=""
            alt="O listă ordonată cu atributul start"
            demo="/demo/html/ordered-lists-start"
          />
        </section>
        <section>
          <LessonHeading as="h3" id="nesting-lists">
            Nesting lists
          </LessonHeading>
          <p>
            O listă poate conține o altă listă. De ce ar fi util să folosim
            nesting lists? De exemplu dacă avem nevoie de un cuprins care
            conține subsecțiuni:
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<ol>
  <li>Capitolul 1
    <ol style="list-style-type: lower-alpha;">
      <li>Secțiunea unu </li>
      <li>Secțiunea doi </li>
      <li>Secțiunea trei </li>
    </ol>
  </li>
  <li>Capitolul 2 </li>
  <li>Capitolul 3 </li>
</ol>
`}
          />
          <LessonFigure
            withBorder
            src=""
            alt="Nesting lists"
            demo="/demo/html/nesting-lists"
          />
          <LessonTip icon={faQuestionCircle}>
            Observați folosirea atributului style cu valoarea list-style-type:
            lower-alpha. E în regulă dacă nu-l înțelegeți incă, vom ajunge și
            acolo, insă e bine să știm că așa putem schimba cu ajutorul CSS-ului
            modalitatea de afișare a elementelor dintr-o listă. În cazul acesta
            cu litere mici în loc de numere zecimale.
          </LessonTip>
          <p>
            În exemplul de mai sus, noi am inclus o listă ordonată în cadrul
            unei liste tot ordonate, dar putem foarte bine să includem liste
            ordonate în cadrul celor neordonate și invers. Ce e important să
            reținem este ca nivelul de nesting să nu fie mai mare de 3 căci
            lucrurile pot deveni confuze.
          </p>
          <p>
            Nested lists sunt chiar utile și de cele mai multe ori ele
            reprezintă baza creerii
            {' '}
            <em>meniurilor de navigare</em>
            {' '}
            a paginilor
            web deoarece sunt o bună modalitate de a defini structura ierarhică
            a acestora. Un exemplu de meniu (Opera drop down menu ) arată cam
            așa:
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<ul>
  <li><a href='#'><span>Home</span></a></li>
  <li>
      <a href='#'><span>Products</span></a>
      <ul>
        <li>
            <a href='#'><span>Product 1</span></a>
            <ul>
              <li><a href='#'><span>Sub Product</span></a></li>
              <li><a href='#'><span>Sub Product</span></a></li>
            </ul>
        </li>
        <li>
            <a href='#'><span>Product 2</span></a>
            <ul>
              <li><a href='#'><span>Sub Product</span></a></li>
              <li><a href='#'><span>Sub Product</span></a></li>
            </ul>
        </li>
      </ul>
  </li>
  <li><a href='#'><span>About</span></a></li>
  <li><a href='#'><span>Contact</span></a></li>
</ul>    
`}
          />
          <LessonFigure
            withBorder
            src=""
            alt="Meniu de navigare a unei pagini web cu nested lists"
            demo="/demo/html/nesting-lists-menu"
          />
        </section>
        <section>
          <LessonHeading as="h3" id="bonus-tips-si-concluzii">
            BONUS tips și concluzii
          </LessonHeading>
          <p>
            Există și un al treilea tip de listă ce este folosit destul de puțin
            în practică și anume liste de descrieri
            {' '}
            <strong className="formatted">{'(<dd>).'}</strong>
            {' '}
          </p>
          <p>Cum să alegem ce tip de listă să folosim în proiectul nostru?</p>
          <p> Simplu! Ne vom adresa două intrebari:</p>
          <blockquote>
            Definesc termeni sau asociez alte perechi nume/valoare?
          </blockquote>
          <p>Dacă da, vom folosi o listă de descrieri.</p>
          <blockquote>
            Este importantă ordinea articolelor din listă?
          </blockquote>
          <p>
            Dacă da, folosim o listă ordonată, altfel vom folosi o listă
            neordonată.
          </p>
          <p>
            Folosirea tipului de listă potrivit in HTML prezintă o serie de
            <strong> avantaje</strong>
            {' '}
            :
          </p>
          <ul className="with--bullets">
            <li>
              {' '}
              <strong>Flexibilitate</strong>
              {' '}
              - dacă vrem să modificăm ordinea
              unui element într-o listă ordonată, vom muta efectiv elementul în
              codul nostru iar browser-ul va ști să îl afișeze în ordinea
              corectă.
            </li>
            <li>
              {' '}
              <strong>Stilizare</strong>
              {' '}
              - listele sunt utile deoarece oferă
              elemente specializate (list items) cărora le putem atașa stiluri
              CSS.
            </li>
            <li>
              {' '}
              <strong>Semantic</strong>
              {' '}
              - listele corecte semantic ajută
              vizitatorii să citească un site web și simplifică întreținerea
              acestuia atunci când paginile trebuie actualizate.
            </li>
          </ul>
          <LessonTip icon={faThumbsDown}>
            Altfel spus, NU codăm liste utilizînd tag-uri pentru texte!!!
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
              text: 'Documentația completă a <dd> pe MDN',
              url:
                'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd',
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

function CoverSVG() {
  return (
    <svg
      id="b0932816-01f4-4b2f-9325-988e94753b3b"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="699.24724"
      height="386.75431"
      viewBox="0 0 699.24724 386.75431"
    >
      <path
        d="M736,678.63184H351a8.50982,8.50982,0,0,1-8.5-8.5V446a8.50951,8.50951,0,0,1,8.5-8.5H736a8.50982,8.50982,0,0,1,8.5,8.5V670.13184A8.51014,8.51014,0,0,1,736,678.63184Z"
        transform="translate(-291 -347.24569)"
        fill="#e6e6e6"
      />
      <path
        d="M760,710H327V423.5a9.51081,9.51081,0,0,1,9.5-9.5h414a9.51081,9.51081,0,0,1,9.5,9.5Zm-431-2H758V423.5a7.5082,7.5082,0,0,0-7.5-7.5h-414a7.5082,7.5082,0,0,0-7.5,7.5Z"
        transform="translate(-291 -347.24569)"
        fill="#ccc"
      />
      <circle cx="252.5" cy="79.25431" r="4" fill="#e6e6e6" />
      <path
        d="M640,631.06641H447a8.50982,8.50982,0,0,1-8.5-8.5v-129a8.50981,8.50981,0,0,1,8.5-8.5H640a8.51013,8.51013,0,0,1,8.5,8.5v129A8.51014,8.51014,0,0,1,640,631.06641Z"
        transform="translate(-291 -347.24569)"
        fill="#fff"
      />
      <path
        d="M478.75,540.06592a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,478.75,540.06592Z"
        transform="translate(-291 -347.24569)"
        fill="#ccc"
      />
      <path
        d="M478.75,566.06592a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,478.75,566.06592Z"
        transform="translate(-291 -347.24569)"
        fill="#6c63ff"
      />
      <path
        d="M478.75,592.06592a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,478.75,592.06592Z"
        transform="translate(-291 -347.24569)"
        fill="#6c63ff"
      />
      <path
        d="M516.75,525.56592a6.5,6.5,0,0,0,0,13h93a6.5,6.5,0,0,0,0-13Z"
        transform="translate(-291 -347.24569)"
        fill="#ccc"
      />
      <path
        d="M516.75,551.56592a6.5,6.5,0,0,0,0,13h93a6.5,6.5,0,0,0,0-13Z"
        transform="translate(-291 -347.24569)"
        fill="#6c63ff"
      />
      <path
        d="M516.75,577.56592a6.5,6.5,0,0,0,0,13h93a6.5,6.5,0,0,0,0-13Z"
        transform="translate(-291 -347.24569)"
        fill="#6c63ff"
      />
      <polygon
        points="663.288 375.328 651.03 375.122 645.991 327.743 664.083 328.047 663.288 375.328"
        fill="#ffb8b8"
      />
      <path
        d="M933.20767,718.79047h23.64388a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H918.32081a0,0,0,0,1,0,0v0A14.88685,14.88685,0,0,1,933.20767,718.79047Z"
        transform="translate(-278.66498 -362.89709) rotate(0.96277)"
        fill="#2f2e41"
      />
      <polygon
        points="541.641 375.216 530.277 370.616 542.612 324.594 559.384 331.384 541.641 375.216"
        fill="#ffb8b8"
      />
      <path
        d="M811.361,712.42822H835.0049a0,0,0,0,1,0,0V727.3151a0,0,0,0,1,0,0H796.47418a0,0,0,0,1,0,0v0A14.88687,14.88687,0,0,1,811.361,712.42822Z"
        transform="translate(38.7119 -600.73077) rotate(22.03793)"
        fill="#2f2e41"
      />
      <path
        d="M873.61445,545.1712l-36,95-15,66,16,8,73-142,27,142.5h16s7.316-169.01457-3.342-182.25729Z"
        transform="translate(-291 -347.24569)"
        fill="#2f2e41"
      />
      <circle cx="537.98425" cy="273.76612" r="28.17188" fill="#6c63ff" />
      <polygon
        points="535.636 286.223 526.695 274.726 531.895 270.682 536.128 276.125 550.43 261.028 555.213 265.559 535.636 286.223"
        fill="#fff"
      />
      <circle cx="600.11445" cy="33.42551" r="33" fill="#2f2e41" />
      <path
        d="M845.06051,605.22967a10.74264,10.74264,0,0,0,3.84155-16.01842l25.033-138.54-23.36007-.30785L833.191,587.36152a10.8009,10.8009,0,0,0,11.86954,17.86815Z"
        transform="translate(-291 -347.24569)"
        fill="#ffb8b8"
      />
      <path
        d="M988.50931,578.17023a10.74528,10.74528,0,0,0-5.16594-15.93969l-44.701-108.58a19.7819,19.7819,0,0,0-28.73525-9.27015h0l59.20611,124.76112a10.80077,10.80077,0,0,0,19.39612,9.02868Z"
        transform="translate(-291 -347.24569)"
        fill="#ffb8b8"
      />
      <circle cx="600.76799" cy="45.85858" r="24.56103" fill="#ffb8b8" />
      <path
        d="M861.90227,431.93849c14.16614-5.89755,38.62325-11.72619,65.78076.97762a24.87158,24.87158,0,0,1,13.31114,15.38724l11.62028,38.86785-15,15,14,31s-53.5,32.5-77.5,12.5l-14.5-51.5-19-5,6.482-38.51076A24.68767,24.68767,0,0,1,861.90227,431.93849Z"
        transform="translate(-291 -347.24569)"
        fill="#ccc"
      />
      <path
        d="M868.79617,374.94113a73.04115,73.04115,0,0,0,31.59919,10.4119l-3.33084-3.991a24.47775,24.47775,0,0,0,7.5611,1.50143,8.2807,8.2807,0,0,0,6.74954-3.15918,7.70232,7.70232,0,0,0,.51556-7.115,14.58851,14.58851,0,0,0-4.58936-5.7385,27.32287,27.32287,0,0,0-25.43066-4.54493,16.32976,16.32976,0,0,0-7.59543,4.87221,9.23579,9.23579,0,0,0-1.86255,8.56086"
        transform="translate(-291 -347.24569)"
        fill="#2f2e41"
      />
      <path
        d="M864.20247,353.08668c-.39941-4.2-5.54465-6.78569-9.56833-5.517s-6.66535,5.32011-7.46387,9.4628a13.575,13.575,0,0,0,1.83057,10.24843,9.3394,9.3394,0,0,0,9.25733,4.0107c3.97942-.84823,6.73641-4.73395,7.52526-8.72557s.00565-8.10694-.77654-12.09988"
        transform="translate(-291 -347.24569)"
        fill="#2f2e41"
      />
      <path
        d="M932.20247,355.08668c-.39941-4.2-5.54465-6.78569-9.56833-5.517s-6.66535,5.32011-7.46387,9.4628a13.575,13.575,0,0,0,1.83057,10.24843,9.3394,9.3394,0,0,0,9.25733,4.0107c3.97942-.84823,6.73641-4.73395,7.52526-8.72557s.00565-8.10694-.77654-12.09988"
        transform="translate(-291 -347.24569)"
        fill="#2f2e41"
      />
      <path
        d="M767.50006,697H750v-3a4,4,0,0,0-4-4H725a4,4,0,0,0-4,4v3h-3v-3a4,4,0,0,0-4-4H693a4,4,0,0,0-4,4v3h-3v-3a4,4,0,0,0-4-4H661a4,4,0,0,0-4,4v3h-3v-3a4,4,0,0,0-4-4H629a4,4,0,0,0-4,4v3h-3v-3a4,4,0,0,0-4-4H597a4,4,0,0,0-4,4v3h-3v-3a4,4,0,0,0-4-4H565a4,4,0,0,0-4,4v3h-3v-3a4,4,0,0,0-4-4H533a4,4,0,0,0-4,4v3h-3v-3a4,4,0,0,0-4-4H501a4,4,0,0,0-4,4v3h-3v-3a4,4,0,0,0-4-4H469a4,4,0,0,0-4,4v3h-3v-3a4,4,0,0,0-4-4H437a4,4,0,0,0-4,4v3h-3v-3a4,4,0,0,0-4-4H405a4,4,0,0,0-4,4v3h-3v-3a4,4,0,0,0-4-4H373a4,4,0,0,0-4,4v3h-3v-3a4,4,0,0,0-4-4H341a4,4,0,0,0-4,4v3H319.49994A28.49994,28.49994,0,0,0,291,725.49994V725.5a8.5,8.5,0,0,0,8.5,8.5h488a8.5,8.5,0,0,0,8.5-8.5v-.00006A28.49994,28.49994,0,0,0,767.50006,697Z"
        transform="translate(-291 -347.24569)"
        fill="#3f3d56"
      />
    </svg>
  );
}
