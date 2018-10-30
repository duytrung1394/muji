import actions from "./actions";
import { RESTEntityApi, RESTListApi } from "../../../../restApi";
import restAllSaga from "../../shared/entity/saga_generator";
import { call, put, all, takeEvery } from "redux-saga/effects";
import authActions from "../../../../redux/auth/actions";

const api = RESTEntityApi("tops");
const listApi = RESTListApi("tops/from-mujis");

const getFromMujisApiGET = payload => listApi.GET(payload);

const getFromMujisFunction = function*({ payload }) {
  try {
    const response = yield call(getFromMujisApiGET, payload);
    yield put(actions.getFromMujis.success(response.data));
  } catch (error) {
    if (error.response.status == 401) {
      yield put(authActions.unauthorized(error));
    } else {
      yield put(actions.getFromMujis.failure(error));
    }
  }
};

export default function* saga() {
  yield restAllSaga("top", api, actions);
  yield takeEvery(
    actions.getFromMujis.request.toString(),
    getFromMujisFunction
  );
}
