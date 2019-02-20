import { createActions } from "redux-actions";
import restActions from "../../shared/entity/actions";

const actions = createActions({
  ACCOUNT: {
    ENTITY: restActions
  }
});

export default actions.account.entity;
