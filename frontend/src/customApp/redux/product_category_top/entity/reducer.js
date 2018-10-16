import { handleActions } from "redux-actions";

import restReducer, { restInitState } from "../../shared/entity/reducer";

const reducer = handleActions(
  {
    PRODUCT_CATEGORY_TOP: {
      ENTITY: restReducer
    }
  },
  restInitState
);

export default reducer;
