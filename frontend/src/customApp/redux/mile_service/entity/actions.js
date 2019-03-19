import { createActions } from "redux-actions";
import restActions from "../../shared/entity/actions";

const actions = createActions({
  MILE_SERVICE: {
    ENTITY: {
      ...restActions
    }
  }
});

export default actions.mileService.entity;
