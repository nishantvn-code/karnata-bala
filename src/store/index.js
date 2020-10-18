import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as types from '../action-types/index';
import urlConst from '../constants/url-constants';
import {postService, getService} from '../services/index';
import newsPosts from "../json/news";

// eslint-disable-next-line require-yield
function* getNews(){
//  const response = yield call(getService, urlConst.getNewsPost);
//  if(response.status === 200 && response){
//      yield put({type: types.GET_NEWS_SUCCESS, payload: response});
//  } else {
//     yield put({type: types.GET_NEWS_SUCCESS, payload: []});
//  }
yield put({type: types.GET_NEWS_SUCCESS, payload: newsPosts});
}

export default function* () {
    yield takeEvery(types.GET_NEWS, getNews);
}