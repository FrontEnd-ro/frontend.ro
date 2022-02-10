import React, { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Checkbox } from '~/components/Form';
import TodoExample from './TodoExample/TodoExample';
import GradientText from '~/components/GradientText/GradientText';

import styles from './HtmlCssJs.module.scss';
import { wait } from '~/services/Utils';

interface Config {
  htmlEnabled: boolean;
  cssEnabled: boolean;
  jsEnabled: boolean;
}

/**
 * Visually show what each language in the FrontEnd ecosystem
 * is doing, and how do they relate with one another:
 * > HTML: structure
 * > CSS: styling
 * > JavaScript: functionality
 */
const HtmlCssJs = () => {
  const [config, setConfig] = useState<Config>({
    htmlEnabled: false,
    cssEnabled: false,
    jsEnabled: false,
  });

  // When this component mounts, incrementally enable each
  // language. The state of this "demo" is captured here.
  const [demoInProgress, setDemoInProgress] = useState(false);

  // Milliseconds
  const BLOB_DELAY = 2000;

  // Each blob is being animated, by transitionioning
  // to and from another blob.
  const BLOB_ANIMATION_DURATION = '15s';

  const typedRef = useRef<Typed>(null);
  const todoFormRef = useRef<HTMLFormElement>(null);
  const htmlExplanationRef = useRef<HTMLDivElement>(null);
  const cssExplanationRef = useRef<HTMLDivElement>(null);
  const jsExplanationRef = useRef<HTMLDivElement>(null);

  // Play initial animation which
  // shows the HTML, CSS and JavaScript blobs
  // in order, then types a new ToDo into the
  // input and "presses" the "Add" button.
  const play = async () => {
    setDemoInProgress(true);
    setConfig({ htmlEnabled: true, cssEnabled: false, jsEnabled: false });

    htmlExplanationRef.current.addEventListener('transitionend', async function onHtmlEnd() {
      htmlExplanationRef.current.removeEventListener('transitionend', onHtmlEnd);

      await wait(BLOB_DELAY);
      setConfig({ htmlEnabled: true, cssEnabled: true, jsEnabled: false });

      cssExplanationRef.current.addEventListener('transitionend', async function onCssEnd() {
        cssExplanationRef.current.removeEventListener('transitionend', onCssEnd);

        await wait(BLOB_DELAY);
        setConfig({ htmlEnabled: true, cssEnabled: true, jsEnabled: true });

        startTypedAnimation('Începe să înveți HTML')
          .then(() => setDemoInProgress(false));
      });
    });
  };

  /**
   * Type value of `text` inside the input of <ToDo> component.
   * @param text string
   * @returns Promise<void>
   */
  const startTypedAnimation = (text: string) => {
    return new Promise<void>((resolve) => {
      if (!todoFormRef.current) {
        console.error('startTypedAnimation: expected `todoFormRef.current` to contain the form.');
        resolve();
      }

      const inputEl = todoFormRef.current.querySelector('input');
      const submitButonEl = todoFormRef.current.querySelector('button');
      if (inputEl === null || submitButonEl === null) {
        console.error('startTypedAnimation: expected both `inputEl` and `submitButonEl` to contain DOM elements.');
        resolve();
      }

      const options = {
        strings: [text],
        typeSpeed: 250,
        onComplete() {
          submitButonEl.click();
          resolve();
        },
      };

      typedRef.current = new Typed(inputEl, options);
    });
  };

  useEffect(() => {
    setTimeout(play, 500);

    return () => {
      // If Typed.js has been initialized,
      // make sure to dispose of it!
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className={`${styles.HtmlCssJs} w-100`}>
      <div className={`d-flex justify-content-between w-100 mb-8 ${styles['checkbox-wrapper']}`}>
        <Checkbox
          variant="black"
          name="html"
          checked={config.htmlEnabled}
          disabled={demoInProgress}
          className={styles.Checkbox}
          onChange={() => setConfig({ ...config, htmlEnabled: !config.htmlEnabled })}
        >
          HTML
        </Checkbox>
        <Checkbox
          variant="black"
          name="css"
          checked={config.cssEnabled}
          disabled={demoInProgress}
          className={styles.Checkbox}
          onChange={() => setConfig({ ...config, cssEnabled: !config.cssEnabled })}
        >
          CSS
        </Checkbox>
        <Checkbox
          variant="black"
          name="js"
          checked={config.jsEnabled}
          disabled={demoInProgress}
          className={styles.Checkbox}
          onChange={() => setConfig({ ...config, jsEnabled: !config.jsEnabled })}
        >
          JavaScript
        </Checkbox>
      </div>
      <div className="relative">
        <div className={`${styles['TodoExample-wrapper']} relative`}>
          <TodoExample ref={todoFormRef} {...config} />
        </div>

        <div>
          <HTMLExplanation
            ref={htmlExplanationRef}
            enabled={config.htmlEnabled}
            blobTransitionDuration={BLOB_ANIMATION_DURATION}
          />

          <CSSExplanation
            ref={cssExplanationRef}
            enabled={config.htmlEnabled && config.cssEnabled}
            blobTransitionDuration={BLOB_ANIMATION_DURATION}
          />

          <JSExplanation
            ref={jsExplanationRef}
            enabled={config.htmlEnabled && config.jsEnabled}
            blobTransitionDuration={BLOB_ANIMATION_DURATION}
          />
        </div>
      </div>
    </div>
  );
};

/** ****************************** EXPLANATIONS */
interface ExplanationBlobProps {
  enabled: boolean;
  blobTransitionDuration: string;
}

/** ****************************** HTML Explanation */
const HTMLBlob = ({ transitionDuration }: { transitionDuration: string }) => (
  <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%">
    <defs>
      <linearGradient id="htmlLinear" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#2980b9" />
        <stop offset="100%" stopColor="#eb4d4b" />
      </linearGradient>
    </defs>
    <path
      stroke="url(#htmlLinear)"
      d="M410.5,324Q335,398,254,391Q173,384,127,317Q81,250,126,182Q171,114,270.5,78Q370,42,428,146Q486,250,410.5,324Z"
    >
      <animate
        attributeName="d"
        dur={transitionDuration}
        repeatCount="indefinite"
        values="
          M410.5,324Q335,398,254,391Q173,384,127,317Q81,250,126,182Q171,114,270.5,78Q370,42,428,146Q486,250,410.5,324Z;
          M433,356Q372,462,276.5,415.5Q181,369,138.5,309.5Q96,250,129,173.5Q162,97,259.5,81Q357,65,425.5,157.5Q494,250,433,356Z;
          M410.5,324Q335,398,254,391Q173,384,127,317Q81,250,126,182Q171,114,270.5,78Q370,42,428,146Q486,250,410.5,324Z
        "
      />
    </path>
  </svg>
);

const HTMLExplanation = React.forwardRef<HTMLDivElement, ExplanationBlobProps>(
  ({ enabled, blobTransitionDuration }: ExplanationBlobProps, ref) => (
    <div
      ref={ref}
      className={`${styles.Explanation} ${styles.HTMLExplanation} ${enabled ? styles.enabled : ''}`}
    >
      <HTMLBlob transitionDuration={blobTransitionDuration} />
      <div className={styles['explanation-text']}>
        <GradientText angle={170} fromColor="var(--blue)" toColor="var(--red)" className="text-2xl m-0 text-bold d-inline-block">
          HTML
        </GradientText>
        <p className={`${styles.description} mt-4 mb-0`}>
          Definește structura de bază
        </p>
      </div>
    </div>
  ),
);

/** ****************************** CSS Explanation */
const CSSBlob = ({ transitionDuration }: { transitionDuration: string }) => (
  <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%">
    <defs>
      <linearGradient id="cssLinear" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#eb4d4b" />
        <stop offset="100%" stopColor="#f7df1e" />
      </linearGradient>
    </defs>
    <path
      fill="#bcc2c6"
      stroke="url(#cssLinear)"
      d="M421,348.5Q364,447,262,426Q160,405,112.5,327.5Q65,250,97,145Q129,40,235,66Q341,92,409.5,171Q478,250,421,348.5Z"
    >
      <animate
        attributeName="d"
        dur={transitionDuration}
        repeatCount="indefinite"
        values="
          M421,348.5Q364,447,262,426Q160,405,112.5,327.5Q65,250,97,145Q129,40,235,66Q341,92,409.5,171Q478,250,421,348.5Z;
          M415.5,348.5Q364,447,262.5,425Q161,403,95.5,326.5Q30,250,83.5,152.5Q137,55,249.5,55.5Q362,56,414.5,153Q467,250,415.5,348.5Z;
          M421,348.5Q364,447,262,426Q160,405,112.5,327.5Q65,250,97,145Q129,40,235,66Q341,92,409.5,171Q478,250,421,348.5Z
        "
      />

    </path>
  </svg>
);

const CSSExplanation = React.forwardRef<HTMLDivElement, ExplanationBlobProps>(
  ({ enabled, blobTransitionDuration }: ExplanationBlobProps, ref) => (
    <div
      ref={ref}
      className={`${styles.Explanation} ${styles.CSSExplanation} ${enabled ? styles.enabled : ''}`}
    >
      <CSSBlob transitionDuration={blobTransitionDuration} />
      <div className={styles['explanation-text']}>
        <GradientText angle={10} fromColor="var(--red)" toColor="var(--yellow)" className="text-2xl m-0 text-bold d-inline-block">
          CSS
        </GradientText>
        <p className={`${styles.description} mt-4 mb-0`}>
          Adaugă culori, spațieri, fonturi, etc.
          Practic, face pagina frumoasă și ușor de utilizat.
        </p>
      </div>
    </div>
  ),
);

/* ******************************* JavaScript Explanation */
const JSBlob = ({ transitionDuration }: { transitionDuration: string }) => (
  <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%">
    <defs>
      <linearGradient id="jsLinear" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f7df1e" />
        <stop offset="100%" stopColor="#1b1b15" />
      </linearGradient>
    </defs>
    <path
      fill="#d1d8e0"
      stroke="url(#jsLinear)"
      d="M402,323Q334,396,241,411.5Q148,427,96.5,338.5Q45,250,88.5,148Q132,46,237.5,67Q343,88,406.5,169Q470,250,402,323Z"
    >

      <animate
        attributeName="d"
        dur={transitionDuration}
        repeatCount="indefinite"
        values="
          M402,323Q334,396,241,411.5Q148,427,96.5,338.5Q45,250,88.5,148Q132,46,237.5,67Q343,88,406.5,169Q470,250,402,323Z;
          M385,330.5Q343,411,250.5,410.5Q158,410,80.5,330Q3,250,78,166Q153,82,257,70.5Q361,59,394,154.5Q427,250,385,330.5Z;
          M402,323Q334,396,241,411.5Q148,427,96.5,338.5Q45,250,88.5,148Q132,46,237.5,67Q343,88,406.5,169Q470,250,402,323Z
        "
      />

    </path>
  </svg>
);

const JSExplanation = React.forwardRef<HTMLDivElement, ExplanationBlobProps>(
  ({ enabled, blobTransitionDuration }: ExplanationBlobProps, ref) => (
    <div
      ref={ref}
      className={`${styles.Explanation} ${styles.JSExplanation} ${enabled ? styles.enabled : ''}`}
    >
      <JSBlob transitionDuration={blobTransitionDuration} />
      <div className={styles['explanation-text']}>
        <GradientText angle={10} fromColor="var(--yellow)" toColor="var(--black)" className="text-2xl m-0 text-bold d-inline-block">
          JavaScript
        </GradientText>
        <p className={`${styles.description} mt-4 mb-0`}>
          Adaugă funcționalitate: poți crea taskuri, iar apoi să le marchezi drept rezolvate.
        </p>
      </div>
    </div>
  ),
);

export default HtmlCssJs;
