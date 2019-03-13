import { handleActions } from "redux-actions";
import { Map } from "immutable";

const initState = new Map({
  // ip: null,
  contents: '<p>test</p>',
  fetching: false,
  fetched: false,
  fetchError: null
});

const fetchIncludeRequest = (state, action) =>
  state
    .set("fetching", true)
    .set("fetched", false)
    .set("fetchError", null);

const fetchIncludeSuccess = (state, action) => 
  state
    // .set("ip", action.payload.origin)
    .set("fetching", false)
    .set("fetched", true);

const fetchIncludeFailure = (state, action) => 
  state
    // .set("ip", undefined)
    .set("fetching", false)
    .set("fetchError", true);

const fetchIncludeCleanup = (state, action) =>
  state
    // .set("ip", undefined)
    .set("fetching", false)
    .set("fetched", false)
    .set("fetchError", false);

const reducer = handleActions(
  {
    CMS: {
      CMDTY: {
        SECTION: {
          FETCH_INCLUDE: {
            REQUEST: fetchIncludeRequest,
            SUCCESS: fetchIncludeSuccess,
            FAILURE: fetchIncludeFailure,
            CLEANUP: fetchIncludeCleanup
          },
          // FETCH_SUBSECTIONS: {}
        },
        DETAIL: {
          FETCH_INCLUDE1: {
            REQUEST: fetchIncludeRequest,
            SUCCESS: fetchIncludeSuccess,
            FAILURE: fetchIncludeFailure,
            CLEANUP: fetchIncludeCleanup
          }
        }
      }
    }
  },
  initState
);

export default reducer;
