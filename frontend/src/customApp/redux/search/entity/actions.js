import { createActions } from "redux-actions";
import restActions from "../../shared/entity/actions";

const actions = createActions({
  SEARCH: {
    ENTITY: restActions
  }
});

export default actions.search.entity;
