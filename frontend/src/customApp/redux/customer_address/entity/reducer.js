import { handleActions } from "redux-actions";
import restReducer, { restInitState } from "../../shared/entity/reducer";

const confirmEntity = (state, action) => state.set("entity", action.payload);

const reducer = handleActions(
  {
    CUSTOMER_ADDRESS: {
      ENTITY: {
        ...restReducer,
        CONFIRM_ENTITY: confirmEntity
      }
    }
  },
  restInitState
);

export default reducer;
