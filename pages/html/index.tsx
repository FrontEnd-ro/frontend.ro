import Footer from '~/components/Footer';
import SEOTags from '~/components/SEOTags';
import HtmlLanding from '~/tutorials/html/HtmlLanding';

function HTMLTutorial() {
  return (
    <>
      <SEOTags
        title="Învață HTML de la zero"
        shareImage="TBD"
        description="Învață HTML printr-un curs online, focusat pe practică și feedback de la developeri cu experiență."
        url="https://FrontEnd.ro/html"
      />
      <HtmlLanding />
      <Footer />
    </>
  );
}

export default HTMLTutorial;
