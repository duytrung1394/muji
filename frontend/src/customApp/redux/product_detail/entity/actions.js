import { createActions } from "redux-actions";
import restActions from "../../shared/entity/actions";

const actions = createActions({
  PRODUCT_DETAIL: {
    ENTITY: restActions
  }
});

export default actions.productDetail.entity;
