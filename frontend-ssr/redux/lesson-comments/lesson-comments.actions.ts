import { Comment } from './types';

const ADD = 'lesson-comments/ADD';
const REMOVE = 'lesson-comments/REMOVE';
const LOAD = 'lesson-comments/LOAD';

export const LESSON_COMMENTS = {
  ADD,
  REMOVE,
  LOAD,
};

export const addComment = (id: string, comments: Comment | Comment[], index = 0) => ({
  type: ADD,
  payload: {
    id,
    comments,
    index,
  },
});
export const removeComment = (id: string | string[]) => ({
  type: REMOVE,
  payload: {
    id,
  },
});

export const loadComments = (id: string, newComments: Comment[]) => ({
  type: LOAD,
  payload: {
    id,
    newComments,
  },
});
