import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import Header from '~/components/header/Header.component';
import Footer from '~/components/footer/Footer.component';
import LessonContributors from '~/components/lesson-contributors/LessonContributors';
import TableOfContents from '~/components/tableOfContents/TableOfContents';

import { useOutsideClick } from '~/services/Hooks';

import styles from './lesson-0.module.scss';

// TS missed `ResizeObserver` definitions: https://github.com/Microsoft/TypeScript/issues/28502
declare let ResizeObserver: any;

const contributors = [{
  name: 'Păvă',
  avatarSrc: 'https://iampava.com/dist/assets/images/pava.png',
  url: 'https://iampava.com',
}];

let chapters = [
  { title: 'Ce e FrontEnd.ro', id: 'about' },
  { title: 'De ce e FrontEnd.ro diferit?', id: 'why-are-we-different' },
  { title: 'De ce e FrontEnd.ro gratuit?', id: 'why-are-we-free' },
  { title: 'Cum pot sa ajut?', id: 'how-can-i-help' },
  { title: 'Skill-uri si concepte', id: 'skills-and-concepts' },
  { title: 'Cum sa folosesti platforma', id: 'how-to-use-platform' },
  { title: 'Tool-uri necesare', id: 'tools' },
  { title: 'Resurse recomandate', id: 'recommended-resources' },
];

export default function Lesson0() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [coverWrapperRef, coverSvgRef, asideRef] = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const resizeObserver = new ResizeObserver(([entry]) => {
      if (entry.contentRect.width < 400) {
        coverSvgRef.current.setAttribute('viewBox', '100 0 869.99994 520.13854');
      } else {
        coverSvgRef.current.setAttribute('viewBox', '0 0 869.99994 520.13854');
      }
    });

    resizeObserver.observe(coverWrapperRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  useOutsideClick(asideRef, () => setIsMenuOpen(false));

  return (
    <>
      <Head>
        <title> Introduction | FrontEnd.ro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.lesson}>
        <aside ref={asideRef} className={`bg-black text-white${isMenuOpen ? ' is--open' : ''}`}>
          <div className="aside-header d-flex justify-content-between align-items-center">
            <h2 title="Introducere"> Introducere </h2>
            <button type="button" onClick={() => setIsMenuOpen(false)} className="btn--transparent text-white">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <TableOfContents chapters={chapters} />
        </aside>

        <main>
          <Header onMenuClick={() => setIsMenuOpen(true)} />
          <article>
            <h1> Introducere </h1>
            <LessonContributors contributors={contributors} className={styles.contributors} />
            <figure ref={coverWrapperRef} className={styles.cover}>
              <div>
                <svg ref={coverSvgRef} xmlns="http://www.w3.org/2000/svg" width="869.99994" height="520.13854" viewBox="0 0 869.99994 520.13854" preserveAspectRatio="xMidYMax slice">
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
              </div>
            </figure>
            <section>
              <h2 className="heading-with-href" id="about">
                <a href="#about">#</a>
                Ce e FrontEnd.ro
              </h2>
              <p>
                FrontEnd.ro este o comunitate de oameni ce invata Front-end de la zero.
              </p>
              <p>
                Comunitatea graviteaza in jurul unei serii de lectii si exercitii
                gratuite ce constuie - in opinia noastra - fundamentele unei cariere moderne
                in Front-end Development. Desi abia la
                {' '}
                <span className="line-through">prima</span>
                {' '}
                a doua iteratie, acestea vor fi
                re-scrise, re-re-scrise si re-re-re-scrise in functie de feedback-ul vostru
                pana cand vor ajunge una din cele mai calitative resurse de acest fel din Romania.
              </p>
            </section>
            <section>
              <h2 id="why-are-we-different" className="heading-with-href">
                <a href="#why-are-we-different">#</a>
                De ce e FrontEnd.ro diferit?
              </h2>
              <p>
                Noi suntem convinsi ca:
              </p>
              <blockquote className="is--center">
                Nu conteaza la cate tutoriale te uiti, ci cat de mult codezi
              </blockquote>
              <p>
                Insa cand codezi singur poate fi putin mai greu sa-ti dai seama daca rezolvarea
                gasita de tine este cea mai buna. Asa ca ne vei trimite aici rezolvarile
                la exercitii, iar noi - developeri cu experienta din comunitate -  iti
                vom da feedback pentru fiecare.
              </p>
            </section>
            <section>
              <h2 className="heading-with-href" id="why-are-we-free">
                <a href="#why-are-we-free">#</a>
                De ce e FrontEnd.ro gratuit?
              </h2>
              <p>
                De la inceput ne-am dorit ca FrontEnd.ro sa fie un
                {' '}
                <strong>
                  efort de comunitate,
                  pentru comunitate
                </strong>
                . Lectiile, exercitiile, acest site cat si feedback-ul
                pe care voi il veti primi reprezinta o contributie voluntara a unor
                developeri cu inima mare din Romania.
              </p>
              <p>
                Vrem sa oferim sansa cator
                mai multi oameni sa invete si sa lucreze in acest domeniu, unul din cele mai
                faine din lume, de aceea nu vom pune un pret pe aceasta experienta.
              </p>
            </section>
            <section>
              <h2 className="heading-with-href" id="how-can-i-help">
                <a href="#how-can-i-help">#</a>
                Cum pot sa ajut?
              </h2>
              <p>
                Daca folosesti platforma sa
                {' '}
                <strong>inveti Front-end</strong>
                {' '}
                si iti place ce ai gasit aici,
                te rugam sa impartasesti acest site cu prietenii si colegii tai. Asta ne ajuta
                sa ajungem la mai multi oameni, si sa avem un impact si mai mare.
              </p>
              <p>
                Iar dupa ce te angajezi si capeti ceva experienta, chiar ne-am bucura
                daca vei reveni aici, de data aceasta din postura de mentor si sa oferi
                inapoi comunitatii :)
              </p>
              <p>
                Daca
                {' '}
                <strong>esti Front-end Developer</strong>
                , atunci ne poti ajuta prin oferirea de
                feedback studentilor, crearea de exercitii si lectii  sau dezvoltarea
                platformei efective. Mai mult despre acest proces gasesti in capitolul
                {' '}
                <a href="/intro/how-to-help">Cum ajut</a>
                .
              </p>
              <p>
                Iar daca
                {' '}
                <strong>esti o firma tech si-ti place ce incercam sa facem aici</strong>
                ,
                poate gasim un mod sa colaboram si sa ne ajutam reciproc si comunitatea
                in acelasi timp. Arunca un ochi
                {' '}
                <a href="/intro/how-to-help">aici</a>
                {' '}
                si pentru mai multe detalii.
              </p>
            </section>
            <div className="dots" />
            <section>
              <h2 className="heading-with-href" id="skills-and-concepts">
                <a href="#skills-and-concepts">#</a>
                Skill-uri si concepte
              </h2>
              <p>
                Front-end'ul, de fapt programarea in general, este un domeniu in continua
                dezvoltare si schimbare.
                In fiecare luna apar lucruri noi, iar in cativa ani tool-urile pe care
                noi le folosim pot fi complet diferite. Ceea ce face
                lucrurile extrem de interesante,
                insa si putin complicate cand vrei sa inveti acest domeniu...
              </p>

              <p>
                Insa fundamentele front-end'ului nu se schimba, si le vei folosi fie ca
                construiesti un site de prezentare, un magazin online sau urmatorul
                Instagram. De aceea, aici ne vom ocupa de aceste fundamente ale celor
                3 limbaje de programare ce compun Front-end'ul:
                {' '}
                <strong>HTML</strong>
                ,
                {' '}
                <strong>CSS</strong>
                {' '}
                si
                {' '}
                <strong>JavaScript</strong>
                . Deocamdata avem lectii si exercitii doar pentru
                primul, cel de HTML, insa dupa o runda de feedback de la
                comunitate vom continua si cu celelalte doua.
              </p>
            </section>
            <div className="dots" />
            <section>
              <h2 className="heading-with-href" id="how-to-use-platform">
                <a href="#how-to-use-platform">#</a>
                Cum sa folosesti platforma
              </h2>
              <p>
                Focusul nostru este pe exercitii si feedback, acolo investim cel
                mai mult timp. Exista deja o multime de articole si tutoriale
                extrem de bune pe internet, asa ca am decis ca lectiile sa reprezinte
                doar un
                {' '}
                <strong>scurt rezumat</strong>
                ,  care la final va avea
                {' '}
                <strong>
                  linkuri catre resurse
                  mai detaliate
                </strong>
                . Din aceasta cauza, principala responsabilitate
                la partea de invatare este a ta.
                {' '}
              </p>
              <blockquote>
                Ne asteptam sa fii motivat
                si autodidact, sa poti intelege in mare conceptele de unul singur.
              </blockquote>
              <p>
                Pentru a invata cat mai mult, incepe cu lectia 0 (cea pe care o citesti acum)
                si continua pe rand cu fiecare noua lectie. Citeste rezumatul nostru, iar
                apoi arunca un ochi pe resursele suplimentare, inainte sa te apuci
                de exercitii.
                {' '}
              </p>
              <p>
                <strong>
                  Este foarte important sa rezolvi toate exercitiile
                  de la fiecare lectie.
                </strong>
                {' '}
                Ai rabdare si incredere in noi, nu am incarcat site-ul cu exercitii inutile.
              </p>
              <p>
                Apoi, dupa ce ne trimiti solutia ta vom ajunge la
                {' '}
                <strong>partea de feedback</strong>
                .
                Fiind incepator probabil vor fi undeva la 3-4-5 runde,
                in care-ti vom explica de ce anumite lucruri nu sunt
                bune si te vom ruga sa le schimbi.
              </p>
              <p>
                E extrem de important
                sa
                {' '}
                <strong>ai rabdare cu acest proces, si sa nu fii prea dur cu tine</strong>
                .
                Bucura-te ca ai pe cineva care-ti face Code Review si de la
                care poti sa inveti. Multi dintre noi nu am avut sansa asta.
                Si din nou: .
              </p>
              <blockquote className="is--center">
                Don't be too hard on yourself.
                Don't take it personal.
                Noi suntem aici sa te ajutam :)
              </blockquote>
            </section>
            <div className="dots" />
            <section>
              <h2 className="heading-with-href" id="tools">
                <a href="#tools">#</a>
                Tool-uri necesare
              </h2>
              <p>
                Unul din cele mai faine lucruri la Front-end development
                este faptul ca nu avem nevoie de prea multe lucruri inainte sa incepem.
                In primul rand, un
                {' '}
                <strong>calculator</strong>
                {' '}
                si o
                {' '}
                <strong>conexiune la internet</strong>
                .
              </p>
              <p> Apoi, specific pentru acest domeniu, ai nevoie de:</p>
              <ol className="with--count">
                <li>
                  <strong>un browser modern si cross-platform </strong>
                  (adica care poate fi instalat pe
                  Windows, MacOS si Linux).
                  <p>
                    Noi recomandam unul dintre
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
                    Nu prea conteaza pe care din cele 3 il instalezi, toate sunt bune.
                  </p>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="https://code.visualstudio.com/download">Visual Studio Code</a>
                  : programul unde vom scrie efectiv codul.

                  <p>
                    {' '}
                    Acest editor este
                    extrem de popular printre developeri, asa ca hai sa-l folosim chiar de la
                    inceput pentru a ne familiariza cu el.
                    De asemenea, inainte sa incepi
                    {' '}
                    <a href="/html/lesson-1">Lectia 1</a>
                    {' '}
                    te invitam sa arunci un ochi pe acest
                    {' '}
                    <a href="/intro/vs-code">mini-tutorial despre VSCode</a>
                    .
                  </p>
                </li>
              </ol>
            </section>
            <div className="dots" />
            <section>
              <h2 className="heading-with-href" id="recommended-resources">
                <a href="#recommended-resources">#</a>
                Resurse recomandate
              </h2>
              <p>
                Pe partea de resurse, vom adauga la finalul fiecarei lectii linkuri de
                unde poti invata mai multe. Totusi, nu putem sa nu mentionam doua site-uri extrem de
                utile si fara de care job-ul de Front-end developer ar fi mult mult mai frustrant:
              </p>
              <ol className="with--count">
                <li>
                  <a target="_blank" rel="noreferrer" href="https://developer.mozilla.org/en-US/" className="text-bold">MDN - Mozilla Developer Network</a>
                  {' '}
                  este locul unde gasim cele mai calitative si detaliate documentatii despre HTML,
                  CSS si JavaScript, cele 3 limbaje ce compun Front-end development-ul.
                  <p>
                    Domeniul e atat de complex incat e perfect normal sa nu tinem minte totul.
                    Eu de multe ori uit lucruri de sintaxa, adica stiu ce vreau sa
                    fac doar ca nu mai stiu care e bucata de cod pe care trebuie sa
                    o scriu pentru asta.
                  </p>
                  <p>
                    De exemplu, poate am uitat cum schimb culoarea de fundal
                    a unui element din pagina, caz in care voi cauta
                    {' '}
                    <span className="formatted">background color MDN</span>
                    .
                    Pun “MDN” la final pentru a ma asigura ca pagina pe care
                    o vreau este chiar prima, ca in imaginea de mai jos.
                  </p>
                  <figure className="with--border">
                    <img src="/images/lesson-0__google-search.png" alt="Searching 'background color MDN' on Google Search" />
                    <figcaption> Docs about `background-color` on MDN </figcaption>
                  </figure>
                  <p>
                    And voilà! Am ajuns la documentatie,
                    unde putem vedea toate optiunile posibile si cum le putem folosi:
                  </p>
                  <figure className="with--border">
                    <img src="/images/lesson-0__mdn.png" alt="Docs about `background-color` on MDN" />
                    <figcaption> Docs about `background-color` on MDN </figcaption>
                  </figure>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/" className="text-bold">Stack Overflow</a>
                  {' '}
                  este o comunitate de developeri ce invata si codeaza impreuna.
                  <p>
                    Mai exact, este cea mai populara platforma de intrebari si
                    raspunsuri de programare, folosita de toti developerii din lume.
                    Fara acest site ne-ar lua mult
                    mai mult timp sa gasim solutiile la diversele
                    buguri/probleme pe care le intalnim cand codam.
                  </p>
                  <p>
                    {' '}
                    Iar daca esti curios, poti arunca un ochi pe ultimele intrebari adaugate pentru
                    limbajele ce le vom invata aici:
                    {' '}
                    <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/questions/tagged/html">HTML</a>
                    ,
                    {' '}
                    <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/questions/tagged/css">CSS</a>
                    {' '}
                    {' '}
                    si
                    {' '}
                    <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/questions/tagged/javascript">JavaScript</a>
                    .
                  </p>
                </li>
              </ol>
            </section>
          </article>
          <Footer />
        </main>
      </div>
    </>
  );
}
