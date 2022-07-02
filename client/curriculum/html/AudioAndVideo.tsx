import React from 'react';
import Image from 'next/image';
import {
  LessonCover,
  LessonHeading,
  LessonTip,
  LessonFigure,
  LessonResources,
  LessonFirstSentence,
} from '~/components/lessons';
import Link from '~/components/generic/Link';
import Highlight from '~/components/Highlight/Highlight';
import { DemoPreview } from '~/components/demo';

import FormattedText from '~/components/FormattedText';
import { getLessonById } from '~/services/DataModel';
import List from '~/components/List';

export default function AudioAndVideoContent() {
  const lessonInfo = getLessonById('audio-video');
  const coverImage = `${process.env.CLOUDFRONT_PUBLIC}/public/seo/video-audio_2400w.jpg`;

  return (
    <>
      <LessonCover>
        <Image width="2400" height="1260" alt="Doodle cu un audio waveform și un video" src={coverImage} />
      </LessonCover>
      <LessonFirstSentence>
        În lecția anterioară am aflat cum putem adăuga imagini pe site-urile
        noastre. Cum ar fi dacă v-am spune că putem adăuga fișiere audio și video
        pentru a oferi și mai multă interactivitate paginilor dezvoltate de
        noi? Ei bine, hai să vedem cum putem face asta.
      </LessonFirstSentence>
      <section>
        <LessonHeading as="h2" id={lessonInfo.chapters[0].id}>
          {lessonInfo.chapters[0].title}
        </LessonHeading>
        <p>
          Elementul
          {' '}
          <FormattedText as="strong">{'<audio>'}</FormattedText>
          {' '}
          este
          folosit pentru a adăuga fișiere audio paginii tale web. Următorul
          exemplu arată o simplă utilizare a lui, cu ajutorul atributului
          {' '}
          <FormattedText as="strong">src</FormattedText>
          :
        </p>
        <Highlight
          className="my-5"
          language="html"
          code={`
<audio src="fișier-audio.mp3"></audio>
`}
        />
        <p>
          O altă metodă de a declara
          {' '}
          <FormattedText as="strong">{'<audio>'}</FormattedText>
          {' '}
          este folosind două sau mai multe elemente
          {' '}
          <FormattedText as="strong">{'<source>'}</FormattedText>
          . Fiecare astfel de element va trebui să conțină atributul
          {' '}
          <FormattedText as="strong">src</FormattedText>
          {' '}
          împreună cu atributul
          {' '}
          <FormattedText as="strong">type</FormattedText>
          {' '}
          pentru a specifica formatul fișierului.
        </p>
        <LessonTip>
          Nu toate browserele suportă fiecare tip de fișier audio, de aceea
          este recomandat să oferim mai multe formate diferite (mp3, ogg, etc), iar
          browser-ul o va alege pe prima compatibilă.
        </LessonTip>
        <Highlight
          className="my-5"
          language="html"
          code={`
<audio>
  <source src="fișier-audio.mp3" type="audio/mpeg" />
  <source src="fișier-audio.ogg" type="audio/ogg" />
  <p>
    Browser-ul tău nu suportă fișiere audio.
    Folosește <a href="fișier-audio.mp4">acest link</a> 
    pentru a-l putea vizualiza.
  </p>
</audio> 
`}
        />
        <DemoPreview>
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <audio style={{ border: '1px solid #000' }} controls className="mb-2">
            <source
              src={`${process.env.CLOUDFRONT_PUBLIC}/public/audio/audio-element-demo.m4a`}
              type="audio/mp4"
            />
            <source
              src={`${process.env.CLOUDFRONT_PUBLIC}/public/audio/audio-element-demo.mp3`}
              type="audio/mpeg"
            />

            <p>
              Browser-ul tău nu suportă fișiere audio.
              Folosește
              {' '}
              <a href={`${process.env.CLOUDFRONT_PUBLIC}/public/audio/audio-element-demo.m4a`}>acest link</a>
              pentru a-l putea vizualiza.
            </p>
          </audio>
          <Link target="_blank" className="d-block" href="/demo/html/audio">
            Deschide demo-ul într-o pagină nouă
          </Link>
        </DemoPreview>
        <p>
          Elementul
          {' '}
          <FormattedText as="strong">{'<p>'}</FormattedText>
          {' '}
          din
          exemplul de mai sus, are rolul de fallback, acesta va fi afișat în
          cazul în care browser-ul nu suportă nici unul dintre formatele specificate.
        </p>

      </section>
      <section>
        <LessonHeading as="h3" id={lessonInfo.chapters[0].subchapters[0].id}>
          {lessonInfo.chapters[0].subchapters[0].title}
        </LessonHeading>
        <p>
          Pentru a vedea lista întreaga a atributelor,
          {' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#attributes"
          >
            accesează MDN
          </a>
          .
          Aici le vom prezenta pe cele mai des întâlnite:
        </p>
        <List variant="bullets">
          <li className="mb-4">
            <FormattedText as="strong">src</FormattedText>
            {' '}
            – indică locația
            fișierului audio
            {' '}
          </li>
          <li className="mb-4">
            <FormattedText as="strong">type</FormattedText>
            {' '}
            – specifică tipul
            fișierului audio
          </li>
          <li className="mb-4">
            <FormattedText as="strong">controls</FormattedText>
            {' '}
            – dacă acest
            atribut este prezent, browser-ul va oferi funcții pentru a permite
            user-ului să dea play/pause, să controleze volumul, etc
          </li>
        </List>
        <Highlight
          className="my-5"
          language="html"
          code={`
<audio controls>
  <source src="fișier-audio.mp3" type="audio/mpeg" />

  <source src="fișier-audio.ogg" type="audio/ogg" />

   <p>
    Browser-ul tău nu suportă fișiere audio.
    Folosește <a href="fișier-audio.mp4">acest link</a> 
    pentru a-l putea vizualiza.
  </p>
</audio>
`}
        />
        <LessonTip>
          Nu uita că ordinea elementelor
          {' '}
          <FormattedText as="strong">{'<source>'}</FormattedText>
          {' '}
          este extrem de
          importantă căci browserul le va parcurge de sus în jos și o va alege
          pe prima compatibilă.
        </LessonTip>
      </section>
      <section>
        <LessonHeading as="h2" id={lessonInfo.chapters[1].id}>
          {lessonInfo.chapters[1].title}
        </LessonHeading>
        <p>
          Elementul
          {' '}
          <FormattedText as="strong">{'<video>'}</FormattedText>
          {' '}
          ne
          permite adăugarea unui video pe pagina noastră. Cel mai simplu mod
          de utilizare este - similar ca la audio - prin atributul
          {' '}
          <FormattedText as="strong">src</FormattedText>
          .
        </p>
        <Highlight
          className="my-5"
          language="html"
          code={`
<video src="fișier-video.mp4"></video>
`}
        />
        <p>
          <strong>La fel ca si la audio</strong>
          , putem specifica mai multe surse ale
          clipului video folosind tagul
          {' '}
          <FormattedText as="strong">{'<source>'}</FormattedText>
          {' '}
          :
        </p>
        <Highlight
          className="my-5"
          language="html"
          code={`
<video>
  <source src="fișier-video.webm" type="video/webm" />
        
  <source src="fișier-video.mp4" type="video/mp4" />
        
  <p>
    Browser-ul tău nu suportă fișiere video.
    Folosește <a href="fișier-video.webm">acest link</a> 
    pentru a-l putea vizualiza.
  </p>
</video>
`}
        />
        <LessonFigure
          isVideo
          withBorder
          src={`${process.env.CLOUDFRONT_PUBLIC}/demo-assets/audio-video/big-buck-bunny-video.mp4`}
          alt="Exemplu de utilizare a elementului <video>"
          demo="/demo/html/video"
        />
      </section>
      <section>
        <LessonHeading as="h3" id={lessonInfo.chapters[1].subchapters[0].id}>
          {lessonInfo.chapters[1].subchapters[0].title}
        </LessonHeading>
        <p>
          Trebuie să știi că toate
          {' '}
          <a href="#atributele-elementului-audio">
            atributele elementului audio
          </a>
          {' '}
          menționate mai sus sunt
          {' '}
          <strong>valabile și pentru clipuri video</strong>
          .
          Pe lângă acestea, unui video putem să-i specificăm și:
        </p>
        <List variant="bullets">
          <li className="mb-4">
            {' '}
            <FormattedText as="strong">width</FormattedText>
            {' '}
            – specifica lățimea
            playerului video exprimată în pixeli;
            {' '}
          </li>
          <li className="mb-4">
            {' '}
            <FormattedText as="strong">height</FormattedText>
            {' '}
            – specifica
            înălțimea playerului video exprimată în pixeli;
            {' '}
          </li>
          <li className="mb-4">
            {' '}
            <FormattedText as="strong">muted</FormattedText>
            {' '}
            – prin acest atribut browser-ul va initializa clipul audio
            cu volum 0. Acesta poate fi schimbat de utilizator daca atributul
            {' '}
            <FormattedText as="span">controls</FormattedText>
            {' '}
            este specificat
          </li>
          <li>
            <FormattedText as="strong">autoplay</FormattedText>
            {' '}
            – dacă acest
            atribut este prezent, browser-ul va da "play" la audio imediat
            ce acesta este încărcat în pagină
          </li>
        </List>
        <Highlight
          className="my-5"
          language="html"
          code={`
<video controls muted autoplay width="350" height=”250”>

  <source src="fisier-video.webm" type="video/webm" />
  <source src="fisier.video.mp4" type="video/mp4" />
        
  <p>
    Browser-ul tău nu suportă fișiere video.
    Folosește <a href="fișier-video.webm">acest link</a> 
    pentru a-l putea vizualiza.
  </p>
</video>
`}
        />
        <LessonTip>
          Aici am prezentat doar cele mai des întâlnite atribute. Pentru lista întreagă,
          aruncă un ochi pe
          {' '}
          <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#attributes" rel="noreferrer">
            MDN
          </a>
          .
        </LessonTip>
      </section>
      <section>
        <LessonHeading as="h3" id={lessonInfo.chapters[1].subchapters[1].id}>
          {lessonInfo.chapters[1].subchapters[1].title}
        </LessonHeading>
        <p>
          Unui element video putem să-i atașăm subtitrări sau captions.
          Mai întâi creem un fișier în format
          {' '}
          <FormattedText>
            .vtt
          </FormattedText>
          {' '}
          unde vom configura timpii subitrării:
        </p>
        <Highlight
          language="html"
          className="my-5"
          code={`
WEBVTT

00:00.700 --> 00:04.000
Ca și FrontEnd developer vei lucra cu 3 limbaje de programare:

00:04.500 --> 00:08.000
HTML (Hyper Text Markup Language)
CSS (Cascading Style Sheets)
și JavaScript`}
        />
        <p>
          iar apoi îl legăm de
          <strong> video </strong>
          prin elementul
          {' '}
          <FormattedText>
            {'<track>'}
          </FormattedText>
        </p>

        <Highlight
          language="html"
          code={`
<video muted autoplay controls>
  
  <source 
    type="video/mp4"
    src="https://d3tycb976jpudc.cloudfront.net/public/video/video-element-demo.mp4"  
  />
  
  <track default srclang="ro" src="/video/captions.vtt" />

</video>
`}
        />

        <LessonTip>
          Sursa elementului
          {' '}
          <strong> track </strong>
          {' '}
          trebuie să fie pe aceeași origine cu pagina
          pentru a funcționa.
        </LessonTip>

        <video muted autoPlay controls loop className="max-w-full">
          <source
            src={`${process.env.CLOUDFRONT_PUBLIC}/public/video/video-element-demo.mp4`}
            type="video/mp4"
          />

          <source
            src={`${process.env.CLOUDFRONT_PUBLIC}/public/video/video-element-demo.mkv`}
            type="video/x-matroska"
          />

          <track
            default
            srcLang="ro"
            src="/video/captions.vtt"
          />
        </video>

      </section>
      <div className="dots" />
      <LessonResources
        className="my-5"
        links={[
          {
            text: 'Documentatia elementului <audio> pe MDN',
            url:
                'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio',
          },
          {
            text: 'Documentatia elementului <video> pe MDN',
            url:
                'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video',
          },
          {
            text: 'Documentatia elementului <track> pe MDN',
            url:
                'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track',
          },
        ]}
      />
    </>
  );
}
