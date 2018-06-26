import {createActions} from "redux-actions";
import restActions from '../../shared/entity/actions';

const actions = createActions({
  SKU: {
    ENTITY: restActions,
  },
});

export default actions.sku.entity;
