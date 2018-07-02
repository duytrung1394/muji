const passwordRenewalsActions = {

    RENEWAL_REQUEST: 'RENEWAL_REQUEST',
    RENEWAL_SUCCESS: 'RENEWAL_SUCCESS',
    RENEWAL_ERROR: 'RENEWAL_ERROR',

    renewal: (password) => ({
        type: passwordRenewalsActions.RENEWAL_REQUEST,
        password: password
    }),

};

export default passwordRenewalsActions;

// EOF