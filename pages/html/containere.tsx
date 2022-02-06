import Lesson from '~/components/lessons';
import SEOTags from '~/components/SEOTags';
import { getLessonById } from '~/services/Constants';
import ContainersContent from '~/curriculum/html/Containers';

const ContainersLesson = () => {
  const lessonInfo = getLessonById('containere');

  // SEO image must be exactly 1200x630
  const seoImage = `${process.env.CLOUDFRONT_PUBLIC}/public/seo/containers_1200w.jpg`;
  const coverImage = `${process.env.CLOUDFRONT_PUBLIC}/public/seo/containers_2400w.jpg`;

  return (
    <>
      <SEOTags
        description={lessonInfo.description}
        title={`${lessonInfo.title} | Lecție HTML`}
        url={`https://FrontEnd.ro/${lessonInfo.url}`}
        shareImage={seoImage}
      >
        <link rel="preload" as="image" href={coverImage} />
      </SEOTags>
      <Lesson lessonInfo={lessonInfo}>
        <ContainersContent />
      </Lesson>
    </>
  );
};

export default ContainersLesson;
