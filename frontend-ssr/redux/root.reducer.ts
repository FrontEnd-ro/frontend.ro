import { combineReducers } from 'redux';
import { dummy } from './dummy/dummy-reducer';

const rootReducer = combineReducers({
  dummy,
});

export default rootReducer;
