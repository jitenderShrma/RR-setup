import { combineReducers } from 'redux';
import authReducer from './auth';
import errorReducer from './errors';

const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
});
export default rootReducer;