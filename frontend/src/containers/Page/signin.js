import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from '../../components/uielements/input';
import Checkbox from '../../components/uielements/checkbox';
import Button from '../../components/uielements/button';
import authAction from '../../redux/auth/actions';
import IntlMessages from '../../components/utility/intlMessages';
import SignInStyleWrapper from './signin.style';
import Form from '../../components/uielements/form';
const FormItem = Form.Item;

const RememberMeKey = "rememberMe"

class SignIn extends Component {
  constructor(props) {
    super(props);
    const rememberMe = localStorage.getItem(RememberMeKey) === "true";
    this.state = {
      redirectToReferrer: (props.isLoggedIn === true),
      rememberMe: rememberMe,
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggleRememberMe = this.toggleRememberMe.bind(this);
  }

  handleInputChange(event) {
    const {target} = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const {name} = target;
    this.setState({
      [name]: value
    });
  }

  toggleRememberMe(event) {
    const checked = event.target.checked;
    this.setState({
      rememberMe: checked,
    })
    localStorage.setItem(RememberMeKey, checked);
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.isLoggedIn !== nextProps.isLoggedIn &&
      nextProps.isLoggedIn === true
    ) {
      this.setState({ redirectToReferrer: true });
    }
  }

  
  handleLogin(){
    const { login } = this.props;
    login(this.state.username, this.state.password, this.state.rememberMe);
  };

  render() {
    const from = { pathname: '/dashboard' };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    let errorState = this.props.isLoginError === true ? 'error' : '';
    let errorMessage = '';

    if (errorState === 'error') {
        errorMessage = 'メールアドレス、または、パスワードが違います。';
    }

    return (
      <SignInStyleWrapper className="isoSignInPage">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <div className="isoLogoWrapper">
              <Link to="/dashboard">
                <IntlMessages id="page.signInTitle" />
              </Link>
            </div>

            <div className="isoSignInForm">
              <FormItem
                hasFeedback
                validateStatus={errorState}
              >
                <div className="isoInputWrapper">
                  <Input
                    size="large"
                    placeholder="Username"
                    name="username"
                    onChange={this.handleInputChange}
                  />
                </div>
              </FormItem>

              <FormItem
                hasFeedback
                validateStatus={errorState}
                help={errorMessage}
              >
                <div className="isoInputWrapper">
                  <Input
                    size="large"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleInputChange}
                  />
                </div>
              </FormItem>

              <div className="isoInputWrapper isoLeftRightComponent">
                <Checkbox
                  checked={this.state.rememberMe}
                  onChange={this.toggleRememberMe}
                >
                  <IntlMessages id="page.signInRememberMe" />
                </Checkbox>
                <Button type="primary" onClick={this.handleLogin}>
                  <IntlMessages id="page.signInButton" />
                </Button>
              </div>

              <p className="isoHelperText">
                <IntlMessages id="page.signInPreview" />
              </p>
              <div className="isoCenterComponent isoHelperWrapper">
                <Link to="/forgotpassword" className="isoForgotPass">
                  <IntlMessages id="page.signInForgotPass" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SignInStyleWrapper>
    );
  }
}

const { login } = authAction;

export default connect(
  state => ({
    isLoggedIn: state.Auth.get('idToken') !== null,
    isLoginError: state.Auth.get('isError'),
  }),
  { login }
)(SignIn);
