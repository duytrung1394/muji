import { createActions } from "redux-actions";
import restActions from "../../shared/list/actions";

const actions = createActions({
  LOTTERY: {
    LIST: restActions
  }
});

export default actions.lottery.list;
