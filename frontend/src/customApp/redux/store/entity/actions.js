import {createActions} from "redux-actions";
import restActions from '../../shared/entity/actions';

const actions = createActions({
  STORE: {
    ENTITY: restActions,
  },
});

export default actions.store.entity;
