import React, { Component } from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import { OutlineButton } from "../../shared/form/button";

const PMujicardButton = styled.div`
  margin-top : 15px;
`;

const ButtonArea = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const CCommonNormalButtons = styled.p`
  margin-top: 20px;
  max-width: 300px;
    margin: 30px auto 0;
    border: 1px solid #999;
    -moz-border-radius: 20px;
    -webkit-border-radius: 20px;
    border-radius: 20px;
    box-shadow: 0 1px 3px rgba(88, 88, 88, 0.3);
    font-size: 12px;
    font-family: "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック体", "Yu Gothic", YuGothic, Meiryo, メイリオ, "MS PGothic", Osaka, arial, sans-serif;
    text-align: center;
`;

const CCommonNormalButtonsA = styled.a`
  display: block;
  padding: 10px;
  color: #585858;
  text-decoration: none;
`;


class MujicardLinkButtons extends Component {

  render() {
    return (
      <ButtonArea>
        <OutlineButton color="#7f0119" reverse="true" onClick={this.props.onSubmit}>
          <IntlMessages id="account.page.mujicardLink.guideEnterMujicardDate" />
        </OutlineButton>
        <CCommonNormalButtons>
          <CCommonNormalButtonsA href="#">
            <IntlMessages id="account.page.mujicardLink.return" />
          </CCommonNormalButtonsA>
        </CCommonNormalButtons>
      </ButtonArea>
    );
  }
};

export default MujicardLinkButtons;
