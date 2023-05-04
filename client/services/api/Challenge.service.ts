import { useEffect, useState } from 'react';
import HttpService from './Http.service';
import FolderStructure from '../../../shared/utils/FolderStructure';
import { API_ChallengeI, TypeDefinition } from '~/../shared/types/challenge.types';

// Sent to the iframe that contains the running Challenge/Exercise
// if we're verifying a Challenge that has live-preview.
interface WindowMessage<T = any> {
  type: string;
  payload?: T;
}

// These are the specific events passed between the
// main window and the iframe running our challenge code.
const TESTING_EVENTS = {
  DID_LOAD: 'DID_LOAD',

  // Incoming events with task result
  TASK_RESULT: {
    hierarchy: 'TEST_1_RESULT',
    shapes: 'TEST_2_RESULT',
    movement: 'TEST_3_RESULT',
    mesh: 'TEST_4_RESULT',
    physics: 'TEST_5_RESULT',
    interactions: 'TEST_6_RESULT',
  },

  // Outgoing events that trigger testing of a task
  TASK_RUN: {
    hierarchy: 'TEST_1_RUN',
    shapes: 'TEST_2_RUN',
    movement: 'TEST_3_RUN',
    mesh: 'TEST_4_RUN',
    physics: 'TEST_5_RUN',
    interactions: 'TEST_6_RUN',
  },
};

export interface VerificationStatus {
  // Challenge ID for which we performed verification
  challengeId: string;

  // Specific task in the challenge we verified
  taskId: string;

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
  static async get(challengeId: string): Promise<API_ChallengeI> {
    const challenge: API_ChallengeI = await HttpService
      .get(`${process.env.ENDPOINT}/challenges/${challengeId}`)
      .then((resp) => resp.json());

    return challenge;
  }

  static async getTypes(challengeId: string): Promise<TypeDefinition[]> {
    const typeDefinition: TypeDefinition[] = await HttpService
      .get(`${process.env.ENDPOINT}/challenges/${challengeId}/types`)
      .then((resp) => resp.json());

    return typeDefinition;
  }

  static async getStartingCode(challengeId: string): Promise<{
    challengeId: string;
    startingCode: string;
  }> {
    const startingCodeResponse: { challengeId: string; startingCode: string } = await HttpService
      .get(`${process.env.ENDPOINT}/challenges/${challengeId}/startingCode`)
      .then((resp) => resp.json());

    return startingCodeResponse;
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
            challengeId,
            taskId,
            valid: true,
          });
        } else {
          resolve({
            challengeId,
            taskId,
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
      return err;
    } finally {
      setIsVerifying(false);
    }
  };

  // TODO: implement a way to ignore/cancel side-effects if
  // 1. a new call to this function has been triggered
  // 2. the component that triggered this function has been
  // disposed of
  // One idea to do this is by usind UUIDs and only performing
  // side-effects if the UUID is matching.
  const verifySolutionClientSide = async (
    challengeId: string,
    taskId: string,
    iframe: HTMLIFrameElement,
  ) => {
    const SECOND = 1000;
    const MAX_WAIT_TIME = 10 * SECOND;

    setIsVerifying(true);
    setVerificationStatus(undefined);

    const eventRunType = TESTING_EVENTS.TASK_RUN[taskId];
    const eventResultType = TESTING_EVENTS.TASK_RESULT[taskId];

    const result = await new Promise<VerificationStatus>((resolve) => {
      setTimeout(() => {
        resolve({
          challengeId,
          taskId,
          valid: false,
          error: {
            description: 'Timeout',
          },
        });
      }, MAX_WAIT_TIME);

      onWindowEvent(
        eventResultType,
        ({ payload }: WindowMessage<VerificationStatus>) => {
          if (typeof payload.valid !== 'boolean') {
            // Wrong format of expected message. Most likely a bug on our side.
            resolve({
              challengeId,
              taskId,
              valid: false,
              error: {
                description: 'Nu am putut evalua soluția ta. Dă-ne un semn dacă problema persistă!',
              },
            });
          }

          resolve({
            challengeId,
            taskId,
            valid: payload.valid,
            error: payload.error,
          });
        },
      );

      emitIframeEvent(iframe, { type: eventRunType });
    });

    setVerificationStatus(result);
    setIsVerifying(false);

    return result;
  };

  return {
    isVerifying,
    verificationStatus,
    setVerificationStatus,
    verifySolution,
    verifySolutionClientSide,
  };
};

export const useTypeDefinitions = (challengeId: string) => {
  const SPAN = `[useTypeDefinitions, challengeId=${challengeId}]`;
  const [typeDefinitions, setTypeDefinitions] = useState<TypeDefinition[]>([]);

  const fetchTypeDefinitions = async () => {
    try {
      const response = await ChallengeService.getTypes(challengeId);
      setTypeDefinitions(response);
    } catch (err) {
      console.error(`${SPAN} Failed to fetch type definitions`, err);
    }
  };

  useEffect(() => {
    fetchTypeDefinitions();
  }, [challengeId]);

  return {
    typeDefinitions,
  };
};

export default ChallengeService;

/** Hooks */
export const useStartingCode = (challengeId: string): {
  challenge: { challengeId: string; startingCode: string } | undefined | null
} => {
  const [challenge, setChallenge] = useState<{
    challengeId: string;
    startingCode: string
  }>(undefined);
  const SPAN = `[useStartingCode, challengeId=${challengeId}]`;

  const fetchStartingCode = async () => {
    try {
      const response = await ChallengeService.getStartingCode(challengeId);
      setChallenge(response);
    } catch (err) {
      console.error(`${SPAN} Failed to fetch challenge.`, err);
      setChallenge(null);
    }
  };

  useEffect(() => {
    fetchStartingCode();
  }, [challengeId]);

  return {
    challenge,
  };
};

// Utility functions
const emitIframeEvent = (iframe: HTMLIFrameElement, eventMessage: WindowMessage) => {
  iframe.contentWindow.postMessage(eventMessage, '*');
};

const onWindowEvent = (
  type: string,
  callback: ({ type, payload }: WindowMessage) => void,
) => {
  window.addEventListener('message', (e: MessageEvent<WindowMessage>) => {
    console.log("got message", e.data.type, type);
    if (e.data?.type === type) {
      callback(e.data);
    }
  });
};
