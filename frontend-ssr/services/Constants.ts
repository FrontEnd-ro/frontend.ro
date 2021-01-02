import { Pava } from './contributors';

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
    description: 'Ce ne face diferiți și de ce ai vrea să înveți cu noi',
    url: '/intro/lesson-0',
    type: 'intro',
    contributors: [Pava],
    cover: '/images/lessons/lesson-0__cover.svg',
  },
  {
    written: false,
    title: 'Cum să ajuți',
    description:
      'Ne dorim ca acest proiect să fie un efort de comunitate, deci dacă-ți place ce facem aici contribuie și tu!',
    url: '/intro/how-to-help',
    type: 'intro',
  },
  {
    written: false,
    title: 'Ce este FrontEnd-ul?',
    description:
      'Află ce înseamnă să faci site-uri și de ce e mult mai fain decât crezi',
    url: '/intro/what-is-frontend-development',
    type: 'intro',
  },
  {
    written: false,
    title: 'VisualStudio Code',
    description:
      'Scurtă introducere în programul pe care-l vom folosi să scriem cod',
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
    title: 'Structura de baza a oricarei aplicatii web',
    description:
      'Indiferent ce tip de aplicatie creezi, toate au aceeasi structura generala pe care o vom invata aici',
    url: '/html/base-structure',
    type: 'html',
  },
  {
    written: false,
    title: 'Validarea paginilor HTML',
    description:
      'Deși putem "scăpa" fără să scriem HTML valid, acest lucru ne aduce mai multe beneficii. Hai să vedem de ce și cum să ne asigurăm că codul nostru este ok',
    url: '/html/validation',
    type: 'html',
  },
  {
    written: false,
    title: 'Texte',
    description:
      'Avem la dispoziție mai multe elemente când vine vorba de texte, iar aici învățăm când și cum să le folosim',
    url: '/html/text-elements',
    type: 'html',
  },
  {
    written: false,
    title: 'Liste',
    description: 'Un alt tip de elemnet extrem de des folosit',
    url: '/html/lists',
    type: 'html',
  },
  {
    written: false,
    title: 'Containere',
    description:
      'Am parcurs cateva elemente de baza, dar nu am vorbim despre cum le organizam in pagina',
    url: '/html/containers',
    type: 'html',
  },
  {
    written: true,
    title: 'Imagini',
    description:
      'Fara imagini web-ul ar fi mult mai plicticos, deci hai sa vedem cum le putem adauga',
    contributors: [Pava],
    cover: '/images/lessons/images__cover.svg',
    url: '/html/images',
    type: 'html',
  },
  /** CSS Lessons */
  {
    written: false,
    title: 'Despre CSS',
    description: 'Învață principiile de bază ale stilizării paginilor Web',
    url: '/css/intro',
    type: 'css',
  },
  {
    written: false,
    title: '3 moduri de a stiliza pagina',
    description:
      'Browserul ne ofera mai multe moduri prin care putem aplica stiluri paginii. Hai să vobim despre fiecare.',
    url: '/css/how-to-style',
    type: 'css',
  },
  {
    written: false,
    title: 'Tag-uri, clase și id-uri',
    description:
      'Pentru a stiliza un element trebuie să-l putem selecta și putem face acest lucru după tag-ul, clasa sau id-ul său.',
    url: '/css/tags-classes-and-ids',
    type: 'css',
  },
  {
    written: false,
    title: 'Box model',
    description:
      'Spoler alert: toate elementele sunt dreptunghiuri cu anumite proprietăți speciale. Aici învățăm despre ele.',
    url: '/css/box-model',
    type: 'css',
  },
  {
    written: false,
    title: 'Tranziții',
    description:
      'Extrem de folosite în site-urile moderne, acestea adaugă interactivitate aplicației noastre',
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
      'Folosind această tehnică putem aplica diferite stiluri pe elementele noastre în funcție de dimensiunea ecranului și alte caracteristici',
    url: '/css/media-queries',
    type: 'css',
  },
  /** JavaScript Lessons */
  {
    written: false,
    title: 'Despre JavaScript',
    description: 'Descoperă principiile celui mai popular limbaj din lume',
    url: '/javascript/intro',
    type: 'javascript',
  },
  {
    written: false,
    title: 'Variabile și tipuri primitive',
    description: 'Ce sunt variabilele și la ce le folosim?',
    url: '/javascript/variables-and-primitive-types',
    type: 'javascript',
  },
  {
    written: false,
    title: 'Obiecte și Array-uri',
    description:
      'Dacă până acum am avut variabile cu o singură valoare, în obiect și Array-uri putem reține mai multe informații ce au legătură între ele',
    url: '/javascript/objects-and-arrays',
    type: 'javascript',
  },
  {
    written: false,
    title: 'Funcții',
    description:
      'Organizează codul în funcții reutilizabile pentru o mai bună arhitectură',
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
];

export function getUpcomingLesson(pathname: string): LessonDescription {
  const upcomingLesson = LESSONS.find((article) => pathname.includes(article.url));

  return upcomingLesson || null;
}

export const GITHUB_URL = 'https://github.com/iampava/frontend.ro';
