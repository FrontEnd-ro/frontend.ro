import { useEffect, useState } from 'react';
import ControlPanelNav from './ControlPanelNav/ControlPanelNav';
import { ChallengeI } from '~/../shared/types/challenge.types';

import styles from './ControlPanel.module.scss';
import Markdown from '~/components/Markdown';

interface Props {
  challenge: ChallengeI;
  currentTaskId: string;
  className?: string;
}

const ControlPanel = ({ challenge, currentTaskId, className = '' }: Props) => {
  // We allow a user to view a task explainer without actually changing
  // the entire editor context to that specific task.
  const [viewingTaskId, setViewingTaskId] = useState(currentTaskId);
  const activeTask = challenge.tasks.find((task) => task.taskId === viewingTaskId);

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
        items={challenge.tasks.map((task) => ({
          id: task.taskId,
          label: task.title,
          active: task.taskId === viewingTaskId,
        }))}
      />
      <main className={styles.main}>
        {/*
          TODO: show an Alert which:
            > 1. Tells the user this task is blocked until he/she finishes the previous one
            > 2. Tells the user this task is available with a button for "starting" it
        */}
        <h1 className="mt-0">
          {activeTask.title}
        </h1>
        <Markdown variant="none" markdownString={activeTask.explainer} />
      </main>
    </section>
  );
};

export default ControlPanel;
