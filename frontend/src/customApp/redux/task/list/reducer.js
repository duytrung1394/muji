import { handleActions } from "redux-actions";

import restReducer, { restInitState } from "../../shared/list/reducer";

const reducer = handleActions(
  {
    TASK: {
      LIST: restReducer
    }
  },
  restInitState
);

export default reducer;
