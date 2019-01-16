import { handleActions } from "redux-actions";

import restReducer, { restInitState } from "../../shared/list/reducer";

// GET
export const fetchRequest = (state, action) =>
  state
    .set("doSearch", false)
    .set("fetching", true)
    .set("fetched", false)
    .set("fetchError", false);

const reducer = handleActions(
  {
    ORDER: {
      LIST: {
        ...restReducer,
        FETCH_PURCHASE_HISTORY: {
          REQUEST: fetchRequest
        }
      }
    }
  },
  restInitState
);

export default reducer;
