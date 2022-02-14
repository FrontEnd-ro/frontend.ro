import Lesson from '~/components/lessons';
import SEOTags from '~/components/SEOTags';
import { getLessonById } from '~/services/Constants';
import ImagesContent from '~/curriculum/html/Images';

const ImagesLesson = () => {
  const lessonInfo = getLessonById('imagini');

  return (
    <>
      <SEOTags
        title={`${lessonInfo.title} | Lecție HTML`}
        url={`https://FrontEnd.ro${lessonInfo.url}`}
        description={lessonInfo.description}
        shareImage={lessonInfo.ogImage}
      />
      <Lesson lessonInfo={lessonInfo}>
        <ImagesContent />
      </Lesson>
    </>
  );
};

export default ImagesLesson;
