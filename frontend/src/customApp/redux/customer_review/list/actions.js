import { createActions } from "redux-actions";
import restActions from "../../shared/list/actions";

const actions = createActions({
  CUSTOMER_REVIEW: {
    LIST: restActions
  }
});

export default actions.customerReview.list;
