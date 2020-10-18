import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import SEOTags from '~/components/SEOTags';
import Lesson from '~/components/lessons/Lesson';
import { LessonCover, LessonContributors, LessonHeading } from '~/components/lessons';
import { ShareButton } from '~/components/SocialMediaButtons';
import { Ira, Pava } from '~/services/contributors';

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
      <Head>
        <title> Introducere | FrontEnd.ro</title>
        <link rel="icon" href="/favicon.ico" />
        <SEOTags
          title="Introducere | FrontEnd.ro"
          description="Detalii despre noi, despre platformă și cum vom lucra împreună."
          url="https://FrontEnd.ro/intro/lesson-0"
        />
      </Head>
      <Lesson title="Introducere" chapters={chapters}>
        <LessonContributors contributors={contributors} />
        <LessonCover resizeOffset={100}>
          <svg xmlns="http://www.w3.org/2000/svg" width="869.99994" height="520.13854" viewBox="0 0 869.99994 520.13854" preserveAspectRatio="xMidYMax slice">
            <path d="M996.72788,546.00953a393.41394,393.41394,0,0,0-54.82622,54.44229,394.561,394.561,0,0,0-61.752,103.194c-1.112,2.72484,3.31272,3.911,4.4123,1.21642A392.34209,392.34209,0,0,1,999.96343,549.24507c2.28437-1.86015-.97-5.08035-3.23555-3.23554Z" transform="translate(-165.00003 -189.93073)" fill="#fff" />
            <path d="M217.56676,484.37281a540.35491,540.35491,0,0,1,75.30383,74.77651A548.0761,548.0761,0,0,1,352.25665,647.04a545.835,545.835,0,0,1,25.43041,53.8463c1.52726,3.74257-4.55,5.37169-6.06031,1.67075a536.35952,536.35952,0,0,0-49.009-92.727A539.73411,539.73411,0,0,0,256.889,528.63168a538.44066,538.44066,0,0,0-43.76626-39.81484c-3.13759-2.55492,1.33232-6.97788,4.444-4.444Z" transform="translate(-165.00003 -189.93073)" fill="#fff" />
            <path d="M789.5,708.93073h-365v-374.5c0-79.67773,64.82227-144.5,144.49976-144.5h76.00049c79.67749,0,144.49975,64.82227,144.49975,144.5Z" transform="translate(-165.00003 -189.93073)" fill="#f2f2f2" />
            <path d="M713.5,708.93073h-289v-374.5a143.38177,143.38177,0,0,1,27.59571-84.94434c.66381-.90478,1.32592-1.79785,2.00878-2.68115a144.46633,144.46633,0,0,1,30.75415-29.85058c.65967-.48,1.322-.95166,1.99415-1.42334a144.15958,144.15958,0,0,1,31.47216-16.459c.66089-.25049,1.33374-.50146,2.00659-.74219a144.01979,144.01979,0,0,1,31.1084-7.33593c.65772-.08985,1.333-.16016,2.0083-.23047a146.28769,146.28769,0,0,1,31.10547,0c.67334.07031,1.34864.14062,2.01416.23144a143.995,143.995,0,0,1,31.10034,7.335c.6731.24073,1.346.4917,2.00879.74268a143.79947,143.79947,0,0,1,31.10645,16.21582c.67163.46143,1.344.93311,2.00635,1.40478a145.987,145.987,0,0,1,18.38354,15.564,144.305,144.305,0,0,1,12.72437,14.55078c.68066.88037,1.34277,1.77344,2.00537,2.67676A143.38227,143.38227,0,0,1,713.5,334.43073Z" transform="translate(-165.00003 -189.93073)" fill="#ccc" />
            <circle cx="524.99994" cy="335.5" r="16" fill="#2980b9" />
            <polygon points="594.599 507.783 582.339 507.783 576.506 460.495 594.601 460.496 594.599 507.783" fill="#ffb8b8" />
            <path d="M573.58165,504.27982h23.64384a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H558.69478a0,0,0,0,1,0,0v0a14.88688,14.88688,0,0,1,14.88688-14.88688Z" fill="#2f2e41" />
            <polygon points="655.599 507.783 643.339 507.783 637.506 460.495 655.601 460.496 655.599 507.783" fill="#ffb8b8" />
            <path d="M634.58165,504.27982h23.64384a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H619.69478a0,0,0,0,1,0,0v0a14.88688,14.88688,0,0,1,14.88688-14.88688Z" fill="#2f2e41" />
            <path d="M698.09758,528.60035a10.74272,10.74272,0,0,1,4.51052-15.84307l41.67577-114.86667L764.791,409.082,717.20624,518.85271a10.80091,10.80091,0,0,1-19.10866,9.74764Z" transform="translate(-165.00003 -189.93073)" fill="#ffb8b8" />
            <path d="M814.33644,550.1843a10.74269,10.74269,0,0,1-2.89305-16.21659L798.53263,412.4583l23.33776,1.06622L827.23606,533.045a10.80091,10.80091,0,0,1-12.89962,17.13934Z" transform="translate(-165.00003 -189.93073)" fill="#ffb8b8" />
            <circle cx="612.1058" cy="162.12254" r="24.56103" fill="#ffb8b8" />
            <path d="M814.17958,522.54937H740.13271l.08911-.57617c.13306-.86133,13.19678-86.439,3.56177-114.436a11.813,11.813,0,0,1,6.06933-14.5835h.00025c13.77173-6.48535,40.20752-14.47119,62.52,4.90918a28.23448,28.23448,0,0,1,9.45947,23.396Z" transform="translate(-165.00003 -189.93073)" fill="#2980b9" />
            <path d="M754.35439,448.1812,721.01772,441.418l15.62622-37.02978a13.99723,13.99723,0,0,1,27.10571,6.99755Z" transform="translate(-165.00003 -189.93073)" fill="#2980b9" />
            <path d="M797.05043,460.73882l-2.00415-45.94141c-1.51977-8.63623,3.42408-16.80029,11.02735-18.13476,7.60547-1.32959,15.03174,4.66016,16.55835,13.35986l7.533,42.92774Z" transform="translate(-165.00003 -189.93073)" fill="#2980b9" />
            <path d="M811.71606,517.04933c11.91455,45.37671,13.21436,103.0694,10,166l-16-2-29-120-16,122-18-1c-5.37744-66.02972-10.61328-122.71527-2-160Z" transform="translate(-165.00003 -189.93073)" fill="#2f2e41" />
            <path d="M793.2891,371.03474c-4.582,4.88079-13.09131,2.26067-13.68835-4.40717a8.05467,8.05467,0,0,1,.01014-1.55569c.30826-2.95357,2.01461-5.63506,1.60587-8.7536a4.59046,4.59046,0,0,0-.84011-2.14892c-3.65124-4.88933-12.22227,2.18687-15.6682-2.23929-2.113-2.714.3708-6.98713-1.25065-10.02051-2.14006-4.00358-8.47881-2.0286-12.45388-4.22116-4.42275-2.43948-4.15822-9.22524-1.24686-13.35269,3.55052-5.03359,9.77572-7.71951,15.92336-8.10661s12.25292,1.27475,17.99229,3.51145c6.52109,2.54134,12.98768,6.05351,17.00067,11.78753,4.88021,6.97317,5.34986,16.34793,2.90917,24.50174C802.09785,360.98987,797.03077,367.04906,793.2891,371.03474Z" transform="translate(-165.00003 -189.93073)" fill="#2f2e41" />
            <path d="M1004.98163,709.57417h-738.294a1.19069,1.19069,0,0,1,0-2.38137h738.294a1.19069,1.19069,0,0,1,0,2.38137Z" transform="translate(-165.00003 -189.93073)" fill="#3f3d56" />
            <path d="M634,600.43073H504a6.46539,6.46539,0,0,1-6.5-6.41531V303.846a6.46539,6.46539,0,0,1,6.5-6.41531H634a6.46539,6.46539,0,0,1,6.5,6.41531V594.01542A6.46539,6.46539,0,0,1,634,600.43073Z" transform="translate(-165.00003 -189.93073)" fill="#fff" />
            <rect x="332.49994" y="201.38965" width="143" height="2" fill="#ccc" />
            <rect x="332.99994" y="315.5" width="143" height="2" fill="#ccc" />
            <rect x="377.49994" y="107.5" width="2" height="304" fill="#ccc" />
            <rect x="427.49994" y="107.5" width="2" height="304" fill="#ccc" />
          </svg>

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
            Iar după ce avansezi în skill'uri și capeți mai multă experiență, chiar ne-am bucura
            dacă vei reveni aici, de data aceasta din postura de mentor și să oferi
            înapoi comunității :)
          </p>
          <p>
            Dacă
            {' '}
            <strong>ești FrontEnd Developer</strong>
            , atunci ne poți ajuta prin oferirea de
            feedback cursanților, crearea de exerciții și lecții sau dezvoltarea
            acestei platforme al cărei cod este
            {' '}
            <a target="_blank" rel="noreferrer" href="https://github.com/iampava/frontend.ro">open-source pe GitHub</a>
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
            FrontEnd'ul, de fapt programarea în general, este un domeniu în continuă
            dezvoltare și schimbare.
            În fiecare lună apar lucruri noi, iar în cațiva ani tool-urile pe care
            noi le folosim pot fi complet diferite. Ceea ce face
            lucrurile extrem de interesante, dar și puțin complicate
            când vrei să înveți acest domeniu...
          </p>

          <p>
            Totuși, fundamentele FrontEnd'ului nu se schimbă, și le vei folosi fie că
            construiești un site de prezentare, un magazin online sau următorul
            Instagram. De aceea, aici ne vom ocupa de fundamentele celor
            3 limbaje de programare ce compun FrontEnd'ul:
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
            Ai răbdare și încredere în noi, nu am incărcat site-ul cu exerciții inutile.
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
            Noi suntem aici să te ajutăm :)
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
              <figure className="with--border">
                <img src="/images/lesson-0__google-search.png" alt="Searching 'background color MDN' on Google Search" />
                <figcaption> Cautând `background-color MDN` pe Google  </figcaption>
              </figure>
              <p>
                And voilà! Am ajuns la documentație,
                unde putem vedea toate opțiunile posibile și cum le putem folosi:
              </p>
              <figure className="with--border">
                <img src="/images/lesson-0__mdn.png" alt="Docs about `background-color` on MDN" />
                <figcaption> Documentația `background-color` pe MDN </figcaption>
              </figure>
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
        <div className="text-center my-5">
          <a href="/" className="cta-button">
            Să continuăm cu prima lecție
            {' '}
            <br />
            {' '}
            despre HTML
          </a>
        </div>
      </Lesson>
    </>
  );
}
