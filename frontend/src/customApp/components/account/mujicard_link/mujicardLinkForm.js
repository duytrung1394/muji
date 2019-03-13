import React, { Component } from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";

const PMujicardForm = styled.div`
    margin-top: 30px;
    padding: 16px;
    background: #f2f2f2;
`;

const PMujicardInner = styled.div`
    padding: 16px;
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(88, 88, 88, 0.3);
`;

const PMujicardFormH1 = styled.h1`
    font-size: 15px;
    font-weight: bold;
`;

const PMujicardFormH2 = styled.h2`
    margin-top: 20px;
    font-size: 13px;
    font-weight: bold;
`;

const PMujicardSingeByte = styled.p`
    margin-top: 10px;
    font-size: 12px;
`;

const PMujicardDigitHalfWidth = styled.p`
    margin-top: 15px;
    font-size: 12px;
`;

const CCommonTextBox = styled.input`
    @media screen and (min-width: 860px) {
        width: 100% !important;
        max-width: 320px !important;
    }

    font-size: 13px;
    margin-top: 10px;
    min-height: 40px;
    padding: 8px;
    border: solid 1px #999;
    box-shadow: 0 1px 3px 0 rgba(88, 88, 88, 0.3);
    box-sizing: border-box;
    background-size: 8px;
    color: #585858;
    font-family: "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック体", "Yu Gothic", YuGothic, Meiryo, メイリオ, "MS PGothic", Osaka, arial, sans-serif;
    border-radius: 4px;
`;

class MujicardLinkForm extends Component {
    state = {
        'card_number' : '',
        'card_date' : ''
    };

    onHandleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        }, () => {
            this.props.onChange(this.state);
        });
    }

    render() {
        return (
            <PMujicardForm>
                <PMujicardInner>
                  <PMujicardFormH1>
                      <IntlMessages id="account.page.mujicardLink.lablMujicard" />
                  </PMujicardFormH1>
                  <PMujicardFormH2>
                      <IntlMessages id="account.page.mujicardLink.lablMujicardNumber" />
                      <span><a href="#">?</a></span>
                  </PMujicardFormH2>
                  <CCommonTextBox type="tel" name="card_number" placeholder="01234567891012" role="form" maxlength="12" onChange={this.onHandleChange} />
                  <PMujicardSingeByte>
                      <IntlMessages id="account.page.mujicardLink.guideEnterMujicard" />
                  </PMujicardSingeByte>
                  <PMujicardFormH2> 
                      <IntlMessages id="account.page.mujicardLink.lablMujicardDate" />
                      <span><a href="#">?</a></span>
                  </PMujicardFormH2>
                  <CCommonTextBox type="text" name="card_date" placeholder="例 2014年12月07日の場合 20141207" role="form" maxlength="8" onChange={this.onHandleChange} />
                  <PMujicardDigitHalfWidth>
                      <IntlMessages id="account.page.mujicardLink.guideEnterMujicardDate" />
                  </PMujicardDigitHalfWidth>
                </PMujicardInner>
            </PMujicardForm>
        );
    }
};

export default MujicardLinkForm;
