import React from 'react';
import { RESOURCES } from './resources-model';
import ResourcePreview from './ResourcePreview/ResourcePreview';

import styles from './Resources.module.scss';

function Resources() {
  const sections = [{
    id: 'esentials',
    title: 'Esențiale',
    description: 'Noi le avem mereu deschise într-un tab. Tu?',
  }, {
    id: 'images-videos',
    title: 'Imagini și Video-uri',
    description: 'Vin cu o licență deschisă deci le putem folosi în orice proiect.',
  },
  {
    id: 'vector',
    title: 'Ilustrații vectoriale',
    description: 'Te ajută să faci site-ul mai prietenos și au o licență deschisă pentru a le folosi fără probleme.',
  },
  {
    id: 'icons',
    title: 'Iconite',
    description: 'Te ajută să faci interfața mai intuitivă, mai ales pe mobil unde nu ai char așa de mult spațiu.',
  },
  {
    id: 'css-spinners',
    title: 'CSS Spiners',
    description: 'Inspirație pentru loaderele din proiectele tale.',
  }, {
    id: 'tutorials',
    title: 'Tutoriale interactive',
    description: 'Sunt multe tutoriale pe net, dar acestea ne-au atras atenția căci fac învățarea mai interactivă.',
  }, {
    id: 'blogs',
    title: 'Blog-uri',
    description: 'Pentru când vrei să te relaxezi citind despre ultimele noutăți.',
  },
  {
    id: 'fonts',
    title: 'Free Fonts',
    description: 'Adaugă mai multă personalitate site-ului tău shimbând fonturile.',
  },
  {
    id: 'books',
    title: 'Cărți',
    description: 'Merită citite pe larg căci conțin o mulțime de informații care te vor ajuta să ajungi la următorul nivel.',
  },
  {
    id: 'backgrounds-and-colors',
    title: 'Background-uri & Culori',
    description: 'Dacă nu ai un designer care să vină cu sugestii, te poți inspira de aici. :)',
  },
  {
    id: 'perf',
    title: 'Performanță',
    description: 'Asigură-te că aplicație rămâne performantă și respectă bunele practici.',
  }];

  return (
    <main className={styles['resources-page']}>
      <h1> 📚 Resurse pentru fiecare FrontEnd developer </h1>
      <div className={styles['resources-page__about']}>
        <p>
          Sunt atât de multe resurse gratuite încât e greu să știi care sunt cele mai bune.
          <br />
          <br />
          Așa că am pornit de la site-urile ce ne ajută zilnic în joburile
          nostre de FrontEnd developeri, le-am păstrat doar pe cele mai utile
          și am creat cu ele lista de mai jos.
        </p>
        <p>
          Așteptăm și sugestiile tale, așa că dă-ne un semn
          cu resurse care te ajută pe tine și le vom adauga aici
        </p>
      </div>
      <ol className={styles['category-list']}>
        {sections.map(({ id, title, description }) => (
          <li key={title} className={`${styles.category} relative`}>
            <h2>
              {title}
            </h2>
            {!!description && (
              <p className={styles.category__description}>
                { description}
              </p>
            )}
            <ol className={styles['resources-list']}>
              {RESOURCES.filter((r) => r.category === id).map((resource) => (
                <li key={resource.title}>
                  <ResourcePreview {...resource} />
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </main>
  );
}

export default Resources;
