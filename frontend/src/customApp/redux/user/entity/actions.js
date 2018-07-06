import { createActions } from "redux-actions";
import restActions from "../../shared/entity/actions";

const actions = createActions({
  USER: {
    ENTITY: restActions
  }
});

export default actions.user.entity;
