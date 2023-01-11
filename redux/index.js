import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

import { blogs, blog } from './reducers/blogs';
import { user } from './reducers/user';

const middlewares = [thunk];

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage();

const reducers = combineReducers({
  blogs,
  blog,
  user,
});

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user'], // which reducer want to store
};
export const persistedReducer = persistReducer(persistConfig, reducers);

export const viewsCreateStoreKit = (INITIAL_STATE) =>
  createStore(persistedReducer, INITIAL_STATE, applyMiddleware(...middlewares));

export default reducers;
