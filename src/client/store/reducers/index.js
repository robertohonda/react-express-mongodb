import {combineReducers} from 'redux';
import counter from './counter';
import _language from './language'

export default combineReducers({
    counter,
    _language
})