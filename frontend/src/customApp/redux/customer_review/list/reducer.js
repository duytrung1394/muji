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
const fetchRequest = (state, action) =>
  state
    .set("doSearch", false)
    .set("fetching", true)
    .set("fetched", false)
    .set("fetchError", false);

const fetchSuccess = (state, action) => {
  return state
    .set("entities", [...state.get("entities"), ...action.payload.data])
    .set("entities", action.payload.data)
    .set("total", action.payload.total)
    .set("sortFlg", action.payload.sortFlg)
    .set("userTotal", action.payload.userTotal)
    .set("fetching", false)
    .set("fetched", true);
}

const fetchFailure = (state, action) =>
  state
    .set("entities", [])
    .set("fetching", false)
    .set("fetchError", true);

const fetchCleanup = (state, action) =>
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
        },
        FETCH_BY_FOLLOWING: {
          REQUEST: fetchRequest
        },
        FETCH_BY_ITEM: {
          REQUEST: fetchRequest
        }
      }
    }
  },
  customRestInitState
);

export default reducer;
