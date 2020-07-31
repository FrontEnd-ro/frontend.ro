const DUMMY_INCREMENT = 'DUMMY_INCREMENT';
const DUMMY_DECREMENT = 'DUMMY_DECREMENT';

export const dummyIncrement = () => ({
  type: DUMMY_INCREMENT,
  payload: null,
});

export const dummyDecrement = () => ({
  type: DUMMY_DECREMENT,
  payload: null,
});

const DEFAULT_STATE = 22;
export function dummy(state = DEFAULT_STATE, { type, payload }: {type: string, payload: any}) {
  switch (type) {
    case DUMMY_INCREMENT:
      return state + 1;
    case DUMMY_DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
