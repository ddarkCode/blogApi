import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from '../redux/index';

const middlewares = [thunk];

export const serverCreateStoreKit = () =>
  createStore(reducers, {}, applyMiddleware(...middlewares));
