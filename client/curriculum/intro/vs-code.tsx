import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SEOTags from '~/components/SEOTags';
import Lesson, {
  LessonCover,
  LessonFigure,
  LessonHeading,
  LessonResources,
  LessonTip,
  LessonFirstSentence,
} from '~/components/lessons';
import { Diana } from '~/services/contributors';
import { getLessonById } from '~/services/Constants';
import FormattedText from '~/components/FormattedText';
import List from '~/components/List';

const contributors = [Diana];

export default function VSCodeLesson() {
  const lessonInfo = getLessonById('vs-code');

  return (
    <>
      <SEOTags
        title={`${lessonInfo.title} | Lecție introductivă`}
        shareImage={`${process.env.CLOUDFRONT_PUBLIC}/seo/vs-code.jpg`}
        description={lessonInfo.description}
        url={`https://FrontEnd.ro${lessonInfo.url}`}
      />
      <Lesson
        id={lessonInfo.id}
        withExercises={lessonInfo.withExercises}
        title={lessonInfo.title}
        chapters={lessonInfo.chapters ?? []}
        contributors={contributors ?? []}
      >
        <LessonCover>
          <Image
            width="1200"
            height="630"
            alt="Logo-ul VSCode"
            src={`${process.env.CLOUDFRONT_PUBLIC}/seo/vs-code.jpg`}
          />
        </LessonCover>
        <LessonFirstSentence>
          A învăța programare poate părea intimidant, mai ales pentru cei ce
          vin din domenii cu totul diferite. Ei bine, ținem să te anunțăm că ai
          ajuns fix la locul potrivit, întrucât noi, developeri cu experiență,
          te vom îndruma ca acest proces să fie unul cât mai interactiv și
          plăcut.
        </LessonFirstSentence>
        <p>
          Ca să fim aliniați în acest proces de învățare ne vom folosi de un
          {' '}
          <strong>tool</strong>
          {' '}
          ce are mare succes
          printre developeri și anume
          {' '}
          <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
            <strong>
              Visual Studio Code
            </strong>
          </a>
          {' '}
          .
          Acesta este un editor de cod
          {' '}
          <strong>open source</strong>
          {' '}
          , ce oferă foarte
          multe facilități pentru a ne ajuta să codăm rapid. Rulează pe
          desktop și este disponibil pentru toate sistemele de operare.
        </p>
        <p>
          Este extrem de popular pentru partea de
          {' '}
          <strong>FrontEnd</strong>
          {' '}
          ,
          dar printr-o serie de extensii poate fi folosit și pentru alte
          limbaje/tehnologii.
        </p>
        <section>
          <LessonHeading as="h3" id="downloadeaza-si-instaleaza">
            Downloadează-l și instalează-l
          </LessonHeading>
          <p>
            Dacă dăm click pe link-ul de mai jos, vom fi direcționați către
            site-ul oficial de unde putem descărca versiunea pentru sistemul
            nostru de operare. Procesul de instalare este unul simplu, dar dacă
            întâlnești probleme, dă-ne un semn.
          </p>
          <Link href="https://code.visualstudio.com/download">
            <a target="_blank" rel="noopener noreferrer">
              https://code.visualstudio.com/download
            </a>
          </Link>
          <LessonFigure
            withBorder
            src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/vs-code/download-VSCode.jpg`}
            alt="Descarcă Visual Studio Code de pe site-ul oficial."
          />
        </section>
        <section>
          <LessonHeading as="h3" id="workspace-setup">
            Workspace setup
          </LessonHeading>
          <p>Ok, acum că l-am instalat, vom deschide VS Code.</p>
          <p>
            Haideți să deschidem un proiect în VS Code. Ca să facem asta, putem
            să-l tragem cu
            {' '}
            <strong>drag and drop</strong>
            {' '}
            sau putem alege opțiunea
            {' '}
            <strong>Open Folder</strong>
            {' '}
            .
          </p>
          <LessonFigure
            isVideo
            withBorder
            src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/vs-code/adaugare-proiect-vs-code.mp4`}
            alt="Cum adăugăm un proiect în VS Code."
          />
          <p>
            Acum că am deschis folderul în editor, în stânga vom vedea denumirea
            acestuia și fișierele pe care le conține.
          </p>
          <LessonFigure
            withBorder
            src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/vs-code/files-and-folders.png`}
            alt="Folderul și tot ce acesta conține."
          />
          <p>
            Ca să creem un nou fișier, fie vom alege
            {' '}
            <FormattedText as="strong">New file</FormattedText>
            {' '}
            (CTRL + N), fie vom
            selecta prima iconiță (de lângă denumirea proiectului).
          </p>
          <LessonFigure
            withBorder
            src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/vs-code/create-file.png`}
            alt="Crearea unui nou fișier."
          />
          <LessonTip>
            În funcție de ce tip de fișier avem nevoie în proiectul nostru vom
            folosi extensia corespunzătoare. Fișierele de tip HTML vor avea
            extensia
            {' '}
            <strong>.html</strong>
            {' '}
            (ca în exemplul de mai sus),
            fișierele de tip CSS vor avea extensia
            {' '}
            <strong>.css</strong>
            {' '}
            , iar
            cele de Javascript vor avea extensia
            {' '}
            <strong>.js</strong>
            . Putem
            folosi ce limbaj de programare dorim, momentan doar cele trei fac
            obiectul discuției noastre.
          </LessonTip>
        </section>
        <section>
          <LessonHeading as="h3" id="componenta-VSCode">
            Componența VisualStudio Code
          </LessonHeading>
          <p>
            OK, acum că am aflat cum putem deschide un proiect și crea fișiere
            să ne concentrăm atenția și pe alte lucruri utile în procesul nostru
            de codare pe care le oferă editorul și despre care e bine să știm.
          </p>
          <p>
            În partea din stânga a ecranului avem
            {' '}
            <strong>Bara de Activitate</strong>
            :
          </p>
          <LessonFigure
            withBorder
            src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/vs-code/activity-bar.png`}
            alt="Bara de activitate în VS Code."
          />
          <List as="ol" variant="count">
            <li>
              Începem cu prima opțiune de sus denumită
              {' '}
              <strong>File Explorer</strong>
              {' '}
              , unde vom
              găsi folderele și fișierele curente ale proiectului nostru.
            </li>
            <li>
              Continuăm cu
              {' '}
              <strong>Search</strong>
              {' '}
              ,
              pentru a putea căuta global, adică în toate folderele și fișierele
              noastre.
            </li>
            <li>
              <strong>Source Control</strong>
              {' '}
              este locul unde putem
              putem colabora via
              {' '}
              <strong>
                Git
              </strong>
              , folosind o interfață vizuală. (PS: dacă nu știi Git poate
              {' '}
              <Link href="/slides/git-incepatori">
                <a>
                  slide-urile de la trainingul pe care l-am ținut
                </a>
              </Link>
              {' '}
              o să te ajute)
            </li>
            <li>
              <strong>Extensions View</strong>
              {' '}
              - de unde
              putem descărca programe
              {' '}
              <strong>
                create de comunitate
              </strong>
              {' '}
              (numite extensii) care extind acest editor cu funcționalități suplimentare.
              Povestim mai multe
              despre ele
              {' '}
              <Link href="#extensii">
                <a>
                  mai jos
                </a>
              </Link>
              .
            </li>
          </List>
        </section>
        <section>
          <LessonHeading as="h3" id="scurtaturi">
            Scurtături
          </LessonHeading>
          <p>
            Ca și programatori
            e foarte important
            ca tool-urile pe care le folosim să ne crească productivitatea,
            mai ales când vine vorba de taskuri foarte repetitive.
          </p>
          <p>
            De aceea, fiecare editor de cod vine cu o serie de Shortcut-uri
            (scurtături), adică combinații
            de taste care împreună fac anumite acțiuni.
            E posibil ca la început să fii obșnuit să faci
            totul cu mouse-ul, dar crede-ne pe cuvânt
            (de fapt nu ne crede, uită-te la alți progamatori
            când codează) și ai să vezi că folosesc cât de mult
            se poate tastatura.
          </p>

          <p>
            Mai jos îți lăsăm 3 combinații de taste
            foarte importante, pe care îți sugerăm să le înveți și folosești:
          </p>
          <LessonFigure
            withBorder
            src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/vs-code/shortcuts.png`}
            alt="Shortcuts VS Code."
          />
        </section>
        <section>
          <LessonHeading as="h3" id="indentarea-si-formatarea-codului">
            Indentarea și formatarea codului
          </LessonHeading>
          <p>
            Este foarte important să indentăm codul și să îl formatăm de fiecare
            dată. Ne ajută să avem o viziune clară, să ne aliniem cu întreaga
            comunitate și să respectăm cele mai bune practici.
          </p>
          <p>
            Pentru a face lucrul acesta vom folosi comanda
            {' '}
            <strong> Format Document </strong>
            {' '}
            din
            {' '}
            <strong>
              Command Palette
            </strong>
            {' '}
            (vezi shortcut-urile de mai sus)
            .
          </p>
          <LessonFigure
            isVideo
            withBorder
            src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/vs-code/format-document.mp4`}
            alt="Formatarea codului pentru un document html."
          />
        </section>
        <section>
          <LessonHeading as="h3" id="formatarea-codului-la-save">
            Formatarea codului la save
          </LessonHeading>
          <p>
            Până acum am rulat manual o comandă pentru a formata codul nostru.
            Dar putem automatiza acest proces să se întâmple de fiecare
            dată când dăm Save (Ctrl + S).
          </p>
          <p>
            În secțiunea
            {' '}
            <strong>User Settings</strong>
            {' '}
            (la care putem ajunge din
            {' '}
            <strong>Command Pallete</strong>
            )
            putem găsi opțiunea
            {' '}
            <strong>Format On Save</strong>
            {' '}
            și să o bifăm.
          </p>
          <LessonFigure
            withBorder
            src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/vs-code/formatarea-codului-la-save.png`}
            alt="Formatarea codului la save."
          />
        </section>
        <section>
          <LessonHeading as="h3" id="extensii">
            Extensii
          </LessonHeading>
          <p>
            Extensiile ne permit să adăugăm diverse funcționalități care să vină în sprijinul
            dezvoltării codului. Cum ziceam și în introducere, de obicei sunt
            scrise de comunitate și open-source.
          </p>
          <LessonFigure
            withBorder
            src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/vs-code/extensii.png`}
            alt="Extensii"
          />
          <p>
            Fiecare extensie din listă include o scurtă descriere, cine a
            publicat-o, numărul de descărcări și un rating. Dacă dăm click pe
            una vom vedea mai multe detalii afișate în partea dreaptă a
            ecranului.
          </p>
          <LessonFigure
            withBorder
            src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/vs-code/detalii-extensii.png`}
            alt="Extensii"
          />
          <p>
            Să luăm spre exemplu extensia
            {' '}
            <a
              href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Live Server</strong>
            </a>
            {' '}
            .
            Aceasta pornește un
            {' '}
            <em>server de dezvoltare local</em>
            {' '}
            ce va da refresh la pagină în browser de fiecare dată când
            modificăm ceva în fișier. Deci nu mai trebuie noi să ținem minte
            să facem asta pentru a vedea ultimele modificări.
          </p>
        </section>
        <section>
          <LessonHeading as="h3" id="bonus-customizare">
            BONUS - customizare
          </LessonHeading>
          <p>
            Sunt multe multe lucruri faine pe care le oferă VS Code. Nu reușim
            să le includem pe toate în această lecție, aici vrem să acoperim
            lucrurile care contează acum pentru începutul carierei tale de developer.
            Dar vrem să discutăm un pic și despre partea customizabilă, ca să ne
            creem un environment cât mai plăcut.
          </p>
          <p>
            Așa că un feature ce s-ar putea să-ți placă este
            customizarea paletei de culori.
          </p>
          <List as="ol" variant="count">
            <li>
              Deschide
              {' '}
              <strong>
                Color Theme
              </strong>
              {' '}
              din
              {' '}
              <strong>
                Command Pallete
              </strong>
              .
            </li>
            <li>
              Folosește tastele up și down pentru a face preview la culorile
              temelor.
            </li>
            <li>
              Selectează tema pe care o dorești apăsând
              {' '}
              <strong>ENTER</strong>
              .
            </li>
          </List>
          <p>
            psst: poți instala și alte teme via Extensii. Nouă ne
            place foarte mult
            {' '}
            <a href="https://draculatheme.com/visual-studio-code" target="_blank" rel="noreferrer">
              Dracula Theme 🧛‍♂️
            </a>
          </p>
          <LessonFigure
            isVideo
            withBorder
            src={`${process.env.CLOUDFRONT_PUBLIC}/public/images/lessons/vs-code/color-theme.mp4`}
            alt="Instalare extensie pentru customizare temă."
          />
        </section>
        <div className="dots" />
        <LessonResources
          className="my-5"
          links={[
            {
              text: 'Documentația completă a VisualStudio Code',
              url: 'https://code.visualstudio.com/',
            },
          ]}
        />
      </Lesson>
    </>
  );
}
