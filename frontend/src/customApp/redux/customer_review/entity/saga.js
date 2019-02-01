import actions from "./actions";
import { RESTEntityApi } from "../../../../restApi";
import restAllSaga from "../../shared/entity/saga_generator";
import { takeEvery, put, call } from "redux-saga/effects";
import authActions from "../../../../redux/auth/actions";

const api = RESTEntityApi("customer-reviews");
const reportApi = RESTEntityApi("customer-reviews");

const getCustomerReviewReportApiGet = payload => reportApi.GET(payload);

const getCustomerReviewReportFunction = function*({ payload }) {
  try {
    const response = yield call(getCustomerReviewReportApiGet, payload);
    yield put(actions.getReport.success(response.data));
  } catch (error) {
    if (error.response.status == 401) {
      yield put(authActions.unauthorized(error));
    } else {
      yield put(actions.getReport.failure(error));
    }
  }
};

export default function* saga() {
  yield restAllSaga("customer_reviews", api, actions);
  yield takeEvery(
    actions.getReport.request.toString(),
    getCustomerReviewReportFunction
  );
}
