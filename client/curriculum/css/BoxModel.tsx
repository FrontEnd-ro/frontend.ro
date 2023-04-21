import React from 'react';
import {
  LessonCover,
  LessonFigure,
  LessonFirstSentence,
  LessonHeading,
  LessonQuote,
  LessonTip,
} from '~/components/lessons';
import Link from '~/components/generic/Link';
import Highlight from '~/components/Highlight/Highlight';
import DevToolsClone from '~/components/DevToolsClone';
import SideBySidePictures from '~/components/SideBySidePictures';
import coverSvg from './BoxModelCover.svg';
import FormattedText from '~/components/FormattedText';
import { getLessonById } from '~/curriculum/Curriculum';
import List from '~/components/List';

export default function BoxModelContent() {
  const lessonInfo = getLessonById('box-model');

  return (
    <>
      <LessonCover>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{
          __html: coverSvg,
        }}
        />
      </LessonCover>
      <LessonFirstSentence>
        Până acum, am învățat ce înseamnă CSS, la ce îl putem folosi, și, foarte important,
        cum să îl folosim. CSS este un limbaj cu care putem crea site-uri cu un design excelent.
        La bază, fiecare element e doar un dreptunghi cu câteva proprietăți mai speciale.
      </LessonFirstSentence>
      <p>
        În această lecție vom învăța despre box-model: din ce este compus și cum este folosit
        “în spate” pentru a crea acele design-uri WOW. Înțelegerea modului în care
        lucrează este cheia care te va ajuta să construiești orice interfață și să
        rezolvi diverse probleme de layout ce pot apărea.
      </p>
      <section>
        <LessonHeading as="h2" id={lessonInfo.chapters[0].id}>
          {lessonInfo.chapters[0].title}
        </LessonHeading>
        <p>
          <strong>Box model</strong>
          {' '}
          este compus din 4 proprietăți:
        </p>
        <List variant="bullets">
          <li>
            <strong>Content</strong>
            : Conținutul "cutiei", adică locul unde se afișează textul / imaginea / etc.
          </li>
          <li>
            <strong>Padding</strong>
            : Un spațiu transparent care înconjoară conținutul
          </li>
          <li>
            <strong>Border</strong>
            : O "bordură" care înconjoară conținutul și padding-ul
          </li>
          <li>
            <strong>Margin</strong>
            : O suprafață transparentă din afara border-ului
            care ajută la spațierea dintre elemente
          </li>
        </List>

        <LessonFigure
          withBorder
          src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/box-model/box-model-intro.png`}
          alt="Box Model vizualizat - MDN"
        />

        <p>
          În mod normal, dacă nu intervenim, majoritatea elementelor ar fi lipite unul de
          celălalt. Browserele aplică totuși câteva margini pe anumite
          elemente, în special pe tag-urile de tip heading
          (
          {' '}
          <FormattedText as="strong">{'<h1>'}</FormattedText>
          {' '}
          -
          {' '}
          <FormattedText as="strong">{'<h6>'}</FormattedText>
          {' '}
          ) și pe paragrafe (
          {' '}
          <FormattedText as="strong">{'<p>'}</FormattedText>
          {' '}
          ),
          dar nu vom intra acum în detaliu.
        </p>

        <Highlight
          className="my-5"
          language="html"
          code={`
<div>Element</div>
<div>Element</div>
            `}
        />
        <LessonFigure
          withBorder
          src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/box-model/elemente-fara-spatieri.png`}
          alt="Doua elemente fara spatieri"
        />
        <p>
          Așa cum se poate observa, ambele tag-uri
          {' '}
          <FormattedText as="strong">{'<div>'}</FormattedText>
          {' '}
          sunt lipite. Nu avem o spațiere definită, și nici vreo bordură pentru a le separa.
          Haideți să vedem cum putem folosi componentele box model-ului pentru a schimba modul în
          care cele două
          {' '}
          <FormattedText as="strong">{'<div>'}</FormattedText>
          -uri sunt afișate.
        </p>
      </section>
      <section>
        <LessonHeading as="h2" id={lessonInfo.chapters[1].id}>
          {lessonInfo.chapters[1].title}
        </LessonHeading>
        <p>
          Vom începe cu border. Border nu va adăuga spațiere propriu-zisă între elemente, însă va
          ajuta la setarea unor limite vizuale pentru acestea.
        </p>
        <Highlight
          className="my-5"
          language="css"
          code={`
div {
  border: 1px solid #000;
}            
            `}
        />
        <LessonFigure
          withBorder
          src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/box-model/elemente-cu-border.png`}
          alt="Doua elemente cu border atribuit"
        />

        <p>
          Setarea unui border pentru cele două div-uri ajută puțin la separare, însă
          elementele tot lipite sunt. Este departe de acel design WOW pe care îl
          dorim. Pentru a le distanța, putem folosi
          {' '}
          <strong>margin</strong>
          .
        </p>
      </section>
      <section>
        <LessonHeading as="h2" id={lessonInfo.chapters[2].id}>
          {lessonInfo.chapters[2].title}
        </LessonHeading>
        <Highlight
          className="my-5"
          language="css"
          code={`
div {
  border: 1px solid #000;
  margin: 12px;
}            
            `}
        />
        <LessonFigure
          withBorder
          src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/box-model/elemente-cu-margin.png`}
          alt="Doua elemente cu margin"
        />

        <p>
          Deja putem vedea o îmbunătățire. Cele două div-uri nu mai sunt lipite, ci au
          puțin spațiu între ele, 12px mai exact.
        </p>

        <LessonTip>
          Chiar dacă am setat 12px ca margin pentru ambele
          {' '}
          <FormattedText as="strong">{'<div>'}</FormattedText>
          -uri,
          distanța dintre cele două elemente nu va fi 24px (12px * 2), ci va rămâne 12px.
          Acest lucru se întâmplă din cauza conceptului numit
          {' '}
          <strong>margin collapsing</strong>
          .
          Este un fenomen care ar merita propria mini-lecție, însă ceea ce trebuie să știi pentru
          moment este că uneori două margini se pot combina într-una singură,
          care va avea valoarea maximă dintre cele două margini individuale.
          Poți citi mai multe
          {' '}
          {' '}
          <Link prefetch={false} target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing">
            aici
          </Link>
          .
        </LessonTip>
        <p>
          Dacă deschidem DevTools și inspectăm unul dintre
          {' '}
          <FormattedText as="strong">{'<div>'}</FormattedText>
          -uri,
          vom vedea imaginea de mai jos. Concret, chenarul portocaliu reprezintă
          de fapt marginea pe care noi am setat-o în cod, adică 12px în toate
          direcțiile (top, right, bottom, left).
        </p>

        <LessonFigure
          withBorder
          src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/box-model/devtools-margin.png`}
          alt="DevTools deschis in modul inspect"
        />
      </section>
      <section>
        <LessonHeading as="h2" id={lessonInfo.chapters[3].id}>
          {lessonInfo.chapters[3].title}
        </LessonHeading>
        <p>
          <strong>Padding-ul</strong>
          {' '}
          este folosit pentru a adăuga spațiu între content și border.
          În exemplul nostru, padding-ul s-ar afișa între cuvântul "Element"
          și bordura neagră de 1px pe care noi am setat-o prima dată.
        </p>

        <Highlight
          className="my-5"
          language="css"
          code={`
div {
  border: 1px solid #000;
  margin: 12px;
  padding: 8px;
}            
            `}
        />
        <LessonFigure
          withBorder
          src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/box-model/elemente-cu-padding.png`}
          alt="Element cu padding aplicat"
        />
        <p>
          Chenarul verde este echivalentul padding-ului de 8px setat. După cum se poate observa,
          cuvântul "Element" este acum mai distanțat față de bordură.
        </p>
      </section>
      <section>
        <LessonHeading as="h2" id={lessonInfo.chapters[4].id}>
          {lessonInfo.chapters[4].title}
        </LessonHeading>
        <p>
          Ok, acum că am învățat despre border, margin și padding, este momentul să vedem cum se
          aplică toate pe elementul din exemplu. Pentru asta, vom folosi din nou
          {' '}
          <strong>DevTools</strong>
          .
        </p>
        <LessonFigure
          withBorder
          src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/box-model/devtools-inspect-element.png`}
          alt="Element cu toate componentele box model vizibile"
        />
        <LessonFigure
          withBorder
          src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/box-model/devtools-full.png`}
          alt="Acelasi element vazut in DevTools"
        />

        <p>
          Prima imagine ar trebui să vă fie familiară.
          Acolo veți regăsi elementul îmbunătățit vizual
          cu reprezentarea grafică a tuturor proprietăților
          ce compun box model-ul.
        </p>
        <p>
          În imaginea a doua, veți vedea exact dimensiunile setate
          pentru margin, border și padding.
          Chenarul albastru este corespondentul
          {' '}
          <strong>content-ului</strong>
          , care în exemplu are o
          lățime de
          {' '}
          <em>372px</em>
          {' '}
          și o înălțime de
          {' '}
          <em>19px</em>
          .
        </p>
        <p>
          Haideți să setăm și proprietățile
          {' '}
          <FormattedText as="strong">width</FormattedText>
          {' '}
          și
          {' '}
          <FormattedText as="strong">height</FormattedText>
          , pentru a le vedea modificate și în
          reprezentarea grafică.
        </p>
        <Highlight
          className="my-5"
          language="css"
          code={`
div {
  border: 1px solid #000;
  margin: 12px;
  padding: 8px;
  width: 100px;
  height: 50px;
}               
            `}
        />
        <LessonFigure
          withBorder
          src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/box-model/devtools-box-sizing-content-box.png`}
          alt="Box Model complet, vizualizat in DevTools"
        />
        <p>
          Ok, acum am setat toate valorile unui box model.
          Putem observa asta și pe elementul din pagină.
        </p>
        <LessonFigure
          withBorder
          src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/box-model/rendered-element.png`}
          alt="Box Model complet, vizualizat pe pagina"
        />
        <p>
          Hmm, ceva nu e bine. Am setat lățimea de
          {' '}
          <em>100px</em>
          {' '}
          și înălțimea de
          {' '}
          <em>50px</em>
          , însă
          div-ul nostru are în schimb o lățime de
          {' '}
          <em>118px</em>
          {' '}
          și o înălțime de
          {' '}
          <em>68px</em>
          .
          Oare de ce?
        </p>
      </section>
      <section>
        <LessonHeading as="h2" id={lessonInfo.chapters[5].id}>
          {lessonInfo.chapters[5].title}
        </LessonHeading>
        <p>
          Pentru a înțelege ce s-a întâmplat, trebuie să vorbim puțin despre proprietatea
          {' '}
          {' '}
          <FormattedText as="strong">box-sizing</FormattedText>
          .
        </p>
        <p>
          Această proprietate controlează modul în care este calculată dimensiunea totală a unui
          element (lățime și înălțime).
        </p>
        <p>
          În CSS, dacă setam o lățime de 100px, ea se va aplica asupra
          {' '}
          <strong>content-ului</strong>
          .
          În momentul în care adăugăm padding sau border,
          aceste valori se vor adăuga la dimensiunea
          totală a elementului final care va fi randat pe pagină.
        </p>
        <p>
          Hai să ne întoarcem la exemplul nostru.
          Ne vom concentra atenția asupra lățimii, întrucât
          înălțimea are același mod de calcul.
        </p>
        <Highlight
          className="my-5"
          language="css"
          code={`
div {
  border: 1px solid #000;
  margin: 12px;
  padding: 8px;
  width: 100px;
  height: 50px;
}               
            `}
        />
        <p>
          Avem setat un width: 100px, un padding:
          8px și un border: 1px. Modul în care este calculată
          lățimea este următorul:
        </p>
        <LessonQuote>
          100px + 8px * 2 + 1px * 2 = 118px
        </LessonQuote>
        <LessonTip>
          De ce 8px * 2? Trebuie să luăm în considerare
          {' '}
          <FormattedText as="strong">padding-left</FormattedText>
          {' '}
          și
          {' '}
          <FormattedText as="strong">padding-right</FormattedText>
          . Același lucru este valabil și pentru
          <FormattedText as="strong">border</FormattedText>
          .
        </LessonTip>
        <p>
          Se poate observa că nu este neapărat un mod ușor
          de a seta dimensiuni. Dacă avem nevoie de o
          anumită lățime, trebuie să ne gândim la ce border
          și ce padding vom seta, pentru a reuși să ajungem
          la rezultatul dorit. Asta nu sună prea bine, nu?
        </p>
        <p>
          Din fericire, CSS ne oferă o soluție: proprietatea
          {' '}
          <FormattedText as="strong">box-sizing</FormattedText>
          .
          Implicit, această proprietate are valoarea
          {' '}
          <FormattedText as="strong">content-box</FormattedText>
          ,
          adică
          {' '}
          <em>width-ul</em>
          {' '}
          și
          {' '}
          <em>height-ul</em>
          {' '}
          se vor aplica asupra content-ului.
        </p>
        <p>
          Cealaltă valoare este
          {' '}
          <FormattedText as="strong">border-box</FormattedText>
          . Setarea acestei
          valori îi va spune browser-ului să țină cont
          pentru calcularea dimensiuni de orice border
          sau padding adăugat. Content-ul va fi micșorat
          pentru a se putea atinge width-ul sau
          height-ul setat.
        </p>
        <p>
          În imaginile de mai jos putem vedea exact aceste diferențe de la nivelul content-ului.
        </p>
        <SideBySidePictures
          direction="row"
          img1={{
            src: `${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/box-model/devtools-box-sizing-content-box.png`,
            alt: 'Element cu box-sizing: content-box, vedere din DevTools',
          }}
          img2={{
            src: `${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/box-model/devtools-box-sizing-border-box.png`,
            alt: 'Element cu box-sizing: border-box, vedere din DevTools',
          }}
        />
        <p>
          Diferența este vizibilă și în pagină, unde
          elementele sunt randate în forma finală, după ce toate
          calculele au fost făcute.
        </p>
        <LessonFigure
          withBorder
          src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/box-model/rendered-elements-final.png`}
          alt="Sus -> border-box, jos -> content-box"
        />
      </section>
      <section>
        <LessonHeading as="h2" id={lessonInfo.chapters[6].id}>
          {lessonInfo.chapters[6].title}
        </LessonHeading>
        <p>
          Ok, gata cu vorba. Hai să trecem și la ceva practic.
        </p>
        <p>
          Mai jos, am recreat box model-ul din DevTools, pentru că tu să poți interacționa cu el
          și pentru a vedea în timp real cum este afectată dimensiunea elementului în funcție de
          valoarea proprietății
          {' '}
          <FormattedText as="strong">box-sizing</FormattedText>
          .
        </p>
        <LessonTip>
          Valorile implicite setate în stânga servesc drept limite maxime,
          pentru a nu strica layout-ul general al paginii.
          Pentru a interacționa cu valorile, este suficient să setați
          orice valoare pozitivă mai mică decât acest maxim.
          La schimbarea checkbox-ului activ, ar trebui să
          vedeți valoarea finală modificată în funcție de alegerea voastră.
        </LessonTip>
        <DevToolsClone />
      </section>
      <div className="dots" />
      <section>
        <p>
          Am acoperit destul de multă teorie în această lecție. Sper că acum este puțin mai clar
          cum este folosit box model in CSS. Dacă totuși consideri că ai nevoie de ceva mai multe
          informații, poți folosi una dintre resursele de mai jos:
        </p>
      </section>
    </>
  );
}
