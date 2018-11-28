import { createActions } from "redux-actions";
import restActions from "../../shared/entity/actions";

const actions = createActions({
  CUSTOMER_ADDRESS: {
    ENTITY: {
      ...restActions,
      CONFIRM_ENTITY: undefined,
      CONFIRM_CLEANUP: undefined
    }
  }
});

export default actions.customerAddress.entity;
