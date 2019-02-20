import {createActions} from "redux-actions";
import restActions from '../../shared/entity/actions';

const actions = createActions({
  DELIVERY: {
    ENTITY: restActions,
  },
});

export default actions.delivery.entity;
