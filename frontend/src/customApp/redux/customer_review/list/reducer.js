import { handleActions } from "redux-actions";

import restReducer, { restInitState } from "../../shared/list/reducer";

const reducer = handleActions(
  {
    CUSTOMER_REVIEW: {
      LIST: restReducer
    }
  },
  restInitState
);

export default reducer;
