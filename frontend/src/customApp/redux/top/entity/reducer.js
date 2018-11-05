import { handleActions } from "redux-actions";
import { Map } from "immutable";
import restReducer, { restInitState } from "../../shared/entity/reducer";

const customRestInitState = restInitState.merge(
  Map({
    gettingFromMujis: false,
    gotFromMujis: false,
    getFromMujisError: false
  })
);

const getFromMujisRequest = (state, action) =>
  state
    .set("gettingFromMujis", true)
    .set("gotFromMujis", false)
    .set("getFromMujisError", false);

const getFromMujisSuccess = (state, action) => {
  const entity = state.get("entity");
  const newEntity = {
    ...entity,
    from_mujis: entity.from_mujis.concat(action.payload.data)
  };
  return state
    .set("entity", newEntity)
    .set("gettingFromMujis", false)
    .set("gotFromMujis", true);
};

const getFromMujisFailure = (state, action) =>
  state
    .set("seeMoreData", [])
    .set("gettingFromMujis", false)
    .set("gotFromMujis", false)
    .set("getFromMujisError", true);

const reducer = handleActions(
  {
    TOP: {
      ENTITY: {
        ...restReducer,
        GET_FROM_MUJIS: {
          REQUEST: getFromMujisRequest,
          SUCCESS: getFromMujisSuccess,
          FAILURE: getFromMujisFailure
        }
      }
    }
  },
  customRestInitState
);

export default reducer;
