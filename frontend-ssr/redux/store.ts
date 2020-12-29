import { createStore } from 'redux';
import rootReducer from './root.reducer';

let store;

function createStoreWithPreloadedData(preloadedData) {
  if (!store) {
    store = createStore(rootReducer, preloadedData);
  }

  return store;
}

function getStore() {
  return store;
}

export { createStoreWithPreloadedData, getStore };
