import React from 'react';
import { RESOURCES, ResourceCategory } from './resources-model';
import ResourcePreview from './ResourcePreview/ResourcePreview';
import List from '~/components/List';

import styles from './Resources.module.scss';

function Resources() {
  const sections = [{
    id: ResourceCategory.ESSENTIALS,
    title: 'Esențiale',
    description: 'Noi le avem mereu deschise într-un tab. Tu?',
  }, {
    id: ResourceCategory.IMAGES_VIDEOS,
    title: 'Imagini și Video-uri',
    description: 'Vin cu o licență deschisă deci let poți folosi în orice proiect.',
  },
  {
    id: ResourceCategory.VECTOR,
    title: 'Ilustrații vectoriale',
    description: 'Te ajută să faci site-ul mai prietenos și au o licență deschisă pentru a le folosi fără probleme.',
  },
  {
    id: ResourceCategory.ICONS,
    title: 'Iconițe',
    description: 'Te ajută să faci interfața mai intuitivă, mai ales pe mobil unde nu avem chiar așa de mult spațiu.',
  },
  {
    id: ResourceCategory.CSS_SPINNERS,
    title: 'CSS Spiners',
    description: 'Inspirație pentru loaderele din proiectele tale.',
  }, {
    id: ResourceCategory.TUTORIALS,
    title: 'Tutoriale interactive',
    description: 'Sunt multe tutoriale pe net, dar acestea ne-au atras atenția căci fac învățarea mai interactivă.',
  }, {
    id: ResourceCategory.BLOGS,
    title: 'Blog-uri',
    description: 'Pentru când vrei să te relaxezi citind despre ultimele noutăți.',
  },
  {
    id: ResourceCategory.BOOKS,
    title: 'Cărți',
    description: 'Merită citite pe larg căci conțin o mulțime de informații care sigur te vor ajuta.',
  },
  {
    id: ResourceCategory.BACKGROUNDS_AND_COLORS,
    title: 'Background-uri & Culori',
    description: 'Dacă echipa nu are un designer care să vină cu sugestii, te poți inspira de aici :)',
  },
  {
    id: ResourceCategory.PERFORMANCE,
    title: 'Performanță',
    description: 'Asigură-te că aplicație rămâne performantă și respectă bunele practici.',
  },
  {
    id: ResourceCategory.FONTS,
    title: 'Fonts',
    description: 'Adaugă mai multă personalitate site-ului tău schimbând fonturile.',
  },
  {
    id: ResourceCategory.EXTRA,
    title: 'Extra',
    description: 'Îți îmbunătățesc întreaga experiență ca și developer.',
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
          cu resursele care te ajută pe tine și le vom adăuga aici.
        </p>
      </div>
      <List as="ol" className={styles['category-list']}>
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
            <List as="ol" className={styles['resources-list']}>
              {RESOURCES[id].map((resource) => (
                <li key={resource.title}>
                  <ResourcePreview {...resource} />
                </li>
              ))}
            </List>
          </li>
        ))}
      </List>
    </main>
  );
}

export default Resources;
