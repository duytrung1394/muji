import { handleActions } from "redux-actions";

import restReducer, { restInitState } from "../../shared/list/reducer";

const reducer = handleActions(
  {
    PRODUCT_DETAIL: {
      LIST: restReducer
    }
  },
  restInitState
);

export default reducer;
