export interface ApplicationConfig {
  ad?: {
    id: string;
    text: string;
    cta?: string;
    ctaLink?: string;
  },
  navItems: {
    _id: string;
    text: string;
    href: string;
    highlighted?: boolean;
  }[],
}

const LOAD_CONFIG = 'config/LOAD_CONFIG';

export const loadConfig = (config: ApplicationConfig) => ({
  type: LOAD_CONFIG,
  payload: config,
});

export const defaultApplicationConfigState: ApplicationConfig = {
  ad: undefined,
  navItems: [],
};

const initialState: ApplicationConfig = defaultApplicationConfigState;

export const applicationConfigReducer = (
  state = initialState, action: { type: string, payload: any; },
): ApplicationConfig => {
  switch (action.type) {
    case LOAD_CONFIG:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
