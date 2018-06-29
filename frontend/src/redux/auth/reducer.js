import { Map } from 'immutable';
import actions from './actions';

import { getToken } from './localStorage';

const initState = new Map({
  idToken: getToken(),
  isError: false
});

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return state.set('idToken', action.payload.token);
    case actions.LOGIN_ERROR:
      return state.set('isError', true).set('idToken', undefined);
    case actions.LOGOUT:
    case actions.UNAUTHORIZED:
      return state.set('idToken', undefined);
    default:
      return state;
  }
}
