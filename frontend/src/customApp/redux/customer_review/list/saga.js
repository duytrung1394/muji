import actions from "./actions";
import { RESTListApi, RESTEntityApi } from "../../../../restApi";
import restAllSaga from "../../shared/list/saga_generator";
import { takeEvery, put, call } from "redux-saga/effects";
import authActions from "../../../../redux/auth/actions";

const api = RESTListApi("customer-reviews", "codes");
const listApi = RESTListApi("customer-reviews");
const reportApi = RESTEntityApi("customer-reviews");

const getCustomerReviewApiGET = payload => listApi.GET(payload);
const getCustomerReviewReportApiGet = payload => reportApi.GET(payload);

const getCustomerReviewFunction = function*({ payload }) {
  try {
    const response = yield call(getCustomerReviewApiGET, payload);
    yield put(actions.getCustomerReview.success(response.data));
  } catch (error) {
    if (error.response.status == 401) {
      yield put(authActions.unauthorized(error));
    } else {
      yield put(actions.getCustomerReview.failure(error));
    }
  }
};

const getCustomerReviewReportFunction = function*({ payload }) {
  try {
    const response = yield call(getCustomerReviewReportApiGet, payload);
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
    actions.getCustomerReview.request.toString(),
    getCustomerReviewFunction
  );
  yield takeEvery(
    actions.getReport.request.toString(),
    getCustomerReviewReportFunction
  );
}
