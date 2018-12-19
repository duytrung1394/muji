import { handleActions } from "redux-actions";
import { Map } from "immutable";
import restReducer, { restInitState } from "../../shared/entity/reducer";

const customRestInitState = restInitState.merge(
  Map({
    gettingOneMock: false,
    gotOneMock: false,
    getOneMockError: false
  })
);

const getOneMockRequest = (state, action) =>
  state
    .set("gettingOneMock", true)
    .set("gotOneMock", false)
    .set("getOneMockError", false);

const getOneMockSuccess = (state, action) => {
  const entity = state.get("entity");
  const newEntity = {
    ...entity,
    customer_review: action.payload.data
  };
  return state
    .set("entity", newEntity)
    .set("gettingOneMock", false)
    .set("gotOneMock", true);
};

const getOneMockFailure = (state, action) =>
  state
    .set("seeMoreData", [])
    .set("gettingOneMock", false)
    .set("gotOneMock", false)
    .set("getOneMockError", true);

const reducer = handleActions(
  {
    CUSTOMER_REVIEW: {
      ENTITY: {
        ...restReducer,
        GET_CUSTOMER_REVIEW: {
          GET_ONE_MOCK: {
            REQUEST: getOneMockRequest,
            SUCCESS: getOneMockSuccess,
            FAILURE: getOneMockFailure
          }
        }
      }
    }
  },
  customRestInitState
);

export default reducer;
