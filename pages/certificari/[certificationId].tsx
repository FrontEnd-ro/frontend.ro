import React from 'react';
import mongoose from 'mongoose';
import NotFoundPage from '~/components/404/NotFound';
import { UserI } from '~/../shared/types/user.types';
import { WIPPopulatedCertificationI } from '~/../shared/types/certification.types';
import CertificationComponent from '~/components/certification/Certification/Certification';
import { Certification, sanitizeCertification } from '../../server/certification/certification.model';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { WIPPopulatedLessonExerciseI } from '~/../shared/types/exercise.types';
import SEOTags from '~/components/SEOTags';

export default function CertificationPage(
  { certification }: { certification: WIPPopulatedCertificationI },
) {
  return certification !== null
    ? (
      <>
        <SEOTags
          shareImage={certification.og_image ?? ''}
          url={`https://FrontEnd.ro/certificari/${certification._id}`}
          title={`Felicitări! Ai completat cu succes ${certification.module.name}`}
          description={`${certification.user.name ?? certification.user.username} a rezolvat cu succes toate cele ${certification.lesson_exercises.length} exerciții.`}
        >
          <meta name="robots" content="noindex" />
        </SEOTags>
        <Header withNavMenu />
        <main data-certification-page>
          <CertificationComponent certification={certification} />
        </main>
        <Footer />
      </>
    )
    : <NotFoundPage />;
}

export async function getServerSideProps({ res, params }) {
  if (!mongoose.isValidObjectId(params.certificationId)) {
    return {
      props: {
        certification: null,
      },
    };
  }
  const certification = await Certification.findById(params.certificationId)
    .populate<{ user: UserI }>('user')
    // eslint-disable-next-line camelcase
    .populate<{ lesson_exercises: WIPPopulatedLessonExerciseI[] }>({
      path: 'lesson_exercises',
      populate: { path: 'user' },
    });

  if (!certification) {
    res.statusCode = 404;

    return {
      props: {
        certification: null,
      },
    };
  }

  const sanitizedCertification = sanitizeCertification(certification);

  return {
    props: {
      certification: sanitizedCertification,
    },
  };
}
