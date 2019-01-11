import {createActions} from "redux-actions";
import restActions from '../../shared/list/actions';

const actions = createActions({
  ORDER_HISTORY: {
    LIST: restActions,
  },
});

export default actions.orderHistory.list;
