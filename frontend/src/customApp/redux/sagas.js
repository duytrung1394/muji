// 注：本ファイルを編集するとジェネレータの挙動が壊れるかもしれないので、かならず動作確認してください
import { all } from "redux-saga/effects";
import taskSagas from "./task/sagas";
import brandSagas from "./brand/sagas";
import skuSagas from "./sku/sagas";
import itemSagas from "./item/sagas";
import categorySagas from "./category/sagas";
import userSagas from "./user/sagas";
export default function* devSaga() {
  yield all([
    taskSagas(),
    userSagas(),
    categorySagas(),
    itemSagas(),
    skuSagas(),
    brandSagas()
  ]);
}
