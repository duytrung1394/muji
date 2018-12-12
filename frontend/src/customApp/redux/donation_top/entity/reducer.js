import { handleActions } from "redux-actions";
import { Map } from "immutable";
import restReducer, { restInitState } from "../../shared/entity/reducer";

const initState = restInitState.merge(
  Map({
    links: {}
  })
);

// GET
const fetchRequest = (state, action) =>
  state
    .set("fetching", true)
    .set("fetched", false)
    .set("fetchError", false);

const fetchSuccess = (state, action) =>
  state
    .set("entity", action.payload.data)
    .set("links", action.payload.links)
    .set("fetching", false)
    .set("fetched", true);

const fetchFailure = (state, action) =>
  state
    .set("entity", {})
    .set("links", {})
    .set("fetching", false)
    .set("fetchError", true);

const fetchCleanup = (state, action) =>
  state
    .set("entity", {})
    .set("links", {})
    .set("fetching", false)
    .set("fetched", false)
    .set("fetchError", false);

const reducer = handleActions(
  {
    DONATION_TOP: {
      ENTITY: {
        ...restReducer,
        FETCH: {
          REQUEST: fetchRequest,
          SUCCESS: fetchSuccess,
          FAILURE: fetchFailure,
          CLEANUP: fetchCleanup
        }
      }
    }
  },
  restInitState
);

export default reducer;
