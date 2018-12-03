import { createActions } from "redux-actions";
import restActions from "../../shared/list/actions";

const actions = createActions({
  DONATION_TOP: {
    LIST: restActions
  }
});

export default actions.donationTop.list;
