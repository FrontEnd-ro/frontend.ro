import { uuid } from '~/services/Utils';
import { Comment } from '../redux/lesson-comments/types';

const MOCK_COMMENTS: Comment[] = [
  {

    _id: uuid(),
    avatar:
    'https://www.gravatar.com/avatar/9d4d790eb85e56d6524faed8a883d6cb?s=500&d=404',
    username: 'Diana123',
    comment: 'added a new comment',
    timestamp: Date.now(),
  },
  {
    _id: uuid(),
    avatar: 'https://joeschmoe.io/api/v1/josh',
    username: 'AlexPava',
    comment: 'sent you a message',
    timestamp: Date.now(),
  },
  {
    _id: uuid(),
    avatar: 'https://joeschmoe.io/api/v1/jon',
    username: 'Andrei82',
    comment: 'added a new exercise',
    timestamp: Date.now(),
  },
  {
    _id: uuid(),
    avatar: 'https://joeschmoe.io/api/v1/jess',
    username: 'AntoniaBebe',
    comment: 'sent you a message',
    timestamp: Date.now(),
  },
  {
    _id: uuid(),
    avatar: 'https://joeschmoe.io/api/v1/jane',
    username: 'Raluca99',
    comment: 'added a new topic',
    timestamp: Date.now(),
  },
];

const LOAD_DURATION = 1000;

class LessonComments {
  static wait(mili) {
    return new Promise((resolve) => setTimeout(resolve, mili));
  }

  static async getComments(id) {
    await LessonComments.wait(LOAD_DURATION);
    return MOCK_COMMENTS;
  }

  static async addComment(id) {
    await LessonComments.wait(LOAD_DURATION);
  }
}

export default LessonComments;
