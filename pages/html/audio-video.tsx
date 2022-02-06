import Lesson from '~/components/lessons';
import SEOTags from '~/components/SEOTags';
import { getLessonById } from '~/services/Constants';
import AudioAndVideoContent from '~/curriculum/html/AudioAndVideo';

const AudioAndVideoLesson = () => {
  const lessonInfo = getLessonById('audio-video');
  // SEO image must be exactly 1200x630
  const seoImage = `${process.env.CLOUDFRONT_PUBLIC}/public/seo/video-audio_1200w.jpg`;

  return (
    <>
      <SEOTags
        title={`${lessonInfo.title} | Lecție HTML`}
        description={lessonInfo.description}
        url={`https://FrontEnd.ro${lessonInfo.url}`}
        shareImage={seoImage}
      />
      <Lesson lessonInfo={lessonInfo}>
        <AudioAndVideoContent />
      </Lesson>
    </>
  );
};

export default AudioAndVideoLesson;
