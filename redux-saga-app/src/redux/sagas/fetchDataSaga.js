import { takeEvery, call, put } from "redux-saga/effects";
import { types } from '../types';

import axios from 'axios';
import { fetchDataFailure, fetchDataSuccess } from '../actions';

function* asyncFetchRequest(action) {
    try {
        console.log("action payload", action.payload)
        const url = `https://reqres.in/api/users/${action.payload}`
        const response = yield call(() => {
            return axios.get(url)
        })
        console.log(response)
        yield put(fetchDataSuccess(response.data.data.first_name))
    } catch (err) {
        console.log(err);
        yield put(fetchDataFailure(err))
    }
}

export function* fetchDataSaga() {
    yield takeEvery(types.SEND_REQUEST, asyncFetchRequest)
}