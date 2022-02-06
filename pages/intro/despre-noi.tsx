import Lesson from '~/components/lessons';
import SEOTags from '~/components/SEOTags';
import { getLessonById } from '~/services/Constants';
import AboutUsContent from '~/curriculum/intro/despre-noi';

const AboutUsLesson = () => {
  const lessonInfo = getLessonById('despre-noi');

  return (
    <>
      <SEOTags
        title={`${lessonInfo.title} | FrontEnd.ro`}
        shareImage="https://frontend.ro/seo/intro-about.jpg"
        description={lessonInfo.description}
        url={`https://FrontEnd.ro${lessonInfo.url}`}
      />
      <Lesson lessonInfo={lessonInfo}>
        <AboutUsContent />
      </Lesson>
    </>
  );
};

export default AboutUsLesson;
