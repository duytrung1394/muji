import { createActions } from "redux-actions";
import restActions from "../../shared/list/actions";

const actions = createActions({
  SEARCH: {
    LIST: restActions
  }
});

export default actions.search.list;
