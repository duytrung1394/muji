const actions = {
  CHECK_AUTHORIZATION: "CHECK_AUTHORIZATION",
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGOUT: "LOGOUT",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",
  UNAUTHORIZED: "UNAUTHORIZED",
  checkAuthorization: () => ({ type: actions.CHECK_AUTHORIZATION }),
  login: (username, password, rememberMe) => ({
    type: actions.LOGIN_REQUEST,
    payload: {
      username,
      password,
      rememberMe
    }
  }),
  loginSuccess: (token, profile, rememberMe) => ({
    type: actions.LOGIN_SUCCESS,
    payload: {
      token: token,
      profile: profile,
      rememberMe: rememberMe
    }
  }),
  loginError: error => ({
    type: actions.LOGIN_ERROR,
    payload: error
  }),
  logout: () => ({
    type: actions.LOGOUT
  }),
  unauthorized: error => ({
    type: actions.UNAUTHORIZED,
    payload: error
  })
};
export default actions;
