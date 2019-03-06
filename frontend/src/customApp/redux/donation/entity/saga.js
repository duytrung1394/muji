import actions from "./actions";
import { RESTEntityApi, RESTListApi } from "../../../../restApi";
import restAllSaga from "../../shared/entity/saga_generator";
import { takeEvery, put, call } from "redux-saga/effects";
import authActions from "../../../../redux/auth/actions";

const api = RESTEntityApi("donations");
const giftcardApi = RESTListApi("donations/payment/giftcard");
const confirmApi = RESTEntityApi("donations/payment/confirm");
const orderApi = RESTEntityApi("donations/payment/order");

const getGiftcardFunction = function* ({ payload }) {
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

const confirmDonationFunction = function* ({ payload }) {
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

const orderDonationFunction = function* ({ payload }) {
    try {
        const response = yield call(orderApi.POST, payload);
        yield put(actions.orderDonation.success(response.data));
    } catch (error) {
        if (error.response.status == 401) {
            yield put(authActions.unauthorized(error));
        } else {
            yield put(actions.orderDonation.failure(error));
        }
    }
};

export default function* saga() {
    yield restAllSaga("donations", api, actions);
    yield takeEvery(
        actions.doGiftcardInquiry.request.toString(),
        getGiftcardFunction
    );
    yield takeEvery(
        actions.confirmDonation.request.toString(),
        confirmDonationFunction
    );
    yield takeEvery(
        actions.orderDonation.request.toString(),
        orderDonationFunction
    );
}
