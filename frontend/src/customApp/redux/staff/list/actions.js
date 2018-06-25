import {createActions} from "redux-actions";
import restActions from '../../shared/list/actions';

const actions = createActions({
  STAFF: {
    LIST: restActions,
  },
});

export default actions.staff.list;
