import {createActions} from "redux-actions";
import restActions from '../../shared/list/actions';

const actions = createActions({
  CATEGORY: {
    LIST: restActions,
  },
});

export default actions.category.list;
