import {createActions} from "redux-actions";
import restActions from '../../shared/entity/actions';

const actions = createActions({
  HTTPBIN: {
    ENTITY: restActions,
  },
});

export default actions.httpbin.entity;
