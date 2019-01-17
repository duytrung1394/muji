import { createActions } from "redux-actions";
import restActions from "../../shared/list/actions";

const actions = createActions({
  DONATION: {
    LIST: restActions
  }
});

export default actions.donation.list;
