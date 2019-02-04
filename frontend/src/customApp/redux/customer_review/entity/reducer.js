import { handleActions } from "redux-actions";
import restReducer, { restInitState } from "../../shared/entity/reducer";

// GET
const getReportFetchRequest = (state, action) =>
  state
    .set("doSearch", false)
    .set("fetching", true)
    .set("fetched", false)
    .set("fetchError", false);

const getReportFetchSuccess = (state, action) =>
  state
    .set("entity", [...state.get("entity"), ...action.payload.data])
    .set("entity", action.payload.data)
    .set("total", action.payload.total)
    .set("sortFlg", action.payload.sortFlg)
    .set("userTotal", action.payload.userTotal)
    .set("fetching", false)
    .set("fetched", true);

const getReportFetchFailure = (state, action) =>
  state
    .set("entity", [])
    .set("fetching", false)
    .set("fetchError", true);

const getReportFetchCleanup = (state, action) =>
  state
    .set("entity", [])
    .set("total", 0)
    .set("fetching", false)
    .set("fetched", false)
    .set("fetchError", false);

const reducer = handleActions(
  {
    CUSTOMER_REVIEW: {
      ENTITY: {
        ...restReducer,
        GET_REPORT: {
          REQUEST: getReportFetchRequest,
          SUCCESS: getReportFetchSuccess,
          FAILURE: getReportFetchFailure,
          CLEANUP: getReportFetchCleanup
        }
      }
    }
  },
  restInitState
);

export default reducer;
