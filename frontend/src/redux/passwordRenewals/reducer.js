import { Map } from "immutable";
import actions from "./actions";

const initState = new Map({
  isRenewalling: false,
  isRenewalError: false,
  isRenewalDone: false
});

export default function passwordRenewalsReducer(
  state = initState.merge({}),
  action
) {
  switch (action.type) {
    case actions.RENEWAL_REQUEST:
      return initState.merge({
        isRenewalling: true
      });

    case actions.RENEWAL_SUCCESS:
      return initState.merge({
        isRenewalDone: true
      });

    case actions.RENEWAL_ERROR:
      return initState.merge({
        isRenewalError: true
      });

    default:
      return state;
  }
}

// EOF
