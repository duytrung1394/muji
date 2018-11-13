import { handleActions } from "redux-actions";

import restReducer, { restInitState } from "../../shared/entity/reducer";

const reducer = handleActions(
  {
    CUSTOMER_ADDRESS: {
      ENTITY: restReducer
    }
  },
  restInitState
);

export default reducer;
