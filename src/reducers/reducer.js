import intialState from './intialState';
import * as types from '../action-types/index';


export default function (state = intialState, action) {

    // eslint-disable-next-line default-case
    switch(action.type){
        case types.LOG_IN_SUCCESS: {
            return {...state, userDetails: action.payload};
        }

        case types.GET_INTENT_SUCCESS: {
            return {...state, intents: action.payload}
        }
    default: return {...state};
    }
}
