import {CLEAR_ERROR} from './types';

export const clearError = () => dispatch => {
    dispatch({type: CLEAR_ERROR, payload: null});
}