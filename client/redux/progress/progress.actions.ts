import { Submission } from '../exercise-submissions/types';
import { API_TutorialProgressI } from '~/../shared/types/tutorial.types';

const TUTORIAL_LOAD = 'progress/tutorial/LOAD';
const SUBMISSIONS_LOAD = 'progress/submissions/LOAD';

export const TUTORIAL_ACTION_TYPES = {
  LOAD: TUTORIAL_LOAD,
};

export const SUBMISSION_ACTION_TYPES = {
  LOAD: SUBMISSIONS_LOAD,
};

export const loadTutorial = (tutorial: API_TutorialProgressI) => ({
  type: TUTORIAL_LOAD,
  payload: tutorial,
});

export const loadSubmissions = (tutorialId: string, submissions: Submission[]) => ({
  type: SUBMISSIONS_LOAD,
  payload: {
    tutorialId,
    submissions,
  },
});
