import { PropsWithChildren } from "react";
import styles from './LessonFloatContent.module.scss';

interface Props {
  position: 'left' | 'right';
}

const LessonFloatContent = ({ position, children }: PropsWithChildren<Props>) => {
  return (
    <div className={`${styles.LessonFloatContent} float-${position} ${position === 'right' ? 'ml-16' : 'mr-16'}`}>
      {children}
    </div>
  )
}

export { LessonFloatContent };
