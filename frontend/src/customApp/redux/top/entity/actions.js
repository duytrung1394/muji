import { createActions } from "redux-actions";
import restActions from "../../shared/entity/actions";
import req from "../../shared/requestActions";

const actions = createActions({
  TOP: {
    ENTITY: { ...restActions, GET_FROM_MUJIS: { ...req } }
  }
});

export default actions.top.entity;
