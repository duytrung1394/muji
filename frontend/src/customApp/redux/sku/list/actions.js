import {createActions} from "redux-actions";
import restActions from '../../shared/list/actions';

const actions = createActions({
  SKU: {
    LIST: restActions,
  },
});

export default actions.sku.list;
