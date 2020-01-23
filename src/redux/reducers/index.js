import { combineReducers } from 'redux';
import authReducer from './auth';
import errorReducer from './errors';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  form: formReducer
});
export default rootReducer;