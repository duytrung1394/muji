import {Map} from 'immutable';
import actions from './actions';

const initState = new Map({
    isSending: false,
    isSendError: false,
    isSendDone: false,
    isResetting: false,
    isResetError: false,
    isResetDone: false
});

export default function passwordResetsReducer(state = initState.merge({}), action) {

    switch (action.type) {

        case actions.SEND_REQUEST:
            return initState.merge({
                'isSending': true
            });

        case actions.SEND_SUCCESS:
            return initState.merge({
                'isSendDone': true
            });

        case actions.SEND_ERROR:
            return initState.merge({
                'isSendDone': true,
                'isSendError': true,
            });

        case actions.RESET_REQUEST:
            return initState.merge({
                'isResetting': true
            });

        case actions.RESET_SUCCESS:
            return initState.merge({
                'isResetDone': true
            });

        case actions.RESET_ERROR:
            return initState.merge({
                'isResetError': true,
            });

        default:
            return state;
    }

}

// EOF