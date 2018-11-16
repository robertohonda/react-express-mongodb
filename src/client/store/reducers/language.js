import {SET_LANGUAGE} from '../actions/types';
import { language } from '../../config/translation'

const initialState = language

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_LANGUAGE:
            return action.payload
        default:
            return state;
    }
};