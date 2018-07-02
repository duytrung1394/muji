import axios from 'axios';
import {all, takeEvery, put, call, fork} from 'redux-saga/effects';
import actions from './actions';
import settings from '../../settings';

export function* sendRequest() {

    yield takeEvery('SEND_REQUEST', function* (data) {

        let host = window.location.hostname;
        let protocol = window.location.protocol;
        let url = protocol + '//' + host + (window.location.port ? ':' + window.location.port : '');

        const postSendResetPasswordMailApi = () => axios.post(
            `${settings.apiUrl}/api/v1/users/send_reset_password_mail?${settings.dc()}`,
            {
                email: data.email,
                url: url,
            }, {
                'Accept': 'application/json'
            });

        try {
            yield call(postSendResetPasswordMailApi);

            yield put({
                type: actions.SEND_SUCCESS
            });

        } catch (e) {
            yield put({type: actions.SEND_ERROR});
        }

    });
}

export function* sendSuccess() {
    yield takeEvery(actions.SEND_SUCCESS, function* (payload) {
    });
}

export function* sendError() {
    yield takeEvery(actions.SEND_ERROR, function* () {
    });
}

export function* resetRequest() {

    yield takeEvery('RESET_REQUEST', function* (data) {
        const postResetPasswordApi = () => axios.post(
            `${settings.apiUrl}/api/v1/users/reset_password?${settings.dc()}`,
            {
                token: data.token,
                password: data.password,
            }, {
                'Accept': 'application/json'
            });

        try {
            yield call(postResetPasswordApi);

            yield put({
                type: actions.RESET_SUCCESS
            });

        } catch (e) {
            yield put({type: actions.RESET_ERROR});
        }

    });
}

export function* resetSuccess() {
    yield takeEvery(actions.RESET_SUCCESS, function* (payload) {
    });
}

export function* resetError() {
    yield takeEvery(actions.RESET_ERROR, function* () {
    });
}


export default function* rootSaga() {
    yield all([
        fork(sendRequest),
        fork(sendSuccess),
        fork(sendError),
        fork(resetRequest),
        fork(resetSuccess),
        fork(resetError),
    ]);
}

// EOF