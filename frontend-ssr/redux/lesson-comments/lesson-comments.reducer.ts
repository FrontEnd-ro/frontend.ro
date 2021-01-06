import { CommentState } from './types';
import { LESSON_COMMENTS } from './lesson-comments.actions';

const initialState: CommentState = {};
export const commentReducer = (state = initialState, action: { type: string; payload: any;})
: CommentState => {
  switch (action.type) {
    case LESSON_COMMENTS.ADD: {
      let { id, index, comments } = action.payload;
      if (!Array.isArray(comments)) {
        comments = [comments];
      }
      console.log(state);
      console.log(id);
      return {
        ...state,
        [id]: [...state[id].slice(0, index),
          ...comments,
          ...state[id].slice(index)],
      };
    }
    case LESSON_COMMENTS.REMOVE: {
      let { id } = action.payload;

      return {
        ...state,
        [id]: state[id].filter((comment) => !id.includes(comment._id)),
      };
    }
    case LESSON_COMMENTS.LOAD: {
      let { id, newComments } = action.payload;
      const obj = { ...state };
      obj.lessonId = id;

      return {
        ...state,
        [id]: state.lessonId
          ? [...state.lessonId, ...newComments]
          : newComments,
      };
    }

    default:
      return state;
  }
};
export default commentReducer;
