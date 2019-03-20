import { createActions } from "redux-actions";
import restActions from "../../shared/entity/actions";

const actions = createActions({
  COUPON: {
    ENTITY: restActions
  }
});

export default actions.coupon.entity;
