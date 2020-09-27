import { combineReducers } from 'redux';
import username from './reducers/username';

const rootReducer = combineReducers({
  username,
});

export default rootReducer;
