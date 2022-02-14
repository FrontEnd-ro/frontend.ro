import Lesson from '~/components/lessons';
import SEOTags from '~/components/SEOTags';
import { getLessonById } from '~/services/Constants';
import FormsContent from '~/curriculum/html/Forms';

const FormsLesson = () => {
  const lessonInfo = getLessonById('formulare');

  return (
    <>
      <SEOTags
        title={`${lessonInfo.title} | Lecție HTML`}
        description={lessonInfo.description}
        url={`https://FrontEnd.ro${lessonInfo.url}`}
        shareImage={lessonInfo.ogImage}
      />
      <Lesson lessonInfo={lessonInfo}>
        <FormsContent />
      </Lesson>
    </>
  );
};

export default FormsLesson;
