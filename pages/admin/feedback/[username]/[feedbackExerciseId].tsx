import React from 'react';
import { useRouter } from 'next/router';
import { connect, ConnectedProps } from 'react-redux';
import SEOTags from '~/components/SEOTags';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import OfferFeedback from '~/components/OfferFeedback';
import { RootState } from '~/redux/root.reducer';
import { useLoggedInOnly } from '~/services/Hooks';
import { UserRole } from '~/../shared/types/user.types';
import PageContainer from '~/components/PageContainer';

function FeedbackExercisePage({ userInfo }: ConnectedProps<typeof connector>) {
  const router = useRouter();
  const { username, feedbackExerciseId } = router.query;

  useLoggedInOnly(!!userInfo, `/feedback/${username}/${feedbackExerciseId}`);

  return (
    <>
      <SEOTags
        title="Feedback | FrontEnd.ro"
        shareImage="https://frontend.ro/learn-seo-image.jpg"
        description="Oferă feedback la acest exercițiu"
        url={`https://FrontEnd.ro/feedback/${feedbackExerciseId}`}
      />

      {
        userInfo?.role !== UserRole.ADMIN
          ? (
            <>
              <Header />
              <PageContainer>
                <h1>
                  Pentru moment doar echipa FrontEnd.ro are poate da feedback la exercițiile submise
                </h1>
              </PageContainer>
              <Footer />
            </>
          )
          : (
            <OfferFeedback
              username={Array.isArray(username)
                ? username[0]
                : username}
              exerciseId={Array.isArray(feedbackExerciseId)
                ? feedbackExerciseId[0]
                : feedbackExerciseId}
            />
          )
      }
    </>
  );
}

function mapStateToProps(state: RootState) {
  return {
    userInfo: state.user.info,
  };
}

const connector = connect(mapStateToProps);

export default connector(FeedbackExercisePage);
