import { useState } from 'react';
import HttpService from './Http.service';
import FolderStructure from '../utils/FolderStructure';
import { ChallengeI } from '~/../shared/types/challenge.types';

export interface VerificationStatus {
  // Tutorial ID for which we performed verification
  tutorialId: string;

  // Specific challenge in t
  challengeId: string;

  valid: boolean;
  // In case verification failed, we're populating
  // the fields below with the error details.
  error?: {
    // Human readable description of what failed.
    description: string;

    // Optional Stack Trace in case the code/program
    // doesn't even run/compile.
    stackTrace?: string;

    // Optional suggestions for fixing the problem.
    // These are meant to be shown to the user,
    // and guide him towards the fix.
    suggestions?: string[];
  };
}
class ChallengeService {
  static get(challengeId: string): Promise<ChallengeI> {
    return HttpService
      .post(`${process.env.ENDPOINT}/challenges/${challengeId}`)
      .then((resp) => resp.json());
  }

  static verify(
    challengeId: string,
    taskId: string,
    folderStructure: FolderStructure,
  ): Promise<VerificationStatus> {
    const RETURN_SUCCESS = Math.random() < 0.5;
    const stackTrace = `
SyntaxError: /App.js: Unexpected token (2:28)

1 | export default function App() {
> 2 |   return <h1ello There World</h1>
  |                             ^
3 | }
    `;
    return new Promise((resolve) => {
      setTimeout(() => {
        if (RETURN_SUCCESS) {
          resolve({
            tutorialId: challengeId,
            challengeId: taskId,
            valid: true,
          });
        } else {
          resolve({
            tutorialId: challengeId,
            challengeId: taskId,
            valid: false,
            error: {
              description: 'Something went wrong when executing your solution',
              suggestions: [
                'Double check syntax errors, specifically in the App.js file.',
                'If you think there\'s a problem on our side, don\'t hesitate to contact us.',
              ],
              stackTrace,
            },
          });
        }
      }, 3000);
    });
  }
}

export const withAutomaticVerification = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [
    verificationStatus,
    setVerificationStatus,
  ] = useState<VerificationStatus | undefined>(undefined);

  const verifySolution: typeof ChallengeService['verify'] = async (...props) => {
    setIsVerifying(true);
    setVerificationStatus(undefined);
    try {
      const result = await ChallengeService.verify(...props);
      setVerificationStatus(result);
      return result;
    } catch (err) {
      setVerificationStatus(err as unknown as VerificationStatus);
    } finally {
      setIsVerifying(false);
    }
  };

  return {
    isVerifying,
    verificationStatus,
    verifySolution,
  };
};

export default ChallengeService;
