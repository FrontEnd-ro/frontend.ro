import React from 'react';
import Link from 'next/link';
import SEOTags from '~/components/SEOTags';
import Lesson, {
  LessonContributors,
  LessonCover,
  LessonFigure,
  LessonHeading,
  LessonResources,
  LessonTip,
} from '~/components/lessons';
import coverSvg from '~/public/images/lessons/vs-code/cover.svg';
import { Diana } from '~/services/contributors';

const contributors = [Diana];
const chapters = [
  { title: 'Introducere', id: 'introducere' },
  { title: 'Downloadează-l și instalează-l', id: 'downloadeaza-si-instaleaza' },
  { title: 'Workspace setup', id: 'workspace-setup' },
  { title: 'Componența VisualStudio Code', id: 'componenta-VSCode' },
  { title: 'Scurtături', id: 'scurtaturi' },
  {
    title: 'Indentarea și formatarea codului',
    id: 'indentarea-si-formatarea-codului',
  },
  { title: 'Formatarea codului la save', id: 'formatarea-codului-la-save' },
  { title: 'Extensii', id: 'extensii' },
  { title: 'BONUS - customizare', id: 'bonus-customizare' },
];

export default function VSCodeLesson() {
  return (
    <>
      <SEOTags
        title="Visual Studio Code | Lecție INTRO"
        shareImage={`${process.env.CLOUDFRONT_PUBLIC}/seo/vs-code.jpg`}
        description="Învață despre cel mai popular tool pentru developeri."
        url="https://FrontEnd.ro/html/vs-code"
      />
      <Lesson id="vs-code" withExercises={false} title="VisualStudio Code" chapters={chapters}>
        <LessonContributors className="absolute" contributors={contributors} />
        <LessonCover>
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: coverSvg,
            }}
          />
        </LessonCover>
        <section>
          <h2> Introducere </h2>
          <LessonHeading as="h3" id="introducere">
            VisualStudio Code
          </LessonHeading>
          <p>
            A învăța programare poate părea intimidant, mai ales pentru cei ce
            vin din domenii cu totul diferite. Well, ținem să te anunțăm că ai
            ajuns fix la locul potrivit, întrucât noi, developeri cu experiență,
            te vom îndruma ca acest proces să fie unul cât mai interactiv și
            plăcut.
          </p>
          <p>
            Ca să fim aliniați în acest proces de învățare ne vom folosi de un
            {' '}
            <strong className="formatted">tool</strong>
            {' '}
            ce are mare succes
            printre developeri și anume
            {' '}
            <strong className="formatted">Visual Studio Code</strong>
            {' '}
            .
          </p>
          <p>
            Acesta este un editor de cod
            {' '}
            <strong className="formatted">open source</strong>
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
        </section>
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
            src="/images/lessons/vs-code/download-VSCode.jpg"
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
            <strong className="formatted">drag and drop</strong>
            {' '}
            sau putem alege opțiunea
            <strong className="formatted">Open Folder</strong>
            {' '}
            .
          </p>
          <LessonFigure
            isVideo
            withBorder
            src="/images/lessons/vs-code/adaugare-proiect-vs-code.mp4"
            alt="Cum adăugăm un proiect în VS Code."
          />
          <p>
            Acum că am deschis folderul în editor, în stânga vom vedea denumirea
            acestuia și fișierele pe care le conține.
          </p>
          <LessonFigure
            withBorder
            src="/images/lessons/vs-code/files-and-folders.png"
            alt="Folderul și tot ce acesta conține."
          />
          <p>
            Ca să creem un nou fișier, fie vom alege
            {' '}
            <strong className="formatted">New file</strong>
            {' '}
            (CTRL + N), fie vom
            selecta prima iconiță (de lângă denumirea proiectului).
          </p>
          <LessonFigure
            withBorder
            src="/images/lessons/vs-code/create-file.png"
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
            <strong className="formatted">Bara de Activitate</strong>
            {' '}
            .
          </p>
          <LessonFigure
            withBorder
            src="/images/lessons/vs-code/activity-bar.png"
            alt="Bara de activitate în VS Code."
          />
          <ol className="with--count">
            <li>
              Începem cu prima opțiune de sus denumită
              {' '}
              <strong className="formatted">File Explorer</strong>
              {' '}
              , unde vom
              găsi folderele și fișierele curente ale proiectului nostru.
            </li>
            <li>
              Continuăm cu
              {' '}
              <strong className="formatted">Search</strong>
              {' '}
              ,
              pentru a putea căuta global, adică în toate folderele și fișierele
              noastre.
            </li>
            <li>
              <strong className="formatted">Source Control</strong>
              {' '}
              - VS Code
              vine cu
              <strong>Git Source Control</strong>
              {' '}
              la pachet.
            </li>
            <li>
              <strong className="formatted">Run and Debug</strong>
            </li>
            <li>
              <strong className="formatted">Extensions View</strong>
              {' '}
              - de unde
              putem downloada extensii pentru aproape orice avem nevoie. Aceste
              extensii sunt de fapt niște programe pe care le putem adăuga la
              proiectul nostru. Ele sunt
              {' '}
              <strong className="formatted">open-source</strong>
              , deci un efort
              de comunitate.
            </li>
          </ol>
        </section>
        <section>
          <LessonHeading as="h3" id="scurtaturi">
            Shortcuts
          </LessonHeading>
          <p>
            Vedem totodată și scurtăturile pentru a iniția o anumită acțiune.
          </p>
          <LessonFigure
            withBorder
            src="/images/lessons/vs-code/shortcuts.png"
            alt="Shortcuts VS Code."
          />
          <p>
            Fiecare acțiune în VisualStudio Code este atribuită unei comenzi
            care se regăsește aici în
            {' '}
            <strong>Command Palette.</strong>
          </p>
        </section>
        <section>
          <LessonHeading as="h3" id="indentarea-si-formatarea-codului">
            Indentarea și formatarea codului
          </LessonHeading>
          <LessonTip>
            Este foarte important să indentăm codul și să îl formatăm de fiecare
            dată. Ne ajută să avem o viziune clară, să ne aliniem cu întreaga
            comunitate și să respectăm cele mai bune practici.
          </LessonTip>
          <p>
            Pentru a face lucrul acesta vom folosi comanda
            {' '}
            <strong className="formatted"> Format Document </strong>
            {' '}
            din Command
            Palette. Această comandă va oferi consistență codului scris prin
            spațiere, ghilimele.
          </p>
          <LessonFigure
            isVideo
            withBorder
            src="/images/lessons/vs-code/format-document.mp4"
            alt="Formatarea codului pentru un document html."
          />
          <p>
            Și cam asta e tot pentru un fișier cu extensia
            {' '}
            <strong>.html</strong>
            {' '}
            . Vedem cum
            editorul a formatat codul pentru noi. Pentru fișiere de tip
            {' '}
            <strong>
              .css,
              .js, .ts,
            </strong>
            {' '}
            s.a.m.d va trebui să instalăm anumite extensii care să ne
            ajute pe partea aceasta.
          </p>
          <p>
            În momentul în care vom avea mai multe extensii instalate si vom
            selecta opțiunea Format Document, va apărea un pop-up de genul
            acesta. Va trebui apoi să selectăm noi cu ce formatter vom continua.
          </p>
          <LessonFigure
            withBorder
            src="/images/lessons/vs-code/select-formatter-multiple-extensions.png"
            alt="În momentul în care vom avea mai multe extensii instalate si vom selecta opțiunea Format Document, va apărea un pop-up de genul acesta. Va trebui apoi să selectăm noi cu ce formatter vom continua."
          />
        </section>
        <section>
          <LessonHeading as="h3" id="formatarea-codului-la-save">
            Formatarea codului la save
          </LessonHeading>
          <p>
            Pînă acum am rulat manual o comandă pentru a formata codul nostru.
            Dar putem automatiza acest proces, prin realizarea unor setări.
          </p>
          <p>
            Dacă mergem în
            {' '}
            <strong>File -&gt; Preferences -&gt; Settings</strong>
            {' '}
            sau dacă apăsăm
            {' '}
            <strong>COMMAND +</strong>
            {' '}
            (pentru macOS) sau
            {' '}
            <strong>CTRL +</strong>
            {' '}
            (pentru Windows), vom deschide
            meniul de
            {' '}
            <strong>Settings</strong>
            .
          </p>
          <p>
            Odată ce meniul s-a deschis, căutăm opțiunea
            {' '}
            <strong>Editor</strong>
            {' '}
            :
            {' '}
            <em>Format On Save</em>
            {' '}
            și ne asigurăm că e bifată.
          </p>
          <LessonFigure
            withBorder
            src="/images/lessons/vs-code/formatarea-codului-la-save.png"
            alt="Formatarea codului la save."
          />
        </section>
        <section>
          <LessonHeading as="h3" id="extensii">
            Extensii
          </LessonHeading>
          <p>
            Extensiile ne permit să adăugăm diferite tool-uri (de la debuggere,
            la formatări sau extensii de programare) care să vină în sprijinul
            dezvoltării.
          </p>
          <LessonTip>
            Ne putem gândi la extensii ca și la aplicații noi pe care le
            instalăm pentru telefonul nostru.
          </LessonTip>
          <p>
            Dacă dăm click pe icon-ul extensii se va deschide o listă cu cele
            mai populare extensii.
          </p>
          <LessonFigure
            withBorder
            src="/images/lessons/vs-code/extensii.png"
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
            src="/images/lessons/vs-code/detalii-extensii.png"
            alt="Extensii"
          />
          <p>
            Să luăm spre exemplu extensia
            {' '}
            <strong className="formatted">Live Server</strong>
            {' '}
            .
          </p>
          <LessonTip>
            Aceasta practic pornește un
            {' '}
            <em>server local</em>
            {' '}
            de dezvoltare ce
            oferă caracteristica de reîncărcare a paginii de câte ori facem o
            modificare în codul nostru. Asta ne ajută să câștigăm timp, întrucât
            nu trebuie să mai facem noi refresh de fiecare dată în browser.
          </LessonTip>
          <p>
            Ca să o instalăm vom apăsa pe
            {' '}
            <strong>Install</strong>
            {' '}
            . Odată ce a fost instalată, ea
            va apărea în stânga, alături de celelalte extensii pe care le avem.
          </p>
          <LessonFigure
            withBorder
            src="/images/lessons/vs-code/instalare-extensie.png"
            alt="Instalarea unei extensii."
          />
          <p>
            Dacă decidem că nu vrem să mai folosim o extensie, vom da click pe
            aceasta și vom selecta opțiunea
            {' '}
            <strong>Disable</strong>
            {' '}
            sau
            {' '}
            <strong>Uninstall</strong>
            .
          </p>
          <LessonFigure
            withBorder
            src="/images/lessons/vs-code/dezinstalare-extensie.png"
            alt="Dezinstalarea unei extensii."
          />
          <p>
            Și așa vom proceda pentru orice extensie pe care dorim să o folosim.
            Mai multe detalii găsim în documentația oficială:
            {' '}
            <Link href=" https://code.visualstudio.com/docs/editor/extension-gallery.">
              <a target="_blank" rel="noopener noreferrer">
                Despre extensii
              </a>
            </Link>
          </p>
        </section>
        <section>
          <LessonHeading as="h3" id="bonus-customizare">
            BONUS - customizare
          </LessonHeading>
          <p>
            Sunt multe multe lucruri faine pe care le oferă VS Code. Nu reușim
            să le includem pe toate în această lecție, aici vrem să acoperim
            lucrurile care contează acum pentru începutul carierei de developer.
            Dar vrem să discutăm un pic și despre partea customizabilă, ca să ne
            creem un environment cât mai plăcut.
          </p>
          <p>
            Așa că un feature foarte fain pe care VisualStudio Code îl are este
            cel de customizare a temei. Hai să nu mai prelungim așteptarea și să
            vedem cum putem face asta.
          </p>
          <ol className="with--count">
            <li>
              In VS Code, deschide Color Theme picker din File
              {' '}
              {'>'}
              {' '}
              <strong className="formatted">Preferences</strong>
              {' '}
              {'>'}
              {' '}
              <strong className="formatted">Color Theme</strong>
              . (Code
              Preferences
              {'>'}
              {' '}
              Color Theme pe macOS). Sau cu ajutorul tastaturii
              <strong className="formatted">Ctrl+K</strong>
              {' '}
              <strong className="formatted">Ctrl + T</strong>
              .
            </li>
            <li>
              Folosește tastele up și down pentru a face preview la culorile
              temelor.
            </li>
            <li>Selectează tema pe care o dorești apăsând ENTER.</li>
          </ol>
          <p>
            Dacă tema pe care o dorești nu se află printre cele default, poți
            instala o extensie (că tot am vorbit despre ele).
          </p>
          <LessonFigure
            isVideo
            withBorder
            src="/images/lessons/vs-code/color-theme.mp4"
            alt="Instalare extensie pentru customizare temă."
          />
          <LessonTip>
            VS Code ne permite chiar și să ne creem noi propria temă. Află cum
            poți face asta de aici:
            {' '}
            <Link href="https://code.visualstudio.com/docs/getstarted/themes">
              <a target="_blank" rel="noopener noreferrer">
                customizare teme.
              </a>
            </Link>
          </LessonTip>
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
