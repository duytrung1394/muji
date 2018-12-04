import actions from "./actions";
import { RESTListApi } from "../../../../restApi";
import restAllSaga from "../../shared/list/saga_generator";
import { takeEvery, put, call } from "redux-saga/effects";
import authActions from "../../../../redux/auth/actions";

const api = RESTListApi("customer-reviews", "codes");
const listApi = RESTListApi("customer-reviews/seemore");

const getCustomerReviewApiGET = payload => listApi.GET(payload);

const getCustomerReviewFunction = function*({ payload }) {
  try {
    console.log("list sag getCustomerReviewFunctionに来ました");
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

export default function* saga() {
  yield restAllSaga(api, actions);
  yield takeEvery(
    actions.getCustomerReview.request.toString(),
    getCustomerReviewFunction
  );
}
