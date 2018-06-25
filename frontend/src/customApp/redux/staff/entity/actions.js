import {createActions} from "redux-actions";
import restActions from '../../shared/entity/actions';

const actions = createActions({
  STAFF: {
    ENTITY: restActions,
  },
});

export default actions.staff.entity;
