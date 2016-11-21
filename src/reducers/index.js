import { combineReducers } from 'redux';
import currentMash from './currentMash';
import potatoes from './potatoes';

const rootReducer = combineReducers({
  potatoes,
  currentMash
});

export default rootReducer;
