import actions from "./actions";
import { RESTListApi } from "../../../../restApi";
import restAllSaga from "../../shared/list/saga_generator";
import { takeEvery, put, call } from "redux-saga/effects";
import authActions from "../../../../redux/auth/actions";

const api = RESTListApi("orders", "codes");
const listByReservationApi = RESTListApi("orders/reservation-history");
const listStoreReserveApi = RESTListApi("orders/store-reserve");

const getListByReservationHistoryFunction = function*({ payload }) {
  try {
    const response = yield call(listByReservationApi.GET, payload);
    yield put(actions.fetch.success(response.data));
  } catch (error) {
    if (error.response.status == 401) {
      yield put(authActions.unauthorized(error));
    } else {
      yield put(actions.fetch.failure(error));
    }
  }
};

const getListStoreReserveFunction = function*({ payload }) {
  try {
    const response = yield call(listStoreReserveApi.GET, payload);
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
    actions.fetchByReservationHistory.request.toString(),
    getListByReservationHistoryFunction
  );
  yield takeEvery(
    actions.fetchStoreReserve.request.toString(),
    getListStoreReserveFunction
  );
}
