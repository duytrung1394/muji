// 注：本ファイルを編集するとジェネレータの挙動が壊れるかもしれないので、かならず動作確認してください
import { all } from 'redux-saga/effects';
import taskSagas from './task/sagas';
import userSagas from './user/sagas';
export default function* devSaga() {
  yield all([
    taskSagas(),
    userSagas()
  ]);
}