import { combineReducers } from 'redux';
import mainState from './reducer';

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
  mainState
});

export default rootReducer;