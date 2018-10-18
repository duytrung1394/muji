import { createActions } from "redux-actions";
import restActions from "../../shared/entity/actions";

const actions = createActions({
  PRODUCT_CATEGORY_TOP: {
    ENTITY: restActions
  }
});

export default actions.productCategoryTop.entity;
