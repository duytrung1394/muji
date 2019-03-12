// 注：本ファイルを編集するとジェネレータの挙動が壊れるかもしれないので、かならず動作確認してください
import { all } from "redux-saga/effects";
import taskSagas from "./task/sagas";
import couponSagas from "./coupon/sagas";
import reviewSagas from "./review/sagas";
import accountSagas from "./account/sagas";
import productDetailSagas from "./product_detail/sagas";
import searchSagas from "./search/sagas";
import favoriteSagas from "./favorite/sagas";
import donationSagas from "./donation/sagas";
import lotterySagas from "./lottery/sagas";
import orderSagas from "./order/sagas";
import customerReviewSagas from "./customer_review/sagas";
import customerAddressSagas from "./customer_address/sagas";
import productCategoryTopSagas from "./product_category_top/sagas";
import topSagas from "./top/sagas";
import httpbinSagas from "./httpbin/sagas";
import fruitSagas from "./fruit/sagas";
import deliverySagas from "./delivery/sagas";

export default function* devSaga() {
  yield all([
    taskSagas(),
    fruitSagas(),
    httpbinSagas(),
    topSagas(),
    productCategoryTopSagas(),
    customerAddressSagas(),
    customerReviewSagas(),
    donationSagas(),
    orderSagas(),
    reviewSagas(),
    productDetailSagas(),
    favoriteSagas(),
    searchSagas(),
    lotterySagas(),
    deliverySagas(),
    accountSagas(),
    couponSagas()
  ]);
}
