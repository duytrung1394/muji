import { handleActions } from "redux-actions";

import restReducer, {
  restInitState,
  fetchRequest
} from "../../shared/list/reducer";

const reducer = handleActions(
  {
    ORDER: {
      LIST: {
        ...restReducer,
        FETCH_RESERVATION_HISTORY: {
          REQUEST: fetchRequest
        },
        FETCH_STORE_RESERVE: {
          REQUEST: fetchRequest
        },
        FETCH_PURCHASE_HISTORY: {
          REQUEST: fetchRequest
        }
      }
    }
  },
  restInitState
);

export default reducer;
