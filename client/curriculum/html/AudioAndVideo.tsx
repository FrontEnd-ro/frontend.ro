import React from 'react';
import SEOTags from '~/components/SEOTags';
import Lesson, {
  LessonContributors,
  LessonCover,
  LessonHeading,
  LessonTip,
  LessonResources,
} from '~/components/lessons';
import { SebastianLatkolic } from '~/services/contributors';
import Highlight from '~/components/Highlight/Highlight';
import coverSvg from '~/public/images/lessons/video_cover.svg';

const contributors = [SebastianLatkolic];
const chapters = [
  { title: 'Elementul <audio>', id: 'audio-element' },
  { title: 'Atributele elementului <audio>', id: 'atributele-elementului-audio' },
  { title: 'Elementul <video>', id: 'video-element' },
  { title: 'Atributele elementului <video>', id: 'atributele-elementului-video' },
];

export default function ListsLesson() {
  return (
    <>
      <SEOTags
        title="Audio și Video | Lecție HTML"
        shareImage="https://frontend.ro/seo/html-video.jpg"
        description="Învață despre elementele audio și video în HTML"
        url="https://FrontEnd.ro/html/video-audio"
      />
      <Lesson title="Audio și Video" chapters={chapters}>
        <LessonContributors className="absolute" contributors={contributors} />
        <LessonCover>
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{
            __html: coverSvg,
          }}
          />
        </LessonCover>
        <p>
          După cum ați văzut în lecția anterioară, putem adăuga imagini pe site-urile noastre. Dar cum ar fi dacă v-am spune că putem adăuga fișiere audio sau chiar video pentru a oferi și mai multă interactivitate paginilor dezvoltate de noi? Ei bine, hai sa vedem cum putem face asta.
        </p>
        <section>
          <LessonHeading as="h3" id="audio-element">
            {'Elementul <audio>'}
          </LessonHeading>
          <p>
            Elementul
            {' '}
            <strong className="formatted">{'<audio>'}</strong>
            {' '}
            este folosit pentru a adăuga fișiere audio paginii tale web. Acesta se declară cu ajutorul atributului
            {' '}
            <strong className="formatted">{'src'}</strong>
            .
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<audio
  src="fișier-audio.mp3">
</audio>
`}
          />
          <p>
            O altă metodă de declarare a elementului
            {' '}
            <strong className="formatted">{'<audio>'}</strong>
            {' '}
            se face cu elementul
            {' '}
            <strong className="formatted">{'<source>'}</strong>.
            Poate conține mai multe surse audio de diferite extensii declarate cu
            {' '}
            <strong className="formatted">{'src'}</strong>,
            iar tipul acestora declarat cu
            {' '}
            <strong className="formatted">{'type'}</strong>.
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<audio>
  <source src=”fișier-audio.mp3” type=”audio/mpeg”>
  <source src=”fișier-audio.ogg” type=”audio/ogg”>
  <p>
    Browser-ul tău nu suportă fișierele audio oferite de noi.
    Folosește <a href=”fișier-audio.mp4”>acest link</a> în schimb
    pentru a putea vizualiza acesta.
  </p>
</audio> 
`}
          />
          <p>
            Elementul
            {' '}
            <strong className="formatted">{'<p>'}</strong>
            {' '}
            are rolul de fallback, acesta va fi afișat în cazul în care
            browser-ul nu acceptă nici unul dintre formatele fișierelor audio.
          </p>
          <LessonTip>
            Nu toate browserele suportă fiecare tip de fișier audio, de aceea este recomandat 
            să oferim același fișier audio în mai multe tipuri sau extensii, 
            declarate cu ajutorul atributul
            {' '}
            <strong className="formatted">{'type'}</strong>
            {' '}
            (mp3, ogg, mp4 etc).
          </LessonTip>
        
        </section>
        <section>
          <LessonHeading as="h3" id="atributele-elementului-audio">
          {'Atributele elementului <audio>'}
          </LessonHeading>
          <ul className="with--bullets">
            <li className="mb-4">
              {' '}
              <strong className="formatted">src</strong>
              {' '}
              – permite declararea locației fișierului audio;
              {' '}
            </li>
            <li className="mb-4">
              {' '}
              <strong className="formatted">type</strong>
              {' '}
              – specifica tipul fișierului audio;
            </li>
            <li className="mb-4">
              {' '}
              <strong className="formatted">controls</strong>
              {' '}
              – permite controlul asupra fișierului audio, adăugând funcții precum 
              play/pause, control al volumului dar și a timpului.
            </li>
          </ul>
          <Highlight
            className="my-5"
            language="html"
            code={`
<audio controls>
  <source src=”fișier-audio.mp3” type=”audio/mpeg”>
  <source src=”fișier-audio.ogg” type=”audio/ogg”>
  <p>
    Browser-ul tău nu suportă fișierele audio oferite de noi.
    Folosește <a href=”fișier-audio.mp4”>acest link</a> în schimb
    pentru a putea vizualiza acesta.
  </p>
</audio> 
`}
          />
          <LessonTip>
            Mare atenție la ordinea în care punem elementele
            {' '}
            <strong className="formatted">{'<source>'}</strong>,
            {' '}
            ele fiind citite de sus în jos de către browser.
            Acesta va alege prima sursă compatibilă.
          </LessonTip>
          <p>
            Pentru a vedea toate atributele elementului
            {' '}
            <strong className="formatted">{'<audio>'}</strong>,
            {' '}
            accesează link-ul din secțiunea <strong className="text-bold">Resurse suplimentare</strong>.
          </p>
        </section>
        <section>
          <LessonHeading as="h3" id="video-element">
            {'Elementul <video>'}
          </LessonHeading>
          <p>
            Elementul
            {' '}
            <strong className="formatted">{'<video>'}</strong>
            {' '}
            ne permite adăugarea unui video pe pagina noastră.
            Acesta se declară cu ajutorul atributului
            {' '}
            <strong className="formatted">{'src'}</strong>
            .
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<video
  src="fișier-video.mp4">
</video>
`}
          />
          <p>
            O altă metodă de declarare a elementului
            {' '}
            <strong className="formatted">{'<video>'}</strong>
            {' '}
            se face cu elementul
            {' '}
            <strong className="formatted">{'<source>'}</strong>.
            Poate conține mai multe surse video de diferite extensii declarate cu
            {' '}
            <strong className="formatted">{'src'}</strong>,
            iar tipul acestora declarat cu
            {' '}
            <strong className="formatted">{'type'}</strong>.
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<video>
  <source src="fișier-video.webm"
    type="video/webm">
        
  <source src="fișier-video.mp4"
    type="video/mp4">
        
  <p>Ne pare rău, browserul dvs. nu acceptă videoclipuri încorporate</p>
</video>
`}
          />
          <p>
            Elementul
            {' '}
            <strong className="formatted">{'<p>'}</strong>
            {' '}
            are rolul de fallback, acesta va fi afișat în cazul în care
            browser-ul nu acceptă nici unul dintre formatele fișierelor video oferite.
          </p>
          <LessonTip>
            Nu toate browserele suportă fiecare tip de fișier video, de aceea este recomandat 
            să oferim același fișier în mai multe tipuri sau extensii, 
            declarate cu ajutorul atributul
            {' '}
            <strong className="formatted">{'type'}</strong>
            {' '}
            (webm, mp4, avi etc).
          </LessonTip>
        </section>
        <section>
          <LessonHeading as="h3" id="atributele-elementului-video">
          {'Atributele elementului <video>'}
          </LessonHeading>
          <ul className="with--bullets">
            <li className="mb-4">
              {' '}
              <strong className="formatted">src</strong>
              {' '}
              – permite declararea locației fișierului video;
              {' '}
            </li>
            <li className="mb-4">
              {' '}
              <strong className="formatted">height</strong>
              {' '}
              – specifica înălțimea playerului video exprimată în pixeli;
              {' '}
            </li>
            <li className="mb-4">
              {' '}
              <strong className="formatted">width</strong>
              {' '}
              – specifica lățimea playerului video exprimată în pixeli;
              {' '}
            </li>
            <li className="mb-4">
              {' '}
              <strong className="formatted">type</strong>
              {' '}
              – specifica tipul fișierului video;
            </li>
            <li className="mb-4">
              {' '}
              <strong className="formatted">controls</strong>
              {' '}
              – permite controlul asupra fișierului video, adăugând funcții precum 
              play/pause, control al volumului dar și a timpului.
            </li>
          </ul>
          <Highlight
            className="my-5"
            language="html"
            code={`
<video controls width="350" height=”250”>

  <source src="fisier-video.webm"
    type="video/webm">
        
  <source src="fisier.video.mp4"
    type="video/mp4">
        
  <p>Ne pare rău, browserul dvs. nu acceptă videoclipuri încorporate</p>
</video>
`}
          />
          <LessonTip>
            Mare atenție la ordinea în care punem elementele
            {' '}
            <strong className="formatted">{'<source>'}</strong>,
            {' '}
            ele fiind citite de sus în jos de către browser.
            Acesta va alege prima sursă compatibilă.
          </LessonTip>
          <p>
            Pentru a vedea toate atributele elementului
            {' '}
            <strong className="formatted">{'<video>'}</strong>,
            {' '}
            accesează link-ul din secțiunea <strong className="text-bold">Resurse suplimentare</strong>.
          </p>
        </section>
        <div className="dots" />
        <LessonResources
          className="my-5"
          links={[
            {
              text: 'Atributele elementului <audio> pe MDN',
              url:
                'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#attributes',
            },
            {
              text: 'Documentatia completa a elementului <audio> pe MDN',
              url:
                'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio',
            },
            {
              text: 'Atributele elementului <video> pe MDN',
              url:
                'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#attributes',
            },
            {
              text: 'Documentatia completa a elementului <video> pe MDN',
              url:
                'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video',
            },
          ]}
        />
      </Lesson>
    </>
  );
}
