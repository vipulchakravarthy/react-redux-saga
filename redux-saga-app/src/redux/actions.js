import { types } from './types';

export function fetchData(data) {
    console.log("called the action fetch data")
    return {
        type: types.SEND_REQUEST,
        payload: data
    }
}

export function fetchDataSuccess(data) {
    return {
        type: types.SEND_REQUEST_SUCCESS,
        payload: data
    }
}

export function fetchDataFailure(error) {
    return {
        type: types.SEND_REQUEST_FAILURE,
        payload: {},
        error: error
    }
}