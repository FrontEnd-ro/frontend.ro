import { uuid } from './Utils';
import MOCK_SUBMISSIONS from '../pages/api/exercise-submissions/mock';

const getMockSubmissions = (n: number) => {
  const submissions = MOCK_SUBMISSIONS;

  const newPage = Array.from(Array(n), (submission, i) => {
    const newSubmission = {
      id: uuid(),
      username: submissions[i].username,
      avatarSrc: submissions[i].avatarSrc,
      chapter: submissions[i].chapter,
      type: submissions[i].type,
      time: Date.now(),
    };
    return newSubmission;
  });
  return newPage;
};

export default getMockSubmissions;
