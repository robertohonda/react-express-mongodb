import {SET_LANGUAGE} from './types.js';

export const setLanguage = (language) => dispatch => {
    dispatch({
        type: SET_LANGUAGE,
        payload: language
    })
}