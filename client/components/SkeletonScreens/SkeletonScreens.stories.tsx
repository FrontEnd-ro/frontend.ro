import React from 'react';
import SkeletonWord from './SkeletonWord';
import SkeletonParagraph from './SkeletonParagraph';
import SkeletonRect from './SkeletonRect';

export default {
  title: 'Skeleton Screen',
};

export const Word = () => (
  <SkeletonWord text="Abracadabra" />
);

export const Paragraph = () => (
  <SkeletonParagraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
);

export const Rect = () => (
  <SkeletonRect
    width="400px"
    height="250px"
  />
);
