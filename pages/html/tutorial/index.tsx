import React from 'react';
import Link from '~/components/generic/Link';
import SEOTags from '~/components/SEOTags';
import { env } from '~/services/env';
import { getLessons } from '~/curriculum/Curriculum';
import PageContainer from '~/components/PageContainer';
import PageWithAsideMenu from '~/components/layout/PageWithAsideMenu/PageWithAsideMenu';

const TUTORIAL_NAME = 'Tutorialul de HTML';

// The lessons live statically in the Curriculum config, so the sidebar no
// longer needs the DB / user progress — we just list every written HTML lesson.
const htmlLessons = getLessons(env.LANGUAGE).filter((lesson) => lesson.type === 'html' && lesson.written);

const HtmlLessonsNav = () => (
  <nav className="d-flex flex-column">
    {htmlLessons.map((lesson) => (
      <Link
        key={lesson.id}
        color="inherit"
        prefetch={false}
        href={`/html/tutorial/${lesson.id}`}
        className="mb-6 text-lg"
      >
        {lesson.title}
      </Link>
    ))}
  </nav>
);

const TutorialIndex = () => (
  <>
    <SEOTags
      title={`${TUTORIAL_NAME} | FrontEnd.ro`}
      description="Învață HTML printr-un curs online, focusat pe practică și feedback de la developeri cu experiență."
      url="https://FrontEnd.ro/html/tutorial"
    />
    <PageWithAsideMenu menu={{ title: TUTORIAL_NAME, Component: <HtmlLessonsNav /> }}>
      <PageContainer>
        <section className="d-flex flex-column pb-5 font-light">
          <h1 className="text-3xl text-bold">
            {TUTORIAL_NAME}
          </h1>
          <p>
            Acest tutorial te învață HTML de la zero: tu
            {' '}
            <span className="text-bold">citești lecțiile</span>
            {' '}
            din meniul lateral și înveți cum să construiești pagini web folosind
            cele mai înalte standarde.
          </p>
          <p>
            FrontEnd.ro este acum o
            {' '}
            <span className="text-bold">arhivă păstrată în mod read-only</span>
            , așa că partea interactivă a tutorialului (începerea tutorialului,
            rezolvarea exercițiilor, feedback-ul și certificarea) nu mai este disponibilă.
            Lecțiile rămân însă disponibile pentru citit.
          </p>
          <div className="mt-8 d-flex gap-x-4 flex-wrap">
            <Link prefetch={false} variant="contained" color="blue" href="/lectii">
              Vezi toate lecțiile
            </Link>
            <Link prefetch={false} variant="text" color="blue" href="/html">
              Despre modulul de HTML
            </Link>
          </div>
        </section>
      </PageContainer>
    </PageWithAsideMenu>
  </>
);

export default TutorialIndex;
