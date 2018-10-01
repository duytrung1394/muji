import { createActions } from "redux-actions";
import restActions from "../../shared/entity/actions";

const actions = createActions({
  TASK: {
    ENTITY: restActions
  }
});

export default actions.task.entity;
