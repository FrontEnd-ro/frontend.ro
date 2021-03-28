import React from 'react';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import SEOTags from '~/components/SEOTags';
import { withClientMonitoring } from '~/services/Hooks';
import NoSubmissionsYet from '~/components/teach/NoSubmissionsYet/NoSubmissionsYet';

function WantToHelpPage() {
  withClientMonitoring();

  return (
    <>
      <SEOTags
        title="Vreau să ajut | FrontEnd.ro"
        description="Scrie lecții, compune exerciții sau oferă feedback celor ce învață cu noi."
        url="https://FrontEnd.ro/vreau-sa-ajut"
      />
      <Header withNavMenu />
      <NoSubmissionsYet />
      <Footer />
    </>
  );
}

export default WantToHelpPage;
