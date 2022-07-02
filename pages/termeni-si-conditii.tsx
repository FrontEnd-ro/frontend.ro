import React from 'react';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import Link from '~/components/generic/Link';
import PageContainer from '~/components/PageContainer';
import SEOTags from '~/components/SEOTags';
import { GITHUB_URL } from '~/services/Constants';
import List from '~/components/List';

function TermsAndConditions() {
  return (
    <>
      <SEOTags
        title="Termeni și Condiții | FrontEnd.ro"
        shareImage="https://frontend.ro/learn-seo-image.jpg"
        description="Detalii despre platformă și politica de confidențialitate"
        url="https://FrontEnd.ro/termeni-si-conditii"
      />
      <Header withNavMenu />
      <PageContainer>
        <section style={{
          fontSize: '1.25em',
        }}
        >
          <h1>
            Datele tale sunt în mâini bune  🤝
          </h1>
          <p>
            Da, ai citit bine. Pentru că aici te tratăm așa cum ne-ar plăcea și nouă să fim tratați.
          </p>
          <p>
            Asta înseamnă că:
          </p>
          <List variant="bullets">
            <li>
              îți oferim transparență, atât a codului (proiectul este
              {' '}
              <a href={GITHUB_URL}>open-source pe GitHub</a>
              ),
              cât și a informațiilor
            </li>
            <li>
              singurul tool de analytics pe care îl folosim este
              {' '}
              <a href="https://app.logrocket.com/">LogRocket</a>
              {' '}
              și ne ajută să îmbunătățim experiența pentru voi
            </li>
            <li>
              ai control asupra propriilor date și le poți șterge oricând din
              {' '}
              <Link href="/settings">
                pagina de setări
              </Link>
            </li>
          </List>
          <br />
          <hr />
          <p>
            <span className="text-bold">PS:</span>
            {' '}
            pe măsură ce creștem această pagină va fi actualizată cu ultimele informații, însă
            promisiunea noastră pentru voi rămâne aceeași:
          </p>
          <blockquote>
            "O să avem grijă de datele voastre"
          </blockquote>

        </section>
      </PageContainer>
      <Footer />
    </>
  );
}

export default TermsAndConditions;
