import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { LESSONS } from '~/services/DataModel';

// Naming this component `Temp` because eventually
// will move this to the /html folder. So right now
// it's just a Temporary solution while we're finishing
// development on the Tutorial functionality.
function HTMLTutorialTemp() {
  const firstLessonId = LESSONS.find((lesson) => lesson.type === 'html')?.id;

  // After we move this to a first class page
  // we'll probably want to redirect only if the user
  // didn't start the tutorial.
  return (
    <RedirectToLesson lessonId={firstLessonId} />
  );
}

const RedirectToLesson = ({ lessonId }: {lessonId: string}) => {
  const router = useRouter();
  useEffect(() => {
    router.replace(`/html/tutorial/${lessonId}`);
  }, []);

  return null;
};

export default HTMLTutorialTemp;
