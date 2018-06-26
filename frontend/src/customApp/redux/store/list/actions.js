import {createActions} from "redux-actions";
import restActions from '../../shared/list/actions';

const actions = createActions({
  STORE: {
    LIST: restActions,
  },
});

export default actions.store.list;
