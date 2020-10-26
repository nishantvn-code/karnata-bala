import intialState from './intialState';
import * as types from '../action-types/index';


 function mainState(state = intialState, action) {

    // eslint-disable-next-line default-case
    switch(action.type){
        case types.LOG_IN_SUCCESS: {
            return {...state, userDetails: action.payload};
        }

        case types.GET_NEWS_SUCCESS: {
            let homePagePosts = [...action.payload];
            return {...state, newsPosts: action.payload,
                 homePagePosts: homePagePosts.splice(0, 4)}
        }
        case types.GET_NEWS_BY_ID: {
            const post = [];
            const id = action.payload;
            const index = state.newsPosts.findIndex(ele => ele.id === id);
            if(index !== -1){
                post.push(state.newsPosts[index]);
            }
            return {...state,  selectedPost : post}
        }
        
    default: return {...state};
    }
}
export default mainState;