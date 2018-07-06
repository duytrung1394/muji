import { createActions } from "redux-actions";
import restActions from "../../shared/entity/actions";

const actions = createActions({
  ITEM: {
    ENTITY: restActions
  }
});

export default actions.item.entity;
