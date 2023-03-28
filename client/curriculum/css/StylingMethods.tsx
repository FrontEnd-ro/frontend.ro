import {
  LessonCover,
  LessonHeading,
  LessonFigure,
  LessonTip,
  LessonFirstSentence,
} from '~/components/lessons';
import Highlight from '~/components/Highlight/Highlight';
// eslint-disable-next-line import/no-unresolved
import coverSvg from './StylingMethodsCover.svg';
import { DeprecatedBasicEditor } from '~/components/Editor/BasicEditor';
import { ExerciseFile, ExerciseFolder } from '~/../shared/utils/FolderStructure';
import FormattedText from '~/components/FormattedText';
import { getLessonById } from '~/services/DataModel';
import List from '~/components/List';

export default function StylingMethodsContent() {
  const lessonInfo = getLessonById('moduri-stilizare');

  return (
    <>
      <LessonCover>
        <div
            // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: coverSvg,
          }}
        />
      </LessonCover>
      <LessonFirstSentence>
        În acest articol vom vorbi despre cele trei modalități prin care putem
        aplica stilul unei pagini web:
        {' '}
        <span className="border-bottom-1px">
          CSS inline
        </span>
        ,
        {' '}
        <span className="border-bottom-1px">
          CSS intern
        </span>
        {' '}
        sau
        {' '}
        <span className="border-bottom-1px">
          CSS extern
        </span>
        .
        Fiecare metoda vine cu avantaje și dezavantaje, despre care vom vorbi
        în cele ce urmează.
      </LessonFirstSentence>
      <section>
        <LessonHeading as="h3" id={lessonInfo.chapters[0].id}>
          {lessonInfo.chapters[0].title}
        </LessonHeading>
        <p>
          Prin
          {' '}
          <FormattedText as="strong">CSS inline</FormattedText>
          {' '}
          putem aplica stilul unui singur element HTML.
        </p>
        <p>
          Scrierea codului CSS se va face prin adaugarea atributului
          {' '}
          <FormattedText as="strong">style</FormattedText>
          {' '}
          pe elementul căruia vrem să-i modificăm stilul:
        </p>
        <Highlight
          className="my-5"
          language="html"
          code={`
<section style="padding: 1em; background-color: #282a36; color: #fff">
  <h1 style="text-align: center; font-size: 45px; font-family: sans-serif; text-shadow: 2px 2px 0 #000;">
    CSS inline
  </h1>
  <p style="margin-left: 50px; font-size: 25px; font-family: sans-serif;">
    Observăm că stilurile sunt destul de greu de citit și editat.
  </p>
  <p style="margin-left: 50px; font-size: 25px; font-family: sans-serif;">
    De aceea recomandăm evitarea 
    <span style="font-size: 30px; font-weight: bold; color: #9f616a;">
    acestei metode
    </span>
  </p>
</section>
            `}
        />
        <LessonFigure
          withBorder
          src={`${process.env.CLOUDFRONT_PUBLIC}/demo-assets/css/css-inline.png`}
          alt="Pagină web creata prin metoda CSS-ului inline"
          demo="/demo/css/css-inline"
        />
        <p>
          Metoda inline vine la pachet cu
          {' '}
          <strong>dezavantaje uriașe</strong>
          {' '}
          și din această cauză majoritatea programatorilor o evită. Hai să
          vedem de ce nu e indicată:
        </p>
        <List variant="bullets">
          <li className="mb-4">
            dacă avem de stilizat mai multe elemente similare, (să zicem mai
            multe paragrafe care vrem să arate la fel) , prin metoda inline va
            trebui să facem copy-paste la cod pentru fiecare paragraf în
            parte. Mai mult, când o să ne răzgândim
            asupra stilurilor, va trebuie să ținem minte și să modificăm peste tot.
          </li>
          <li>
            vedem că e greu să distingem codul CSS de cel HTML (se produce un
            așa numit efect de
            {' '}
            <strong>spaghetti code</strong>
            ). Așadar, ne va fi dificil să înțelegem și să facem modificări pe un astfel de
            cod.
          </li>
        </List>
        <LessonTip>
          Aceasta este prima și cea mai ușor de înțeles metodă prin care
          putem stiliza o pagină web, dar după cum am menționat mai sus, nu este recomandată.
        </LessonTip>
      </section>
      <section>
        <LessonHeading as="h3" id={lessonInfo.chapters[1].id}>
          {lessonInfo.chapters[1].title}
        </LessonHeading>
        <p>
          Dacă prin metoda inline trebuie să stilizăm câte un element pe rând,
          printr-un
          {' '}
          <strong>CSS intern</strong>
          {' '}
          putem
          controla stilul pentru o întreagă pagină, scăpând astfel de codul
          duplicat. Totodată, vom avea o mai bună înțelegere a codului și vom
          câștiga timp.
        </p>
        <p>
          Metoda de integrare a codului CSS în pagina web se va face prin
          inserarea elementului
          {' '}
          <FormattedText as="strong">{'<style>'}</FormattedText>
          {' '}
          în secțiunea
          {' '}
          <FormattedText as="strong">{'<head>'}</FormattedText>
          {' '}
          a documentului
          HTML. Față de metoda anterioară, la aceasta trebuie să precizăm pentru ce elemente
          vom aplica regulile de stilizare.
        </p>
        <Highlight
          className="my-5"
          language="html"
          code={`
<style>
  a {
    color: #000;
    text-decoration: none;
    border-bottom: 1px solid #000;
  }
</style>`}
        />
        <p>
          În exemplul de mai sus aplicăm regulile
          pe toate elementele de tip
          {' '}
          <FormattedText as="strong">a</FormattedText>
          {' '}
          ,
          {' '}
          selectorul folosit fiind tagul elementului HTML.
        </p>
        <LessonTip>
          Există și alți selectori: după clasă sau id. Vom vorbi de ei în lecțiile următoare,
          însă pentru moment e important să reții această metodă de stilizare și
          rolul selectorilor.
        </LessonTip>
        <p>
          Uite mai jos un exemplu mai complet, în
          care aplicăm stiluri pe elementul main, heading-uri, paragrafe:
        </p>
        <Highlight
          className="my-5"
          language="html"
          code={`<!DOCTYPE html>
<html lang="ro">

<head>
  <title>Stiluri</title>
  <style>
    main {
      padding: 1em;
      text-align: center;
      font-family: sans-serif;
      background-color: #282a36;
    }

    h1 {
      color: white;
    }

    p {
      color: white;
      font-size: 22px;
      font-weight: bold;
    }

    span {
      color: #9f616a;
      font-weight: bold;
    }
  </style>
</head>

<body>
  <main>
    <h1>Frontend.ro</h1>
    <p>
      Învață alături de noi cum
      <span> să stilizezi </span>
      .
    </p>
  </main>
</body>

</html>
`}
        />
        <LessonFigure
          withBorder
          src={`${process.env.CLOUDFRONT_PUBLIC}/demo-assets/css/css-intern.png`}
          alt="Pagină web creata prin metoda CSS-ului intern"
          demo="/demo/css/css-intern"
        />
        <p>
          Observăm că în acest caz codul HTML este puțin mai separat față de CSS ceea ce
          e o îmbunătățire față de metoda anterioară.
        </p>
        <p>
          În practică însă,
          {' '}
          <strong>
            nu recomandăm nici folosirea metodei interne
          </strong>
          {' '}
          pentru că site-urile sunt
          construite din mai multe pagini deci vom ajunge iar să facem copy-paste în
          fiecare pagină.
          Plus, deși codul HTML și CSS e puțin mai separat, sunt încă în același fișier
          și vom ajunge iar la
          {' '}
          <span className="text-bold">spaghetti code</span>
          {' '}
          pe măsură ce aplicația crește.
        </p>
        <p>
          Și ajungem iar de unde am plecat, right?
        </p>
      </section>
      <section>
        <LessonHeading as="h3" id={lessonInfo.chapters[2].id}>
          {lessonInfo.chapters[2].title}
        </LessonHeading>
        <p>
          Ei bine, acestea fiind zise care ar fi totuși soluția pentru a face
          lucrurile așa cum trebuie? Metoda
          {' '}
          <strong>CSS-ului extern</strong>
          {' '}
          all the
          way!
        </p>
        <p>
          Aceasta este
          {' '}
          <strong>metoda pe care o recomandăm</strong>
          {' '}
          și constă în crearea unui
          fișier separat pe care-l asociem paginilor HTML.
          Integrarea fișierului CSS în HTML se va face prin intermediul
          elementului
          {' '}
          <FormattedText as="strong">{'<link>'}</FormattedText>
          {' '}
          .
        </p>
        <Highlight
          className="my-5"
          language="html"
          code={`
<link rel="stylesheet" href="./style.css">`}
        />
        <p>Unde:</p>
        <List variant="bullets">
          <li className="mb-4">
            atributul
            {' '}
            <FormattedText as="strong">rel</FormattedText>
            {' '}
            specifică
            relația dintre documentul HTML curent și documentul extern pe care
            îl conectăm acesteia. În cazul nostru, documentul extern este o
            foaie de stil
          </li>
          <li>
            atributul
            {' '}
            <FormattedText as="strong">href</FormattedText>
            {' '}
            specifică locația (URL-ul) unde găsim foaia de stiluri
          </li>
        </List>
        <p>
          Mai concret,
          {' '}
          <span className="text-bold">hai să vedem un exemplu</span>
          :
        </p>
        <DeprecatedBasicEditor folderStructure={externCssExample} readOnly />
        <p>
          Astfel, prin aplicarea stilului descris în ambele foi, pagina va
          arăta așa:
        </p>
        <LessonFigure
          withBorder
          src={`${process.env.CLOUDFRONT_PUBLIC}/demo-assets/css/css-extern.png`}
          alt="Pagină web creata prin metoda CSS-ului extern"
          demo="/demo/css/css-extern"
        />
        <p>
          Prin această metodă rezolvăm ambele probleme:
        </p>
        <List variant="bullets">
          <li className="mb-4">
            în ceea ce privește copy-paste'ul, avand un fisier
            inclus in mai multe pagini e de ajuns sa modificam stilul
            in acel fisier iar stilurile se vor aplica oriunde este inclus
          </li>
          <li>
            legat de spaghetti code, avand separat stilurile de HTML
            e mult mai usor sa intelegem si sa modificam codul
          </li>
        </List>
        <LessonTip>
          Psst: într-un document HTML pot fi adăugate mai multe foi de stil externe,
          fiecare printr-un element link diferit.
        </LessonTip>
      </section>
      <section>
        <LessonHeading as="h3" id={lessonInfo.chapters[3].id}>
          {lessonInfo.chapters[3].title}
        </LessonHeading>
        <p>
          Poate v-ați întrebat de ce punem tagul
          {' '}
          <FormattedText as="strong">{'<link>'}</FormattedText>
          {' '}
          in
          {' '}
          <FormattedText as="strong">{'<head>'}</FormattedText>
          {' '}
          și nu în
          {' '}
          <FormattedText as="strong">{'<body>'}</FormattedText>
          {' '}
        </p>
        <p>
          Motivul e legat de modul în care browser-ul citește documentul HTML,
          și anume
          {' '}
          <strong>de sus în jos</strong>
          {' '}
          . Astfel, punând elementul înainte de body ne asigurăm
          că stilurile sunt încărcate înainte să apară conținutul pe pagină.
        </p>
        <p>
          Dacă l-am pune la final de body - cum am făcut în video-ul de mai jos  - e posibil
          să vedem mai întâi HTML-ul nestilizat iar mai târziu
          să se aplice stilurile.
        </p>

        <LessonFigure
          withBorder
          isVideo
          src={`${process.env.CLOUDFRONT_PUBLIC}/demo-assets/css-extern-end-of-body.mp4`}
          alt="CSS extern inclus la final de body"
        />
        <LessonTip>
          De aceea ca și "good practice" vom includem fișierele
          de CSS externe în
          {' '}
          <FormattedText as="strong">{'<head>'}</FormattedText>
        </LessonTip>
      </section>
    </>
  );
}

const externCssExample: {
  folders: ExerciseFolder[],
  files: ExerciseFile[]
} = {
  folders: [{
    key: 'style',
    name: 'style',
    files: [{
      key: 'custom.css',
      name: 'custom.css',
      content: `body {
  color: #fff;
  text-align: center;
  font-family: sans-serif;
  background-color: #282a36;
}`,
    }, {
      key: 'style.css',
      name: 'style.css',
      content: `h1 {
  text-align: center;
  font-size: 40px;
  text-decoration: underline;
}
img {
  width: 30vw;
  max-width: 100%;
  max-height: 100%;
}
p {
  font-size: 33px;
  text-align: center;
  margin-left: 50px;
}
`,
    }],
    folders: [],
  }],
  files: [{
    key: 'index.html',
    name: 'index.html',
    content: `<!DOCTYPE html>
<html>
<head>
  <title>My Dog</title>
  <link rel="stylesheet" href="style/style.css">
  <link rel="stylesheet" href="style/custom.css">
</head>
<body>
    <h1>Rafa is the best dog</h1>
    <p>My dog is named Rafa and he is the best dog in the world.</p>
    <img src="${process.env.CLOUDFRONT_PUBLIC}/demo-assets/golden-retriever-and-ball.jpg" alt="Golden retriever and ball" />
</body>
</html>
`,
  }],
};
