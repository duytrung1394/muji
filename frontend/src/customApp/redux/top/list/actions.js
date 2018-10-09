import { createActions } from "redux-actions";
import restActions from "../../shared/list/actions";

const actions = createActions({
  TOP: {
    LIST: restActions
  }
});

export default actions.top.list;
