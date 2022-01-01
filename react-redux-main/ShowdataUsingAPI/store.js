
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import thunk from 'redux-thunk';
import Reducer from './reducers/index'
const loggerMiddleware = createLogger();

export const store = createStore(
  Reducer,
  applyMiddleware(loggerMiddleware, thunk)
)