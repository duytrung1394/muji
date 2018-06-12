import { all } from 'redux-saga/effects';
import taskSagas from './task/sagas';

export default function* devSaga() {
  yield all([taskSagas()]);
}
