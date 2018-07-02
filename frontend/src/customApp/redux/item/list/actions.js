import {createActions} from "redux-actions";
import restActions from '../../shared/list/actions';

const actions = createActions({
  ITEM: {
    LIST: restActions,
  },
});

export default actions.item.list;
