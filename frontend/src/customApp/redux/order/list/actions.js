import { createActions } from "redux-actions";
import restActions from "../../shared/list/actions";

const actions = createActions({
  ORDER: {
    LIST: restActions
  }
});

export default actions.order.list;
