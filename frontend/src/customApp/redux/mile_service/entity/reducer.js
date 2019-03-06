import { handleActions } from 'redux-actions';
import { Map } from "immutable";
import restReducer, { restInitState } from '../../shared/entity/reducer';

const initState = restInitState.merge(
    Map({
        'mile_history': [],
        'account_info': {},
        'old_mile': [],
        // 'fetching': false,
        // 'fetched': false,
        // 'fetchError': false,
        // 'fetchingAccountInfo': false,
        // 'fetchedAccountInfo': false,
        // 'fetchAccountInfoError': false,
        // 'fetchingOldMile': false,
        // 'fetchedOldMile': false,
        // 'fetchOldMileError': false,
    })
);

// GET
// const fetchMileHistoryRequest = (state, action) =>
//     state
//         .set("fetching", true)
//         .set("fetched", false)
//         .set("fetchError", false);

// const fetchMileHistorySuccess = (state, action) => {
//     console.log(action.payload);
//     state
//         .set("mile_history", action.payload.data)
//         .set("fetching", false)
//         .set("fetched", true);
// }

// const fetchMileHistoryFailure = (state, action) =>
//     state
//         .set("mile_history", [])
//         .set("fetching", false)
//         .set("fetchError", true);

// const fetchMileHistoryCleanup = (state, action) =>
//     state
//         .set("mile_history", [])
//         .set("fetching", false)
//         .set("fetched", false)
//         .set("fetchError", false);

// GET ACCOUNT INFORMATION
// const fetchAccountInfoRequest = (state, action) =>
//     state
//         .set("fetchingAccountInfo", true)
//         .set("fetchedAccountInfo", false)
//         .set("fetchAccountInfoError", false);

// const fetchAccountInfoSuccess = (state, action) =>
//     state
//         .set("account_info", action.payload.data)
//         .set("fetchingAccountInfo", false)
//         .set("fetchedAccountInfo", true);

// const fetchAccountInfoFailure = (state, action) =>
//     state
//         .set("account_info", [])
//         .set("fetchingAccountInfo", false)
//         .set("fetchAccountInfoError", true);

// const fetchAccountInfoCleanup = (state, action) =>
//     state
//         .set("account_info", [])
//         .set("fetchingAccountInfo", false)
//         .set("fetchedAccountInfo", false)
//         .set("fetchAccountInfoError", false);

// GET OLD MILE
// const fetchOldMileRequest = (state, action) =>
//     state
//         .set("fetchingOldMile", true)
//         .set("fetchedOldMile", false)
//         .set("fetchOldMileError", false);

// const fetchOldMileSuccess = (state, action) =>
//     state
//         .set("old_mile", action.payload.data)
//         .set("fetchingOldMile", false)
//         .set("fetchedOldMile", true);

// const fetchOldMileFailure = (state, action) =>
//     state
//         .set("old_mile", [])
//         .set("fetchingOldMile", false)
//         .set("fetchOldMileError", true);

// const fetchOldMileCleanup = (state, action) =>
//     state
//         .set("old_mile", [])
//         .set("fetchingOldMile", false)
//         .set("fetchedOldMile", false)
//         .set("fetchOldMileError", false);

const reducer = handleActions({
    MILE_SERVICE: {
        ENTITY: {
            ...restReducer,
            // GET_MILE_HISTORY: {
            //     REQUEST: fetchMileHistoryRequest,
            //     SUCCESS: fetchMileHistorySuccess,
            //     FAILURE: fetchMileHistoryFailure,
            //     CLEANUP: fetchMileHistoryCleanup
            // },
            // GET_ACCOUNT_INFO: {
            //     REQUEST: fetchAccountInfoRequest,
            //     SUCCESS: fetchAccountInfoSuccess,
            //     FAILURE: fetchAccountInfoFailure,
            //     CLEANUP: fetchAccountInfoCleanup
            // },
            // GET_OLD_MILE: {
            //     REQUEST: fetchOldMileRequest,
            //     SUCCESS: fetchOldMileSuccess,
            //     FAILURE: fetchOldMileFailure,
            //     CLEANUP: fetchOldMileCleanup
            // }
        },
    }
}, initState);

export default reducer;
