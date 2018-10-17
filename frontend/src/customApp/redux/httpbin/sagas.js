import axios from "axios";
import { call, put, all, takeEvery } from "redux-saga/effects";
import actions from "./actions";
import authActions from "../../../redux/auth/actions";

function* fetchIpSaga() {
  try {
    const fetchIp = () => axios.get("https://httpbin.org/ip");
    const response = yield call(fetchIp);
    yield put(actions.ip.fetch.success(response.data));
  } catch (error) {
    if (error.response.status == 401) {
      yield put(authActions.unauthorized(error));
    } else {
      yield put(actions.ip.fetch.failure(error));
    }
  }
}

export default function* saga() {
  yield all([takeEvery(actions.ip.fetch.request.toString(), fetchIpSaga)]);
}
