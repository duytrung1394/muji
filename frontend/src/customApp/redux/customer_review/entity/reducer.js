import { handleActions } from "redux-actions";
import { Map } from "immutable";
import restReducer, { restInitState } from "../../shared/entity/reducer";

const customRestInitState = restInitState.merge(
  Map({
    gettingCustomerReview: false,
    gotCustomerReview: false,
    getCustomerReviewError: false
  })
);

const getCustomerReviewRequest = state =>
  state
    .set("gettingCustomerReview", true)
    .set("gotCustomerReview", false)
    .set("getCustomerReviewError", false);

const getCustomerReviewSuccess = (state, action) => {
  console.log("サクセスしてまーす");
  const entity = state.get("entity");
  const newEntity = {
    ...entity,
    customer_reviews: entity.customer_reviews.concat(action.payload.data)
  };
  return state
    .set("entity", newEntity)
    .set("gettingCustomerReview", false)
    .set("gotCustomerReview", true);
};

const getCustomerReviewFailure = state =>
  state
    .set("gettingCustomerReview", false)
    .set("gotCustomerReview", false)
    .set("getCustomerReviewError", true);

const reducer = handleActions(
  {
    CUSTOMER_REVIEW: {
      ENTITY: {
        ...restReducer,
        GET_CUSTOMER_REVIEW: {
          REQUEST: getCustomerReviewRequest,
          SUCCESS: getCustomerReviewSuccess,
          FAILURE: getCustomerReviewFailure
        }
      }
    }
  },
  customRestInitState
);

export default reducer;
