import { handleActions } from "redux-actions";
import { Map } from "immutable";
import restReducer, { restInitState } from "../../shared/entity/reducer";

const initState = restInitState.merge(
  Map({
    orderCode: null,
    savingCart: false,
    savedCart: false,
    saveCartError: false
  })
);

// POST CONFIRM_ORDER
const confirmOrderRequest = (state, action) =>
  state
    .set("confirmingOrder", true)
    .set("confirmedOrder", false)
    .set("confirmOrderError", false);

const confirmOrderSuccess = (state, action) =>
  state
    .set("confirmationEntity", action.payload.data)
    .set("confirmingOrder", false)
    .set("confirmedOrder", true);

const confirmOrderFailure = (state, action) =>
  state
    .set("confirmationEntity", {})
    .set("confirmingOrder", false)
    .set("confirmedOrder", false)
    .set("confirOrderError", true);

const confirmOrderCleanup = (state, action) =>
  state
    .set("confirmingOrder", false)
    .set("confirmedOrder", false)
    .set("confirOrderError", false);

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

const reducer = handleActions(
  {
    ORDER: {
      ENTITY: {
        ...restReducer,
        CONFIRM_ORDER: {
          REQUEST: confirmOrderRequest,
          SUCCESS: confirmOrderSuccess,
          FAILURE: confirmOrderFailure,
          CLEANUP: confirmOrderCleanup
        },
        SAVE_CART: {
          REQUEST: saveCartRequest,
          SUCCESS: saveCartSuccess,
          FAILURE: saveCartFailure,
          CLEANUP: saveCartCleanup
        }
      }
    }
  },
  initState
);

export default reducer;
