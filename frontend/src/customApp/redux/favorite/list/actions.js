import {createActions} from "redux-actions";
import restActions from '../../shared/list/actions';

const actions = createActions({
  FAVORITE: {
    LIST: restActions,
  },
});

export default actions.favorite.list;
