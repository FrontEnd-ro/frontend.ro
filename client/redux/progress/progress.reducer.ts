import { Submission } from '../exercise-submissions/types';
import { TutorialProgressI } from '~/../shared/types/tutorial.types';
import { SUBMISSION_ACTION_TYPES, TUTORIAL_ACTION_TYPES } from './progress.actions';

type TutorialId = string;

export interface ProgressState {
  tutorials: Record<TutorialId, TutorialProgressI>;
  submissions: Record<TutorialId, Submission[]>;
}

// Storing progress state from the perspective of the User
export const initialState: ProgressState = {
  tutorials: {},
  submissions: {},
};

export const progressReducer = (state = initialState, action: { type: string; payload: any;})
: ProgressState => {
  switch (action.type) {
    case TUTORIAL_ACTION_TYPES.LOAD: {
      const { payload }: { payload: TutorialProgressI } = action;
      return {
        ...state,
        tutorials: {
          ...state.tutorials,
          [payload.tutorialId]: payload,
        },
      };
    }

    case SUBMISSION_ACTION_TYPES.LOAD: {
      const {
        tutorialId,
        submissions,
      }: { tutorialId: TutorialId; submissions: Submission[] } = action.payload;

      return {
        ...state,
        submissions: {
          [tutorialId]: submissions,
        },
      };
    }

    default:
      return state;
  }
};
export default progressReducer;
