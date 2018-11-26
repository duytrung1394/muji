import { createActions } from "redux-actions";
import restActions from "../../shared/list/actions";
import req from "../../shared/requestActions";

const actions = createActions({
  CUSTOMER_REVIEW: {
    ENTITY: {
      ...restActions,
      GET_CUSTOMER_REVIEW: { ...req }
    }   
  }
});

export default actions.customerReview.entity;
