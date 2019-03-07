import { handleActions } from "redux-actions";
import { Map } from "immutable";
import restReducer, { restInitState } from "../../shared/entity/reducer";

const reducer = handleActions(
  {
    MILE_SERVICE: {
      ENTITY: {
        ...restReducer
      }
    }
  },
  restInitState
);

export default reducer;
