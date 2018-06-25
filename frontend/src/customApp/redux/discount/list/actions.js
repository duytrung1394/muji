import {createActions} from "redux-actions";
import restActions from '../../shared/list/actions';

const actions = createActions({
  DISCOUNT: {
    LIST: restActions,
  },
});

export default actions.discount.list;
