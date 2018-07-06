import React, { Component } from "react";
import queryString from "query-string";
import { Link, Redirect } from "react-router-dom";
import Input from "../../components/uielements/input";
import Button from "../../components/uielements/button";
import IntlMessages from "../../components/utility/intlMessages";
import ResetPasswordStyleWrapper from "./resetPassword.style";
import passwordResetsAction from "../../redux/passwordResets/actions";
import Spin from "../../components/uielements/spin";
import Form from "../../components/uielements/form";
import Modals from "../../components/feedback/modal";
import { connect } from "react-redux";

const { reset } = passwordResetsAction;
const FormItem = Form.Item;

class ResetPassword extends Component {
  /**
   * 状態フラグ
   *
   * @type {{data: {email: string}}}
   */
  state = {
    error: {
      isEmpty: false,
      isNotMatch: false,
      isFailed: false
    },
    data: {
      new_password: "",
      confirm_password: ""
    }
  };

  /**
   * プロパティ値更新イベントハンドラ
   * @param nextProps
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.isResetError) {
      let error = this.state.error;

      error["isFailed"] = true;

      // 状態を更新
      this.setState({
        error: error
      });
    }
  }

  /**
   * リセット処理イベントハンドラ
   */
  handleReset = () => {
    let error = this.state.error;

    if (
      this.state.data.new_password === "" &&
      this.state.data.confirm_password === ""
    ) {
      error["isEmpty"] = true;

      // 状態を更新
      this.setState({
        error: error
      });

      return;
    }

    if (this.state.data.new_password !== this.state.data.confirm_password) {
      error["isNotMatch"] = true;

      // 状態を更新
      this.setState({
        error: error
      });

      return;
    }

    error["isNotMatch"] = false;

    // 状態を更新
    this.setState({
      error: error
    });

    // リセットリクエスト実行
    const { reset } = this.props;

    // クエリーストリングのトークン取得
    const parsed = queryString.parse(window.location.search);

    reset(parsed.token, this.state.data.new_password);
  };

  /**
   * エラーメッセージイベントハンドラ
   */
  handleErrorMessage = () => {
    Modals.error({
      title: "エラー",
      content:
        "パスワードの更新に失敗しました。もう一度、再発行メールを送信してください。",
      okText: "OK",
      onOk() {
        return new Promise((resolve, reject) => {
          window.location.href = "/forgotpassword";
        }).catch(() => {});
      }
    });
  };

  /**
   * 入力値変更イベントハンドラ
   *
   * @param event
   */
  handleChange = event => {
    let data = this.state.data;

    switch (event.target.name) {
      case "new_password":
      case "confirm_password":
        data[event.target.name] = event.target.value;
        break;
      default:
        break;
    }

    // 状態を更新
    this.setState({
      data: data
    });
  };

  /**
   * レンダーメソッド
   *
   * @returns {*}
   */
  render() {
    if (this.props.isResetDone === true) {
      const to = { pathname: "/signin" };
      return <Redirect to={to} />;
    }

    let errorState = false;
    let errorMessage = "";

    if (this.state.error["isEmpty"] === true) {
      errorState = true;
      errorMessage = "新しいパスワードを入力してください。";
    }

    if (this.state.error["isNotMatch"] === true) {
      errorState = true;
      errorMessage = "確認用パスワードと一致しません。";
    }

    if (this.state.error["isFailed"] === true) {
      this.handleErrorMessage();
    }

    return (
      <Spin size="large" tip="Sending..." spinning={this.props.isResetDone}>
        <ResetPasswordStyleWrapper className="isoResetPassPage">
          <div className="isoFormContentWrapper">
            <div className="isoFormContent">
              <div className="isoLogoWrapper">
                <Link to="/dashboard">
                  <img
                    src="/images/logos/logo-32x32.png"
                    alt="Firebird Platform Logo"
                  />
                  <IntlMessages id="page.resetPassTitle" />
                </Link>
              </div>

              <div className="isoFormHeadText">
                <h3>
                  <IntlMessages id="page.resetPassSubTitle" />
                </h3>
                <p>
                  <IntlMessages id="page.resetPassDescription" />
                </p>
              </div>

              <div className="isoResetPassForm">
                <FormItem
                  hasFeedback
                  validateStatus={errorState ? "error" : ""}
                >
                  <div className="isoInputWrapper">
                    <Input
                      size="large"
                      type="password"
                      placeholder="新しいパスワード"
                      name="new_password"
                      onChange={this.handleChange}
                    />
                  </div>
                </FormItem>

                <FormItem
                  hasFeedback
                  validateStatus={errorState ? "error" : ""}
                  help={errorMessage}
                >
                  <div className="isoInputWrapper">
                    <Input
                      size="large"
                      type="password"
                      placeholder="新しいパスワード(確認)"
                      name="confirm_password"
                      onChange={this.handleChange}
                    />
                  </div>
                </FormItem>

                <div className="isoInputWrapper">
                  <Button type="primary" onClick={this.handleReset}>
                    <IntlMessages id="page.resetPassSave" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </ResetPasswordStyleWrapper>
      </Spin>
    );
  }
}

function mapStateToProps(state) {
  console.log(
    "state.PasswordResets.get('isResetError') * " +
      state.PasswordResets.get("isResetError")
  );

  return {
    isResetDone: state.PasswordResets.get("isResetDone"),
    isResetting: state.PasswordResets.get("isResetting"),
    isResetError: state.PasswordResets.get("isResetError")
  };
}

export default connect(
  mapStateToProps,
  { reset }
)(ResetPassword);

// EOF
