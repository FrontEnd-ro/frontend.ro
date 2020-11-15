/** Shared Types between frontend and backend */

/* eslint-disable import/prefer-default-export */
export enum ChapterType {
  HTML = 'html',
  CSS = 'css',
  JS = 'js',
}

export interface Figure {
  alt: string;
  src: string;
  demo?: string;
}