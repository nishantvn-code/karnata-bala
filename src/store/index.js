import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as types from '../action-types/index';
import urlConst from '../constants/url-constants';
import {postService, getService} from '../services/index';

// eslint-disable-next-line require-yield
function* logIn(){
 const payload = {
    
 };
 const response = yield call(postService, urlConst.logIn, payload);
 if(response.status === 200 && response.data){
     sessionStorage.setItem('userDetails', JSON.stringify(response.data));
     yield put({type: types.LOG_IN_SUCCESS, payload: response.data});
     yield call(getIntents);
 } else {
    yield put({type: types.LOG_IN_SUCCESS, payload: []});
 }
}
function* getIntents(){
    const userDetail = JSON.parse(sessionStorage.getItem('userDetails'));
    const auth = userDetail.id;
    const response = yield call(getService, urlConst.getIntents, auth);
    if(response.status === 200 && response.data){
        yield put({type: types.GET_INTENT_SUCCESS, payload: response.data});
    } else {
       yield put({type: types.GET_INTENT_SUCCESS, payload: response});
    }
}

export default function* () {
    yield takeEvery(types.LOG_IN, logIn);
}