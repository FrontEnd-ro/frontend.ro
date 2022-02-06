import Lesson from '~/components/lessons';
import SEOTags from '~/components/SEOTags';
import { getLessonById } from '~/services/Constants';
import LinksAndButtonsContent from '~/curriculum/html/LinksAndButtons';

const LinksAndButtonsLesson = () => {
  const lessonInfo = getLessonById('linkuri-si-butoane');

  return (
    <>
      <SEOTags
        title={`${lessonInfo.title} | Lecție HTML`}
        description={lessonInfo.description}
        url={`https://FrontEnd.ro${lessonInfo.url}`}
        shareImage={`${process.env.CLOUDFRONT_PUBLIC}/seo/links-and-buttons_1200w.jpg`}
      />
      <Lesson lessonInfo={lessonInfo}>
        <LinksAndButtonsContent />
      </Lesson>
    </>
  );
};

export default LinksAndButtonsLesson;
