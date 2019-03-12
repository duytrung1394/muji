import { handleActions } from "redux-actions";
import { Map } from "immutable";
import restReducer, { restInitState } from "../../shared/entity/reducer";

const initState = restInitState.merge(
  Map({
    orderCode: null,
    savingCart: false,
    savedCart: false,
    saveCartError: false,
    updatingDeliveryOption: false,
    updatedDeliveryOption: false,
    updateDeliveryOptionError: false
  })
);

// POST SAVE_CART
const saveCartRequest = (state, action) =>
  state
    .set("orderCode", null)
    .set("savingCart", true)
    .set("savedCart", false)
    .set("saveCartError", false);

const saveCartSuccess = (state, action) =>
  state
    .set("orderCode", action.payload.orderCode)
    .set("savingCart", false)
    .set("savedCart", true);

const saveCartFailure = (state, action) =>
  state
    .set("orderCode", null)
    .set("savingCart", false)
    .set("savedCart", false)
    .set("saveCartError", true);

const saveCartCleanup = (state, action) =>
  state
    .set("savingCart", false)
    .set("savedCart", false)
    .set("saveCartError", false);

const updateDeliveryOptionRequest = (state, action) =>
  state
    .set("entity", {})
    .set("updatingDeliveryOption", true)
    .set("updatedDeliveryOption", false)
    .set("updateDeliveryOptionError", false);

const updateDeliveryOptionSuccess = (state, action) =>
  state.set("updatingDeliveryOption", false).set("updatedDeliveryOption", true);

const updateDeliveryOptionFailure = (state, action) =>
  state
    .set("updatingDeliveryOption", false)
    .set("updatedDeliveryOption", false)
    .set("updateDeliveryOptionError", true);

const updateDeliveryOptionCleanup = (state, action) =>
  state
    .set("updatingDeliveryOption", false)
    .set("updatedDeliveryOption", false)
    .set("updateDeliveryOptionError", false);

const reducer = handleActions(
  {
    ORDER: {
      ENTITY: {
        ...restReducer,
        SAVE_CART: {
          REQUEST: saveCartRequest,
          SUCCESS: saveCartSuccess,
          FAILURE: saveCartFailure,
          CLEANUP: saveCartCleanup
        },
        UPDATE_DELIVERY_OPTION: {
          REQUEST: updateDeliveryOptionRequest,
          SUCCESS: updateDeliveryOptionSuccess,
          FAILURE: updateDeliveryOptionFailure,
          CLEANUP: updateDeliveryOptionCleanup
        }
      }
    }
  },
  initState
);

export default reducer;
