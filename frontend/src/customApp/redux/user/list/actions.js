import { createActions } from "redux-actions";
import restActions from "../../shared/list/actions";

const actions = createActions({
  USER: {
    LIST: restActions
  }
});

export default actions.user.list;
