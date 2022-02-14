import Lesson from '~/components/lessons';
import SEOTags from '~/components/SEOTags';
import { getLessonById } from '~/services/Constants';
import StylingMethodsContent from '~/curriculum/css/StylingMethods';

const StylingMethodsLesson = () => {
  const lessonInfo = getLessonById('moduri-stilizare');
  return (
    <>
      <SEOTags
        title={`${lessonInfo.title} | Lecție CSS`}
        description={lessonInfo.description}
        url={`https://FrontEnd.ro${lessonInfo.url}`}
        shareImage={lessonInfo.ogImage}
      />
      <Lesson lessonInfo={lessonInfo}>
        <StylingMethodsContent />
      </Lesson>
    </>
  );
};

export default StylingMethodsLesson;
