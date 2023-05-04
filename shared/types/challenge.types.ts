export type API_ChallengeTaskI = {
  taskId: string;
  title: string;
  explainer: string;
  startingCode?: string;
  startingFile?: string;
  solution?: string;
  filesThatCanBeEdited: string[];
}

export type API_ChallengeI = {
  challengeId: string;
  title: string;
  tasks: API_ChallengeTaskI[];
  introExplainer?: {
    title: string;
    markdown: string;
  }
}

export type TypeDefinition = {content: string; path: string;};
