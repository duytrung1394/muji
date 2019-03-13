import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import { Map } from "immutable";

const initState = new Map({
  contents: "",
  fetching: false,
  fetched: false,
  fetchError: null
});

const fetchRequest = (state, action) =>
  state
    .set("fetching", true)
    .set("fetched", false)
    .set("fetchError", null);

const fetchSuccess = (state, action) =>
  state
    .set("contents", action.payload)
    .set("fetching", false)
    .set("fetched", true);

const fetchFailure = (state, action) =>
  state
    .set("contents", "")
    .set("fetching", false)
    .set("fetchError", true);

const fetchCleanup = (state, action) =>
  state
    .set("contents", "")
    .set("fetching", false)
    .set("fetched", false)
    .set("fetchError", false);

const cmdtySectionInclude = handleActions(
  {
    CMS: {
      CMDTY: {
        SECTION: {
          INCLUDE: {
            FETCH: {
              REQUEST: fetchRequest,
              SUCCESS: fetchSuccess,
              FAILURE: fetchFailure,
              CLEANUP: fetchCleanup
            }
          }
        }
      }
    }
  },
  initState
);

const cmdtyDetailInclude1 = handleActions(
  {
    CMS: {
      CMDTY: {
        DETAIL: {
          INCLUDE1: {
            FETCH: {
              REQUEST: fetchRequest,
              SUCCESS: fetchSuccess,
              FAILURE: fetchFailure,
              CLEANUP: fetchCleanup
            }
          }
        }
      }
    }
  },
  initState
);

const cmdtyDetailInclude2 = handleActions(
  {
    CMS: {
      CMDTY: {
        DETAIL: {
          INCLUDE2: {
            FETCH: {
              REQUEST: fetchRequest,
              SUCCESS: fetchSuccess,
              FAILURE: fetchFailure,
              CLEANUP: fetchCleanup
            }
          }
        }
      }
    }
  },
  initState
);

const reducers = combineReducers({
  Cmdty: combineReducers({
    Section: combineReducers({
      Include: cmdtySectionInclude
    }),
    Detail: combineReducers({
      Include1: cmdtyDetailInclude1,
      Include2: cmdtyDetailInclude2
    })
  })
});

export default reducers;
