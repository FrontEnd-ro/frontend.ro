import Lesson from '~/components/lessons';
import SEOTags from '~/components/SEOTags';
import { getLessonById } from '~/services/Constants';
import AboutHtmlContent from '~/curriculum/html/AboutHtml/AboutHtml';

const AboutHtmlLesson = () => {
  const lessonInfo = getLessonById('despre-html');

  return (
    <>
      <SEOTags
        title={`${lessonInfo.title} | Lecție HTML`}
        shareImage={lessonInfo.ogImage}
        description={lessonInfo.description}
        url={`https://FrontEnd.ro${lessonInfo.url}`}
      >
        <link rel="preload" as="image" href={lessonInfo.ogImage} />
      </SEOTags>
      <Lesson lessonInfo={lessonInfo}>
        <AboutHtmlContent />
      </Lesson>
    </>
  );
};

export default AboutHtmlLesson;
