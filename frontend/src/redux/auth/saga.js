import { all, takeEvery, put, call, fork } from "redux-saga/effects";
import { push } from "react-router-redux";
import actions from "./actions";
import settings from "../../settings";
import { saveToken, clearToken } from "./localStorage";
import api from "../../api";

function* loginRequest() {
  yield takeEvery("LOGIN_REQUEST", function*(action) {
    const { payload } = action;
    const postLoginApi = () =>
      api.post(`/api/v1/users/auth?${settings.dc()}`, {
        username: payload.username,
        password: payload.password
      });

    try {
      const response = yield call(postLoginApi);
      yield put(
        actions.loginSuccess(
          response.data.token,
          response.data.profile,
          payload.rememberMe
        )
      );
    } catch (e) {
      console.error(e);
      yield put(actions.loginError(e));
    }
  });
}

function* loginSuccess() {
  yield takeEvery(actions.LOGIN_SUCCESS, function*(action) {
    const payload = action.payload;
    if (payload.rememberMe) {
      saveToken(payload.token);

      // プロフィール情報保存...?
      // → localStorageに保存すべき情報なのか？ ログイン後に変更されるケースなども考慮すると
      // SPAロード時にサーバーに確認に行ってredux上にだけ保存するのが正しいのでは？
      // localStorage.setItem(
      //     'profile',
      //     CryptoJS.AES.encrypt(
      //         JSON.stringify(payload.profile),
      //         payload.token
      //     ).toString()
      // );
    }
  });
}

function* loginError() {
  yield takeEvery(actions.LOGIN_ERROR, function*() {
    clearToken();
  });
}

function* logout() {
  yield takeEvery(actions.LOGOUT, function*() {
    const postLogoutApi = () => api.delete("/api/v1/users/auth");

    try {
      yield call(postLogoutApi);
    } catch (e) {
      console.error(e);
    }

    clearToken();

    yield put(push("/"));
  });
}

export default function* rootSaga() {
  yield all([
    fork(loginRequest),
    fork(loginSuccess),
    fork(loginError),
    fork(logout)
  ]);
}

// EOF
