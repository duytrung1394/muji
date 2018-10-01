import { handleActions } from 'redux-actions';
import { Map } from "immutable";

const initState = new Map({
  ip: null,
  fetching: false,
  fetched: false,
  fetchError: null,
});

const ipFetchRequest = (state, action) =>
  state
    .set("fetching", true)
    .set("fetched", false)
    .set("fetchError", null);

const ipFetchSuccess = (state, action) => {
  return state
    .set("ip", action.payload.origin)
    .set("fetching", false)
    .set("fetched", true);
}

const ipFetchFailure = (state, action) => {
  return state
    .set("ip", undefined)
    .set("fetching", false)
    .set("fetchError", true);
}
const ipFetchCleanup = (state, action) =>
  state
    .set("ip", undefined)
    .set("fetching", false)
    .set("fetched", false)
    .set("fetchError", false);

const reducer = handleActions({
  HTTPBIN: {
    IP: {
      FETCH: {
        REQUEST: ipFetchRequest,
        SUCCESS: ipFetchSuccess,
        FAILURE: ipFetchFailure,
        CLEANUP: ipFetchCleanup
      },
    }
  }
}, initState);

export default reducer;
