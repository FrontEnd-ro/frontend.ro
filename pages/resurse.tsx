import React from 'react';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import Resources from '~/components/learn/Resources';
import SEOTags from '~/components/SEOTags';
import { useTranslation } from '~/services/typesafeNextTranslate';

function ResourcesPage() {
  const { t, lang } = useTranslation('common');
  return (
    <>
      <SEOTags
        title={`${t('Resources.title')} | FrontEnd.ro`}
        shareImage={`${process.env.CLOUDFRONT_PUBLIC}/public/seo/resources.jpg`}
        description={t('Resources.seo_description')}
        url={ lang === 'ro' ? "https://FrontEnd.ro/resurse" : "https://FrontendCademy.com/resurse"}
      />
      <Header withNavMenu />
      <Resources />
      <Footer />
    </>
  );
}

export default ResourcesPage;
