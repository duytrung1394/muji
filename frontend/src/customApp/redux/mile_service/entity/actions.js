import { createActions } from "redux-actions";
import restActions from "../../shared/entity/actions";
import req from "../../shared/requestActions";

const actions = createActions({
    MILE_SERVICE: {
        ENTITY: {
            ...restActions,
            GET_MILE_HISTORY: { ...req },
            GET_OLD_MILE: { ...req }
        }
    },
});

export default actions.mileService.entity;
