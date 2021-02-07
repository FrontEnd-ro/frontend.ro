export type BoxModelItem = 'margin' | 'border' | 'padding' | 'content';

export enum DEFAULTS {
  MARGIN = 30,
  BORDER = 30,
  PADDING = 30,
  CONTENT = 175,
}

export enum BOX_SIZING {
  BORDER_BOX = 'border-box',
  CONTENT_BOX = 'content-box'
}

export const BOX_SIZING_LABELS = {
  [BOX_SIZING.BORDER_BOX]: 'Border-Box',
  [BOX_SIZING.CONTENT_BOX]: 'Content-Box',
};

export const DIMENSION_LIMITS = {
  margin: [0, DEFAULTS.MARGIN],
  border: [0, DEFAULTS.BORDER],
  padding: [0, DEFAULTS.PADDING],
  content: [0, DEFAULTS.CONTENT],
};
