import {createActions} from "redux-actions";
import restActions from '../../shared/list/actions';

const actions = createActions({
  HTTPBIN: {
    LIST: restActions,
  },
});

export default actions.httpbin.list;
