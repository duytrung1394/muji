import { createActions } from "redux-actions";
import restActions from "../../shared/list/actions";

const actions = createActions({
  SEARCH: {
    LIST: {
      ...restActions,
      FETCH_ITEM: {
        REQUEST: undefined
      },
        FETCH_ARTICLE: {
            REQUEST: undefined
        }
    }
  }
});

export default actions.search.list;
