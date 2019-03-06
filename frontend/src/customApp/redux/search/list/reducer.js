import { handleActions } from "redux-actions";

import restReducer, {
  fetchRequest,
  restInitState
} from "../../shared/list/reducer";

const reducer = handleActions(
  {
    SEARCH: {
      LIST: {
        ...restReducer,
        FETCH_ITEM: {
          REQUEST: fetchRequest
        },
        FETCH_ARTICLE: {
          REQUEST: fetchRequest
        },
        FETCH_SERVICE: {
          REQUEST: fetchRequest
        }
      }
    }
  },
  restInitState
);

export default reducer;
