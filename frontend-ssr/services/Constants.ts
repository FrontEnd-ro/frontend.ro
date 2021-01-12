import { Diana, Pava } from './contributors';

export type LessonDescription = {
  written: boolean;
  title: string;
  description: string;
  url: string;
  type: 'intro' | 'html' | 'css' | 'javascript' | 'extra';
  // 👇 Optional properties for lessons not written yet
  cover?: string;
  contributors?: { name: string; avatar: string; url: string }[];
};

export const LESSONS: LessonDescription[] = [
  /** Intro lessons */
  {
    written: true,
    title: 'Despre noi',
    description: 'Ce ne face diferiți și de ce ai vrea să înveți alături de noi.',
    url: '/intro/about',
    type: 'intro',
    contributors: [Pava],
    cover: '/images/lessons/lesson-0__cover.svg',
  },
  {
    written: false,
    title: 'Cum poți ajuta',
    description:
      'Ne dorim ca acest proiect să fie un efort de comunitate, deci dacă-ți place ce facem aici contribuie și tu!',
    url: '/intro/how-to-help',
    type: 'intro',
  },
  {
    written: false,
    title: 'Ce este FrontEnd-ul?',
    description:
      'Află ce înseamnă să faci aplicații Web și de ce e mult mai interesant decât ai putea crede.',
    url: '/intro/what-is-frontend-development',
    type: 'intro',
  },
  {
    written: false,
    title: 'VisualStudio Code',
    description:
      'Scurtă introducere în programul pe care-l vom folosi să scriem cod.',
    url: '/intro/vs-code',
    type: 'intro',
  },
  /** HTML lessons */
  {
    written: false,
    title: 'Despre HTML',
    description:
      'Învață principiile de bază ale acestui limbaj și scrie primele linii de cod.',
    url: '/html/intro',
    type: 'html',
  },
  {
    written: false,
    title: 'Structura de bază a oricărei aplicații web',
    description:
      'Indiferent ce tip de aplicație creezi, toate au aceeași structură generală despre care vom vorbi aici.',
    url: '/html/base-structure',
    type: 'html',
  },
  {
    written: false,
    title: 'Validarea paginilor HTML',
    description:
      'Deși putem "scăpa" fără să scriem HTML valid, acest lucru nu e deloc încurajat. Hai să vedem de ce, și cum ne putem asigura că scriem cod corect.',
    url: '/html/validation',
    type: 'html',
  },
  {
    written: true,
    title: 'Texte',
    description:
      'Avem la dispoziție mai multe elemente când vine vorba de texte, iar aici învățăm când și cum să le folosim.',
    url: '/html/text-elements',
    type: 'html',
    contributors: [Diana],
    cover: '/images/lessons/text-elements__cover.svg',
  },
  {
    written: true,
    title: 'Liste',
    description: 'Un alt tip de element extrem de comun în paginile Web.',
    url: '/html/liste',
    contributors: [Diana],
    cover: '/images/lessons/lists__cover.svg',
    type: 'html',
  },
  {
    written: false,
    title: 'Containere',
    description:
      'Am parcurs câteva elemente de bază, dar nu am vorbit despre cum le organizăm pentru a crea layout-uri mai complexe.',
    url: '/html/containers',
    type: 'html',
  },
  {
    written: true,
    title: 'Imagini',
    description:
      'Fără imagini web-ul ar fi mult mai plicticos, deci hai să vedem cum le putem adăuga și care sunt cele mai bune practici legate de acestea.',
    contributors: [Pava],
    cover: '/images/lessons/images__cover.svg',
    url: '/html/images',
    type: 'html',
  },
  /** CSS Lessons */
  {
    written: false,
    title: 'Despre CSS',
    description: 'Învață principiile de bază ale stilizării paginilor Web și fii inspirat de tot ce e posibil cu acest limbaj.',
    url: '/css/intro',
    type: 'css',
  },
  {
    written: false,
    title: '3 moduri de stilizare',
    description:
      'Browserul ne oferă mai multe moduri prin care putem aplica stiluri paginilor noastre. Hai să vobim despre fiecare în parte.',
    url: '/css/how-to-style',
    type: 'css',
  },
  {
    written: false,
    title: 'Tag-uri, clase și id-uri',
    description:
      'Pentru a stiliza un element, sau mai multe, trebuie să le putem diferenția față de celelalte. Putem face acest lucru după tag, clase sau id-uri.',
    url: '/css/tags-classes-and-ids',
    type: 'css',
  },
  {
    written: false,
    title: 'Box model',
    description:
      'Deși unele site-uri sunt cu adevărat WOW, la bază fiecare element e doar un dreptunghi cu câteva proprietăți mai speciale. Aici învățăm despre ele.',
    url: '/css/box-model',
    type: 'css',
  },
  {
    written: false,
    title: 'Tranziții',
    description:
      'Extrem de folosite în multe aplcații, acestea adaugă interactivitate paginilor noastre.',
    url: '/css/transitions',
    type: 'css',
  },
  {
    written: false,
    title: 'Animații',
    description:
      'Similare cu tranzițiile dar mult mai puternice. Singura limită e creativitatea!',
    url: '/css/animations',
    type: 'css',
  },
  {
    written: false,
    title: 'CSS Media Queries',
    description:
      'Folosind această tehnică putem aplica stiluri diferite în funcție de dimensiunea ecranului sau alte caracteristici ale dispozitivului. Așa putem face site-ul să arate bine și pe telefon și pe calculator.',
    url: '/css/media-queries',
    type: 'css',
  },
  /** JavaScript Lessons */
  {
    written: false,
    title: 'Despre JavaScript',
    description: 'Cu HTML și CSS putem crea o experiență vizuală plăcută, dar lipsită de interactivitate. Aici intră în scenă JavaScript, limbajul cu care totul e posibil.',
    url: '/javascript/intro',
    type: 'javascript',
  },
  {
    written: false,
    title: 'Cum să gândim ca un programator',
    description: 'Înainte să "sărim" în progamarea efectivă, hai să vorbim puțin despre ce înseamnă să scrii cod și cum să abordezi această nouă provocare.',
    url: '/javascript/how-to-think-like-a-programmer',
    type: 'javascript',
  },
  {
    written: false,
    title: 'Variabile și tipuri primitive',
    description: 'Ce sunt variabilele, de ce avem nevoie de ele și cum le folosim.',
    url: '/javascript/variables-and-primitive-types',
    type: 'javascript',
  },
  {
    written: false,
    title: 'Obiecte și Array-uri',
    description:
      'Dacă până acum am avut variabile cu o singură valoare, în Obiecte și Array-uri putem reține mai multe informații ce au legătură între ele.',
    url: '/javascript/objects-and-arrays',
    type: 'javascript',
  },
  {
    written: false,
    title: 'Funcții',
    description:
      'Organizează codul în "părți" reutilizabile pentru o mai bună arhitectură.',
    url: '/javascript/objects-and-arrays',
    type: 'javascript',
  },
  /** Extra Lessons */
  {
    written: false,
    title: 'DevTools',
    description:
      'Browser-ele ne oferă multe tool-uri care ne măresc productivitatea extrem de mult. Hai să învățăm să le folosim în această lecție.',
    url: '/javascript/devtool',
    type: 'extra',
  },
  {
    written: false,
    title: 'Graceful Degradation',
    description:
      'Un mod de a ne construi aplicațiile astfel încât și utilizatorii de pe dispozitive mai vechi să aibă o experiență decentă',
    url: '/concepts/graceful-degradation',
    type: 'extra',
  },
  {
    written: false,
    title: 'Biblioteci și Framework-uri',
    description: 'Când vei lucra la proiecte "reale" alături de alți developeri, vei vedea că de multe ori refolosim cod scris de alții sub formă de biblioteci sau framework-uri.',
    url: '/concepts/libraries-and-frameworks',
    type: 'extra',
  },
];

export function getUpcomingLesson(pathname: string): LessonDescription {
  const upcomingLesson = LESSONS.find((article) => pathname.includes(article.url));

  return upcomingLesson || null;
}

export const GITHUB_URL = 'https://github.com/FrontEnd-ro/frontend.ro';
