import React from 'react';
import { TidbitGallery } from '~/tidbits';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import SEOTags from '~/components/SEOTags';
import { API_TidbitI } from '~/../shared/types/tidbit.types';
import TidbitService from '~/services/api/Tidbit.service';
import { useTranslation } from '~/services/typesafeNextTranslate';

const TidbitGalleryPage = ({ tidbits }: { tidbits: API_TidbitI[] }) => {
  const { t, lang } = useTranslation('common');
  return (
    <>
      <SEOTags
        url={`${process.env.APP_URL}/tidbits`}
        title={`Tidbits | ${t('FrontEndro')}`}
        shareImage={`${process.env.CLOUDFRONT_PUBLIC}/public/seo/tidbits_1200w.jpeg`}
        description={t('Tidbits.seo_description')}
      />
      <Header withNavMenu />
      <TidbitGallery tidbits={tidbits} />
      <Footer />
    </>
  );
};

// We don't want this to be a `getStaticProps` because we don't
// trigger a rebuild when this DB collection changes.
export async function getServerSideProps() {
  const tidbits = await TidbitService.getAll(['title', 'backgroundColor', 'tidbitId', 'items[0].imageSrc']) as Pick<
    API_TidbitI, 'tidbitId' | 'backgroundColor' | 'items' | 'title'>[];

  return {
    props: {
      tidbits,
    },
  };
}

export default TidbitGalleryPage;
