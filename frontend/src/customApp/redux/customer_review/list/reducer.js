import { handleActions } from "redux-actions";
import { Map } from "immutable";
import restReducer, { restInitState } from "../../shared/list/reducer";

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
  const entities = state.get("entities");
  const newEntity = {
    ...entities,
    customer_reviews: entities.customer_reviews.concat(
      action.payload.data.customer_reviews
    ),
    isShowSeeMore: action.payload.data.isShowSeeMore
  };

  return state
    .set("entities", newEntity)
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
      LIST: {
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
