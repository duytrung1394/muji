import axios from 'axios';
import {all, takeEvery, put, call, fork} from 'redux-saga/effects';
import actions from './actions';
import settings from '../../settings';
import {getToken} from "../../helpers/utility";
import GlobalState from "../../globalState";
import CryptoJS from 'crypto-js';

export function* renewalRequest() {

    yield takeEvery('RENEWAL_REQUEST', function* (data) {

        const postRenewalPasswordApi = () => axios.post(
            `${settings.apiUrl}/users/renewal_password?${settings.dc()}`,
            {
                password: data.password,
            }, {
                headers: {
                    'Accept': 'application/json',
                    'content-type': 'application/json',
                    'Authorization': 'Bearer ' + getToken().get('idToken')
                }
            });

        try {
            yield call(postRenewalPasswordApi);

            // プロフィール情報取得
            let profile = GlobalState.profile;
            profile.reset_password = 0;
            profile = JSON.stringify(profile);

            // プロフィール情報保存
            localStorage.setItem(
                'profile',
                CryptoJS.AES.encrypt(
                    profile,
                    getToken().get('idToken')
                ).toString()
            );

            yield put({
                type: actions.RENEWAL_SUCCESS
            });

        } catch (e) {
            yield put({type: actions.RENEWAL_ERROR});
        }

    });
}

export function* renewalSuccess() {
    yield takeEvery(actions.RENEWAL_SUCCESS, function* (payload) {



    });
}

export function* renewalError() {
    yield takeEvery(actions.RENEWAL_ERROR, function* () {
    });
}


export default function* rootSaga() {
    yield all([
        fork(renewalRequest),
        fork(renewalSuccess),
        fork(renewalError),
    ]);
}

// EOF