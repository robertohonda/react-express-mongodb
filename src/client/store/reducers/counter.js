import { ADD_COUNTER, DEC_COUNTER } from '../actions/types';

const initialState = 0

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return action.payload
    case DEC_COUNTER:
      return action.payload
    default:
      return state;
  }
};