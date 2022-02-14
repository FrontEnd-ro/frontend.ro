import Lesson from '~/components/lessons';
import SEOTags from '~/components/SEOTags';
import { getLessonById } from '~/services/Constants';
import VSCodeContent from '~/curriculum/intro/vs-code';

const VSCodeLesson = () => {
  const lessonInfo = getLessonById('vs-code');

  return (
    <>
      <SEOTags
        title={`${lessonInfo.title} | Lecție introductivă`}
        shareImage={lessonInfo.ogImage}
        description={lessonInfo.description}
        url={`https://FrontEnd.ro${lessonInfo.url}`}
      />
      <Lesson lessonInfo={lessonInfo}>
        <VSCodeContent />
      </Lesson>
    </>
  );
};

export default VSCodeLesson;
