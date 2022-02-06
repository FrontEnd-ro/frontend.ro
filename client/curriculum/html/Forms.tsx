import React from 'react';
import Image from 'next/image';
import {
  LessonCover,
  LessonHeading,
  LessonTip,
  LessonFirstSentence,
} from '~/components/lessons';
import Highlight from '~/components/Highlight/Highlight';
import { getLessonById } from '~/services/Constants';
import CodePenEmbed from '~/components/CodePenEmbed/CodePenEmbed';
import FormattedText from '~/components/FormattedText';
import List from '~/components/List';

export default function FormsContent() {
  const lessonInfo = getLessonById('formulare');

  return (
    <>
      <LessonCover>
        <Image
          width="2400"
          height="1260"
          alt="Doodle cu elemente din formulare"
          src={`${process.env.CLOUDFRONT_PUBLIC}/public/seo/forms_2400w.jpg`}
        />
      </LessonCover>
      <LessonFirstSentence>
        Formularele sunt o parte esențială a Internetului,
        oferindu-le utilizatorilor un mod dinamic de a interacționa cu
        paginile pe care le vizitează.
        Fie că te-ai conectat  pe Github să lucrezi la un proiect
        interesant sau ți-ai comandat un nou articol de îmbrăcăminte,
        cu siguranță ai completat un formular.
      </LessonFirstSentence>
      <section>
        <LessonHeading as="h2" id={lessonInfo.chapters[0].id}>
          {lessonInfo.chapters[0].title}
        </LessonHeading>
        <p>
          Indiferent de scopul pentru care construiești un formular,
          vei folosi elementul
          {' '}
          <strong className="strong formatted">{'<form>'}</strong>
          {' '}
          pentru a grupa câmpurile pe care utilizatorii le pot completa. Spre exemplu,
          așa arată un scurt formular de autentificare:
        </p>
        <CodePenEmbed
          user="iampava"
          slug="mdmENZO"
          theme="dark"
          defaultTab="html"
        />
        <p />
        <LessonTip>
          Poate ai observat că în exemplul de mai sus avem mai multe elemente
          {' '}
          <FormattedText as="span">
            {'<label>'}
          </FormattedText>
          {' '}
          iar la final un buton cu
          {' '}
          <FormattedText as="span">type="submit"</FormattedText>
          .
          Deși nu sunt obligatorii, sunt
          {' '}
          <strong>bune practici</strong>
          {' '}
          despre care vorbim
          {' '}
          <a href="#bune-practici">
            mai jos în articol.
          </a>
        </LessonTip>
      </section>
      <section>
        <LessonHeading as="h2" id={lessonInfo.chapters[1].id}>
          {lessonInfo.chapters[1].title}
        </LessonHeading>
        <p>
          Este cel mai popular element folosit în formulare iar prin atributul
          {' '}
          <FormattedText as="strong">
            type=""
          </FormattedText>
          {' '}
          putem controla cum se comportă acesta.
        </p>
        <p>
          Mai jos avem o colecție
          de input-uri, fiecare cu altă valoare pentru atributul
          {' '}
          <strong>type</strong>
          ,
          ce ne permit să completăm cu text,
          parole, date calendaristice,
          să încărcăm fișiere sau să alegem culori:
        </p>

        <CodePenEmbed
          user="iampava"
          slug="ZEKOgPm"
          theme="dark"
          defaultTab="html"
        />

        <LessonTip>
          Pentru a vedea toate valorile posibile pentru atributul
          {' '}
          <span className="text-bold">type</span>
          ,
          accesează
          {' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types" target="_blank" rel="noreferrer">
            documentația de pe MDN
          </a>
          .
        </LessonTip>

        <p>
          Alte atribute pe care le vei folosi zi de zi pentru elementul
          {' '}
          <FormattedText as="span">
            {'<input>'}
          </FormattedText>
          {' '}
          sunt:
        </p>
        <dl>
          <dt className="text-bold">
            required
          </dt>
          <dd className="mb-4">
            marchează câmpul ca fiind obligatoriu
          </dd>

          <dt className="text-bold">
            disabled
          </dt>
          <dd className="mb-4">
            este folosit în cazul în care vrem ca un câmp să nu mai fie editabil.
          </dd>

          <dt className="text-bold">
            placeholder
          </dt>
          <dd className="mb-4">
            reprezintă textul din input când nu există nicio valoare în el.
            În momentul în care începi să scrii în input, acest placeholder
            dispare.
          </dd>

          <dt className="text-bold">
            name
          </dt>
          <dd className="mb-4">
            este folosit pentru a identifica datele din formular.
            Ne vom folosi de el fie pe FrontEnd (JavaScript) fie pe
            BackEnd pentru a accesa datele din formular.
          </dd>

          <dt className="text-bold">
            value
          </dt>
          <dd className="mb-4">
            pentru a avea o valoare precompletată. Utilizatorul o poate schimba dacă
            nu e prezent atributul
            {' '}
            <FormattedText as="span">disabled</FormattedText>
          </dd>

          <dt className="text-bold">
            autofocus
          </dt>
          <dd className="mb-4">
            indică dacă câmpul ar trebui să fie "focused" sau nu.
          </dd>

          <dt className="text-bold">
            inputmode
          </dt>
          <dd className="mb-4">
            atributul acesta indică tipul de tastatură virtuală care
            îi va apărea utilizatorului când intră de pe telefon.
          </dd>
        </dl>

        <p> Mai sus le-am enumerat, dar hai să le și vedem în acțiune: </p>

        <CodePenEmbed
          user="iampava"
          slug="yLbagmM"
          theme="dark"
          defaultTab="html"
        />

        <section>
          <LessonHeading as="h3" id={lessonInfo.chapters[1].subchapters[0].id}>
            {lessonInfo.chapters[1].subchapters[0].title}
          </LessonHeading>
          <p>
            Un input ceva mai special decât celelalte este
            {' '}
            <FormattedText as="span">
              {'<input type="radio">'}
            </FormattedText>
            .
            Îl vom folosi pentru a alege o singură
            opțiune din mai multe posibilități predefinite:
          </p>
          <CodePenEmbed
            user="iampava"
            slug="XWRjMxy"
            theme="dark"
            defaultTab="html"
          />
          <p>
            Cheia funcționalității de mai sus este atributul
            {' '}
            <FormattedText as="span">name=""</FormattedText>
            {' '}
            care are aceeași valoare pentru inputurile ce le vrem
            grupate. Mai mult, atributul
            {' '}
            <FormattedText as="span"> checked </FormattedText>
            {' '}
            îl putem folosi pentru a avea o anumită opțiune
            preselectată.
          </p>
        </section>
      </section>
      <section>
        <LessonHeading as="h2" id={lessonInfo.chapters[2].id}>
          {lessonInfo.chapters[2].title}
        </LessonHeading>
        <p>
          Este similar cu
          {' '}
          <FormattedText as="span">{'<input type="text" />'}</FormattedText>
          {' '}
          doar că permite completarea cu text pe mai multe linii:
        </p>
        {/* ------- CODEPEN BUG: FIXME in the future ------- */}
        {/*
            Embedding the Pen via our `<CodePenEmbed>` compoent
            doesn't work as expected if `editable=true`.
            In this case the Result shows, but the code is not there (empty).

            <CodePenEmbed
              user="iampava"
              slug="qBmarzW"
              theme="dark"
              defaultTab="html"
            />

            If however `editable=false`, it works (see blow).
            We suspect this may be a bug with CodePen itself.

            Contacted them via the `Support` form.
            Awaiting response
          */}
        <CodePenEmbed
          user="iampava"
          slug="qBmarzW"
          theme="dark"
          defaultTab="html"
          editable={false}
        />
        {/* ---------------------------------------- */}
        <LessonTip>
          Toate atributele menționate la input-uri (în afară de
          {' '}
          <FormattedText as="span">type=""</FormattedText>
          {' '}
          )
          sunt valabile și pentru
          {' '}
          <FormattedText as="span">{'<textarea>'}</FormattedText>
        </LessonTip>
      </section>
      <section>
        <LessonHeading as="h2" id={lessonInfo.chapters[3].id}>
          {lessonInfo.chapters[3].title}
        </LessonHeading>
        <p>
          Cu ajutorul elementului
          {' '}
          <FormattedText as="span">
            {' '}
            {'<select>'}
            {' '}
          </FormattedText>
          {' '}
          îi oferim utilizatorului un "dropdown menu"
          cu o listă de opțiuni din care
          poate alege. Gândește-te spre exemplu la un formular
          de înregistrare în care trebuie
          să alegi țara de origine:
        </p>
        <CodePenEmbed
          user="iampava"
          slug="ZEKpKYV"
          theme="dark"
          defaultTab="html"
        />
        <p>
          Opțiunile le specificăm prin elementul
          {' '}
          <FormattedText as="span">{'<option>'}</FormattedText>
          {' '}
          care trebuie să primească atributul
          {' '}
          <FormattedText as="span">value=""</FormattedText>
          {' '}
          iar opțional și atributul
          {' '}
          <FormattedText as="span">selected</FormattedText>
          {' '}
          pentru a preselecta opțiunea.
        </p>
        <LessonTip>
          Pe lângă atributele menționate mai sus - multe dintre
          ele fiind valide pentru elementul select - mai avem și atributul
          {' '}
          <FormattedText as="span">multiple</FormattedText>
          {' '}
          pentru a permita selecție multiplă.
        </LessonTip>
      </section>
      <section>
        <LessonHeading as="h2" id={lessonInfo.chapters[4].id}>
          {lessonInfo.chapters[4].title}
        </LessonHeading>
        <p>
          Așa cum sugerează și numele sunt
          tehnici de programare care indică cum ar trebui
          să faci anumite lucruri pentru a avea un rezultat
          cât mai bun și calitativ.
          {' '}
        </p>
        <section>
          <LessonHeading as="h3" id={lessonInfo.chapters[4].subchapters[0].id}>
            {lessonInfo.chapters[4].subchapters[0].title}
          </LessonHeading>
          <p>
            Cu ajutorul acestui element asociem o descriere unui câmp din
            formular. Sunt două metode prin care putem folosi
            corect un
            {' '}
            <span className="text-bold">label</span>
            :
          </p>
          <List as="ol" variant="checkmark">
            <li>
              prin atributul
              {' '}
              <FormattedText as="span">for=""</FormattedText>
              {' '}
              care trebuie să aibă aceeași valoare cu
              atributul
              {' '}
              <FormattedText as="span">id=""</FormattedText>
              {' '}
              al inputului asociat
              <Highlight
                className="my-5"
                language="html"
                code={`
<label for="usernameInput"> Username * </label>
<input id="usernameInput" name="username" type="text" required />`}
              />
            </li>
            <li>
              adăugând inputul direct în label:
              <Highlight
                className="my-5"
                language="html"
                code={`
<label>
  <span> Username * </span>
  <input id="usernameInput" name="username" type="text" required />
</label>`}
              />
            </li>
          </List>
          <p>
            Este recomandat să adaugăm un label fiecărui
            {' '}
            <FormattedText as="span">{'<input>'}</FormattedText>
            {' '}
            pentru că:
          </p>
          <List as="ol" variant="checkmark">
            <li>
              utilizatorului îi va fi mai ușor să înțeleagă ce
              trebuie completat, iar spre deosebire de un
              {' '}
              <strong> placeholder </strong>
              {' '}
              textul rămâne vizibil
              și după ce începi să scrii
            </li>
            <li className="mt-4">
              dacă apăsăm pe label se va focusa/selecta inputul,
              lucru extrem de util
              {' '}
              <strong>
                mai ales pentru dispozitive mobile
              </strong>
              .
              Încearcă și tu în demo-ul de mai jos unde primele
              2 radio-uri nu au label, deci trebuie să dai click exact pe ele,
              spre deosebire de următoarele pe care le poți selecta apăsând și pe text:
              <CodePenEmbed
                user="iampava"
                slug="VwbKWXB"
                theme="dark"
                defaultTab="html"
                className="mt-4"
              />
            </li>
          </List>
        </section>
        <section>
          <LessonHeading as="h3" id={lessonInfo.chapters[4].subchapters[1].id}>
            {lessonInfo.chapters[4].subchapters[1].title}
          </LessonHeading>
          <p>
            O altă bună practică este ca fiecare formular să
            conțină la final un
            {' '}
            <FormattedText as="span">{'<button type="submit">'}</FormattedText>
            .
          </p>
          <p>
            Pe lângă faptul că dând click pe el vom trimite formularul,
            vom putea să-l trimitem și apăsând
            {' '}
            <FormattedText as="span">↪ ENTER </FormattedText>
            {' '}
            în oricare input. O interacțiune pe care sigur
            o folosești zi de zi, dar care ar fi mai greu de
            implementat fără acest element.
          </p>
          <CodePenEmbed
            user="iampava"
            slug="poPEwQE"
            theme="dark"
            defaultTab="html"
          />
        </section>
      </section>
    </>
  );
}
