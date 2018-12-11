import { createActions } from "redux-actions";
import restActions from "../../shared/list/actions";
import req from "../../shared/requestActions";

const actions = createActions({
  CUSTOMER_REVIEW: {
    LIST: {
      ...restActions,
      GET_LIST_BY_USER: { ...req }
    }
  }
});

export default actions.customerReview.list;
