import { createActions } from "redux-actions";
import restActions from "../../shared/list/actions";

const actions = createActions({
  ORDER: {
    LIST: {
      ...restActions,
      FETCH_BY_RESERVATION_HISTORY: {
        REQUEST: undefined
      },
      FETCH_STORE_RESERVE: {
        REQUEST: undefined
      }
    }
  }
});

export default actions.order.list;
