export const GITHUB_ORG_URL = 'https://github.com/FrontEnd-ro';
export const GITHUB_URL = 'https://github.com/FrontEnd-ro/frontend.ro';

export interface Figure {
  alt: string;
  src: string;
  demo?: string;
  isVideo?: boolean;
  width?: number;
}

export const IMAGES_MIME_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/svg+xml'];
export const IMAGES_EXTENSIONS = ['png', 'jpg', 'jpeg', 'webp', 'svg'];

export const MONACO = {
  TOPIC_MARKDOWN_MAX_LENGTH: 2048,
  EXERCISE_MARKDOWN_MAX_LENGTH: 5000,

  EVENTS: {
    CURSOR: 'C',
    SELECTION: 'SE',
    MODEL: 'M',
    SCROLL: 'SC',
  },
};

export const HTML_TUTORIAL_ID = 'html';
export const CHRISTMAS_ADVENT_ID = 'christmas-advent-2022';

// FIXME 👇
// Should ALWAYS come from the server
export const HTML_TUTORIAL_NAME = 'Tutorialul de HTML';

export type ThemeVariant = 'light' | 'dark';

export const JonDoeUser = {
  name: 'Jon Doe',
  username: 'jonDoe',
  avatar: 'https://d3tycb976jpudc.cloudfront.net/schmoes/jon.svg',
};
