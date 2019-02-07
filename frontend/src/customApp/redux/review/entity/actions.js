import {createActions} from "redux-actions";
import restActions from '../../shared/entity/actions';

const actions = createActions({
  REVIEW: {
    ENTITY: restActions,
  },
});

export default actions.review.entity;
