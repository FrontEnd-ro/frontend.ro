import List from '~/components/List';
import { RESOURCES, ResourceCategory } from './resources-model';
import ResourcePreview from './ResourcePreview/ResourcePreview';
import { Trans, useTranslation } from '~/services/typesafeNextTranslate';

import styles from './Resources.module.scss';

function Resources() {
  const { t } = useTranslation('common');
  return (
    <main className={styles['resources-page']}>
      <h1> {t('Resources.title')} </h1>
      <div className={styles['resources-page__about']}>
        <p>
          <Trans
            i18nKey={'common:Resources.description'}
            components={[
              <br key='0' />,
              <br key='1' />,
            ]}
          />
        </p>
        <p>
          {t('Resources.suggestions')}
        </p>
      </div>
      <List as="ol" className={styles['category-list']}>
        {Object.values(ResourceCategory).map((id) => (
          <li key={id} className={`${styles.category} relative`}>
            <h2 id={id}>
              {t(`Resources.chapters.${id}.title`)}
            </h2>
            <p className={styles.category__description}>
              {t(`Resources.chapters.${id}.description`)}
            </p>
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
