import { createActions } from "redux-actions";
import restActions from "../../shared/list/actions";
import req from "../../shared/requestActions";

const actions = createActions({
  CUSTOMER_REVIEW: {
    LIST: {
      ...restActions,
      FETCH_BY_USER: {
        REQUEST: undefined
      }
    }
  }
});

export default actions.customerReview.list;
