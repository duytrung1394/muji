import actions from "./actions";
import { RESTEntityApi, RESTListApi } from "../../../../restApi";
import restAllSaga from "../../shared/entity/saga_generator";
import { takeEvery, put, call } from "redux-saga/effects";
import authActions from "../../../../redux/auth/actions";

const api = RESTEntityApi("customer_reviews");
const listApi = RESTListApi("customer_reviews/seemore");

const getCustomerReviewApiGET = payload => listApi.GET(payload);

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

const changePostReviewViewfunction = function*({payload}){
  console.log("来ました");
  yield put(actions.getCustomerReview.change({payload}));
}

export default function* saga() {
  yield restAllSaga("customer_review", api, actions);
  yield takeEvery(
    actions.getCustomerReview.request.toString(),
    getCustomerReviewFunction
  );
  yield takeEvery(
    actions.getCustomerReview.change.toString(),
    changePostReviewViewfunction
  );
}
