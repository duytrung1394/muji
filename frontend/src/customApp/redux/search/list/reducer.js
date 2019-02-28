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
<<<<<<< HEAD
          FETCH_ARTICLE: {
              REQUEST: fetchRequest
          }
=======
        FETCH_SERVICE: {
          REQUEST: fetchRequest
        }
>>>>>>> develop
      }
    }
  },
  restInitState
);

export default reducer;
