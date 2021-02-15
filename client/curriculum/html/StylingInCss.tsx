import SEOTags from '~/components/SEOTags';
import Lesson, {
  LessonContributors,
  LessonCover,
  LessonHeading,
  LessonFigure,
  LessonTip,
} from '~/components/lessons';
import { DanielHutanu } from '~/services/contributors';
import Highlight from '~/components/Highlight/Highlight';
// eslint-disable-next-line import/no-unresolved
import coverSvg from '~/public/images/lessons/waysofdesign_cover.svg';

const contributors = [DanielHutanu];
const chapters = [
  { title: 'Stil Inline', id: 'stil-inline' },
  {
    title: 'Fișier Intern',
    id: 'fisier-intern',
  },
  { title: 'Fișier Extern', id: 'fisier-extern' },
  { title: 'Bonus', id: 'bonus' },
];

export default function WaysDesignLesson() {
  return (
    <>
      <SEOTags
        title="Moduri de stilizare | Lecție CSS"
        shareImage="https://frontend.ro/seo/waysdesign.png"
        description="Invata modurile prin care putem aplica stil paginilor web."
        url="https://FrontEnd.ro/html/moduri-stilizare"
      />
      <Lesson title="Moduri de stilizare" chapters={chapters}>
        <LessonContributors className="absolute" contributors={contributors} />
        <LessonCover>
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{
            __html: coverSvg,
          }}
          />
        </LessonCover>
        <p>
          În acest articol vom vorbi despre cele trei modalități prin care putem aplica stilul unei pagini web:
        </p>
        <ul className="with--bullets">
          <li className="mb-4">
            {' '}
            <strong className="formatted">Stil inline</strong>
          </li>
          <li className="mb-4">
            {' '}
            <strong className="formatted">Fișier intern</strong>
          </li>
          <li className="mb-4">
            {' '}
            <strong className="formatted">Fișier extern</strong>
          </li>
        </ul>
        <p>Fiecare metoda vine cu avantaje și dezavantaje, despre care vom vorbi la fiecare în parte.</p>
        <section>
          <LessonHeading as="h3" id="stil-inline">
            Stil inline
          </LessonHeading>
          <p>
            Prin
            <strong>metoda inline</strong>
            {' '}
            putem aplica stilul unui singur element HTML.
          </p>
          <p>
            Scriere codului CSS se va face prin adaugarea atributului
            {' '}
            <strong className="formatted">style</strong>
            {' '}
            în elementul HTML căruia vrem să-i modificăm stilul.
          </p>
          <LessonFigure
            withBorder
            src="/images/lessons/waysdesign/inline.png"
            alt="Folosirea metodei inline pentru aplicarea stilului."
            demo="/demo/html/metoda-inline"
          />
          <p>
            Metoda inline vine la pachet cu câteva
            {' '}
            <strong>dezavantaje uriașe</strong>
            {' '}
            și din această cauză majoritatea programatorilor o evită. Câteva dintre acestea sunt:
          </p>
          <ul className="with--bullets">
            <li className="mb-4">
              Dacă avem de stilizat mai multe elemente similare, de exemplu mai multe paragrafe cu stil identic,
              prin metoda inline va trebui să rescriem același cod CSS pentru fiecare paragraf în parte,
              iar acest copy-paste ne va ocupa mult timp și, totodată,
              încălcăm un principiu care există în programare și se numește
              {' '}
              {' '}
              <strong className="formatted">DRY</strong>
              {' '}
              {' '}
              (
              <strong>Don’t repeat yourself</strong>
              ).
            </li>
            <li>
              Vedem că e greu să distingem codul CSS de cel HTML (se produce un așa numit efect de
              {' '}
              <strong>spaghetti code</strong>
              ).
              Așadar, ne va fi dificil să facem modificări pe un astfel de cod.
            </li>
          </ul>
          <LessonTip>
            Aceasta este prima metodă prin care putem stiliza o pagină web, dar după cum am menționat mai sus,
            nu vă recomandăm sa o folosiți.
          </LessonTip>
        </section>
        <section>
          <LessonHeading as="h3" id="fisier-intern">
            Fișier intern
          </LessonHeading>
          <p>
            Dacă prin metoda inline putem stiliza câte un element pe rând, printr-un
            <strong>fișier intern</strong>
            {' '}
            putem controla
            stilul pentru o întreagă pagină, scăpând astfel de codul duplicat și, totodată,
            vom avea o mai bună înțelegere a codului și vom eficientiza timpul de scriere.
          </p>
          <p>
            Metoda de integrare a codului CSS în pagina web se va face prin inserarea elementului
            {' '}
            <strong className="formatted">{'<style>'}</strong>
            {' '}
            în secțiunea
            {' '}
            <strong className="formatted">{'<head>'}</strong>
            {' '}
            a documentului HTML.
            {' '}
          </p>
          <p>Față de metoda anterioară, la aceasta trebuie să precizăm pe ce element (selector) aplicăm stilul.</p>
          <Highlight
            className="my-5"
            language="html"
            code={`
            <style>
            p{
                color: #000;
            }
            </style>
            `}
          />
          <p>
            În acest exemplu,
            <strong>selectorul</strong>
            {' '}
            folosit este
            {' '}
            <strong className="formatted">p</strong>
            , reprezentând tag-ul elementului din HTML.
          </p>
          <LessonFigure
            withBorder
            src="/images/lessons/waysdesign/intern.png"
            alt="Folosirea metodei fisierului intern pentru aplicarea stilului."
            demo="/demo/html/metoda-intern"
          />
          <LessonTip>
            Observăm că, în acest caz, codul HTML este separat față de CSS, care reprezintă un avantaj față de metoda anterioară.
            Totuși în practică nu recomandăm nici folosirea metodei interne pentru că:
            dacă avem de stilizat mai multe pagini ce arată similar, trebuie să facem copy-paste în fiecare pagină,
            right? Iar astfel ajungem iarăși să încălcăm principiul DRY.
          </LessonTip>
        </section>
        <section>
          <LessonHeading as="h3" id="fisier-extern">
            Fișier extern
          </LessonHeading>
          <p>
            Care ar fi soluția pentru a scapa de dezavantajele metodelor anterioare? Metoda
            <strong>fișierului extern</strong>
            {' '}
            all the way!
          </p>
          <p>
            Aceasta este metoda pe care o recomandăm,
            și constă în crearea unui fișier separat pe care-l asociem paginilor HTML.
          </p>
          <p>
            Integrarea fișierului CSS în HTML se va face prin intermediul elementului
            {' '}
            <strong className="formatted">{'<link>'}</strong>
            .
          </p>
          <p>Haideți să vedem un exemplu:</p>
          <Highlight
            className="my-5"
            language="html"
            code={`
            <link rel="stylesheet" href="URL-ul CSS">
            `}
          />
          <p>Unde:</p>
          <ul className="with--bullets">
            <li className="mb-4">
              atributul
              {' '}
              <strong className="formatted">rel</strong>
              {' '}
              specifică relația dintre documentul HTML curent și documentul extern pe
              care îl conectăm acesteia. În cazul nostru, documentul extern este o foaie de stil.
            </li>
            <li>
              atributul
              {' '}
              {' '}
              <strong className="formatted">href</strong>
              {' '}
              specifică locația și numele documentului conectat.
            </li>
          </ul>
          <p>Mai concret, hai să vedem un exemplu:</p>
          <p>
            Dacă creăm fișierul
            {' '}
            <strong className="formatted">style.css</strong>
            , în folderul
            {' '}
            <strong className="formatted">stiluri</strong>

            , prin care modelăm stilul paginii
            {' '}
            cd
            <strong className="formatted">index.html</strong>
            , head-ul filei HTML va arăta astfel:
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
            <head>
              <link rel="stylesheet" href="stiluri/style.css">
            </head>
            `}
          />
          <LessonTip>
            Într-un document HTML pot fi adăugate mai multe foi de stil externe,
            fiecare printr-un element link diferit.
          </LessonTip>
          <p>Iar mai jos avem exemplul unei pagini web cu două foi de stil incluse:</p>
          <Highlight
            className="my-5"
            language="html"
            code={`
            <!DOCTYPE html>
            <html>
            <head>
            <title>My Dog</title>
            <link rel="stylesheet" href="stil/style.css">
            <link rel="stylesheet" href="stil/costom.css">
            </head>
            <body>
                <h1>Rafa is the best dog</h1>
                <p>My dog is named Rafa <br> and he is the best dog <br> in the world.</p>
                <img src="https://www.pexels.com/photo/brown-and-white-short-coated-puppy-1805164/" alt="Rafa, the best dog"/>
            </body>
            </html>
            `}
          />
          <p>
            Foaia de stil
            {' '}
            <strong className="formatted">costom.css</strong>
            {' '}
            arată astfel:
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
            body{
              background-color: rgb(0, 255, 255);
            }
            div{
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 100px;
            }
            `}
          />
          <p>
            Iar pagina
            {' '}
            <strong className="formatted">style.css</strong>
            :
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
            h1{
              text-align: center;
              font-size: 40px;
              text-decoration: underline;
            }
            img{
              width: 250px;
              height: 200px;
            }
            p{
              font-size: 33px;
              text-align: center;
              margin-left: 50px;
            }
            `}
          />
          <p>Astfel, prin aplicarea stilului descris în ambele foi, pagina va arăta așa:</p>
          <LessonFigure
            withBorder
            src="/images/lessons/waysdesign/extern.png"
            alt="Pagina web creata prin metoda fisierului extern."
          />
        </section>
        <section>
          <LessonHeading as="h3" id="bonus">
            Bonus
          </LessonHeading>
          <p>
            Poate v-ați întrebat de ce punem
            {' '}
            <strong className="formatted">{'<link>'}</strong>
            {' '}
            in HEAD și nu în BODY?
          </p>
          <p>
            Explicația ar fi că browser-ul citește documentul HTML
            <strong>de sus în jos</strong>
            .
            Astfel, primul pe care îl vede este
            <strong>HEAD-ul</strong>
            .
            {' '}
          </p>
          <p>
            Având elementul
            {' '}
            <strong className="formatted">{'<link>'}</strong>
            {' '}
            {' '}
            in
            {' '}
            <strong className="formatted">{'<head>'}</strong>
            ,
            browser-ul va încărca stilurile înainte de a citi HTML-ul și va afișa o pagină stilizată așa cum ne așteptam.
            Dacă îl punem în BODY browser-ul va încărca mai intai HTML-ul și apoi CSS-ul,
            ceea ce nu vrem să se întâmple.
          </p>
        </section>
      </Lesson>
    </>
  );
}
