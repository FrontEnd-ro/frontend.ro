import Lesson from '~/components/lessons';
import SEOTags from '~/components/SEOTags';
import { getLessonById } from '~/services/Constants';
import AudioAndVideoContent from '~/curriculum/html/AudioAndVideo';

const AudioAndVideoLesson = () => {
  const lessonInfo = getLessonById('audio-video');

  return (
    <>
      <SEOTags
        title={`${lessonInfo.title} | Lecție HTML`}
        description={lessonInfo.description}
        url={`https://FrontEnd.ro${lessonInfo.url}`}
        shareImage={lessonInfo.ogImage}
      />
      <Lesson lessonInfo={lessonInfo}>
        <AudioAndVideoContent />
      </Lesson>
    </>
  );
};

export default AudioAndVideoLesson;
