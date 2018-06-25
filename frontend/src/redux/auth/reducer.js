import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({
  idToken: null,
  isError: false
});

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return initState.set('idToken', action.token);
    case actions.LOGIN_ERROR:
      return initState.set('isError', true);
    case actions.LOGOUT:
      return initState;
    default:
      return state;
  }
}
