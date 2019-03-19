import { createActions } from "redux-actions";
import restActions from "../../shared/entity/actions";
import req from "../../shared/requestActions";

const actions = createActions({
  ORDER: {
    ENTITY: {
      ...restActions,
      SAVE_CART: { ...req },
      CONFIRM_ORDER: { ...req },
      UPDATE_DELIVERY_OPTION: { ...req }
    }
  }
});

export default actions.order.entity;
