import Lesson from '~/components/lessons';
import SEOTags from '~/components/SEOTags';
import { getLessonById } from '~/services/Constants';
import HTMLStructureContent from '~/curriculum/html/HTMLStructure/HTMLStructure';

const HTMLStructureLesson = () => {
  const lessonInfo = getLessonById('structura-pagina-html');

  return (
    <>
      <SEOTags
        title={`${lessonInfo.title} | Lecție HTML`}
        description={lessonInfo.description}
        url={`https://FrontEnd.ro${lessonInfo.url}`}
        shareImage={lessonInfo.ogImage}
      >
        <link rel="preload" as="image" href={lessonInfo.ogImage} />
      </SEOTags>
      <Lesson lessonInfo={lessonInfo}>
        <HTMLStructureContent />
      </Lesson>
    </>
  );
};

export default HTMLStructureLesson;
