import {createActions} from "redux-actions";
import restActions from '../../shared/list/actions';

const actions = createActions({
  DELIVERY: {
    LIST: restActions,
  },
});

export default actions.delivery.list;
