import actions from "./actions";
import { RESTListApi } from "../../../../restApi";
import restAllSaga from "../../shared/list/saga_generator";
import { takeEvery, put, call } from "redux-saga/effects";
import authActions from "../../../../redux/auth/actions";

const api = RESTListApi("orders", "codes");
const listStoreReserveApi = RESTListApi("orders/store-reserve");
const listPurchaseHistoryApi = RESTListApi("orders/purchase-history");

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

const getListByPurchaseHistoryFunction = function*({ payload }) {
  try {
    const response = yield call(listPurchaseHistoryApi.GET, payload);
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
    actions.fetchStoreReserve.request.toString(),
    getListStoreReserveFunction
  );
  yield takeEvery(
    actions.fetchPurchaseHistory.request.toString(),
    getListByPurchaseHistoryFunction
  );
}
