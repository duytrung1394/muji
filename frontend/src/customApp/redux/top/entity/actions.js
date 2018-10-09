import { createActions } from "redux-actions";
import restActions from "../../shared/entity/actions";

const actions = createActions({
  TOP: {
    ENTITY: restActions
  }
});

export default actions.top.entity;
