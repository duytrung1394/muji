import { createActions } from "redux-actions";
import restActions from "../../shared/list/actions";

const actions = createActions({
  ORDER: {
    LIST: {
      ...restActions,
      FETCH_STORE_RESERVE: {
        REQUEST: undefined
      },
      FETCH_PURCHASE_HISTORY: {
        REQUEST: undefined
      },
      FETCH_SUBSCRIPTION: {
        REQUEST: undefined
      }
    }
  }
});

export default actions.order.list;
