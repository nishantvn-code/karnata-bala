import intialState from './intialState';
import * as types from '../action-types/index';


 function mainState(state = intialState, action) {

    // eslint-disable-next-line default-case
    switch(action.type){
        case types.LOG_IN_SUCCESS: {
            return {...state, userDetails: action.payload};
        }

        case types.GET_NEWS_SUCCESS: {
            return {...state, newsPosts: action.payload}
        }
    default: return {...state};
    }
}
export default mainState;