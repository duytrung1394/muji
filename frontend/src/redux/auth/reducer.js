import { Map } from 'immutable';
import actions from './actions';

const localStorageKey = 'idToken';

const initState = new Map({
  idToken: localStorage.getItem(localStorageKey),
  isError: false
});

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:{
      localStorage.setItem(localStorageKey, action.token);
      return initState.set('idToken', action.token);
    }
    case actions.LOGIN_ERROR:
      return initState.set('isError', true);
    case actions.LOGOUT:{
      localStorage.removeItem(localStorageKey);
      return initState;
    }
    default:
      return state;
  }
}
