import {createActions} from "redux-actions";
import restActions from '../../shared/list/actions';

const actions = createActions({
  BRAND: {
    LIST: restActions,
  },
});

export default actions.brand.list;
