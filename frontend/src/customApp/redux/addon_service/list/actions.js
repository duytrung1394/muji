import {createActions} from "redux-actions";
import restActions from '../../shared/list/actions';

const actions = createActions({
  ADDON_SERVICE: {
    LIST: restActions,
  },
});

export default actions.addonService.list;
