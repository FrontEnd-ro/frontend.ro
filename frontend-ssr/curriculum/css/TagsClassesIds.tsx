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
        url="https://FrontEnd.ro/html/text-elements"
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
          Acest articol explică modul prin care putem diferentia un element fata de celelalte,
          acest lucru poate fi realizat folosind tag-urile, clasele sau id-urile.
        </p>
        <section>
          <LessonHeading as="h3" id="tags">
            Tag-urile
          </LessonHeading>
          <p>
            Tag-urile sunt cuvinte cheie ce definesc practic cum browser-ul le
            va formata si cum va afisa acesta continutul, cu ajutorul tag-urile browser-ul
            poate face diferenta dintre un element HTML si un simplu continut.
            Tag-urile HTML contin 3 parti importante: tag-ul de deschidere
            <strong className="formatted">{'<tag>'}</strong>
            , continutul si tag-ul de inchidere
            <strong className="formatted">{'</tag>'}</strong>
            .
            Mai multe informatii despre cum se scriu tag-urile in HTML
            si ce reprezinta fiecare pot fi gasite in sectiunea de
            {' '}
            <Link href="/html/intro">
              <a>
                HTML
              </a>
            </Link>
            .
          </p>
          <p>
            <strong>De ce sunt importante tag-urile in CSS ?</strong>
            <br />
            <br />
            Pentru ca tag-urile ne ajuta sa identificam elemente in CSS iar mai apoi sa le stilizam.
            Spre exemplu, daca dorim sa aplicam o culoare de fundal elementului HTML
            {' '}
            <strong className="formatted">{'<body>'}</strong>
            {' '}
            vom scrie in fisierul CSS (vezi articolul
            {' '}
            <Link href="/css/intro">
              <a>
                3 moduri de stilizare
              </a>
            </Link>
            ):
          </p>
          <Highlight
            className="my-5"
            language="css"
            code={
            `
              body {
                background-color: #FF0000;
              }
            `
          }
          />
        </section>
        <section>
          <LessonHeading as="h3" id="classes">
            Clasele
          </LessonHeading>
          <p>
            Pentru a adauga o clasa unui element deja stim din sectiunea
            {' '}
            <Link href="/html/intro">
              <a>
                HTML
              </a>
            </Link>
            {' '}
            ca tag-ul trebuie sa aiba urmatorul atribut
            {' '}
            <strong className="formatted">class="clasaMea"</strong>
            .
          </p>
          <p>
            <strong>Cum selectam elementele cu ajutorul clasei in CSS ?</strong>
            <br />
            <br />
            Pentru a selecta o clasa specifica, va trebui
            sa scriem in CSS caracterul (.) urmat de numele clasei, in cazul nostru
            <strong className="formatted">clasaMea</strong>
            , selectarea tuturor elementelor cu clasa
            {' '}
            <strong className="formatted">clasaMea</strong>
            {' '}
            (carora le vom aplica o culoare rosie) va arata asa:
          </p>
          <Highlight
            className="my-5"
            language="css"
            code={
            `
              .clasaMea {
                color: #FF0000;
              }
            `
          }
          />
          <p>
            Mai exista o metoda prin care putem selecta in CSS
            un element sau mai multe elemente cu ajutorul clasei specificand in fata
            clasei
            {' '}
            <strong className="formatted">.clasaMea</strong>
            tag-ul in interiorul caruia am folosit atributul cu clasa respectiva.
            Spre exemplu, daca noi avem doua elemente carora
            le atribuim acelasi nume ca si clasa
            (
            <strong className="formatted">.descriereText</strong>
            )
            dar elementele sunt cu tag-uri diferite
            (
            <strong className="formatted">p</strong>
            ,
            <strong className="formatted">div</strong>
            ),
            putem selecta doar elementele cu tag-ul
            {' '}
            <strong className="formatted">p</strong>
            {' '}
            dar cu clasa
            {' '}
            <strong className="formatted">.descriereText</strong>
            {' '}
            ca in exemplul urmator:
          </p>
          <Highlight
            className="my-5"
            language="css"
            code={
            `
              p.descriereText {
                color: #FF0000;
              }
            `
          }
          />
          <p>
            O alta regula foarte importanta atunci cand aplicam
            clasele, este precedenta, aceasta din urma este
            atunci cand avem mai multe clase atribuite unui singur element,
            spre exemplu avem un element cu urmatoarele clase:
            <strong className="formatted">{'<h1 class="textTitlu textRosu">FrontEnd.ro</h1>'}</strong>
            ,
            in acest moment daca in stilul clasei
            {' '}
            <strong className="formatted">textRosu</strong>
            {' '}
            se va regasi aceasi proprietate ca si in clasa
            {' '}
            <strong className="formatted">textTitlu</strong>
            {' '}
            valoarea proprietatii ce va avea intaietate
            va fi tot timpul a clasei
            {' '}
            <strong className="formatted">textRosu</strong>
            ,
            considerand urmatorul exemplu:
            <Highlight
              className="my-5"
              language="css"
              code={
              `
                .textTitlu {
                  color: green;
                }

                .textRosu {
                  color: red;
                }
              `
            }
            />
            In acest caz elementul h1 va avea culoarea rosie.
          </p>
        </section>
        <section>
          <LessonHeading as="h3" id="ids">
            Id-urile
          </LessonHeading>
          <p>
            Id-ul ajuta la identificarea unui singur element in css,
            acesta este la fel ca si in cazul claselor un element
            trebuie sa aiba urmatorul atribut:
            {' '}
            <strong className="formatted">id="panouCentral"</strong>
            .
          </p>
          <p>
            <strong>Cum selectam elementele cu ajutorul id-ului in CSS ?</strong>
            <br />
            <br />
            La fel de simplu ca si in cazul clasei,
            numai ca in cazul id-urilor in loc sa precedam numele clasei cu
            (.) vom folosi (#). Exact, ala de pe Instagram.
            Avem si un exemplu pentru selectarea elementelor cu ajutorul id-ului:
            <Highlight
              className="my-5"
              language="css"
              code={`
                #textAlbastru {
                  color: blue;
                }
              `}
            />
            Probabil o sa va intrebati: Dar daca am un element cu atributele id si
            clasa si voi incerca sa schimb culoarea acelui element si in stilul id-ului si
            in cel al clasei, ce se va intampla atunci?
            Haideti sa vedem impreuna ce se va intampla:
            <Highlight
              className="my-5"
              language="html"
              code={
                `
                <div id="titlul" class="titluVerde titluAlbastru">Tag-uri, clase si id-uri</div>
                `
              }
            />
            Cu urmatoarea stilizare:
            <Highlight
              className="my-5"
              language="css"
              code={
                `
                 .titlu {
                   color: red;
                 }

                 #titluVerde {
                   color: green;
                 }

                 .titluAlbastru {
                  color: green;
                 }
                `
              }
            />
            Care credeti ca va fi culoare elementului
            {' '}
            <strong className="formatted">div</strong>
            {' '}
            cu clasele
            {' '}
            <strong className="formatted">titluVerde</strong>
            {' '}
            respectiv
            {' '}
            <strong className="formatted">titluAlbastru</strong>
            {' '}
            si cu id-ul
            {' '}
            <strong className="formatted">titlu</strong>
            {' '}
            ?
            <br />
            Daca ati raspuns rosu inseamna ca este corect, id-ul in acest caz are precedenta,
            indiferent de numarul de clase atribuite unui element, proprietatea id-ului va avea
            intotdeauna intaietate.
            <LessonTip>
              Diferenta foarte
              {' '}
              <b>importanta</b>
              {' '}
              intre id-uri si clase consta in
              faptul ca id-ul poate fi atribuit unui singur element dintr-un singur
              fisier HTML, spre deosebire de clasa care poate fi
              atribuita mai multor elemente in acelasi timp.
            </LessonTip>
          </p>
        </section>
        <section>
          <LessonHeading as="h3" id="exercises">
            Exerciții
          </LessonHeading>
          <p className="text-bold text-center"> În curând!</p>
          <br />
        </section>
      </Lesson>
    </>
  );
}
