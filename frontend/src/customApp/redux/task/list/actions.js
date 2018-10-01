import { createActions } from "redux-actions";
import restActions from "../../shared/list/actions";

const actions = createActions({
  TASK: {
    LIST: restActions
  }
});

export default actions.task.list;
