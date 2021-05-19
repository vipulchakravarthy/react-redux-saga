import { takeEvery, call } from "redux-saga/effects";
import { types } from '../types';

import axios from 'axios';

function* asyncFetchRequest(action) {
    try {
        console.log("action payload", action.payload)
        const url = `https://reqres.in/api/users/${action.payload}`
        const response = yield call(() => {
            return axios.get(url)
        })
        console.log(response)
    } catch (err) {
        console.log(err);
    }
}

export function* fetchDataSaga() {
    yield takeEvery(types.SEND_REQUEST, asyncFetchRequest)
}