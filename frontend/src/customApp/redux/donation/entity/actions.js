import { createActions } from "redux-actions";
import restActions from "../../shared/entity/actions";
import req from "../../shared/requestActions";

const actions = createActions({
  DONATION: {
    ENTITY: {
      ...restActions,
      DO_GIFTCARD_INQUIRY: { ...req },
      CONFIRM_DONATION: { ...req },
      ORDER_DONATION: { ...req }
    }
  }
});

export default actions.donation.entity;
