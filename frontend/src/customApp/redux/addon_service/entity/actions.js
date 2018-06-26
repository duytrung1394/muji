import {createActions} from "redux-actions";
import restActions from '../../shared/entity/actions';

const actions = createActions({
  ADDON_SERVICE: {
    ENTITY: restActions,
  },
});

export default actions.addonService.entity;
