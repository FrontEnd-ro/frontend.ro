import React from 'react';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import SEOTags from '~/components/SEOTags';
import Link from '~/components/generic/Link';
import PageContainer from '~/components/PageContainer';
import List from '~/components/List';
import { LessonQuote } from '~/components/lessons';
import { env } from '~/services/env';

const Changelog1 = () => {
  return (
    <>
      <SEOTags
        title="Changelog #1: De ce am început FrontEnd.ro și modulul de HTML | FrontEnd.ro"
        url="https://FrontEnd.ro/blog/de-ce-am-inceput-proiectul-si-modulul-de-html"
        shareImage={`${env.CLOUDFRONT_PUBLIC}/public/seo/changelog-1_1200w.jpg`}
        description="Pe scurt, proiectul a început anul trecut în 2020 cand am vazut că domeniul FrontEnd.ro era de vânzare și l-am cumpărat. Dar motivul pentru care am făcut asta este unul mai vechi, deci hai să vă dau și puțin context."
      />
      <Header href="/blog" withNavMenu />
      <style jsx>
        {`
        p {
          font-size: 1.25em;
        }
      `}

      </style>
      <PageContainer className="changelog-blog my-5">
        <h1> Changelog #1: De ce am început FrontEnd.ro și modulul de HTML </h1>
        <p className="text-right text-grey">
          <time dateTime="2021-10-10"> 10 Octombrie 2021 </time>
        </p>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          controls
          className="w-100"
          src={`${env.CLOUDFRONT_PUBLIC}/videos/changelog-1.mp4`}
          poster={`${env.CLOUDFRONT_PUBLIC}/public/images/blog/changelog1__1920w.jpg`}
        />
        <p>
          Hey salut 👋,
        </p>
        <p>
          Alex de la FrontEnd.ro aici, iar acest filmuleț este primul dintr-o serie
          nouă pe care o numim
          {' '}
          <em>CHANGELOG</em>
          ,
          {' '}
          în care vă vom ține la curent cu proiectul nostru.
          Cred că-i important să știți la
          {' '}
          <span className="border-bottom-1px">ce lucrăm</span>
          ,
          {' '}
          <span className="border-bottom-1px">ce urmează</span>
          {' '}
          și
          {' '}
          <span className="border-bottom-1px">cum ne puteți ajuta</span>
          , așa că
          vom încerca să facem filmulețe de genul o dată pe lună.
        </p>
        <p>
          În principal seria asta va fi despre viitor,
          dar mi-am dat seama că niciodata nu v-am spus cine suntem noi și
          de ce facem proiectul ăsta?!

          Deci hai să începem cu asta...
        </p>
        <div className="dots" />
        <p>
          Pe scurt, proiectul a început anul trecut în 2020 când am văzut că domeniul
          FrontEnd.ro era de vânzare și l-am cumpărat.

          Dar motivul pentru care am făcut asta necesită puțin context dinainte.
        </p>
        <p>
          Eu sunt
          {' '}
          <a href="https://iampava.com">Alexandru Păvăloi</a>
          , FrontEnd developer din 2015 și îmi place să îmbin partea
          de programare cu partea de
          predat programare. Adică, pe de o parte pentru mine o zi în care
          codez cu cafea și muzică bună e o zi super faină! Pe de altă parte, o zi în care
          merg la o conferință și țin o prezentare e la fel o zi foarte faină.
        </p>
        <p>
          Si nu mă văd făcând doar unul din lucrurile astea. Îmi place mult să codez
          dar cred ca dacă doar aș coda m-aș plictisi. Pe de altă parte, îmi place mult să
          țin prezentări, traininguri șamd, dar dacă aș face doar asta mi-aș pierde
          skillurile de programator pentru că efectiv n-aș mai coda atât de mult...

          Și datorită mixului ăsta, de foarte mult timp mă gândeam că vreau să încep un
          proiect mai mare, cu un impact mai puternic în comunitate.
        </p>
        <p>
          În 2019 am aplicat la niște fonduri europene ca să-mi deschid o școală
          de reconversie profesională, am câștigat fondurile dar au apărut
          alte circumstanțe si a trebuit să renunț la proiect. Însă ideea
          din spate a rămas acolo. Cumva, aveam așa sentimentul că în România se poate
          preda FrontEnd mai bine. Și dacă nu văd în jur nici un loc căruia
          mi-ar placea sa mă alătur, hai încerc să fac eu locul ăla.
        </p>
        <p>
          Fast forward ⏩⏩ to 2020 când am vazut că domeniul e de vanzare, deci
          l-am luat pentru a începe acel
          {' '}
          <em>mare proiect</em>
          .
          Și hai să-l facem cum mereu mă gândeam că ar trebui:
        </p>
        <List className="text-xl" variant="checkmark">
          <li> Să fie un proiect open source, tot codul la vedere </li>
          <li>
            Oricine vrea să contribuie, să contribuie.
            Oricine vrea să scrie lecții, să scrie lecții.
          </li>
        </List>
        <p>
          Asta nu înseamnă că e un proiect mediocru, unde oricine vine și își dă cu părerea.
          Nu-i deloc așa. Dacă ați scris lecții ați văzut că facem un proces de review destul de
          strict, dar vreau să fie un efort de comunitate. Nu vreau sa fiu doar eu vorbind
          despre programare și făcând tutoriale.
        </p>
        <LessonQuote>
          Cam asta se întâmplă pe YouTube căci colegii mei
          nu sunt foarte încântați de ideea de a apărea în fața camerei.
          Dar sper să-i conving cât de curând.
        </LessonQuote>
        <p>
          Revenind, am început proiectul așa cum mereu mă gândeam că
          trebuie făcut: open source, comunitate,
          iar partea cea mai importanta -
          <strong> partea practică </strong>
          .
          Eu sunt un mare susținător al ideii că la finalul zilei trebuie să codezi
          foarte foarte FOARTE mult.
        </p>
        <LessonQuote variant="centered">
          Nu contează la câte tutoriale te uiți, la câte traininguri ai fost,
          la câte filmulețe pe YoutTube te-ai uitat. Ce contează e cât ai codat???
          Cât timp ai stat și ai codat singur, cât timp ai construit aplicații și
          ai rezolvat probleme?
        </LessonQuote>
        <p>
          Dar asta nu e tot, căci tu codezi mult dar trebuie și
          cineva să-ți dea un feedback pe acel cod.
          Mai ales dacă ești începător, căci rezolvi o problemă dar nu știi
          dacă soluția ta e cea mai bună, dacă nu are cumva anumite probleme sau dezavantaje.
          Și aici vine partea de feedback pe care noi o avem în platformă:
          {' '}
          <strong>faci exercitii iar noi îți dăm feedback la ele</strong>
          .
        </p>
        <p>
          Ca să nu mă lungesc prea mult, ăsta e modul în care eu cred că trebuie
          predată programarea, cu mult cod, exerciții și feedback pentru fiecare. Și feedback
          foarte strict, adică nu-ți acceptăm un exercițiu până nu e cod de
          producție, adică cod pe care l-am pune într-o aplicație reală.
        </p>
        <div className="dots" />
        <p>
          Deci cam ăsta e un scurt rezumat despre cum a început proietul. Acum
          hai să vorbim despre unde am ajuns...
        </p>
        <p>
          Avem modulul de HTML cam gata 🥳.
          <span className="text-bold">10 lecții și 18 exerciții</span>
          {' '}
          care acoperă
          cele mai importante topicuri din HTML. Știu că poate
          părea puțin ciudat - HTML-ul se presupune că e ușor -
          dar în realitate are multe subtilități pe mulți developeri nu le știu. Deși nu e un
          limbaj greu, e bine să-l înveți corect de la început,
          căci o să te ajute foarte mult.
        </p>
        <p>
          Deci pe partea de HTML suntem acum la un final de capitol.
          Avem lecțiile, avem exercițiile și ne gândeam zilele trecute:
          <strong> What's next?! </strong>
        </p>
        <List className="text-xl" variant="bullets">
          <li>Ar trebui sa continuăm cu CSS?</li>
          <li>
            Ar trebui sa continuăm cu JavaScript?
          </li>
          <li>
            Ar trebui să facem ceva despre Git, căci îl vei folosi indiferent
            de limbajul de programare.
          </li>
          <li>
            Ar trebui să facem traininguri online, sau mai multe video-uri...?
            Sunt foarte multe posibilități...
          </li>
        </List>
        <p>
          Și cum ne gândeam noi așa, ne-am dat seama că nu suntem
          chiar mândri de experiența de HTML:
        </p>
        <LessonQuote>
          Dacă cineva mă intreabă -
          "De unde să învăț HTML?" aș vrea să
          pot să-i recomand FrontEnd.ro dar trebuie să fiu sincer și să
          recunosc că experiența nu e ceea ce ar trebui să fie...
        </LessonQuote>
        <p>
          Pe de o parte, nu are un început clar. Adica nu știi:
        </p>
        <List variant="bullets" className="text-xl">
          <li>
            Cum incepi sa inveti HTML-ul ala? Pur si simplu citesti lectiile si trimiti exercitiile?
          </li>
          <li> De la care lectie trebuie sa incepi? </li>
        </List>
        <p>
          Pentru că dacă ești începător complet ar trebui mai întâi să te
          uiți la lectia cu
          {' '}
          <Link prefetch={false} href="/intro/vs-code">
            VSCode
          </Link>
          {' '}
          (pentru că n-ai nici un editor de cod) și
          apoi sa continui cu
          {' '}
          <Link prefetch={false} href="/html/despre-html">
            prima lecție de HTML
          </Link>
          ...
          Dar nu știi asta, deci dacă începi direct cu capitolul de HTML,
          vezi codul și te întrebi
          {' '}
          <cite> Unde-l scriu? În word, în notepad? </cite>
        </p>
        <p>
          Apoi, ești singur... Nu interacționezi cu nimeni, ceea ce-i păcat căci
          comunitatea de programatori - mă refer aici la nivel global - e o comunitate
          foarte faină. Oameni chiar pasionați, oameni care-și împărtășesc
          ce știu pentru că le place să învete lucruri noi și să-i
          ajute pe alții. Deci e păcat că tu înveți HTML de unul singur...
        </p>
        <p>
          Iar la final nu primești nimic... De fapt, nici nu are un final concret
          modulul. E așa puțin în aer. Ai făcut toate exercițiile iar noi ți le-am aprobat,
          iar asta e tot... Nici măcar nu-ți apar pe profil... Cam ciudat, nu?
        </p>
        <p>
          Și din cauză că nu suntem mândri de această experiență am decis
          ca până trecem la ceva nou (cum ar fi CSS sau JS),
          hai să luăm conținutul - pe care-l avem deja - și să-l împachetăm
          într-o experiență cum credem noi că ar trebui să fie,
          o experiență de care chiar să fim mândri și să o
          putem recomanda nu doar pentru că-i proiectul nostru,
          ci chiar obiectiv vorbind.
        </p>
        <p>
          <strong> Și asta urmează să facem! </strong>
          <br />
          În primul rând să aibă un început clar - o pagină care-ți explica
          ce e cu acest modul de HTML: ce o să înveți, ce nu o sa înveți, cum sa înveți -
          adică partea de practică foarte importantă.
        </p>
        <p>
          Apoi, o să-ți dăm un timp limită pentru a termina modulul.
          Vrem să te motivăm sa lucrezi recurent - e foarte important aspectul ăsta.
          Dacă codezi azi și apoi peste o lună și o altă lună, nu
          înveți nimic. Ideal ar fi în fiecare zi, sau măcar de 2-3 ori pe săptămână.
        </p>
        <p>
          Deci, detalii despre modul și un buton mare cu
          {' '}
          <cite> Începe modulul, ai X saptamani sa-l termini</cite>
          .
          Dacă nu l-ai terminat până atunci va trebui să-l refaci de la zero.
          Să ai această presiune a timpului căci este ceva ce vrei sa duci la final cât
          mai repede pentru că îți permite să treci la subiecte mai avansate,
          CSS și JS.
        </p>
        <p>
          Apoi, vrem să-ți dăm o comunitate de Discord. Vrem ca toți oamenii care au
          făcut modulul sau cei care-l fac acum să fie împreuna, să poată discuta
          despre probleme, soluții, buguri, șamd. Să fie efectiv o comunitate.
        </p>
        <p>
          Iar la final o certificare care să specifice:
        </p>
        <LessonQuote>
          Persoana X a terminat în Y săptămâni cursul, adică a trimis toate
          cele Z exerciții care au fost aprobate de ...
        </LessonQuote>
        <p>
          ...iar noi vom da cu subsemnatul. Adică spre exemplu, eu am verificat toate exercițiile
          și le-am aprobat, sunt ok! Aș pune codul ăla în producție.
          Să-ți dăm un certificat din ăsta pe care să-l poți share-ui
          cu oricine vrei, să-l poți arăta la interviuri șamd. Iar el să
          dovedească că ești cu un pas mai aproape de a fi un
          programator junior, sau ce-ți dorești să ajungi.
        </p>
        <div className="dots" />
        <p>
          Deci ca să rezum:
        </p>
        <p>
          Un proiect pornit din pasiunea mea pentru codat și pentru predat programare.
          Un proiect open-source, oricine poate contribui cu cod sau lecții.
          Deocamdată
          {' '}
          <span className="text-bold">
            nu facem bani dar sper sa facem curând ca să recompensăm pe toata lumea ce a ajutat
          </span>
          . Nu doar strângeri de mână și "mulțumim" pentru că astea nu
          plătesc chiria.  Să-ți putem da efectiv o parte din profitul nostru.
        </p>
        <p>
          Acum am terminat modulul de HTML dar nu suntem 100% mândri de el.
          Nu este un journey, o poveste acolo, nu este ca un modul care
          să aibă un început, un final, să primești ceva, să faci parte
          dintr-o comunitate, să-ți fie explicat ce înveți, ce nu înveți,
          de ce sa înveți asa, cum sa înveți, etc etc.
        </p>
        <p>
          Așa că am zis până să trecem la lucrui noi hai să facem asta o
          experiență de care suntem mândri, și nu doar pentru că e proiectul
          nostru. Chiar să putem zice:
          {' '}
          <cite>
            uite, modulul de HTML de pe FrontEnd.ro
            este cel mai bun loc de a învăța HTML din România
          </cite>
          . Dacă vrei să înveți, vino aici! Ai oameni care-ți dau feedback, ai lecții bine scrise,
          ai o certificare la final. Let's do it!
        </p>
        <p>
          Vrem sa ajungem la punctul ăla și nu cred că trebuie să mai scriem
          lectii sau să schimbăm exercițiile, ci doar să împachetăm asta într-o experiență
          faină.
        </p>
        <p>
          Sper că sunteți entuziasmați! Iar până data viitoare,
          spor la învățat și zi faină! Cheers! 👋
        </p>
      </PageContainer>
      <Footer />
    </>
  );
};

export default Changelog1;
