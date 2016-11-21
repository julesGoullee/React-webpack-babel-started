import {
  applyMiddleware,
  createStore
} from 'redux';

import createLogger from 'redux-logger';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk';

const logger = createLogger();
const store = createStore(reducer,
  applyMiddleware(
    thunkMiddleware,
    logger
  )
);

export default store;
