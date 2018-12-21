import { handleActions } from "redux-actions";
import { Map } from "immutable";
import restReducer, { restInitState } from "../../shared/entity/reducer";

const customRestInitState = restInitState.merge(
  Map({
    gettingReviewItem: false,
    gotReviewItem: false,
    getReviewItemError: false
  })
);

const getReviewItemRequest = (state, action) =>
  state
    .set("gettingReviewItem", true)
    .set("gotReviewItem", false)
    .set("getReviewItemError", false);

const getReviewItemSuccess = (state, action) => {
  return state
    .set("entity", { ...state.get("entity"), ...action.payload.data })
    .set("gettingReviewItem", false)
    .set("gotReviewItem", true);
};

const getReviewItemFailure = (state, action) =>
  state
    .set("seeMoreData", [])
    .set("gettingReviewItem", false)
    .set("gotReviewItem", false)
    .set("getReviewItemError", true);

const reducer = handleActions(
  {
    CUSTOMER_REVIEW: {
      ENTITY: {
        ...restReducer,
        GET_REVIEW_ITEM: {
          REQUEST: getReviewItemRequest,
          SUCCESS: getReviewItemSuccess,
          FAILURE: getReviewItemFailure
        }
      }
    }
  },
  customRestInitState
);

export default reducer;
