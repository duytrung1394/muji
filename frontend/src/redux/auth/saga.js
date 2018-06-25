import axios from 'axios';
import {all, takeEvery, put, call, fork} from 'redux-saga/effects';
import {push} from 'react-router-redux';
import {clearToken, getToken} from '../../helpers/utility';
import actions from './actions';
import settings from '../../settings';
import CryptoJS from 'crypto-js';

const apiUrl = settings.apiUrl;

const dc = () => '_dc=' + Math.floor((new Date()).getTime() / 1000);

export function* loginRequest() {

    yield takeEvery('LOGIN_REQUEST', function* (action) {
        const { payload } = action;
        const postLoginApi = () => axios.post(
            `${apiUrl}/api/v1/users/auth?${dc()}`,
            {
                username: payload.username,
                password: payload.password
            }, {
                'Accept': 'application/json'
            });

        try {
            const response = yield call(postLoginApi);
            yield put({
                type: actions.LOGIN_SUCCESS,
                token: response.data.token,
                profile: response.data.profile,
            });

        } catch (e) {
            yield put({type: actions.LOGIN_ERROR});
        }

    });
}

export function* loginSuccess() {
    yield takeEvery(actions.LOGIN_SUCCESS, function* (payload) {

        // トークン保存
        yield localStorage.setItem('id_token', payload.token);

        // プロフィール情報保存
        yield localStorage.setItem(
            'profile',
            CryptoJS.AES.encrypt(
                JSON.stringify(payload.profile),
                payload.token
            ).toString()
        );

    });
}

export function* loginError() {
    yield takeEvery(actions.LOGIN_ERROR, function* () {
    });
}

export function* logout() {
    yield takeEvery(actions.LOGOUT, function* () {

        const postLogoutApi = () => axios.delete(
            apiUrl + '/api/v1/users/auth',
            {
                headers: {
                    'Accept': 'application/json',
                    'content-type': 'application/json',
                    'Authorization': 'Bearer ' + getToken().get('idToken')
                }
            });

        try {
            yield call(postLogoutApi);
        } catch (e) {
        }

        clearToken();

        yield put(push('/'));
    });
}

export default function* rootSaga() {
    yield all([
        fork(loginRequest),
        fork(loginSuccess),
        fork(loginError),
        fork(logout),
    ]);
}

// EOF