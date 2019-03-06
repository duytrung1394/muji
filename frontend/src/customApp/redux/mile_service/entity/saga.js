import actions from './actions';
import { RESTEntityApi, RESTListApi } from '../../../../restApi';
import restAllSaga from '../../shared/entity/saga_generator';
import { takeEvery, put, call } from "redux-saga/effects";
import authActions from "../../../../redux/auth/actions";

const api = RESTEntityApi('mile-services');
// const mileHistoryApi = RESTListApi('mile-services/history');
// const accountInfoApi = RESTEntityApi('mile-services/account-info');
// const oldMileApi = RESTListApi('mile-services/old-mile');

// const getMileHistoryFunction = function* ({ payload }) {
//     try {
//         const response = yield call(mileHistoryApi.GET, payload);
//         yield put(actions.fetchMileHistory.success(response.data));
//     } catch (error) {
//         if (error.response.status == 401) {
//             yield put(authActions.unauthorized(error));
//         } else {
//             yield put(actions.fetchMileHistory.failure(error));
//         }
//     }
// };

// const getAccountInfoFunction = function* ({ payload }) {
//     try {
//         const response = yield call(accountInfoApi.GET, payload);
//         yield put(actions.fetchAccountInfo.success(response.data));
//     } catch (error) {
//         if (error.response.status == 401) {
//             yield put(authActions.unauthorized(error));
//         } else {
//             yield put(actions.fetchAccountInfo.failure(error));
//         }
//     }
// };

// const getOldMileFunction = function* ({ payload }) {
//     try {
//         const response = yield call(oldMileApi.GET, payload);
//         yield put(actions.fetchOldMile.success(response.data));
//     } catch (error) {
//         if (error.response.status == 401) {
//             yield put(authActions.unauthorized(error));
//         } else {
//             yield put(actions.fetchOldMile.failure(error));
//         }
//     }
// };

export default function* saga() {
    yield restAllSaga('mile-services', api, actions);
    // yield takeEvery(
    //     actions.fetchMileHistory.request.toString(),
    //     getMileHistoryFunction
    // )
    // yield takeEvery(
    //     actions.fetchAccountInfo.request.toString(),
    //     getAccountInfoFunction
    // );
    // yield takeEvery(
    //     actions.fetchOldMile.request.toString(),
    //     getOldMileFunction
    // );
}
