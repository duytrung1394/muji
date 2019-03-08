import actions from "./actions";
import { RESTEntityApi } from "../../../../restApi";
import restAllSaga from "../../shared/entity/saga_generator";
import { takeEvery, put, call } from "redux-saga/effects";
import authActions from "../../../../redux/auth/actions";

const api = RESTEntityApi("orders");
const saveCartApi = RESTEntityApi("orders/saveShoppingCart");

const saveCartFunction = function*({ payload }) {
  try {
    const response = yield call(saveCartApi.POST, payload);
    yield put(actions.saveCart.success(response.data));
  } catch (error) {
    if (error.response.status == 401) {
      yield put(authActions.unauthorized(error));
    } else {
      yield put(actions.saveCart.failure(error));
    }
  }
};

export default function* saga() {
  yield restAllSaga("order", api, actions);
  yield takeEvery(actions.saveCart.request.toString(), saveCartFunction);
}
