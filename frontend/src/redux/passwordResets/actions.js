const passwordResetsActions = {

    SEND_REQUEST: 'SEND_REQUEST',

    SEND_SUCCESS: 'SEND_SUCCESS',

    SEND_ERROR: 'SEND_ERROR',

    RESET_REQUEST: 'RESET_REQUEST',

    RESET_SUCCESS: 'RESET_SUCCESS',

    RESET_ERROR: 'RESET_ERROR',

    send: (email) => ({
        type: passwordResetsActions.SEND_REQUEST,
        email: email
    }),

    reset: (token, password) => ({
        type: passwordResetsActions.RESET_REQUEST,
        token: token,
        password: password
    }),

};

export default passwordResetsActions;

// EOF