import { handleActions } from 'redux-actions';

import restReducer, {restInitState} from '../../shared/list/reducer';

const reducer = handleActions({
  FRUIT: {
    LIST: restReducer,
  }
}, restInitState);

export default reducer;
