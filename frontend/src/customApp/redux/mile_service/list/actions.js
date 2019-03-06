import {createActions} from "redux-actions";
import restActions from '../../shared/list/actions';

const actions = createActions({
  MILE_SERVICE: {
    LIST: restActions,
  },
});

export default actions.mileService.list;
