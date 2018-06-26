import {createActions} from "redux-actions";
import restActions from '../../shared/entity/actions';

const actions = createActions({
  DISCOUNT: {
    ENTITY: restActions,
  },
});

export default actions.discount.entity;
