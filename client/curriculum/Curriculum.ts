// We might want to move this information into the DB when we reach
// a bigger number of lessons. Until then, it's fine to keep it here,
// together with the curriculum MDX files.
import {
  Contributor,
  CatalinPopusoi,
  Diana,
  Pava,
  IulianRedinciuc,
  RobertParasca,
  SebastianLatkolic,
  DanielHutanu,
} from '../services/contributors';

// This is data exported from the MDX that is not required
// outside the lesson. Thus, we keep it in the MDX, together
// with the content.
export type MDXLessonConfig = {
  chapters: LessonChapter[];
}

// Unlike the config above, we expect to use this one
// in other places except the lesson one. For example, we might
// want to show a list of related lessons. This requires us
// to be able to read all lessons and apply some basic filtering.
// That's why we keep this information in this JSON, and not in MDX.
export type LessonConfig = {
  id: string;
  written: boolean;
  title: string;
  description: string;
  type: 'intro' | 'html' | 'css' | 'javascript' | 'extra';
  // 👇 Optional properties for lessons not written yet
  cover?: string;
  ogImage?: string;
  contributors?: Contributor[];
  chapters?: LessonChapter[];
  withExercises?: boolean;
  resources?: {
    text: string;
    href: string;
  }[];
};

type LessonChapter = {
  title: string;
  id: string;
  subchapters?: {
    title: string;
    id: string
  }[]
}

const LESSONS: { en?: LessonConfig; ro?: LessonConfig;}[] = [
  /** Intro lessons */
  {
    ro: {
      id: 'despre-noi',
      written: true,
      title: 'Despre noi',
      description: 'Ce ne face diferiți și de ce ai vrea să înveți alături de noi.',
      type: 'intro',
      contributors: [Pava],
      withExercises: false,
      cover: '/images/lessons/lesson-0__cover.svg',
    }
  },
  {
    ro: {
      id: 'vreau-sa-ajut',
      written: false,
      title: 'Cum poți ajuta',
      description:
        'Ne dorim ca acest proiect să fie un efort de comunitate, deci dacă-ți place ce facem aici contribuie și tu!',
      type: 'intro',
    }
  },
  {
    ro: {
      id: 'ce-este-frontend-ul',
      written: false,
      title: 'Ce este FrontEnd-ul?',
      description:
        'Află ce înseamnă să faci aplicații Web și de ce e mult mai interesant decât ai putea crede.',
      type: 'intro',
    }
  },
  {
    ro: {
      id: 'vs-code',
      written: true,
      title: 'Visual Studio Code',
      description:
        'Scurtă introducere în programul pe care-l vom folosi să scriem cod, și nu numai.',
      type: 'intro',
      contributors: [Diana],
      withExercises: false,
      cover: `${process.env.CLOUDFRONT_PUBLIC}/seo/vs-code-light.png`,
      ogImage: `${process.env.CLOUDFRONT_PUBLIC}/seo/vs-code.jpg`,
      resources: [
        {
          text: 'Documentația completă a VisualStudio Code',
          href: 'https://code.visualstudio.com/',
        },
      ]
    },
    en: {
      id: 'vs-code',
      written: true,
      title: 'Visual Studio Code',
      description:
        'Short introduction for the application you\'ll be using to write code, and much more.',
      type: 'intro',
      contributors: [Diana],
      withExercises: false,
      cover: `${process.env.CLOUDFRONT_PUBLIC}/seo/vs-code-light.png`,
      ogImage: `${process.env.CLOUDFRONT_PUBLIC}/seo/vs-code.jpg`,
      resources: [
        {
          text: 'Full documentation for VisualStudio Code',
          href: 'https://code.visualstudio.com/',
        },
      ]
    }
  },
  /** HTML lessons */
  {
    ro: {
      id: 'despre-html',
      written: true,
      title: 'Despre HTML',
      description:
        'Învață principiile de bază ale acestui limbaj și scrie primele linii de cod.',
      type: 'html',
      contributors: [CatalinPopusoi],
      withExercises: true,
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/about-html/lesson-gallery__cover.png`,
      ogImage: `${process.env.CLOUDFRONT_PUBLIC}/seo/about-html_1200w.jpg`,
      resources: [
        {
          text: 'Lista completă de elemente HTML de pe MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element',
        },
        {
          text: 'Lista completă de atribute posibile de pe MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes',
        },
      ]
    }
  },
  {
    ro: {
      id: 'structura-pagina-html',
      written: true,
      title: 'Structura fiecărei pagini HTML',
      description: 'Orice website, fie că este un site de prezentare sau un complex editor video, conține aceeași structura de bază cu mai multe elemente descriptive și nu numai.',
      type: 'html',
      contributors: [IulianRedinciuc, Pava],
      withExercises: false,
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/html-structure/lesson-gallery__cover.png`,
      ogImage: `${process.env.CLOUDFRONT_PUBLIC}/seo/html-structure_1200w.jpg`,
      resources: [
        {
          text: "What's in head?",
          href: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML",
        },
        {
          text: "View Source",
          href: "https://developer.mozilla.org/en-US/docs/Tools/View_source",
        },
      ],
    }
  },
  {
    ro: {
      id: 'validare',
      written: true,
      title: 'Validarea paginilor HTML',
      description:
        'Deși putem "scăpa" fără să scriem HTML valid, acest lucru nu e deloc încurajat. Hai să vedem de ce, și cum ne putem asigura că scriem cod corect.',
      type: 'html',
      contributors: [Pava],
      withExercises: true,
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/html-validation/lesson-gallery__cover.png`,
      ogImage: `${process.env.CLOUDFRONT_PUBLIC}/public/seo/html-validation_1200w.jpg`,
    },
    en: {
      id: 'validare',
      written: true,
      title: 'Validate HTML pages',
      description:
        "Although we can build working apps with invalid HTML, we should never do this. Let's see why, and how to make sure we're writing valid code.",
      type: 'html',
      contributors: [Pava],
      withExercises: true,
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/html-validation/lesson-gallery__cover.png`,
      ogImage: `${process.env.CLOUDFRONT_PUBLIC}/public/seo/html-validation_1200w.jpg`,
    }
  },
  {
    ro: {
      id: 'texte',
      written: true,
      title: 'Texte',
      description:
        'Avem la dispoziție mai multe elemente când vine vorba de texte, iar aici învățăm când și cum să le folosim.',
      type: 'html',
      contributors: [Diana],
      withExercises: true,
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/texts/lesson-gallery__cover.png`,
      ogImage: `${process.env.CLOUDFRONT_PUBLIC}/seo/texts_1200w.jpg`,
    },
    en: {
      id: 'texte',
      written: true,
      title: 'Text elements',
      description:
        'We have several elements we can use when it comes to texts, and here we learn when and how to use them.',
      type: 'html',
      contributors: [Diana],
      withExercises: true,
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/texts/lesson-gallery__cover.png`,
      ogImage: `${process.env.CLOUDFRONT_PUBLIC}/seo/texts_1200w.jpg`,
    }
  },
  {
    ro: {
      id: 'linkuri-si-butoane',
      written: true,
      title: 'Link-uri și butoane',
      description:
        'Învață să folosești link-uri și butoane în HTML și diferența dintre acestea.',
      type: 'html',
      contributors: [Diana],
      withExercises: true,
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/links-and-buttons/lesson-gallery__cover.png`,
      ogImage: `${process.env.CLOUDFRONT_PUBLIC}/seo/links-and-buttons_1200w.jpg`,
      resources: [
        {
          text: 'Documentația completă a link-urilor pe MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a',
        },
        {
          text: 'Documentația completă a <button> pe MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button',
        },
        {
          text: 'Valoarea "noreferrer" pentru atributul "rel"',
          href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/noreferrer',
        },
        {
          text: 'Valoarea "noopener" pentru atributul "rel"',
          href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/noopener',
        },
      ]
    }
  },
  {
    ro: {
      id: 'liste',
      written: true,
      title: 'Liste',
      description: 'Hai să vorbim despre cele 3 tipuri de liste și când să-l folosești pe fiecare.',
      contributors: [Diana],
      withExercises: true,
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/lists/lesson-gallery__cover.png`,
      ogImage: `${process.env.CLOUDFRONT_PUBLIC}/public/seo/lists_1200w.jpg`,
      type: 'html',
      resources: [
        {
          text: 'Documentația completă a <ul> pe MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul',
        },
        {
          text: 'Documentația completă a <ol> pe MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol',
        },
        {
          text: 'Documentația completă a <dl> pe MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl',
        },
      ]
    }
  },
  {
    ro: {
      id: 'containere',
      written: true,
      title: 'Containere',
      description:
        'Am parcurs câteva elemente de bază, dar nu am vorbit despre cum le organizăm pentru a crea layout-uri mai complexe. Aici intervin elementele de tip “container”.',
      contributors: [Pava],
      withExercises: true,
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/containers/lesson-gallery__cover.png`,
      ogImage: `${process.env.CLOUDFRONT_PUBLIC}/public/seo/containers_1200w.jpg`,
      type: 'html',
    }
  },
  {
    ro: {
      id: 'imagini',
      written: true,
      title: 'Imagini',
      description:
        'Învață să adaugi și să optimizezi imagini în paginile Web.',
      contributors: [Pava],
      withExercises: true,
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/images/lesson-gallery__cover.png`,
      ogImage: `${process.env.CLOUDFRONT_PUBLIC}/public/seo/html-images_1200w.jpg`,
      type: 'html',
      resources: [{
        text: 'Documentația completă a elementului <img> pe MDN',
        href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img',
        }, {
          text: 'Documentația completă a elementului <picture> pe MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture',
        }, {
          text: 'Mai multe detalii despre imagini Responsive',
          href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture',
        },
      ]
    }
  },
  {
    ro: {
      id: 'audio-video',
      written: true,
      title: 'Video și Audio',
      description: 'Imaginile aduc mai multă viață site-urilor noastre, dar putem merge un pas mai departe folosind elemente video și audio.',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/video-audio/lesson-gallery__cover__1200w.png`,
      ogImage: `${process.env.CLOUDFRONT_PUBLIC}/public/seo/video-audio_1200w.jpg`,
      contributors: [SebastianLatkolic, Pava],
      withExercises: false,
      type: 'html',
      resources: [
        {
          text: 'Documentatia elementului <audio> pe MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio',
        },
        {
          text: 'Documentatia elementului <video> pe MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video',
        },
        {
          text: 'Documentatia elementului <track> pe MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track',
        },
      ]
    },
    en: {
      id: 'audio-video',
      written: true,
      title: 'Video and Audio',
      description: 'Images bring life to our websites, but we can move a step forward using video and audio elements',
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/video-audio/lesson-gallery__cover__1200w.png`,
      ogImage: `${process.env.CLOUDFRONT_PUBLIC}/public/seo/video-audio_1200w.jpg`,
      contributors: [SebastianLatkolic, Pava],
      withExercises: false,
      type: 'html',
      resources: [
        {
          text: 'Documentation for the <audio> element on MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio',
        },
        {
          text: 'Documentation for the <video> element on MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video',
        },
        {
          text: 'Documentation for the <track> element on MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track',
        },
      ]
    }
  },
  {
    ro: {
      id: 'formulare',
      written: true,
      title: 'Formulare',
      description: 'Cu ce elemente putem construi formulare moderne, și care sunt cele mai bune practici legate de acestea?',
      contributors: [RobertParasca, Pava],
      withExercises: true,
      cover: `${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/forms/lesson-gallery__cover.png`,
      ogImage: `${process.env.CLOUDFRONT_PUBLIC}/public/seo/forms_1200w.jpg`,
      type: 'html',
    }
  },
  /** CSS Lessons */
  {
    ro: {
      id: 'despre-css',
      written: false,
      title: 'Despre CSS',
      description: 'Învață principiile de bază ale stilizării paginilor Web și fii inspirat de tot ce e posibil cu acest limbaj.',
      type: 'css',
    }
  },
  {
    ro: {
      id: 'moduri-stilizare',
      written: true,
      title: 'Cele 3 moduri de stilizare',
      description:
        'Învață modurile prin care putem aplica stiluri paginilor Web.',
      cover: '/images/lessons/styling-methods__cover.svg',
      ogImage: 'https://frontend.ro/seo/styling-methods.jpg',
      type: 'css',
      contributors: [DanielHutanu],
      withExercises: true,
    }
  },
  {
    ro: {
      id: 'taguri-clase-si-id-uri',
      written: false,
      title: 'Tag-uri, clase și id-uri',
      description:
        'Pentru a stiliza un element, sau mai multe, trebuie să le putem diferenția față de celelalte. Putem face acest lucru după tag, clase sau id-uri.',
      type: 'css',
    }
  },
  {
    ro: {
      id: 'box-model',
      written: true,
      title: 'Box model',
      cover: '/images/lessons/box-model/cover.svg',
      ogImage: `${process.env.CLOUDFRONT_PUBLIC}/seo/box-model.jpg`,
      description:
        'Deși unele site-uri sunt cu adevărat WOW, fiecare element e de fapt un dreptunghi cu câteva proprietăți mai speciale numit Box Model. Aici învățăm despre el.',
      type: 'css',
      contributors: [CatalinPopusoi],
      withExercises: false,
      resources: [{
        text: 'Documentația completă a box model-ului pe MDN',
        href: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model',
      }, {
        text: 'Documentația completă a proprietății box-sizing pe MDN',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing',
      }]
    }
  },
  {
    ro: {
      id: 'tranzitii',
      written: false,
      title: 'Tranziții',
      description:
        'Extrem de folosite în multe aplcații, acestea adaugă interactivitate paginilor noastre.',
      type: 'css',
    }
  },
  {
    ro: {
      id: 'animatii',
      written: false,
      title: 'Animații',
      description:
        'Similare cu tranzițiile dar mult mai puternice. Singura limită e creativitatea!',
      type: 'css',
    }
  },
  {
    ro: {
      id: 'media-queries',
      written: false,
      title: 'CSS Media Queries',
      description:
        'Folosind această tehnică putem aplica stiluri diferite în funcție de dimensiunea ecranului sau alte caracteristici ale dispozitivului. Așa putem face site-ul să arate bine și pe telefon și pe calculator.',
      type: 'css',
    }
  },
  /** JavaScript Lessons */
  {
    ro: {
      id: 'despre-javascript',
      written: false,
      title: 'Despre JavaScript',
      description: 'Cu HTML și CSS putem crea o experiență vizuală plăcută, dar lipsită de interactivitate. Aici intră în scenă JavaScript, limbajul cu care totul e posibil.',
      type: 'javascript',
    }
  },
  {
    ro: {
      id: 'cum-sa-gandim-ca-un-programator',
      written: false,
      title: 'Cum să gândim ca un programator',
      description: 'Înainte să "sărim" în progamarea efectivă, hai să vorbim puțin despre ce înseamnă să scrii cod și cum să abordezi această nouă provocare.',
      type: 'javascript',
    }
  },
  {
    ro: {
      id: 'variabile-si-tipuri-primitive',
      written: false,
      title: 'Variabile și tipuri primitive',
      description: 'Ce sunt variabilele, de ce avem nevoie de ele și cum le folosim.',
      type: 'javascript',
    }
  },
  {
    ro: {
      id: 'obiecte-si-array-uri',
      written: false,
      title: 'Obiecte și Array-uri',
      description:
        'Dacă până acum am avut variabile cu o singură valoare, în Obiecte și Array-uri putem reține mai multe informații ce au legătură între ele.',
      type: 'javascript',
    }
  },
  {
    ro: {
      id: 'functii',
      written: false,
      title: 'Funcții',
      description:
        'Organizează codul în "părți" reutilizabile pentru o mai bună arhitectură.',
      type: 'javascript',
    }
  },
  /** Extra Lessons */
  {
    ro: {
      id: 'devtools',
      written: false,
      title: 'DevTools',
      description:
        'Browser-ele ne oferă multe tool-uri care ne măresc productivitatea extrem de mult. Hai să învățăm să le folosim în această lecție.',
      type: 'extra',
    }
  },
  {
    ro: {
      id: 'graceful-degradation',
      written: false,
      title: 'Graceful Degradation',
      description:
        'Un mod de a ne construi aplicațiile astfel încât și utilizatorii de pe dispozitive mai vechi să aibă o experiență decentă',
      type: 'extra',
    }
  },
  {
    ro: {
      id: 'biblioteci-si-framework-uri',
      written: false,
      title: 'Biblioteci și Framework-uri',
      description: 'Când vei lucra la proiecte "reale" alături de alți developeri, vei vedea că de multe ori refolosim cod scris de alții sub formă de biblioteci sau framework-uri.',
      type: 'extra',
    }
  },
];

export function getLessons(locale: 'en' | 'ro'): LessonConfig[] {
  return LESSONS.map(l => l[locale]).filter(l => l !== undefined);
}

export function getLessonById(id: string, locale: 'ro' | 'en'): LessonConfig {
  const localeLessons = LESSONS
    .map((l) => l[locale])
    .filter(l => l !== undefined);
  const match = localeLessons.find((lesson) => lesson.id === id);

  return match || null;
}

export function getAdjacentLessons(id: string, locale: 'ro' | 'en'): LessonConfig[] {
  /**
   * We want to be able to navigate to the next / previous written lessons.
   * There's no point in navigating to a lesson only to find out it hasn't been written yet.
   */
  const localeLessons = LESSONS
    .map((l) => l[locale])
    .filter(l => l !== undefined);
  const writtenLessons = localeLessons.filter((lesson) => lesson.written);
  const currentLessonIndex = writtenLessons.findIndex((lesson) => lesson.id === id);
  if (currentLessonIndex === -1) {
    return [];
  }

  const previousLesson = writtenLessons[currentLessonIndex - 1] ?? null;
  const nextLesson = writtenLessons[currentLessonIndex + 1] ?? null;

  return [previousLesson, nextLesson];
}
