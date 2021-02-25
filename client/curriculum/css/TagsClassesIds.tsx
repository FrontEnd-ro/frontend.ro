import React from 'react';
import Link from 'next/link';
import SEOTags from '~/components/SEOTags';
import Lesson, {
  LessonContributors,
  LessonCover,
  LessonHeading,
  LessonTip,
} from '~/components/lessons';
import { NicolaeMaties } from '~/services/contributors';
import Highlight from '~/components/Highlight/Highlight';
import coverSvg from '~/public/images/lessons/tags-classes-ids__cover.svg';

const contributors = [NicolaeMaties];
const chapters = [
  { title: 'Tag-uri', id: 'tags' },
  { title: 'Clase', id: 'classes' },
  { title: 'Id-uri', id: 'ids' },
];

export default function TagsClassesIds() {
  return (
    <>
      <SEOTags
        title="Tag-uri, clase si id-uri | Lecție CSS"
        shareImage="https://frontend.ro/seo/html-text-elements.jpg"
        description=""
        url="https://FrontEnd.ro/css/taguri-clase-si-iduri"
      />
      <Lesson title="Tag-uri, clase si id-uri" chapters={chapters}>
        <LessonContributors className="absolute" contributors={contributors} />
        <LessonCover>
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{
            __html: coverSvg,
          }}
          />
        </LessonCover>
        <p>
          Acest articol explică modul prin care putem stiliza diferit
          elementele in funcție de tag-uri, clase sau id-uri.
        </p>
        <section>
          <LessonHeading as="h3" id="tags">
            Tag-urile
          </LessonHeading>
          <p>
            Atunci când construim un site și implicit stilurile pentru paginile
            din site este important să avem o consistență a stilurilor.
            De aceea ne putem folosi de tag-uri pentru a stiliza o anumită categorie de elemente,
            cum ar fi toate paragrafele, linkurile sau butoane.
          </p>
          <p>
            Pentru demonstrație vom lucra pe exemplul de mai jos,
            ce conține HTML-ul pentru un formular de înregistrare:
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={
            `
<form>
  <h2> Înregistrează-te</h2>
  <button type="button">
    Închide formular
  </button>

  <input type="email" name="email" required placeholder="Adresa de email">

  <input type="password" name="password" required placeholder="Parola">


  <button type="reset">
    Resetează formular
  </button>
  <button type="submit"> Înregistreză-te</button>
</form>
            `
          }
          />
          <h1> DEMO (poza) la rezultatul final </h1>
          <h1> Cumva aratat si rezultatul curent, sa vedem de unde plecam?! </h1>
          <p>
            In exemplul de mai sus, observam ca toate inputurile arata la fel:
            (descrierea proprietatilor comune).
            Pentru acestea e bine sa aplicam stilizarea dupa taguri:
          </p>

          <h1>COD DEMO</h1>

          <p>
            La fel si la butoane. Desi nu toate 3 sunt la fel, au cateva proprietati comune,
            deci este un good practice sa le stilizam dupa tag folosind acele proprietati comune.
          </p>

          <h1> Cod demo butoane </h1>
          <LessonTip>
            De asemenea poate fi folosit și în JavaScript pentru a accesa și manipula elementele,
            acestea vor fi discutate pe larg în capitolul
            {' '}
            <Link href="/javascript/despre-javascript"><a>JavaScript</a></Link>
            .
          </LessonTip>
        </section>
        <section>
          <LessonHeading as="h3" id="classes">
            Clasele
          </LessonHeading>
          <p>
            Deși e o bună practică ca elementele de același tip (tag) să fie stilizate la fel,
            vrem totuși să avem și o varietate mai mare de stiluri din care să alegem.
          </p>
          <p>
            In acelasi exemplu de mai sus, observam cu butoanele "X si Y" 
            au (proprietati comune) in timp ce butonul "Z" e default.
            
            Hai sa adaugam atributul `class` pe cele 2 butoane:
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={
            `
            COD UPDATAT
            `
          }
          />
          <p> 
            Iar apoi din CSS vom selecta elementele in functie de clasa si le vom stiliza diferit.
          </p>
          <p>
            Pentru a selecta o clasa specifică, va trebui sa scriem în CSS
            caracterul (.) urmat de numele clasei, în cazul nostru vom avea
            culori diferite pentru textul din interiorul butoanelor.
          </p>
          <Highlight
            className="my-5"
            language="css"
            code={
            `
              .btn-red {
                color: red;
              }

              .btn-green {
                color: green;
              }
            `
          }
          />
          <LessonTip>
            De asemenea clasele pot fi folosite și în JavaScript pentru a accesa și
            manipula elementele, acestea vor fi discutate pe larg în capitolul
            {' '}
            <Link href="/javascript/despre-javascript"><a>JavaScript</a></Link>
            .
          </LessonTip>
        </section>
        <section>
          <LessonHeading as="h3" id="ids">
            Id-urile
          </LessonHeading>
          <p>
            Am văzut mai sus ca în cazul claselor putem selecta mai multe elemente
            cu ajutorul aceleași clase, vom vedea în continuare cum putem selecta un singur
            element cu ajutorul id-urilor.
          </p>
          <LessonTip>
            Id-urile sunt folosite pentru a identifica un element in mod unic.

            Apoi din CSS putem aplica stiluri specifice pentru acel element:
          </LessonTip>
          <p>
            Ca și în cazul tag-urilor și claselor ne vom folosi de aceleași exemplu.
            Observam ca elementul "X" este unic deci am putea sa-i atribuim lui un "id" unic.
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
              demo code
            `}
          />
          <p>
            <b>Cum selectam elementele cu ajutorul id-ului în CSS?</b>
          </p>
          <p>
            La fel ca și în cazul clasei, numai ca în loc să precedam numele clasei cu (.)
            vom folosi (#). Exact, ce; de pe Instagram, exact ca în exemplul următor:
          </p>
          <Highlight
            className="my-5"
            language="css"
            code={`
              .btn-red {
                color: red;
              }

              #btn-green {
                color: green;
              }
            `}
          />
          <LessonTip>
            Diferența foarte importantă între id-uri și clase constă în faptul că
            id-ul poate fi atribuit unui singur element dintr-un singur fișier
            HTML ceea ce il face unic în pagină, spre deosebire de clasa ce
            poate fi atribuită mai multor elemente în același timp din același fișier.
            Dacă în cazul claselor puteam să atribuim aceași clasa mai multor elemente,
            în cazul id-urilor acest lucru este imposibil.
          </LessonTip>
          <p>
            De asemenea id-ul poate fi folosit și în JavaScript pentru a
            accesa și manipula elementele, acestea vor fi discutate pe larg la capitolul
            {' '}
            <Link href="/javascript/despre-javascript"><a>JavaScript</a></Link>
            .
          </p>
        </section>
        <section>
          <LessonHeading as="h3" id="resule">
            Rezultat final
          </LessonHeading>
          <p>
            Concluzie plus demo-cod final. Aici cred ca poti integra componenta de
            BasicEditor
            . Ea are suport pentru mai multe fisiere.
          </p>
        </section>
        <section>
          <LessonHeading as="h3" id="exercises">
            Exerciții
          </LessonHeading>
          <p className="text-bold text-center">În curând!</p>
          <br />
        </section>
      </Lesson>
    </>
  );
}
