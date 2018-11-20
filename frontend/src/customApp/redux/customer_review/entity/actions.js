import { createActions } from "redux-actions";
import restActions from "../../shared/entity/actions";

const actions = createActions({
  CUSTOMER_REVIEW: {
    ENTITY: restActions
  }
});

export default actions.customerReview.entity;
