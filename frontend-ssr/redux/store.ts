import { createStore } from 'redux';
import rootReducer from './root.reducer';

const store = createStore(rootReducer);

export default store;
