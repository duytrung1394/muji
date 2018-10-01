import {createActions} from "redux-actions";
import restActions from '../../shared/list/actions';

const actions = createActions({
  FRUIT: {
    LIST: restActions,
  },
});

export default actions.fruit.list;
