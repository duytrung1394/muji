import { createActions } from "redux-actions";
import restActions from "../../shared/list/actions";

const actions = createActions({
  REVIEW: {
    LIST: restActions
  }
});

export default actions.review.list;
