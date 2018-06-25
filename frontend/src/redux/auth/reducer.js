import { Map } from 'immutable';
import actions from './actions';

const localStorageKey = 'idToken';

const newInitState = () => new Map({
  idToken: localStorage.getItem(localStorageKey),
  isError: false
});

export default function authReducer(state = newInitState(), action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:{
      localStorage.setItem(localStorageKey, action.token);
      return newInitState().set('idToken', action.token);
    }
    case actions.LOGIN_ERROR:
      return newInitState().set('isError', true);
    case actions.LOGOUT:
    case actions.UNAUTHORIZED:
      localStorage.removeItem(localStorageKey);
      return newInitState();
    default:
      return state;
  }
}
