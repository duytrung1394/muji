import { createActions } from "redux-actions";
import restActions from "../../shared/list/actions";

const actions = createActions({
  PRODUCT_DETAIL: {
    LIST: restActions
  }
});

export default actions.productDetail.list;
