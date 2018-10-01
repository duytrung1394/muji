import {createActions} from "redux-actions";
import restActions from '../../shared/entity/actions';

const actions = createActions({
  FRUIT: {
    ENTITY: restActions,
  },
});

export default actions.fruit.entity;
