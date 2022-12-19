import { useEffect, useState } from 'react';
import Alert from '~/components/generic/Alert/Alert';
import ControlPanelNav from './ControlPanelNav/ControlPanelNav';
import { ChallengeSubmissionTaskI, ParsedChallengeSubmissionI } from '~/../shared/types/challengeSubmissions.types';

import styles from './ControlPanel.module.scss';
import Markdown from '~/components/Markdown';

interface Props {
  challenge: ParsedChallengeSubmissionI;
  // "current" in the sense that this is the task you must solve now.
  currentTaskId: string;
  className?: string;
}

const ControlPanel = ({ challenge, currentTaskId, className = '' }: Props) => {
  // We allow a user to view a task explainer without actually changing
  // the entire editor context to that specific task.
  const [viewingTaskId, setViewingTaskId] = useState(currentTaskId);
  const tasks: ChallengeSubmissionTaskI[] = challenge.introExplainer !== undefined
    ? [
      // Creating a "fake task" on the fly, from the
      // introExplainer property on the challenge.
      {
        taskId: 'introExplainer',
        title: challenge.introExplainer.title,
        explainer: challenge.introExplainer.markdown,
        codeForFilesThatCanBeEdited: '',
        filesThatCanBeEdited: [],
      },
      ...challenge.tasks,
    ]
    : challenge.tasks;
  const viewingTask = tasks.find((task) => task.taskId === viewingTaskId);

  const currentTaskIndex = tasks.findIndex((task) => task.taskId === currentTaskId);
  const viewingTaskIndex = tasks.indexOf(viewingTask);

  useEffect(() => {
    setViewingTaskId(currentTaskId);
  }, [currentTaskId]);

  const changeContent = (id: string) => {
    setViewingTaskId(id);
  };

  return (
    <section className={`${styles.ControlPanel} ${className} d-flex`}>
      <ControlPanelNav
        onItemClick={changeContent}
        className={styles.ControlPanelNav}
        items={tasks.map((task) => ({
          id: task.taskId,
          label: task.title,
          active: task.taskId === viewingTaskId,
          isCurrent: task.taskId === currentTaskId,
        }))}
      />
      <main className={styles.main}>
        {viewingTask.status?.valid === true && (
          <Alert className="mb-8" severity="success">
            Ai rezolvat cu succes acest task!
          </Alert>
        )}
        {viewingTaskIndex > currentTaskIndex && (
          <Alert className="mb-8" severity="info">
            Pentru a putea începe acest task trebuie să termini toate taskurile anterioare.
          </Alert>
        )}
        <h1 className="mt-0">
          {viewingTask.title}
        </h1>
        <Markdown variant="none" markdownString={viewingTask.explainer} />
      </main>
    </section>
  );
};

export default ControlPanel;
