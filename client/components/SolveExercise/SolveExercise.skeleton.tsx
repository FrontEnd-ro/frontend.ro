import React from 'react';
import PageContainer from '../PageContainer';
import PageWithAsideMenu from '../layout/PageWithAsideMenu/PageWithAsideMenu';
import { SkeletonParagraph, SkeletonRect } from '../SkeletonScreens';

import styles from './SolveExercise.module.scss';

const SolveExerciseSkeleton = () => {
  return (
    <PageWithAsideMenu menu={{
      title: '',
      Component: (
        <>
          {['_____Exercitiu #1',
            '_____Exercitiu #2',
            '_____Exercitiu #3',
          ].map((index) => (
            <SkeletonRect key={index} height="50px" className="d-block mb-8" />
          ))}
        </>
      ),
    }}
    >
      <PageContainer>
        <SkeletonParagraph className={styles['skeleton-h1']} text="Exercitiu Skeleton" />

        <SkeletonParagraph className="my-5" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />

        <SkeletonRect className={styles['skeleton-editor']} width="100%" height="400px" />

      </PageContainer>

    </PageWithAsideMenu>
  );
};

export default SolveExerciseSkeleton;
