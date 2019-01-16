import {createActions} from "redux-actions";
import restActions from '../../shared/entity/actions';

const actions = createActions({
  DONATION: {
    ENTITY: restActions,
  },
});

export default actions.donation.entity;
