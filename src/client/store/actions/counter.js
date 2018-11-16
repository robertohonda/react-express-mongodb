import {ADD_COUNTER, DEC_COUNTER} from './types.js';

export const addCounter = (value) => dispatch => {
    dispatch({
        type: ADD_COUNTER,
        payload: value+1
    })
}

export const decCounter = (value) => dispatch => {
    dispatch({
        type: DEC_COUNTER,
        payload: value-1
    })
}