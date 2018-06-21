import {createActions} from "redux-actions";
import restActions from '../../shared/entity/actions';

const actions = createActions({
  CATEGORY: {
    ENTITY: restActions,
  },
});

export default actions.category.entity;
