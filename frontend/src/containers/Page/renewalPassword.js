import React, { Component } from "react";
import queryString from "query-string";
import { Link, Redirect } from "react-router-dom";
import Input from "../../components/uielements/input";
import Button from "../../components/uielements/button";
import IntlMessages from "../../components/utility/intlMessages";
import RenewalPasswordStyleWrapper from "./renewalPassword.style";
import passwordRenewalsAction from "../../redux/passwordRenewals/actions";
import Spin from "../../components/uielements/spin";
import Form from "../../components/uielements/form";
import Modals from "../../components/feedback/modal";
import { connect } from "react-redux";

const { renewal } = passwordRenewalsAction;
const FormItem = Form.Item;

class RenewalPassword extends Component {
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
    if (nextProps.isRenewalError) {
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
    const { renewal } = this.props;

    // クエリーストリングのトークン取得
    const parsed = queryString.parse(window.location.search);

    renewal(this.state.data.new_password);
  };

  /**
   * エラーメッセージイベントハンドラ
   */
  handleErrorMessage = () => {
    Modals.error({
      title: "エラー",
      content:
        "パスワードの更新に失敗しました。しばらく経ってから、もう一度、実行してください。",
      okText: "OK",
      onOk() {
        return new Promise((resolve, reject) => {
          window.location.href = "/renewalpassword";
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
    if (this.props.isRenewalDone === true) {
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
      <Spin size="large" tip="Sending..." spinning={this.props.isRenewalDone}>
        <RenewalPasswordStyleWrapper className="isoRenewalPassPage">
          <div className="isoFormContentWrapper">
            <div className="isoFormContent">
              <div className="isoLogoWrapper">
                <Link to="/dashboard">
                  <img
                    src="/images/logos/logo-32x32.png"
                    alt="Firebird Platform Logo"
                  />
                  <IntlMessages id="page.renewalPassTitle" />
                </Link>
              </div>

              <div className="isoFormHeadText">
                <h3>
                  <IntlMessages id="page.renewalPassSubTitle" />
                </h3>
                <p>
                  <IntlMessages id="page.renewalPassDescription" />
                </p>
              </div>

              <div className="isoRenewalPassForm">
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
                    <IntlMessages id="page.renewalPassSave" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </RenewalPasswordStyleWrapper>
      </Spin>
    );
  }
}

function mapStateToProps(state) {
  return {
    isRenewalling: state.PasswordRenewals.get("isRenewalling"),
    isRenewalDone: state.PasswordRenewals.get("isRenewalDone"),
    isRenewalError: state.PasswordRenewals.get("isRenewalError")
  };
}

export default connect(
  mapStateToProps,
  { renewal }
)(RenewalPassword);

// EOF
