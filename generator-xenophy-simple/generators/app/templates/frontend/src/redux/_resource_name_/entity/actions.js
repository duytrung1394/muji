import {createActions} from "redux-actions";
import restActions from '../../shared/entity/actions';

const actions = createActions({
  <%= RESOURCE_NAME %>: {
    ENTITY: restActions,
  },
});

export default actions.<%= resourceName %>.entity;
