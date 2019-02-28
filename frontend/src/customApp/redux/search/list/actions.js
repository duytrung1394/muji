import { createActions } from "redux-actions";
import restActions from "../../shared/list/actions";

const actions = createActions({
  SEARCH: {
    LIST: {
      ...restActions,
      FETCH_ITEM: {
        REQUEST: undefined
      },
<<<<<<< HEAD
        FETCH_ARTICLE: {
            REQUEST: undefined
        }
=======
      FETCH_SERVICE: {
        REQUEST: undefined
      }
>>>>>>> develop
    }
  }
});

export default actions.search.list;
