import { createActions } from "redux-actions";
import restActions from "../../shared/list/actions";

const actions = createActions({
  COUPON: {
    LIST: restActions
  }
});

export default actions.coupon.list;
