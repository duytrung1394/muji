import actions from "./actions";
import { RESTListApi } from "../../../../restApi";
import restAllSaga from "../../shared/list/saga_generator";
import { takeEvery, put, call } from "redux-saga/effects";
import authActions from "../../../../redux/auth/actions";

const api = RESTListApi("customer-reviews", "codes");
const listByUserApi = RESTListApi("customer-reviews/user");
const listByFollowingApi = RESTListApi("customer-reviews/following");
const listByItemgApi = RESTListApi("customer-reviews/item");

const getListByUserFunction = function*({ payload }) {
  try {
    const response = yield call(listByUserApi.GET, payload);
    yield put(actions.fetch.success(response.data));
  } catch (error) {
    if (error.response.status == 401) {
      yield put(authActions.unauthorized(error));
    } else {
      yield put(actions.fetch.failure(error));
    }
  }
};

const getListByFollowingFunction = function*({ payload }) {
  try {
    const response = yield call(listByFollowingApi.GET, payload);
    yield put(actions.fetch.success(response.data));
  } catch (error) {
    if (error.response.status == 401) {
      yield put(authActions.unauthorized(error));
    } else {
      yield put(actions.fetch.failure(error));
    }
  }
};

const getListByItemFunction = function*({ payload }) {
  try {
    const response = yield call(listByItemgApi.GET, payload);
    yield put(actions.fetch.success(response.data));
  } catch (error) {
    if (error.response.status == 401) {
      yield put(authActions.unauthorized(error));
    } else {
      yield put(actions.fetch.failure(error));
    }
  }
};

export default function* saga() {
  yield restAllSaga(api, actions);
  yield takeEvery(
    actions.fetchByUser.request.toString(),
    getListByUserFunction
  );
  yield takeEvery(
    actions.fetchByFollowing.request.toString(),
    getListByFollowingFunction
  );
  yield takeEvery(
    actions.fetchByItem.request.toString(),
    getListByItemFunction
  );
}
