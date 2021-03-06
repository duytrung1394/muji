import { handleActions } from "redux-actions";

import restReducer, { restInitState } from "../../shared/entity/reducer";

const reducer = handleActions(
  {
    FAVORITE: {
      ENTITY: restReducer
    }
  },
  restInitState
);

export default reducer;
