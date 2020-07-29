import React from 'react';
import styles from './Editor.module.scss';

/**
 * At the moment, the solution is a simple string.
 * This can be changed when integrating the editor functionality.
 */

interface EditorProps {
  solution: string;
}

export default function Editor(props: EditorProps) {
  const { solution } = props;

  return (
    <div className={styles.editor}>
      <p>{solution}</p>
    </div>
  );
}
