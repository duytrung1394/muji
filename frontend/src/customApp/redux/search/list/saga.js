import actions from "./actions";
import { RESTListApi } from "../../../../restApi";
import restAllSaga from "../../shared/list/saga_generator";
import { takeEvery, put, call } from "redux-saga/effects";
import authActions from "../../../../redux/auth/actions";

const api = RESTListApi("search/stores", "codes");
const listItemApi = RESTListApi("search/items", "codes");

const getListItemFunction = function*({ payload }) {
  try {
    const response = yield call(listItemApi.GET, payload);
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
  yield takeEvery(actions.fetchItem.request.toString(), getListItemFunction);
}
