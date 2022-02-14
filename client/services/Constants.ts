import {
  Contributor,
  CatalinPopusoi,
  Diana,
  NicolaeMaties,
  Pava,
  IulianRedinciuc,
  RobertParasca,
  SebastianLatkolic,
  DanielHutanu,
} from './contributors';

export type LessonDescription = {
  id: string;
  written: boolean;
  title: string;
  description: string;
  url: string;
  type: 'intro' | 'html' | 'css' | 'javascript' | 'extra';
  // 👇 Optional properties for lessons not written yet
  cover?: string;
  ogImage?: string;
  contributors?: Contributor[];
  chapters?: {
    title: string;
    id: string;
    subchapters?: {
      title: string;
      id: string
    }[]
  }[];
  withExercises?: boolean;
};

export const LESSONS: LessonDescription[] = [
  /** Intro lessons */
  {
    id: 'despre-noi',
    written: true,
    title: 'Despre noi',
    description: 'Ce ne face diferiți și de ce ai vrea să înveți alături de noi.',
    url: '/intro/despre-noi',
    type: 'intro',
    contributors: [Pava],
    withExercises: false,
    cover: '/images/lessons/lesson-0__cover.svg',
    chapters: [
      { title: 'Ce e FrontEnd.ro?', id: 'introducere' },
      { title: 'De ce e FrontEnd.ro diferit?', id: 'de-ce-suntem-diferiti' },
      { title: 'De ce e FrontEnd.ro gratuit?', id: 'de-ce-e-frontend-gratuit' },
      { title: 'Cum pot să ajut?', id: 'cum-pot-sa-ajut' },
      { title: 'Skill-uri și concepte', id: 'skilluri-concepte' },
      { title: 'Cum să folosești platforma', id: 'cum-sa-folosesti-platforma' },
      { title: 'Tool-uri necesare', id: 'tooluri-necesare' },
      { title: 'Resurse recomandate', id: 'resurse-recomandate' },
    ],
  },
  {
    id: 'vreau-sa-ajut',
    written: false,
    title: 'Cum poți ajuta',
    description:
      'Ne dorim ca acest proiect să fie un efort de comunitate, deci dacă-ți place ce facem aici contribuie și tu!',
    url: '/intro/vreau-sa-ajut',
    type: 'intro',
  },
  {
    id: 'ce-este-frontend-ul',
    written: false,
    title: 'Ce este FrontEnd-ul?',
    description:
      'Află ce înseamnă să faci aplicații Web și de ce e mult mai interesant decât ai putea crede.',
    url: '/intro/ce-este-frontend-ul',
    type: 'intro',
  },
  {
    id: 'vs-code',
    written: true,
    title: 'Visual Studio Code',
    description:
      'Scurtă introducere în programul pe care-l vom folosi să scriem cod, și nu numai.',
    url: '/intro/vs-code',
    type: 'intro',
    contributors: [Diana],
    withExercises: false,
    cover: `${process.env.CLOUDFRONT_PUBLIC}/seo/vs-code-light.png`,
    ogImage: `${process.env.CLOUDFRONT_PUBLIC}/seo/vs-code.jpg`,
    chapters: [
      { title: 'Downloadează-l și instalează-l', id: 'downloadeaza-si-instaleaza' },
      { title: 'Workspace setup', id: 'workspace-setup' },
      { title: 'Componența VisualStudio Code', id: 'componenta-VSCode' },
      { title: 'Scurtături', id: 'scurtaturi' },
      {
        title: 'Indentarea și formatarea codului',
        id: 'indentarea-si-formatarea-codului',
      },
      { title: 'Formatarea codului la save', id: 'formatarea-codului-la-save' },
      { title: 'Extensii', id: 'extensii' },
      { title: 'BONUS - customizare', id: 'bonus-customizare' },
    ],
  },
  /** HTML lessons */
  {
    id: 'despre-html',
    written: true,
    title: 'Despre HTML',
    description:
      'Învață principiile de bază ale acestui limbaj și scrie primele linii de cod.',
    url: '/html/despre-html',
    type: 'html',
    contributors: [CatalinPopusoi],
    withExercises: true,
    cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/about-html/lesson-gallery__cover.png`,
    ogImage: `${process.env.CLOUDFRONT_PUBLIC}/seo/about-html_1200w.jpg`,
    chapters: [
      { title: 'O simplă analogie', id: 'analogie' },
      { title: 'Ce este HTML?', id: 'intro' },
      { title: 'Elemente', id: 'elemente' },
      { title: 'Atribute', id: 'atribute' },
      { title: 'Relații de rudenie', id: 'relatii' },
      { title: 'Resurse', id: 'resurse' },
    ],
  },
  {
    id: 'structura-pagina-html',
    written: true,
    title: 'Structura fiecărei pagini HTML',
    description: 'Orice website, fie că este un site de prezentare sau un complex editor video, conține aceeași structura de bază cu mai multe elemente descriptive și nu numai.',
    url: '/html/structura-pagina-html',
    type: 'html',
    contributors: [IulianRedinciuc, Pava],
    withExercises: false,
    cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/html-structure/lesson-gallery__cover.png`,
    ogImage: `${process.env.CLOUDFRONT_PUBLIC}/seo/html-structure_1200w.jpg`,
    chapters: [
      { title: 'Structura de bază', id: 'structura' },
      { title: 'Elementul <head>', id: 'head' },
      { title: 'Elementul <body>', id: 'body' },
      { title: 'Rezumat', id: 'rezumat' },
    ],
  },
  {
    id: 'validare',
    written: true,
    title: 'Validarea paginilor HTML',
    description:
      'Deși putem "scăpa" fără să scriem HTML valid, acest lucru nu e deloc încurajat. Hai să vedem de ce, și cum ne putem asigura că scriem cod corect.',
    url: '/html/validare',
    type: 'html',
    contributors: [Pava],
    withExercises: true,
    cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/html-validation/lesson-gallery__cover.png`,
    ogImage: `${process.env.CLOUDFRONT_PUBLIC}/public/seo/html-validation_1200w.jpg`,
    chapters: [
      { title: 'Cum validăm o pagină HTML?', id: 'cum-validam' },
      { title: 'De ce merg site-urile invalide?', id: 'pagini-invalide' },
      { title: 'De ce e importantă validarea?', id: 'de-ce-validam' },
    ],
  },
  {
    id: 'texte',
    written: true,
    title: 'Texte',
    description:
      'Avem la dispoziție mai multe elemente când vine vorba de texte, iar aici învățăm când și cum să le folosim.',
    url: '/html/texte',
    type: 'html',
    contributors: [Diana],
    withExercises: true,
    cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/texts/lesson-gallery__cover.png`,
    ogImage: `${process.env.CLOUDFRONT_PUBLIC}/seo/texts_1200w.jpg`,
    chapters: [
      { title: 'Titluri (Headings)', id: 'titluri' },
      { title: 'Paragrafe', id: 'paragrafe' },
      { title: 'Elementul <hr>', id: 'elementul-hr' },
      { title: 'Citate', id: 'citate' },
      { title: 'Elementele <em> & <strong>', id: 'em-strong' },
    ],
  },
  {
    id: 'linkuri-si-butoane',
    written: true,
    title: 'Link-uri și butoane',
    description:
      'Învață să folosești link-uri și butoane în HTML și diferența dintre acestea.',
    url: '/html/linkuri-si-butoane',
    type: 'html',
    contributors: [Diana],
    withExercises: true,
    cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/links-and-buttons/lesson-gallery__cover.png`,
    ogImage: `${process.env.CLOUDFRONT_PUBLIC}/seo/links-and-buttons_1200w.jpg`,
    chapters: [
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
    ],
  },
  {
    id: 'liste',
    written: true,
    title: 'Liste',
    description: 'Hai să vorbim despre cele 3 tipuri de liste și când să-l folosești pe fiecare.',
    url: '/html/liste',
    contributors: [Diana],
    withExercises: true,
    cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/lists/lesson-gallery__cover.png`,
    ogImage: `${process.env.CLOUDFRONT_PUBLIC}/public/seo/lists_1200w.jpg`,
    type: 'html',
    chapters: [
      { title: 'Tipuri de liste', id: 'tipuri-de-liste' },
      {
        title: 'Liste neordonate',
        id: 'liste-neordonate',
      },
      { title: 'Liste ordonate', id: 'liste-ordonate' },
      {
        title: 'Atributele acceptate de listele ordonate',
        id: 'atributele-acceptate-de-listele-ordonate',
      },
      { title: 'Sub-liste', id: 'sub-liste' },
      { title: 'Bonus tips și concluzii', id: 'bonus-tips-si-concluzii' },
    ],
  },
  {
    id: 'containere',
    written: true,
    title: 'Containere',
    description:
      'Am parcurs câteva elemente de bază, dar nu am vorbit despre cum le organizăm pentru a crea layout-uri mai complexe. Aici intervin elementele de tip “container”.',
    url: '/html/containere',
    contributors: [Pava],
    withExercises: true,
    cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/containers/lesson-gallery__cover.png`,
    ogImage: `${process.env.CLOUDFRONT_PUBLIC}/public/seo/containers_1200w.jpg`,
    type: 'html',
    chapters: [
      {
        title: 'De ce avem nevoie de aceste elemente?',
        id: 'why',
      }, {
        title: 'Header, Main și Footer',
        id: 'header-main-footer',
      },
      { title: 'Nav', id: 'nav' },
      { title: 'Article', id: 'article' },
      { title: 'Section', id: 'section' },
      { title: 'Div', id: 'div' },
      {
        title: 'De ce e important ce container folosim?',
        id: 'importanta-containerelor',
      },
    ],
  },
  {
    id: 'imagini',
    written: true,
    title: 'Imagini',
    description:
      'Învață să adaugi și să optimizezi imagini în paginile Web.',
    contributors: [Pava],
    withExercises: true,
    cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/images/lesson-gallery__cover.png`,
    ogImage: `${process.env.CLOUDFRONT_PUBLIC}/public/seo/html-images_1200w.jpg`,
    url: '/html/imagini',
    type: 'html',
    chapters: [
      { title: 'Elementul <img>', id: 'elementul-img' },
      { title: 'Width & Height', id: 'width-height' },
      { title: 'Lazy loading', id: 'lazy-loading' },
      {
        title: 'Imagini responsive',
        id: 'imagini-responsive',
        subchapters: [{
          title: 'Atributul srcset',
          id: 'srcset',
        }, {
          title: 'Proprietatea image-set',
          id: 'image-set',
        }],
      },
      { title: 'Elementul <picture>', id: 'elementul-picture' },
    ],
  },
  {
    id: 'audio-video',
    written: true,
    title: 'Video și Audio',
    description: 'Imaginile aduc mai multă viață site-urilor noastre, dar putem merge un pas mai departe folosind elemente video și audio.',
    cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/video-audio/lesson-gallery__cover__1200w.png`,
    ogImage: `${process.env.CLOUDFRONT_PUBLIC}/public/seo/video-audio_1200w.jpg`,
    contributors: [SebastianLatkolic, Pava],
    withExercises: false,
    url: '/html/audio-video',
    type: 'html',
    chapters: [
      {
        title: 'Elementul <audio>',
        id: 'audio-element',
        subchapters: [{
          title: 'Atributele elementului <audio>',
          id: 'atributele-elementului-audio',
        }],
      },
      {
        title: 'Elementul <video>',
        id: 'video-element',
        subchapters: [{
          title: 'Atributele elementului <video>',
          id: 'atributele-elementului-video',
        }, {
          title: 'Subtitrări sau Captions',
          id: 'subtitles-captions',
        }],
      },
    ],
  },
  {
    id: 'formulare',
    written: true,
    title: 'Formulare',
    url: '/html/formulare',
    description: 'Cu ce elemente putem construi formulare moderne, și care sunt cele mai bune practici legate de acestea?',
    contributors: [RobertParasca, Pava],
    withExercises: true,
    cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/forms/lesson-gallery__cover.png`,
    ogImage: `${process.env.CLOUDFRONT_PUBLIC}/public/seo/forms_1200w.jpg`,
    type: 'html',
    chapters: [
      { title: 'Elementul <form>', id: 'form' },
      {
        title: 'Elementul <input>',
        id: 'input',
        subchapters: [{
          title: 'Radio input',
          id: 'radio',
        }],
      },
      { title: 'Elementul <textarea>', id: 'textarea' },
      { title: 'Elementul <select>', id: 'select' },
      {
        title: 'Bune practici',
        id: 'bune-practici',
        subchapters: [{
          title: 'Elementul <label>',
          id: 'label',
        }, {
          title: 'Submit button',
          id: 'submit-button',
        }],
      },
    ],
  },
  /** CSS Lessons */
  {
    id: 'despre-css',
    written: false,
    title: 'Despre CSS',
    description: 'Învață principiile de bază ale stilizării paginilor Web și fii inspirat de tot ce e posibil cu acest limbaj.',
    url: '/css/despre-css',
    type: 'css',
  },
  {
    id: 'moduri-stilizare',
    written: true,
    title: 'Cele 3 moduri de stilizare',
    description:
      'Învață modurile prin care putem aplica stiluri paginilor Web.',
    url: '/css/moduri-stilizare',
    cover: '/images/lessons/styling-methods__cover.svg',
    ogImage: 'https://frontend.ro/seo/styling-methods.jpg',
    type: 'css',
    contributors: [DanielHutanu],
    withExercises: true,
    chapters: [
      { title: 'CSS Inline', id: 'css-inline' },
      {
        title: 'CSS Intern',
        id: 'css-intern',
      },
      { title: 'CSS Extern', id: 'css-extern' },
      { title: 'BONUS', id: 'bonus' },
    ],
  },
  {
    id: 'taguri-clase-si-id-uri',
    written: false,
    title: 'Tag-uri, clase și id-uri',
    description:
      'Pentru a stiliza un element, sau mai multe, trebuie să le putem diferenția față de celelalte. Putem face acest lucru după tag, clase sau id-uri.',
    url: '/css/taguri-clase-si-id-uri',
    type: 'css',
  },
  {
    id: 'box-model',
    written: true,
    title: 'Box model',
    cover: '/images/lessons/box-model/cover.svg',
    ogImage: `${process.env.CLOUDFRONT_PUBLIC}/seo/box-model.jpg`,
    description:
      'Deși unele site-uri sunt cu adevărat WOW, fiecare element e de fapt un dreptunghi cu câteva proprietăți mai speciale numit Box Model. Aici învățăm despre el.',
    url: '/css/box-model',
    type: 'css',
    contributors: [CatalinPopusoi],
    withExercises: false,
    chapters: [
      { title: 'Componentele Box Model', id: 'componentele-box-model' },
      { title: 'Border', id: 'border' },
      { title: 'Margin', id: 'margin' },
      { title: 'Padding', id: 'padding' },
      { title: 'DevTools Box Model', id: 'devtools-box-model' },
      { title: 'Box-sizing', id: 'box-sizing' },
      { title: 'Box Model interactiv', id: 'box-model-interactiv' },
    ],
  },
  {
    id: 'tranzitii',
    written: false,
    title: 'Tranziții',
    description:
      'Extrem de folosite în multe aplcații, acestea adaugă interactivitate paginilor noastre.',
    url: '/css/tranzitii',
    type: 'css',
  },
  {
    id: 'animatii',
    written: false,
    title: 'Animații',
    description:
      'Similare cu tranzițiile dar mult mai puternice. Singura limită e creativitatea!',
    url: '/css/animatii',
    type: 'css',
  },
  {
    id: 'media-queries',
    written: false,
    title: 'CSS Media Queries',
    description:
      'Folosind această tehnică putem aplica stiluri diferite în funcție de dimensiunea ecranului sau alte caracteristici ale dispozitivului. Așa putem face site-ul să arate bine și pe telefon și pe calculator.',
    url: '/css/media-queries',
    type: 'css',
  },
  /** JavaScript Lessons */
  {
    id: 'despre-javascript',
    written: false,
    title: 'Despre JavaScript',
    description: 'Cu HTML și CSS putem crea o experiență vizuală plăcută, dar lipsită de interactivitate. Aici intră în scenă JavaScript, limbajul cu care totul e posibil.',
    url: '/javascript/despre-javascript',
    type: 'javascript',
  },
  {
    id: 'cum-sa-gandim-ca-un-programator',
    written: false,
    title: 'Cum să gândim ca un programator',
    description: 'Înainte să "sărim" în progamarea efectivă, hai să vorbim puțin despre ce înseamnă să scrii cod și cum să abordezi această nouă provocare.',
    url: '/javascript/cum-sa-gandim-ca-un-programator',
    type: 'javascript',
  },
  {
    id: 'variabile-si-tipuri-primitive',
    written: false,
    title: 'Variabile și tipuri primitive',
    description: 'Ce sunt variabilele, de ce avem nevoie de ele și cum le folosim.',
    url: '/javascript/variabile-si-tipuri-primitive',
    type: 'javascript',
  },
  {
    id: 'obiecte-si-array-uri',
    written: false,
    title: 'Obiecte și Array-uri',
    description:
      'Dacă până acum am avut variabile cu o singură valoare, în Obiecte și Array-uri putem reține mai multe informații ce au legătură între ele.',
    url: '/javascript/obiecte-si-array-uri',
    type: 'javascript',
  },
  {
    id: 'functii',
    written: false,
    title: 'Funcții',
    description:
      'Organizează codul în "părți" reutilizabile pentru o mai bună arhitectură.',
    url: '/javascript/functii',
    type: 'javascript',
  },
  /** Extra Lessons */
  {
    id: 'devtools',
    written: false,
    title: 'DevTools',
    description:
      'Browser-ele ne oferă multe tool-uri care ne măresc productivitatea extrem de mult. Hai să învățăm să le folosim în această lecție.',
    url: '/javascript/devtools',
    type: 'extra',
  },
  {
    id: 'graceful-degradation',
    written: false,
    title: 'Graceful Degradation',
    description:
      'Un mod de a ne construi aplicațiile astfel încât și utilizatorii de pe dispozitive mai vechi să aibă o experiență decentă',
    url: '/concepte/graceful-degradation',
    type: 'extra',
  },
  {
    id: 'biblioteci-si-framework-uri',
    written: false,
    title: 'Biblioteci și Framework-uri',
    description: 'Când vei lucra la proiecte "reale" alături de alți developeri, vei vedea că de multe ori refolosim cod scris de alții sub formă de biblioteci sau framework-uri.',
    url: '/concepte/biblioteci-si-framework-uri',
    type: 'extra',
  },
];

export function getUpcomingLesson(pathname: string): LessonDescription {
  const upcomingLesson = LESSONS.find((article) => pathname.includes(article.url));

  return upcomingLesson || null;
}

export function getLessonById(id: string): LessonDescription {
  const match = LESSONS.find((lesson) => lesson.id === id);

  return match || null;
}

export const GITHUB_ORG_URL = 'https://github.com/FrontEnd-ro';
export const GITHUB_URL = 'https://github.com/FrontEnd-ro/frontend.ro';

export interface Figure {
  alt: string;
  src: string;
  demo?: string;
  isVideo?: boolean;
  width?: number;
}

export const IMAGES_MIME_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/svg+xml'];
export const IMAGES_EXTENSIONS = ['png', 'jpg', 'jpeg', 'webp', 'svg'];

export const MONACO = {
  TOPIC_MARKDOWN_MAX_LENGTH: 2048,
  EXERCISE_MARKDOWN_MAX_LENGTH: 5000,

  EVENTS: {
    CURSOR: 'C',
    SELECTION: 'SE',
    MODEL: 'M',
    SCROLL: 'SC',
  },
};
