import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Input from '../../components/uielements/input';
import Button from '../../components/uielements/button';
import IntlMessages from '../../components/utility/intlMessages';
import ForgotPasswordStyleWrapper from './forgotPassword.style';
import passwordResetsAction from "../../redux/passwordResets/actions";
import Spin from '../../components/uielements/spin';
import {connect} from "react-redux";

const {send} = passwordResetsAction;

class ForgotPassword extends Component {

    /**
     * 状態フラグ
     *
     * @type {{data: {email: string}}}
     */
    state = {
        data: {
            email: '',
        }
    };

    /**
     * 送信処理イベントハンドラ
     */
    handleSend = () => {

        /*
        if (this.state.data.email === "" || this.state.data.password === "") {
            return;
        }
        */

        // メール送信リクエスト実行
        const {send} = this.props;

        send(
            this.state.data.email
        );

    };

    /**
     * 入力値変更イベントハンドラ
     *
     * @param event
     */
    handleChange = (event) => {

        let data = this.state.data;

        switch (event.target.name) {
            case 'email':
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

        if (this.props.isSendDone === true) {
            const to = {pathname: '/signin'};
            return <Redirect to={to}/>;
        }

        return (
            <Spin size="large" tip="Sending..." spinning={this.props.isSending}>
                <ForgotPasswordStyleWrapper className="isoForgotPassPage">
                    <div className="isoFormContentWrapper">
                        <div className="isoFormContent">
                            <div className="isoLogoWrapper">
                                <Link to="/dashboard">
                                    <img src="/images/logos/logo-32x32.png" alt="Firebird Platform Logo"/>
                                    <IntlMessages id="page.forgetPassTitle"/>
                                </Link>
                            </div>

                            <div className="isoFormHeadText">
                                <h3>
                                    <IntlMessages id="page.forgetPassSubTitle"/>
                                </h3>
                                <p>
                                    <IntlMessages id="page.forgetPassDescription"/>
                                </p>
                            </div>

                            <div className="isoForgotPassForm">
                                <div className="isoInputWrapper">
                                    <Input
                                        size="large"
                                        placeholder="メールアドレス"
                                        name="email"
                                        onChange={this.handleChange}
                                    />
                                </div>

                                <div className="isoInputWrapper">
                                    <Button type="primary" onClick={this.handleSend}>
                                        <IntlMessages id="page.sendRequest"/>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ForgotPasswordStyleWrapper>
            </Spin>
        );
    }
}

function mapStateToProps(state) {
    return {
        isSendDone: state.PasswordResets.get('isSendDone'),
        isSending: state.PasswordResets.get('isSending'),
        isSendError: state.PasswordResets.get('isSendError')
    }
}

export default connect(
    mapStateToProps,
    {send},
)(ForgotPassword);

// EOF