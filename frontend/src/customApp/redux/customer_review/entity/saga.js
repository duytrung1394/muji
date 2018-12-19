import actions from "./actions";
import { RESTEntityApi, RESTListApi } from "../../../../restApi";
import restAllSaga from "../../shared/entity/saga_generator";
import { call, put, takeEvery } from "redux-saga/effects";
import authActions from "../../../../redux/auth/actions";

const api = RESTEntityApi("customer-reviews");
const getReviewItemApi = RESTEntityApi("customer-reviews/getReviewItem");

const getReviewItemApiGET = payload => getReviewItemApi.GET(payload);

const getReviewItemFunction = function*({ payload }) {
  try {
    const response = yield call(getReviewItemApiGET, payload);
    yield put(actions.getCustomerReview.getReviewItem.success(response.data));
  } catch (error) {
    if (error.response.status == 401) {
      yield put(authActions.unauthorized(error));
    } else {
      yield put(actions.getCustomerReview.getReviewItem.failure(error));
    }
  }
};

export default function* saga() {
  yield restAllSaga("customer_review", api, actions);
  yield takeEvery(
    actions.getCustomerReview.getReviewItem.request.toString(),
    getReviewItemFunction
  );
}
