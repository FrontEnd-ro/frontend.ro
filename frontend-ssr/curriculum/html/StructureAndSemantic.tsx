import React from 'react';
import Head from 'next/head';
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import SEOTags from '~/components/SEOTags';
import Lesson, {
  LessonContributors,
  LessonCover,
  LessonFigure,
  LessonHeading,
  LessonResources,
  LessonTip,
} from '~/components/lessons';
import { Diana, Pava } from '~/services/contributors';
import Highlight from '~/components/Highlight/Highlight';

const contributors = [Diana, Pava];
const chapters = [
  {
    title: 'Importanța structurii unei pagini',
    id: 'importanta-structurii-unei-pagini',
  },
  { title: 'Importanța semanticii', id: 'importanta-semanticii' },
  { title: 'Exerciții', id: 'exercitii' },
];

export default function StructureAndSemantic() {
  return (
    <>
      <Head>
        <title> Introducere | FrontEnd.ro</title>
        <link rel="icon" href="/favicon.ico" />
        <SEOTags
          title="Structura vs semantica în HTML | Lecție HTML"
          description="Învață despre importanța structurii și semanticii în HTML."
          url="https://FrontEnd.ro/html/strucutura-si-semantica"
        />
      </Head>
      <Lesson title="Structura vs semantica în HTML" chapters={chapters}>
        <LessonContributors contributors={contributors} />
        <LessonCover>
          <CoverSVG />
        </LessonCover>
        <blockquote>
          Am vorbit despre structura unei pagini..dar totuși de ce este aceasta
          atît de importantă? De ce avem nevoie de ea?
        </blockquote>
        <section>
          <h2> The Basics </h2>
          <LessonHeading as="h3" id="importanta-structurii-unei-pagini">
            Importanța structurii unei pagini
          </LessonHeading>
          <p>
            Păi să luăm un exemplu. Avem această bucată mare de text într-o
            pagină HTML:
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<!DOCTYPE html>
  <html>
    <head>
      <title>
        HTML
      </title>
    </head>
    <body>
    Unul din primele elemente fundamentale ale WWW ( World Wide Web ) este HTML ( Hypertext Markup Language ), care descrie formatul primar în care documentele sunt distribuite și văzute pe Web. Multe din trasaturile lui, cum ar fi independenta fata de platforma, structurarea formatării și legaturile hypertext, fac din el un foarte bun format pentru documentele Internet și Web.
    Primele specificațiile de bază ale Web-ului au fost HTML, HTTP și URL.
    HTML a fost dezvoltat initial de Tim Berners-Lee la CERN în 1989. HTML a fost vazut ca o posibilitate pentru fizicienii care utilizeaza computere diferite și schimbe intre ei informație utilizind Internetul. Erau prin urmare necesare citeva trasaturi: independenta de platforma, posibilități hypertext și structurarea documentelor.Independenta de platforma inseamnă ca un document poate fi afișat în mod asemănător de computere diferite ( deci cu fonte, grafica și culori diferite ), lucru vital pentru o audienta atit de variata.
    Hipertext înseamnă că orice cuvânt, frază, imagine sau alt element al documentului văzut de un utilizator ( client ) poate face referința la un alt document, ceea ce ușurează mult navigarea intre multiple documente sau chiar în interiorul unui aceluiasi document. Structurarea riguroasa a documentelor permite convertirea acestora dintr-un format în altul precum și interogarea unor baze de date formate din aceste documente.
    </body>
  </html>`}
          />
          <p>Care va fi randată de către browser așa</p>
          <LessonFigure
            withBorder
            src="/images/lessons/structure-and-semantic/no-structure.png"
            alt="Importanța structurii unei pagini"
          />
          <p>
            Cînd intrăm pe o pagină, avem tendința sâ scanăm repede și să căutăm
            informațiile care ne interesează. Dacă pagina pe care am intrat nu
            este bine structurată, vom părăsi foarte repede acea pagina și vom
            căuta undeva unde să ne fie ușor să ne orientâm. Totodată trebuie să
            ne gândim la persoanele cu deficiențe de vedere. Acestea vor accesa
            conținutul documentului nostru cu ajutorul cititoarelor de ecran.
            Una dintre numeroasele tehnici pe care acestea le folosesc este cea
            de furnizare a unei schițe prin citirea titlurilor din pagină,
            ajutându-i astfel pe useri să găsească rapid informațiile de care au
            nevoie. Dacă titlurile nu sunt disponibile, vor fi obligați să
            asculte tot documentul citit cu voce tare, ceea ce nu e ok.
          </p>
          <LessonTip>
            Motoarele de căutare indexează paginile web având ca reper
            conținutul titlurilor pe care le folosesc ca și keywords pentru a
            influența ranking-ul paginii. Fără titluri, pagina va avea un SEO
            slab.
          </LessonTip>
          <LessonTip>
            Pentru a putea stiliza o pagină cu ajutorul CSS și pentru a realiza
            lucruri interactive cu ajutorul JavaScript, trebuie să avem tag-uri
            de structură pe care să le putem targeta.
          </LessonTip>
        </section>
        <section>
          <LessonHeading as="h3" id="importanta-semanticii">
            Importanța semanticii
          </LessonHeading>
          <blockquote>
            Buun..acum că am lamurit partea de structură, să trecem și la cea de
            semantică. Ce-o mai fi și cu semantica asta? :)
          </blockquote>
          <p>
            Păi deși poate sunâ puțin pompos, nu e. Practic e ceea ce știm cu
            toții, un fel de reguli generale pe care ne bazăm zi de zi. Un
            exemplu concret ar putea fi semnele de circulație. Știm atunci când
            vedem semnul Stop câ trebuie sâ ne oprim. Dacă vom încâlca reguli de
            genul acesta, lucrurile pot degenera și nu ne dorim asta.
          </p>
          <LessonTip>
            Cam așa e și cu partea de cod. Trebuie sâ ne asigurăm întotdeauna că
            folosim elementele corecte pentru a oferi conținutului nostru
            ințelesul care trebuie.
          </LessonTip>
          <LessonTip>
            <strong className="formatted">{'<h1>'}</strong>
            {' '}
            este un element semantic întrucât oferă textului
            conținut înțelesul de “titlul principal al paginii”.
          </LessonTip>
          <LessonTip icon={faThumbsDown}>
            NU folosim alte tag-uri să simulâm un h1 pentru că nu vom mai
            beneficia de cele menționate mai sus. (SEO, screen readere).
          </LessonTip>
        </section>
        <div className="dots" />

        <LessonResources
          className="my-5"
          links={[
            {
              text: 'Documentația despre structură pe MDN',
              url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure#HTML_for_structuring_content',
            },
            {
              text: 'Documentația despre semantică pe MDN',
              url: 'https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML',
            },
          ]}
        />
        <section>
          <LessonHeading as="h3" id="exercitii">
            Exerciții
          </LessonHeading>
          <p className="text-bold text-center">
            În curând!
          </p>
        </section>
      </Lesson>
    </>
  );
}

function CoverSVG() {
  return (
    <svg
      id="b6b8b2d9-98ab-4cec-b352-4cd04d14ea2d"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="813.66449"
      height="701.25729"
      viewBox="0 0 813.66449 701.25729"
    >
      <title>content_structure</title>
      <rect
        x="14.58789"
        y="113.76581"
        width="119.81946"
        height="106.38679"
        fill="#d0cde1"
      />
      <rect
        x="14.58789"
        y="305.26203"
        width="119.81946"
        height="106.38679"
        fill="#d0cde1"
      />
      <rect
        x="399.58789"
        y="113.76581"
        width="119.81946"
        height="106.38679"
        fill="#d0cde1"
      />
      <rect
        x="399.58789"
        y="305.26203"
        width="119.81946"
        height="106.38679"
        fill="#d0cde1"
      />
      <rect
        x="208.44826"
        y="113.76581"
        width="119.81946"
        height="106.38679"
        fill="#3f3d56"
      />
      <rect
        x="208.44826"
        y="305.26203"
        width="119.81946"
        height="106.38679"
        fill="#3f3d56"
      />
      <path
        d="M500.772,309.9497l-77.40669-1.75255c9.27024-29.9955,11.26926-58.55331,1.92147-84.86758l77.40669,1.75255A169.482,169.482,0,0,0,500.772,309.9497Z"
        transform="translate(-193.16775 -99.37135)"
        fill="#6c63ff"
      />
      <rect
        x="462.68777"
        y="220.47027"
        width="1.8657"
        height="40.11254"
        transform="translate(19.49389 599.2127) rotate(-88.703)"
        fill="#fff"
      />
      <rect
        x="462.51884"
        y="227.93115"
        width="1.8657"
        height="40.11254"
        transform="translate(11.86982 606.33583) rotate(-88.703)"
        fill="#fff"
      />
      <rect
        x="462.34992"
        y="235.39204"
        width="1.8657"
        height="40.11254"
        transform="translate(4.24575 613.45896) rotate(-88.703)"
        fill="#fff"
      />
      <rect
        x="462.181"
        y="242.85293"
        width="1.8657"
        height="40.11254"
        transform="translate(-3.37832 620.58209) rotate(-88.703)"
        fill="#fff"
      />
      <rect
        x="462.01208"
        y="250.31381"
        width="1.8657"
        height="40.11254"
        transform="translate(-11.00239 627.70522) rotate(-88.703)"
        fill="#fff"
      />
      <rect
        x="461.84316"
        y="257.7747"
        width="1.8657"
        height="40.11254"
        transform="translate(-18.62647 634.82835) rotate(-88.703)"
        fill="#fff"
      />
      <rect
        x="461.67424"
        y="265.23558"
        width="1.8657"
        height="40.11254"
        transform="translate(-26.25054 641.95149) rotate(-88.703)"
        fill="#fff"
      />
      <rect
        x="461.50532"
        y="272.69647"
        width="1.8657"
        height="40.11254"
        transform="translate(-33.87461 649.07462) rotate(-88.703)"
        fill="#fff"
      />
      <circle cx="329.79904" cy="106.67335" r="22.45943" fill="#6c63ff" />
      <polygon
        points="328.998 117.617 320.492 107.22 321.83 106.126 328.872 114.734 341.179 96.685 342.606 97.658 328.998 117.617"
        fill="#fff"
      />
      <ellipse
        cx="371.17168"
        cy="682.34409"
        rx="371.17168"
        ry="18.91321"
        fill="#d0cde1"
      />
      <path
        d="M908.185,751.5004l87.55386-130.20135L908.36407,765.50756l.18271,14.65092q-9.58767.07311-18.98907-.31931l4.34247-188.32794-.119-1.45288.16023-.28072.41563-17.79584L798.47529,432.77258l95.76866,125.89.33985,3.76149,3.28-142.28912-82.816-144.328,83.05188,119.33195-.86688-294.78637.00185-.98116.02818.96494,5.49752,232.33132L978.2372,238.2945,903.00738,352.68244l1.64733,127.27431L974.109,355.74185,904.91,498.66825l.917,70.77093L1006.83225,396.4093,906.134,594.12813Z"
        transform="translate(-193.16775 -99.37135)"
        fill="#d0cde1"
      />
      <path
        d="M515.23356,663.7091l-65.15684-41.82647c23.54087-20.77246,40.12637-44.10625,45.85794-71.437l65.15684,41.82647A169.48177,169.48177,0,0,0,515.23356,663.7091Z"
        transform="translate(-193.16775 -99.37135)"
        fill="#6c63ff"
      />
      <rect
        x="518.76139"
        y="565.04047"
        width="1.8657"
        height="40.11254"
        transform="matrix(0.54021, -0.84153, 0.84153, 0.54021, -446.59394, 606.99002)"
        fill="#fff"
      />
      <rect
        x="514.72993"
        y="571.32065"
        width="1.8657"
        height="40.11254"
        transform="matrix(0.54021, -0.84153, 0.84153, 0.54021, -453.73253, 606.48499)"
        fill="#fff"
      />
      <rect
        x="510.69846"
        y="577.60083"
        width="1.8657"
        height="40.11254"
        transform="translate(-460.87113 605.97996) rotate(-57.30216)"
        fill="#fff"
      />
      <rect
        x="506.66699"
        y="583.881"
        width="1.8657"
        height="40.11254"
        transform="translate(-468.00973 605.47492) rotate(-57.30216)"
        fill="#fff"
      />
      <rect
        x="502.63553"
        y="590.16118"
        width="1.8657"
        height="40.11254"
        transform="translate(-475.14833 604.96989) rotate(-57.30216)"
        fill="#fff"
      />
      <rect
        x="498.60406"
        y="596.44136"
        width="1.8657"
        height="40.11254"
        transform="translate(-482.28693 604.46486) rotate(-57.30216)"
        fill="#fff"
      />
      <rect
        x="494.57259"
        y="602.72153"
        width="1.8657"
        height="40.11254"
        transform="translate(-489.42553 603.95982) rotate(-57.30216)"
        fill="#fff"
      />
      <rect
        x="490.54112"
        y="609.00171"
        width="1.8657"
        height="40.11254"
        transform="translate(-496.56413 603.45479) rotate(-57.30216)"
        fill="#fff"
      />
      <path
        d="M376.66427,794.34347l16.27423-31.54124c30.03216,4.94037,35.33276,3.93083,61.57649.52366l6.97776,34.23105A378.164,378.164,0,0,0,376.66427,794.34347Z"
        transform="translate(-193.16775 -99.37135)"
        fill="#6c63ff"
      />
      <polygon
        points="251.392 689.284 250.882 671.55 252.746 671.62 253.256 689.354 251.392 689.284"
        fill="#fff"
      />
      <polygon
        points="243.935 689.001 243.424 671.267 245.289 671.338 245.799 689.072 243.935 689.001"
        fill="#fff"
      />
      <polygon
        points="236.477 688.719 235.967 670.985 237.831 671.055 238.342 688.789 236.477 688.719"
        fill="#fff"
      />
      <rect
        x="414.58218"
        y="778.04308"
        width="17.74688"
        height="1.8657"
        transform="translate(-564.15985 1073.26814) rotate(-87.83052)"
        fill="#fff"
      />
      <rect
        x="407.12473"
        y="777.76058"
        width="17.74688"
        height="1.8657"
        transform="translate(-571.05269 1065.54423) rotate(-87.83052)"
        fill="#fff"
      />
      <polygon
        points="214.105 687.871 215.959 670.137 217.823 670.208 215.969 687.942 214.105 687.871"
        fill="#fff"
      />
      <polygon
        points="206.647 687.589 208.501 669.855 210.366 669.925 208.512 687.659 206.647 687.589"
        fill="#fff"
      />
      <polygon
        points="199.19 687.306 201.044 669.572 202.908 669.643 201.054 687.377 199.19 687.306"
        fill="#fff"
      />
      <path
        d="M494.006,519.88573l1.18208,11.82076s-9.45661,34.28018,4.7283,31.916,9.4566-31.916,9.4566-31.916l-2.36415-9.45661Z"
        transform="translate(-193.16775 -99.37135)"
        fill="#ffb8b8"
      />
      <path
        d="M645.31161,521.06781l-1.18208,11.82075s9.4566,34.28019-4.7283,31.916-9.45661-31.916-9.45661-31.916l2.36416-9.4566Z"
        transform="translate(-193.16775 -99.37135)"
        fill="#ffb8b8"
      />
      <polygon
        points="334.527 644.518 330.981 669.341 355.805 666.977 352.258 642.154 334.527 644.518"
        fill="#ffb8b8"
      />
      <polygon
        points="465.738 644.518 469.284 669.341 444.46 666.977 448.007 642.154 465.738 644.518"
        fill="#ffb8b8"
      />
      <path
        d="M523.55784,508.065s-5.91038,2.36415,0,92.20188L525.922,746.84421H549.5635l9.4566-130.02829,13.00283-79.19906,36.64434,102.84057,29.55188,109.933,23.64151-5.91038-30.734-140.667s5.91038-81.56321-15.367-95.74811S523.55784,508.065,523.55784,508.065Z"
        transform="translate(-193.16775 -99.37135)"
        fill="#2f2e41"
      />
      <path
        d="M529.46821,761.02912s-.4907-10.75-2.6095-11.28538-17.48578,12.46746-17.48578,12.46746-16.54905-2.36416-15.367,15.367,24.82358,11.82075,24.82358,11.82075,4.72831,10.63868,14.18491,10.63868,23.64151,0,24.82358-7.09245-5.91037-39.00849-8.27452-37.82642-8.27453,0-8.27453,0Z"
        transform="translate(-193.16775 -99.37135)"
        fill="#2f2e41"
      />
      <path
        d="M657.13236,761.02912s.4907-10.75,2.6095-11.28538,17.48578,12.46746,17.48578,12.46746,16.54906-2.36416,15.367,15.367S667.771,789.39893,667.771,789.39893s-4.7283,10.63868-14.18491,10.63868-23.64151,0-24.82358-7.09245,5.91038-39.00849,8.27453-37.82642,8.27453,0,8.27453,0Z"
        transform="translate(-193.16775 -99.37135)"
        fill="#2f2e41"
      />
      <circle cx="376.49102" cy="206.55873" r="22.45943" fill="#ffb8b8" />
      <path
        d="M585.02576,309.47631s1.18207,31.916,7.09245,35.46226-35.46226,0-35.46226,0l4.7283-27.18774Z"
        transform="translate(-193.16775 -99.37135)"
        fill="#ffb8b8"
      />
      <path
        d="M594.48236,341.39234s-21.27736-10.63868-41.37264-3.54622-30.734,15.367-30.734,15.367l13.00283,68.56037S510.555,511.6112,517.64746,513.97536s91.01981-7.09246,99.29434,0,8.27452-8.27453,8.27452-8.27453-11.82075-29.55189-9.4566-54.37547,2.36415-33.09811,2.36415-33.09811L631.1267,362.6697Z"
        transform="translate(-193.16775 -99.37135)"
        fill="#575a89"
      />
      <path
        d="M530.65029,353.2131h-8.27453s-13.00283,8.27453-13.00283,20.09528-11.82075,76.8349-11.82075,76.8349L490.45972,523.432l20.09529,3.54623L528.28614,430.048,541.289,404.04234Z"
        transform="translate(-193.16775 -99.37135)"
        fill="#575a89"
      />
      <path
        d="M608.66727,362.6697H631.1267s7.09245,7.09245,10.63868,23.64151,7.09245,81.5632,7.09245,81.5632l-2.36415,59.10378H628.76255l-2.36415-76.83491-11.82076-49.64717Z"
        transform="translate(-193.16775 -99.37135)"
        fill="#575a89"
      />
      <path
        d="M550.54622,304.38078l4.75445,12.14724c1.94831,4.97776,4.17972,10.30338,8.74662,13.0814,5.63858,3.42992,13.16843,1.75749,18.62308-1.958a29.08106,29.08106,0,0,0-13.08961-52.9302l-.22573,4.06568-4.989-4.18183a4.85028,4.85028,0,0,1-7.53957,1.06626c1.31057,2.71655-.202,6.02977-2.38623,8.11078C551.75667,286.33855,544.08146,289.411,544.4,293.981,544.61251,297.03074,549.30919,301.22026,550.54622,304.38078Z"
        transform="translate(-193.16775 -99.37135)"
        fill="#2f2e41"
      />
    </svg>
  );
}
