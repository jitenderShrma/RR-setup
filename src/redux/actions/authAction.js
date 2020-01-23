import { GET_ERRORS } from './types';
import validateLogin from '../../common/validator/loginVaidation';
import validateRegister from '../../common/validator/registerValidation';

export const loginUser = loginUser => dispatch => {
    const {isValid, errors } = validateLogin(loginUser);
    if(!isValid){
        // dispatch errors
        dispatch({type: GET_ERRORS, payload:errors});
    }
}

export const registerUser = newUser => dispatch => {
    const {isValid, errors } = validateRegister(newUser);
    if(!isValid){
        // dispatch errors
        dispatch({type: GET_ERRORS, payload:errors});
    }
    console.log('registerUser action')
}