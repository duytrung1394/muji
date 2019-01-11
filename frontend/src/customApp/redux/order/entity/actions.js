import {createActions} from "redux-actions";
import restActions from '../../shared/entity/actions';

const actions = createActions({
  ORDER: {
    ENTITY: restActions,
  },
});

export default actions.order.entity;
