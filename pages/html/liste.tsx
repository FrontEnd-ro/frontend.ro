import Lesson from '~/components/lessons';
import SEOTags from '~/components/SEOTags';
import { getLessonById } from '~/services/Constants';
import ListsContent from '~/curriculum/html/Lists';

const ListsLesson = () => {
  const lessonInfo = getLessonById('liste');

  return (
    <>
      <SEOTags
        title={`${lessonInfo.title} | Lecție HTML`}
        description={lessonInfo.description}
        url={`https://FrontEnd.ro${lessonInfo.url}`}
        shareImage={`${process.env.CLOUDFRONT_PUBLIC}/public/seo/lists_1200w.jpg`}
      />
      <Lesson lessonInfo={lessonInfo}>
        <ListsContent />
      </Lesson>
    </>
  );
};

export default ListsLesson;
