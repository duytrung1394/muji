import { createActions } from "redux-actions";
import restActions from "../../shared/list/actions";

const actions = createActions({
  ORDER: {
    LIST: {
      ...restActions,
      FETCH_PURCHASE_HISTORY: {
        REQUEST: undefined
      }
    }
  }
});

export default actions.order.list;
