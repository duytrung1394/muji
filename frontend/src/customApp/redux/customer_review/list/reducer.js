import { handleActions } from "redux-actions";
import { Map } from "immutable";
import restReducer, { restInitState } from "../../shared/list/reducer";

const customRestInitState = restInitState.merge(
  Map({
    // TODO: fix
    sortFlg: false
  })
);

// GET
export const fetchRequest = (state, action) =>
  state
    .set("doSearch", false)
    .set("fetching", true)
    .set("fetched", false)
    .set("fetchError", false);

export const fetchSuccess = (state, action) =>
  state
    .set("entities", [...state.get("entities"), ...action.payload.data])
    .set("total", action.payload.total)
    .set("sortFlg", action.payload.sortFlg)
    .set("fetching", false)
    .set("fetched", true);

export const fetchFailure = (state, action) =>
  state
    .set("entities", [])
    .set("fetching", false)
    .set("fetchError", true);

export const fetchCleanup = (state, action) =>
  state
    .set("entities", [])
    .set("total", 0)
    .set("fetching", false)
    .set("fetched", false)
    .set("fetchError", false);

const reducer = handleActions(
  {
    CUSTOMER_REVIEW: {
      LIST: {
        ...restReducer,
        FETCH: {
          REQUEST: fetchRequest,
          SUCCESS: fetchSuccess,
          FAILURE: fetchFailure,
          CLEANUP: fetchCleanup
        },
        FETCH_BY_USER: {
          REQUEST: fetchRequest
        }
      }
    }
  },
  customRestInitState
);

export default reducer;