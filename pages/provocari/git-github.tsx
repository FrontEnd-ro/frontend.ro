import React from 'react';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import SEOTags from '~/components/SEOTags';
import GitGithubChallenge from '~/components/challenges/GitGithubChallenge';

function GitGithubChallengePage() {
  return (
    <>
      <SEOTags
        title="TBD"
        description="TBD"
        url="TBD"
      />
      <Header withNavMenu />

      <GitGithubChallenge />
      <Footer />
    </>
  );
}

export default GitGithubChallengePage;
