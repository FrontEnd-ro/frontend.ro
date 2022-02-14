import Lesson from '~/components/lessons';
import SEOTags from '~/components/SEOTags';
import { getLessonById } from '~/services/Constants';
import TextsContent from '~/curriculum/html/TextElements';

const TextsLesson = () => {
  const lessonInfo = getLessonById('texte');

  return (
    <>
      <SEOTags
        title={`${lessonInfo.title} | Lecție HTML`}
        description={lessonInfo.description}
        url={`https://FrontEnd.ro${lessonInfo.url}`}
        shareImage={lessonInfo.ogImage}
      />
      <Lesson lessonInfo={lessonInfo}>
        <TextsContent />
      </Lesson>
    </>
  );
};

export default TextsLesson;
