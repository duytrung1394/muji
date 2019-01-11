import { handleActions } from 'redux-actions';

import restReducer, {restInitState} from '../../shared/entity/reducer';

const reducer = handleActions({
  ORDER_HISTORY: {
    ENTITY: restReducer,
  }
}, restInitState);

export default reducer;
