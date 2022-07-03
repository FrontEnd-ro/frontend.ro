import React from 'react';
import Highlight from '~/components/Highlight/Highlight';
import { ProgressBar } from '~/components/progress';
import StickyScrollExplainer from '~/components/StickyScrollExplainer/StickyScrollExplainer';
import { getTextSection } from '~/services/Utils';
import ModifySolution from '../ModifySolution/ModifySolution';
import ReadTheLesson from '../ReadTheLesson/ReadTheLesson';
import ReceiveFeedback from '../ReceiveFeedback/ReceiveFeedback';
import SolutionApproved from '../SolutionApproved/SolutionApproved';

import styles from './HtmlHowItWorks.module.scss';

const HtmlHowItWorks = ({ className }: { className?: string}) => {
  return (
    <StickyScrollExplainer
      breakpoint={800}
      Explainer={Explainer}
      Animation={FullAnimation}
      className={className}
    />
  );
};

const Explainer = () => {
  const explanations = [{
    title: 'Citești lecția',
    paragraphs: [
      <> Fiecare concept e explicat printr-o lecție text, cu exemple de cod. </>,
    ],
  }, {
    title: 'Rezolvi exercițiile',
    paragraphs: [
      <>
        La finalul fiecărei lecții vei găsi unul sau mai multe exerciții,
        pe care trebuie să le
        {' '}
        <span className="text-bold"> rezolvi </span>
        {' '}
        iar apoi să ni le trimiți pentru
        {' '}
        <span className="text-bold">feedback</span>
        .
      </>,
    ],
  }, {
    title: 'Îți evaluăm soluția',
    paragraphs: [
      <>
        Ne uităm pe fiecare exercițiu rezolvat
        să vedem dacă e corect și respectă bunele practici
        de programare.
      </>,
    ],
  }, {
    title: 'Îți trimitem feedback',
    paragraphs: [
      <>
        Dacă exercitiul nu e corect, îți trimitem
        feedback de îmbunătățire direct în platformă.
      </>,
    ],
  }, {
    title: 'Modifici soluția',
    paragraphs: [
      <>
        Pe baza feedback-ului primit vei modifica soluția,
        iar apoi o trimiți încă o dată către evaluare.
      </>,
    ],
  }, {
    title: 'O evaluăm din nou',
    paragraphs: [
      <>
        Ne uitam iar peste această nouă soluție, să confirmăm
        dacă schimbările tale sunt corecte.
      </>,
    ],
  }, {
    title: 'Îți acceptăm soluția!',
    paragraphs: [],
  }];

  return (
    <>
      {explanations.map((explanation, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <section key={index} className={styles.ExplainerWrapper}>
          <div className={styles.Explainer}>
            <h3 className={styles['section-heading']}>
              {explanation.title}
            </h3>
            {explanation.paragraphs.map((p, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <p key={index} className={styles['section-text']}>
                {p}
              </p>
            ))}
          </div>
        </section>
      ))}
    </>
  );
};

const FullAnimation = ({ percentage }: { percentage: number }) => {
  const code = `<!DOCTYPE html>
<html lang="ro">
<head>
  <title>Exercitiu HTML</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <form>
    <input type="text" name="name" required>
    <input type="email" name="email" required> 
  </form>
</body>
</html>`;

  const finalCode = `<!DOCTYPE html>
<html lang="ro">
<head>
  <title>Exercitiu HTML</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <form>
    <label>
      <span> Nume </span>
      <input type="text" name="name" required>
    </label>
    <label>
      <span> Email </span>
      <input type="email" name="email" required>
    </label>
  </form>
</body>
</html>`;

  const timeline = React.useMemo(() => [
    ({ timelineItemPercentage }) => (
      <div className={styles.Animation}>
        <ReadTheLesson
          className={styles.ReadTheLesson}
          percentage={withDelay(timelineItemPercentage, 15, 25)}
        />
      </div>
    ),
    ({ timelineItemPercentage }) => (
      <div className={styles.Animation}>
        <SolveTheExercise
          percentage={withDelay(timelineItemPercentage, 25)}
        />
      </div>
    ),
    ({ timelineItemPercentage }) => (
      <div className={styles.Animation}>
        <ProgressBar
          className={`w-100 ${styles.ProgressBar}`}
          count={100}
          items={[
            { count: timelineItemPercentage, color: '#9580ff' },
          ]}
          direction="horizontal"
        />
      </div>
    ),
    ({ timelineItemPercentage }) => (
      <div className={styles.Animation}>
        <ReceiveFeedback
          code={code}
          feedbackSections={[
            '<input type="text" name="name" required>',
            '<input type="email" name="email" required>',
          ]}
          language="html"
          percentage={withDelay(timelineItemPercentage)}
          feedbackText="Fiecare element de tip <input> trebuie să aibă un <label> asociat."
        />
      </div>
    ),
    ({ timelineItemPercentage }) => (
      <div className={styles.Animation}>
        <ModifySolution
          startingCode={code}
          finalCode={finalCode}
          language="html"
          className={styles.Highlight}
          percentage={withDelay(timelineItemPercentage)}
        />
      </div>
    ),
    ({ timelineItemPercentage }) => (
      <div className={styles.Animation}>
        <ProgressBar
          className={`w-100 ${styles.ProgressBar}`}
          count={100}
          items={[
            { count: timelineItemPercentage, color: '#58af58' },
          ]}
          direction="horizontal"
        />
      </div>
    ),
    () => (
      <div className={styles.Animation}>
        <SolutionApproved />
      </div>
    ),
  ], []);

  const step = 100 / timeline.length;
  const currentElementIndex = timeline.findIndex((_, index) => {
    return (step * index) <= percentage && (step * (index + 1)) >= percentage;
  });

  const currentElementPercentage = (percentage - (step * currentElementIndex)) / step;
  const Component = timeline[currentElementIndex];

  return (
    <Component timelineItemPercentage={currentElementPercentage * 100} />
  );
};

const SolveTheExercise = ({ percentage }: { percentage: number }) => {
  const code = `<!DOCTYPE html>
<html lang="ro">
<head>
  <title>Exercitiu HTML</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <form>
    <input type="text" name="name" required>
    <input type="email" name="email" required>
  </form>
</body>
</html>`;

  const currentCode = getTextSection(code, percentage);

  return (
    <Highlight
      language="html"
      withCopy={false}
      code={currentCode}
      variant="minimalist"
      textWrap="wrap"
      className={styles.Highlight}
    />
  );
};

export default HtmlHowItWorks;

function withDelay(realPercentage: number, endDelay = 25, beginningDelay = 0) {
  if (realPercentage <= beginningDelay) {
    return 0;
  }

  if (realPercentage >= 100 - endDelay) {
    return 100;
  }

  return ((realPercentage - beginningDelay) / (100 - endDelay - beginningDelay)) * 100;
}
