import actions from "./actions";
import { RESTEntityApi, RESTListApi } from "../../../../restApi";
import restAllSaga from "../../shared/entity/saga_generator";
import { call, put, takeEvery } from "redux-saga/effects";
import authActions from "../../../../redux/auth/actions";

const api = RESTEntityApi("customer-reviews");
const listApi = RESTListApi("customer-reviews/getOneMock");

const getOneMockApiGET = payload => listApi.GET(payload);

const getOneMockFunction = function*({ payload }) {
  try {
    const response = yield call(getOneMockApiGET, payload);
    yield put(actions.getCustomerReview.getOneMock.success(response.data));
  } catch (error) {
    if (error.response.status == 401) {
      yield put(authActions.unauthorized(error));
    } else {
      yield put(actions.getCustomerReview.getOneMock.failure(error));
    }
  }
};

export default function* saga() {
  yield restAllSaga("customer_review", api, actions);
  yield takeEvery(
    actions.getCustomerReview.getOneMock.request.toString(),
    getOneMockFunction
  );
}
