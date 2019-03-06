import { createActions } from "redux-actions";
import restActions from "../../shared/entity/actions";
import req from "../../shared/requestActions";

const actions = createActions({
    CUSTOMER_REVIEW: {
        ENTITY: {
            ...restActions,
            GET_CUSTOMER_REVIEW: {
                ...req
            },
            GET_REPORT: {
                ...req
            }
        }
    }
});

export default actions.customerReview.entity;
