import { all } from 'redux-saga/effects';
import entitySaga from './entity/saga';
import listSaga from './list/saga';

export default function* sagas() {
  yield all([
    entitySaga(),
    listSaga(),
  ]);
}