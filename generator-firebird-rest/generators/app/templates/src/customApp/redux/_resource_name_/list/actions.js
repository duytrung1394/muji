import {createActions} from "redux-actions";
import restActions from '../../shared/list/actions';

const actions = createActions({
  <%= RESOURCE_NAME %>: {
    LIST: restActions,
  },
});

export default actions.<%= resourceName %>.list;
