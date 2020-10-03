import { uuid } from '../../../services/Utils';
import ChapterType from '../../../services/Constants';
import { SubmissionType, Submission } from '../../../redux/exercise-submissions/types';

const MOCK_SUBMISSIONS: Submission[] = [
  {
    id: uuid(), username: 'diana', avatarSrc: 'https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png', chapter: ChapterType.HTML, type: SubmissionType.ASSIGNED, time: Date.now(),
  },
  {
    id: uuid(), username: 'alex', avatarSrc: 'https://www.flaticon.com/svg/static/icons/svg/147/147144.svg', chapter: ChapterType.CSS, type: SubmissionType.PENDING, time: Date.now(),
  },
  {
    id: uuid(), username: 'antonia', avatarSrc: 'https://www.flaticon.com/svg/static/icons/svg/168/168734.svg', chapter: ChapterType.JS, type: SubmissionType.ASSIGNED, time: Date.now(),
  },
  {
    id: uuid(), username: 'andrei', avatarSrc: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png', chapter: ChapterType.CSS, type: SubmissionType.PENDING, time: Date.now(),
  },
  {
    id: uuid(), username: 'test', avatarSrc: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png', chapter: ChapterType.JS, type: SubmissionType.PENDING, time: Date.now(),
  },
];

export default MOCK_SUBMISSIONS;
