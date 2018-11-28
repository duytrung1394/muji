import { createActions } from "redux-actions";
import restActions from "../../shared/entity/actions";

const actions = createActions({
  DONATION_TOP: {
    ENTITY: restActions
  }
});

export default actions.donationTop.entity;
