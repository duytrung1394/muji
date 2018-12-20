import actions from "./actions";
import { RESTEntityApi, RESTListApi } from "../../../../restApi";
import restAllSaga from "../../shared/entity/saga_generator";
import { takeEvery, put, call } from "redux-saga/effects";
import authActions from "../../../../redux/auth/actions";

const api = RESTEntityApi("donation-tops");
const giftcardApi = RESTListApi("donation-tops/payment/giftcard");
const confirmApi = RESTEntityApi("donation-tops/payment/confirm");

const getGiftcardFunction = function*({ payload }) {
  try {
    const response = yield call(giftcardApi.GET, payload);
    yield put(actions.doGiftcardInquiry.success(response.data));
  } catch (error) {
    if (error.response.status == 401) {
      yield put(authActions.unauthorized(error));
    } else {
      yield put(actions.doGiftcardInquiry.failure(error));
    }
  }
};

const confirmDonationFunction = function*({ payload }) {
  try {
    const response = yield call(confirmApi.POST, payload);
    yield put(actions.confirmDonation.success(response.data));
  } catch (error) {
    if (error.response.status == 401) {
      yield put(authActions.unauthorized(error));
    } else {
      yield put(actions.confirmDonation.failure(error));
    }
  }
};

export default function* saga() {
  yield restAllSaga("donation_top", api, actions);
  yield takeEvery(
    actions.doGiftcardInquiry.request.toString(),
    getGiftcardFunction
  );
  yield takeEvery(
    actions.confirmDonation.request.toString(),
    confirmDonationFunction
  );
}
