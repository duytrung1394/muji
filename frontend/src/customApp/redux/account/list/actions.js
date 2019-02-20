import { createActions } from "redux-actions";
import restActions from "../../shared/list/actions";

const actions = createActions({
  ACCOUNT: {
    LIST: restActions
  }
});

export default actions.account.list;
