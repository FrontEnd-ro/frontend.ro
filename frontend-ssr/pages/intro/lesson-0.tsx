import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import SEOTags from '~/components/SEOTags';
import Lesson from '~/components/lessons/Lesson';
import {
  LessonCover, LessonContributors, LessonHeading, LessonFigure,
} from '~/components/lessons';
import { ShareButton } from '~/components/SocialMediaButtons';
import { Ira, Pava } from '~/services/contributors';
import { GITHUB_URL } from '~/services/Constants';
import coverSvg from '~/public/images/lessons/lesson-0__cover.svg';

const contributors = [Pava, Ira];

let chapters = [
  { title: 'Ce e FrontEnd.ro?', id: 'about' },
  { title: 'De ce e FrontEnd.ro diferit?', id: 'why-are-we-different' },
  { title: 'De ce e FrontEnd.ro gratuit?', id: 'why-are-we-free' },
  { title: 'Cum pot să ajut?', id: 'how-can-i-help' },
  { title: 'Skill-uri și concepte', id: 'skills-and-concepts' },
  { title: 'Cum să folosești platforma', id: 'how-to-use-platform' },
  { title: 'Tool-uri necesare', id: 'tools' },
  { title: 'Resurse recomandate', id: 'recommended-resources' },
];

export default function Lesson0() {
  const router = useRouter();
  const [urlToShare, setUrlToShare] = useState(router.pathname);

  useEffect(() => {
    setUrlToShare(`${window.location.origin}${router.pathname}`);
  }, []);

  return (
    <>
      <SEOTags
        title="Introducere | FrontEnd.ro"
        description="Detalii despre noi, despre platformă și cum vom lucra împreună."
        url="https://FrontEnd.ro/intro/lesson-0"
      />
      <Lesson title="Introducere" chapters={chapters}>
        <LessonContributors className="absolute" contributors={contributors} />
        <LessonCover resizeOffset={100}>
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{
            __html: coverSvg,
          }}
          />

        </LessonCover>
        <section>
          <LessonHeading as="h2" id="about">
            Ce e FrontEnd.ro?
          </LessonHeading>
          <p>
            FrontEnd.ro este o comunitate de oameni ce învață FrontEnd de la zero.
          </p>
          <p>
            Comunitatea gravitează în jurul unei serii de lecții și exerciții
            gratuite ce constituie - în opinia noastră - fundamentele unei cariere moderne
            în FrontEnd Development. Deși abia la
            {' '}
            <span className="line-through">prima</span>
            {' '}
            a doua iterație, acestea vor fi
            re-scrise, re-re-scrise și re-re-re-scrise în funcție de feedback-ul vostru
            până când vor ajunge una din cele mai calitative resurse de acest fel din România.
          </p>
        </section>
        <section>
          <LessonHeading as="h2" id="why-are-we-different">
            De ce e FrontEnd.ro diferit?
          </LessonHeading>
          <p>
            Noi suntem convinși că:
          </p>
          <blockquote className="is--center">
            Nu contează la câte tutoriale te uiți, ci cât de mult codezi
          </blockquote>
          <p>
            Însă când înveți singur e puțin mai greu să-ți dai seama dacă rezolvarea
            găsită de tine este cea mai bună. Așa că ne vei trimite aici rezolvările
            la exerciții, iar noi - developeri cu experiență din comunitate -  îți
            vom da feedback pentru fiecare.
          </p>
        </section>
        <section>
          <LessonHeading as="h2" id="why-are-we-free">
            De ce e FrontEnd.ro gratuit?
          </LessonHeading>
          <p>
            De la început ne-am dorit ca FrontEnd.ro să fie un
            {' '}
            <strong>
              efort de comunitate,
              pentru comunitate
            </strong>
            . Lecțiile, exercițiile, acest site cât și feedback-ul
            pe care voi îl veți primi reprezintă o contribuție voluntară a unor
            developeri cu inimă mare din România.
          </p>
          <p>
            Vrem să oferim șansa la cât
            mai mulți oameni să învețe și să lucreze în acest domeniu, unul din cele mai
            faine din lume, de aceea nu vom pune un preț pe această experiență.
          </p>
        </section>
        <section>
          <LessonHeading as="h2" id="how-can-i-help">
            Cum pot să ajut?
          </LessonHeading>
          <p>
            Dacă folosești platforma să
            {' '}
            <strong>înveți FrontEnd</strong>
            {' '}
            și simți că te-a ajutat, atunci s-ar putea să fie de folos și prietenilor
            tăi. Am aprecia mult un share, așa putem avea un impact cât mai mare:
          </p>
          <div className="d-flex justify-content-center my-5">
            <ShareButton
              url={urlToShare}
              config={{
                copy: true,
                facebook: true,
                whatsapp: true,
                linkedin: true,
              }}
            />
          </div>
          <p>
            Iar după ce avansezi în skill-uri și capeți mai multă experiență, chiar ne-am bucura
            dacă vei reveni aici, de data aceasta din postura de mentor și să oferi
            înapoi comunității. 😄
          </p>
          <p>
            Dacă
            {' '}
            <strong>ești FrontEnd Developer</strong>
            , atunci ne poți ajuta prin oferirea de
            feedback cursanților, crearea de exerciții și lecții sau dezvoltarea
            acestei platforme al cărei cod este
            {' '}
            <a target="_blank" rel="noreferrer" href={GITHUB_URL}>open-source pe GitHub</a>
            .
            {/* Mai mult despre acest proces gasesti in capitolul
                {' '}
                <a href="/intro/how-to-help">Cum ajut</a>
                . */}
          </p>
          <p>
            Iar dacă
            {' '}
            <strong>ești o firmă tech și-ți place ce încercăm să facem aici</strong>
            ,
            poate găsim un mod să colaborăm și să ne ajutăm reciproc și comunitatea
            în același timp. Aruncă un ochi
            {' '}
            <a href="/intro/how-to-help">aici</a>
            {' '}
            pentru mai multe detalii.
          </p>
        </section>
        <div className="dots" />
        <section>
          <LessonHeading as="h2" id="skills-and-concepts">
            Skill-uri și concepte
          </LessonHeading>
          <p>
            FrontEnd-ul, de fapt programarea în general, este un domeniu în continuă
            dezvoltare și schimbare.
            În fiecare lună apar lucruri noi, iar în cațiva ani tool-urile pe care
            noi le folosim pot fi complet diferite. Ceea ce face
            lucrurile extrem de interesante, dar și puțin complicate
            când vrei să înveți acest domeniu...
          </p>

          <p>
            Totuși, fundamentele FrontEnd-ului nu se schimbă, și le vei folosi fie că
            construiești un site de prezentare, un magazin online sau următorul
            Instagram. De aceea, aici ne vom ocupa de fundamentele celor
            3 limbaje de programare ce compun FrontEnd-ul:
            {' '}
            <strong>HTML</strong>
            ,
            {' '}
            <strong>CSS</strong>
            {' '}
            și
            {' '}
            <strong>JavaScript</strong>
            . Deocamdată avem lecții și exerciții doar pentru
            primul, cel de HTML, însa după o rundă de feedback de la
            comunitate vom continua și cu celelalte două.
          </p>
        </section>
        <div className="dots" />
        <section>
          <LessonHeading as="h2" id="how-to-use-platform">
            Cum să folosești platforma
          </LessonHeading>
          <p>
            Focusul nostru este pe exerciții și feedback, acolo investim cel
            mai mult timp. Există deja o mulțime de articole și tutoriale
            extrem de bune pe internet, așa că am decis ca lecțiile să reprezinte
            doar un
            {' '}
            <strong>scurt rezumat</strong>
            ,  care la final va avea
            {' '}
            <strong>
              link-uri către resurse
              mai detaliate
            </strong>
            . Din această cauză, principala responsabilitate
            la partea de învățare este a ta.
            {' '}
          </p>
          <blockquote>
            Ne așteptăm să fii motivat
            și autodidact, să poți înțelege în mare conceptele de unul singur.
          </blockquote>
          <p>
            Pentru a învăța cât mai mult, începe cu lecția 0 (cea pe care o citești acum)
            și continuă pe rând cu fiecare lecție nouă. Citește rezumatul nostru, iar
            apoi aruncă un ochi pe resursele suplimentare, înainte să te apuci
            de exerciții.
            {' '}
          </p>
          <p>
            <strong>
              Este foarte important să rezolvi toate exercițiile
              de la fiecare lecție.
            </strong>
            {' '}
            Ai răbdare și încredere în noi, nu am încărcat site-ul cu exerciții inutile.
          </p>
          <p>
            Apoi, după ce ne trimiți soluția ta vom ajunge la
            {' '}
            <strong>partea de feedback</strong>
            .
            Fiind începător probabil vor fi undeva la 3-4-5 runde,
            în care-ți vom explica de ce anumite lucruri nu sunt
            bune și te vom ruga să le schimbi.
          </p>
          <p>
            E extrem de important
            să
            {' '}
            <strong>ai răbdare cu acest proces, și să nu fii prea dur cu tine</strong>
            .
            Bucură-te că ai pe cineva care-ți face Code Review și de la
            care poți să înveți. Mulți dintre noi nu am avut șansa asta.
            Și din nou:
          </p>
          <blockquote className="is--center">
            Don't be too hard on yourself.
            Don't take it personal.
            Noi suntem aici să te ajutăm. 😄
          </blockquote>
        </section>
        <section>
          <LessonHeading as="h2" id="tools">
            Tool-uri necesare
          </LessonHeading>
          <p>
            Unul dintre cele mai faine lucruri la FrontEnd development
            este faptul că nu avem nevoie de prea multe lucruri înainte să începem.
            În primul rând, un
            {' '}
            <strong>calculator</strong>
            {' '}
            și o
            {' '}
            <strong>conexiune la internet</strong>
            .
          </p>
          <p> Apoi, specific pentru acest domeniu ai nevoie de:</p>
          <ol className="with--count">
            <li>
              <strong>un browser modern și cross-platform </strong>
              (ce poate fi instalat pe
              Windows, MacOS și Linux).
              <p>
                Noi recomandăm unul dintre
                {' '}
                <a target="_blank" rel="noreferrer" href="https://www.google.com/chrome/">
                  Google Chrome
                </a>
                ,
                {' '}
                <a target="_blank" rel="noreferrer" href="https://www.mozilla.org/en-US/firefox/new/">Mozilla Firefox</a>
                {'  '}
                sau
                {' '}
                <a target="_blank" rel="noreferrer" href="https://www.microsoft.com/en-us/edge">Microsoft Edge</a>
                .
                {' '}
                Nu prea contează pe care din cele 3 îl instalezi, toate sunt bune.
              </p>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://code.visualstudio.com/download">Visual Studio Code</a>
              : programul unde vom scrie efectiv codul.

              <p>
                {' '}
                Acest editor este
                extrem de popular printre developeri, așa că hai să-l folosim chiar de la
                început pentru a ne familiariza cu el.
                De asemenea, înainte să începi
                {' '}
                <a href="/html/introduction">Lecția 1</a>
                {' '}
                te invităm să arunci un ochi pe acest
                {' '}
                <a href="/intro/vs-code">mini-tutorial despre VSCode</a>
                .
              </p>
            </li>
          </ol>
        </section>
        <div className="dots" />
        <section>
          <LessonHeading as="h2" id="recommended-resources">
            Resurse recomandate
          </LessonHeading>
          <p>
            Pe partea de resurse, vom adăuga la finalul fiecărei lecții link-uri de
            unde poți învăța mai multe. Totuși, nu putem să nu menționăm două site-uri extrem de
            utile și fără de care job-ul de FrontEnd developer ar fi mult mai frustrant:
          </p>
          <ol className="with--count">
            <li>
              <a target="_blank" rel="noreferrer" href="https://developer.mozilla.org/en-US/" className="text-bold">MDN - Mozilla Developer Network</a>
              {' '}
              este locul unde găsim cele mai calitative și detaliate documentații despre HTML,
              CSS și JavaScript - cele 3 limbaje ce compun FrontEnd development-ul.
              <p>
                Domeniul e atât de complex încât e perfect normal să nu ținem minte totul.
                E mult mai comun decât ai crede ca developeri cu experiență să uite
                lucruri de sintaxă, adică ce bucată de cod trebuie să folosească pentru
                a ajunge la un anumit rezultat.
              </p>
              <p>
                De exemplu, poate am uitat cum schimbăm culoarea de fundal
                a unui element din pagină, caz în care vom căuta
                {' '}
                <span className="formatted">background color MDN</span>
                .
                Recomandăm să pui “MDN” la final pentru ca pagina căutată
                să apară printre primele rezultate.
              </p>
              <LessonFigure
                withBorder
                src="/images/lesson-0__google-search.png"
                alt="Cautând `background-color MDN` pe Google"
              />
              <p>
                And voilà! Am ajuns la documentație,
                unde putem vedea toate opțiunile posibile și cum le putem folosi:
              </p>
              <LessonFigure
                withBorder
                src="/images/lesson-0__mdn.png"
                alt="Documentația `background-color` pe MDN"
              />
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/" className="text-bold">Stack Overflow</a>
              {' '}
              este o comunitate de developeri ce învață și codează împreună.
              <p>
                Mai exact, este cea mai populară platformă de întrebări și
                răspunsuri de programare, folosită de mai toți developerii din lume.
                Fără acest site ne-ar lua mult
                mai mult timp să gasim soluții la diversele
                buguri/probleme pe care le întâlnim când codăm.
              </p>
              <p>
                {' '}
                Iar dacă ești curios, poți arunca un ochi pe ultimele întrebări adăugate pentru
                limbajele ce le vom învăța aici:
                {' '}
                <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/questions/tagged/html">HTML</a>
                ,
                {' '}
                <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/questions/tagged/css">CSS</a>
                {' '}
                si
                {' '}
                <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/questions/tagged/javascript">JavaScript</a>
                .
              </p>
            </li>
          </ol>
        </section>
        {/* FIXME: uncomment this */}
        {/* <div className="text-center my-5">
          <a href="/" className="cta-button">
            Să continuăm cu prima lecție
            {' '}
            <br />
            {' '}
            despre HTML
          </a>
        </div> */}
      </Lesson>
    </>
  );
}
