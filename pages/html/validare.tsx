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
        shareImage={`${process.env.CLOUDFRONT_PUBLIC}/public/seo/html-validation_1200w.jpg`}
      >
        <link rel="preload" as="image" href={`${process.env.CLOUDFRONT_PUBLIC}/public/seo/html-validation_1200w.jpg`} />
      </SEOTags>
      <Lesson lessonInfo={lessonInfo}>
        <HTMLValidationContent />
      </Lesson>
    </>
  );
};

export default HTMLValidationLesson;
