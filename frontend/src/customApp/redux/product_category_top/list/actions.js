import { createActions } from "redux-actions";
import restActions from "../../shared/list/actions";

const actions = createActions({
  PRODUCT_CATEGORY_TOP: {
    LIST: restActions
  }
});

export default actions.productCategoryTop.list;
