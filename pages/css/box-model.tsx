import Lesson from '~/components/lessons';
import SEOTags from '~/components/SEOTags';
import { getLessonById } from '~/services/Constants';
import BoxModelContent from '~/curriculum/css/BoxModel';

const BoxModelLesson = () => {
  const lessonInfo = getLessonById('box-model');

  return (
    <>
      <SEOTags
        title={`${lessonInfo.title} | Lecție CSS`}
        description={lessonInfo.description}
        url={`https://FrontEnd.ro${lessonInfo.url}`}
        shareImage={`${process.env.CLOUDFRONT_PUBLIC}/seo/box-model.jpg`}
      />
      <Lesson lessonInfo={lessonInfo}>
        <BoxModelContent />
      </Lesson>
    </>
  );
};

export default BoxModelLesson;
