import React from 'react';
import Link from 'next/link';
import SEOTags from '~/components/SEOTags';
import Lesson, {
  LessonContributors,
  LessonCover,
  LessonHeading,
  LessonTip,
  LessonFigure,
  LessonResources,
  LessonFirstSentence,
} from '~/components/lessons';
import { SebastianLatkolic } from '~/services/contributors';
import Highlight from '~/components/Highlight/Highlight';
import { DemoPreview } from '~/components/demo';

import coverSvg from '~/public/images/lessons/audio-and-video__cover.svg';
import FormattedText from '~/components/FormattedText';

const contributors = [SebastianLatkolic];
const chapters = [
  { title: 'Elementul <audio>', id: 'audio-element' },
  { title: 'Atributele elementului <audio>', id: 'atributele-elementului-audio' },
  { title: 'Elementul <video>', id: 'video-element' },
  { title: 'Atributele elementului <video>', id: 'atributele-elementului-video' },
];

export default function VideoAndAudioLesson() {
  return (
    <>
      <SEOTags
        title="Audio și Video | Lecție HTML"
        shareImage="https://d3tycb976jpudc.cloudfront.net/seo/html-audio-video.jpg"
        description="Imaginile aduc mai multă viață site-urilor noastre, dar putem merge un pas mai departe folosind elemente video și audio."
        url="https://FrontEnd.ro/html/audio-video"
      />
      <Lesson id="audio-video" title="Audio și Video" chapters={chapters}>
        <LessonContributors className="absolute" contributors={contributors} />
        <LessonCover resizeOffset={250}>
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: coverSvg,
            }}
          />
        </LessonCover>
        <LessonFirstSentence>
          În lecția anterioară am aflat cum putem adăuga imagini pe site-urile
          noastre. Cum ar fi dacă v-am spune că putem adăuga fișiere audio și video
          pentru a oferi și mai multă interactivitate paginilor dezvoltate de
          noi? Ei bine, hai să vedem cum putem face asta.
        </LessonFirstSentence>
        <section>
          <LessonHeading as="h3" id="audio-element">
            {'Elementul <audio>'}
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
                src={`${process.env.CLOUDFRONT_PUBLIC}/demo-assets/audio-video/big-buck-bunny-audio.mp3`}
                type="audio/mpeg"
              />

              <source
                src={`${process.env.CLOUDFRONT_PUBLIC}/demo-assets/audio-video/big-buck-bunny-audio.aac`}
                type="audio/aac"
              />

              <p>
                Browser-ul tău nu suportă fișiere audio.
                Folosește
                {' '}
                <a href={`${process.env.CLOUDFRONT_PUBLIC}/demo-assets/audio-video/big-buck-bunny-audio.mp3`}>acest link</a>
                pentru a-l putea vizualiza.
              </p>
            </audio>
            <Link href="/demo/html/audio">
              <a target="_blank" className="d-block">
                Deschide demo-ul într-o pagină nouă
              </a>
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
          <LessonHeading as="h3" id="atributele-elementului-audio">
            {'Atributele principale ale elementului <audio>'}
          </LessonHeading>
          <ul className="with--bullets">
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
          </ul>
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
          <LessonHeading as="h3" id="video-element">
            {'Elementul <video>'}
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
          <LessonHeading as="h3" id="atributele-elementului-video">
            {'Atributele principale elementului <video>'}
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
          <ul className="with--bullets">
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
          </ul>
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
        </section>
        <div className="dots" />
        <LessonResources
          className="my-5"
          links={[
            {
              text: 'Documentatia completa a elementului <audio> pe MDN',
              url:
                'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio',
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
