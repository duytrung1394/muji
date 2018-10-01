// 注：本ファイルを編集するとジェネレータの挙動が壊れるかもしれないので、かならず動作確認してください
import { all } from "redux-saga/effects";
import authSagas from "./auth/saga";
import passwordResetSagas from "./passwordResets/saga";
import passwordRenewalSagas from "./passwordRenewals/saga";
import customAppSagas from "../customApp/redux/sagas";
export default function* rootSaga() {
  yield all([
    authSagas(),
    passwordResetSagas(),
    passwordRenewalSagas(),
    customAppSagas()
  ]);
}
