import { handleActions } from 'redux-actions';

import restReducer, {restInitState} from '../../shared/entity/reducer';

const reducer = handleActions({
  USER: {
    ENTITY: restReducer,
  }
}, restInitState);

export default reducer;
