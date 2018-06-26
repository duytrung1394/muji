import {createActions} from "redux-actions";
import restActions from '../../shared/entity/actions';

const actions = createActions({
  BRAND: {
    ENTITY: restActions,
  },
});

export default actions.brand.entity;
