import Lesson from '~/components/lessons';
import SEOTags from '~/components/SEOTags';
import { getLessonById } from '~/services/Constants';
import HTMLValidationContent from '~/curriculum/html/HTMLValidation';

const HTMLValidationLesson = () => {
  const lessonInfo = getLessonById('validare');

  return (
    <>
      <SEOTags
        description={lessonInfo.description}
        title={`${lessonInfo.title} | Lecție HTML`}
        url={`https://FrontEnd.ro/${lessonInfo.url}`}
        shareImage={lessonInfo.ogImage}
      >
        <link rel="preload" as="image" href={lessonInfo.ogImage} />
      </SEOTags>
      <Lesson lessonInfo={lessonInfo}>
        <HTMLValidationContent />
      </Lesson>
    </>
  );
};

export default HTMLValidationLesson;
