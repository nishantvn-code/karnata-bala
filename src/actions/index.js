import * as types from '../action-types/index';

export const logIn = () => ({
    type: types.LOG_IN
});

export const getNewsPosts = () => ({
    type: types.GET_NEWS
});
export const getNewsPostsById = payload => ({
    type: types.GET_NEWS_BY_ID, payload
});