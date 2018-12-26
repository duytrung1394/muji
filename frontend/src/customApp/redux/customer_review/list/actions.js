import { createActions } from "redux-actions";
import restActions from "../../shared/list/actions";
import req from "../../shared/requestActions";

const actions = createActions({
  CUSTOMER_REVIEW: {
    LIST: {
      ...restActions,
      GET_REPORT: { ...req },
      FETCH_BY_USER: {
        REQUEST: undefined
      },
      FETCH_BY_FOLLOWING: {
        REQUEST: undefined
      }
    }
  }
});

export default actions.customerReview.list;
