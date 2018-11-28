import { handleActions } from "redux-actions";
import { Map } from "immutable";
import restReducer, { restInitState } from "../../shared/entity/reducer";

const customRestInitState = restInitState.merge(
  Map({
    confirmingEntity: false
  })
);

const confirmEntity = (state, action) =>
  state.set("entity", action.payload).set("confirmingEntity", true);

const confirmCleanup = (state, action) =>
  state.set("entity", []).set("confirmingEntity", false);

const reducer = handleActions(
  {
    CUSTOMER_ADDRESS: {
      ENTITY: {
        ...restReducer,
        CONFIRM_ENTITY: confirmEntity,
        CONFIRM_CLEANUP: confirmCleanup
      }
    }
  },
  customRestInitState
);

export default reducer;
