import NotFoundPage from '~/components/NotFound/NotFound';
import { WIPPopulatedCertificationI } from '~/../shared/types/certification.types';
import CertificationComponent from '~/components/certification/Certification/Certification';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import SEOTags from '~/components/SEOTags';

export default function CertificationPage(
  { certification }: { certification: WIPPopulatedCertificationI },
) {
  if (certification === null) {
    return <NotFoundPage />
  }

  const solvedExercisesCount = certification.lesson_exercises.length;
  const seoDescription = solvedExercisesCount > 0
    ? `${certification.user.name ?? certification.user.username} a rezolvat cu succes toate cele ${certification.lesson_exercises.length} exerciții.`
    : `${certification.user.name ?? certification.user.username} a rezolvat cu succes acest challenge!`;

  return (
    <>
      <SEOTags
        shareImage={certification.og_image ?? ''}
        url={`https://FrontEnd.ro/certificari/${certification._id}`}
        title={`Felicitări! Ai completat cu succes ${certification.tutorial?.name ?? certification.challenge?.title}`}
        description={seoDescription}
      >
        <meta name="robots" content="noindex" />
      </SEOTags>
      <Header withNavMenu />
      <main data-certification-page>
        <CertificationComponent className="mt-12" certification={certification} />
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps({ res, req, params }) {
  const { token } = req?.cookies ?? {};
  const { default: fetch } = await import('node-fetch');

  const pageProps = {
    props: {
      certification: null,
    },
  };

  const resp = await fetch(`${process.env.ENDPOINT}/certifications/${params.certificationId}`, {
    headers: {
      cookie: `token=${token}`,
    },
  });
  if (!resp.ok) {
    res.statusCode = resp.status;
    return {
      props: {
        certification: null,
      },
    };
  }

  const certification = await resp.json();
  pageProps.props.certification = certification;
  return pageProps;
}
