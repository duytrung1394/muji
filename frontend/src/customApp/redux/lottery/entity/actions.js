import { createActions } from "redux-actions";
import restActions from "../../shared/entity/actions";

const actions = createActions({
  LOTTERY: {
    ENTITY: restActions
  }
});

export default actions.lottery.entity;
