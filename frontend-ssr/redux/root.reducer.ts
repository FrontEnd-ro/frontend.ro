import { combineReducers } from 'redux';
import { dummy } from './dummy/dummy-reducer';
import { postReducer } from './crud_redux/reducers/post-reducer';

const rootReducer = combineReducers({
  dummy,
  postReducer,
});

export default rootReducer;
