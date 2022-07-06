import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import TutorialService from '~/services/api/Tutorial.service';
import { loadTutorial } from '~/redux/progress/progress.actions';

// If `fetchCondition` is true, then fetch the progress for the tutorial
// with ID=`tutorialId` and persist it into the store.
const maybeFetchTutorialProgress = (tutorialId: string, fetchCondition: boolean) => {
  const spanPrefix = `[maybeFetchTutorialProgress, tutorialId=${tutorialId}, fetchCondition=${fetchCondition}]`;

  const dispatch = useDispatch();
  const [didError, setDidError] = useState(false);

  const fetchTutorialProgress = async () => {
    try {
      const progress = await TutorialService.getProgress(tutorialId);
      dispatch(loadTutorial(progress));
    } catch (err) {
      console.error(`${spanPrefix} Failed to fetch:`, err);
      setDidError(true);
    }
  };

  useEffect(() => {
    if (fetchCondition) {
      fetchTutorialProgress();
    }
  }, [fetchCondition]);

  return didError;
};

export default maybeFetchTutorialProgress;
