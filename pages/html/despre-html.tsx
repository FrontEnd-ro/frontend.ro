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
        shareImage={`${process.env.CLOUDFRONT_PUBLIC}/seo/about-html_1200w.jpg`}
        description={lessonInfo.description}
        url={`https://FrontEnd.ro${lessonInfo.url}`}
      >
        <link rel="preload" as="image" href={`${process.env.CLOUDFRONT_PUBLIC}/seo/about-html_1200w.jpg`} />
      </SEOTags>
      <Lesson lessonInfo={lessonInfo}>
        <AboutHtmlContent />
      </Lesson>
    </>
  );
};

export default AboutHtmlLesson;
