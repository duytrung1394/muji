import {createActions} from "redux-actions";
import restActions from '../../shared/entity/actions';

const actions = createActions({
  ORDER_HISTORY: {
    ENTITY: restActions,
  },
});

export default actions.orderHistory.entity;
