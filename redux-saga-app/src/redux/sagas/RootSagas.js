import { all } from 'redux-saga/effects';

import { fetchDataSaga } from './fetchDataSaga';

export default function* RootSaga() {
    yield all([fetchDataSaga()])
}