import {createActions} from "redux-actions";
import restActions from '../../shared/entity/actions';

const actions = createActions({
  FAVORITE: {
    ENTITY: restActions,
  },
});

export default actions.favorite.entity;
