import { combineReducers } from 'redux';
import reducer from './reducer';

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
  reducer
});

export default rootReducer;