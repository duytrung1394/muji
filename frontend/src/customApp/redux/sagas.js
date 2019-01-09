// 注：本ファイルを編集するとジェネレータの挙動が壊れるかもしれないので、かならず動作確認してください
import { all } from "redux-saga/effects";
import taskSagas from "./task/sagas";
import productDetailSagas from "./product_detail/sagas";
import customerReviewSagas from "./customer_review/sagas";
import donationTopSagas from "./donation_top/sagas";
import customerAddressSagas from "./customer_address/sagas";
import productCategoryTopSagas from "./product_category_top/sagas";
import topSagas from "./top/sagas";
import httpbinSagas from "./httpbin/sagas";
import fruitSagas from "./fruit/sagas";
export default function* devSaga() {
  yield all([
    taskSagas(),
    fruitSagas(),
    httpbinSagas(),
    topSagas(),
    productCategoryTopSagas(),
    customerAddressSagas(),
    customerReviewSagas(),
    donationTopSagas(),
    productDetailSagas()
  ]);
}
