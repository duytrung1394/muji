import React, { Component } from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";

const MujicardLayout = styled.div`
  margin-top: 30px;
  padding: 16px;
  background: #f2f2f2;
`;

const MujicardInner = styled.div`
  padding: 16px;
  background: #fff;
  box-shadow: 0 1px 3px 0 rgba(88, 88, 88, 0.3);
`;

const MujicardFormTitle = styled.h1`
  font-size: 15px;
  font-weight: bold;
`;

const MujicardFormContent = styled.h2`
  margin-top: 20px;
  font-size: 13px;
  font-weight: bold;
`;

const MujicardNumberCard = styled.p`
  margin-top: 10px;
  font-size: 12px;
`;

const MujicardDateCard = styled.p`
  margin-top: 15px;
  font-size: 12px;
`;

const MujicardInput = styled.input`
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
  font-family: "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3",
    "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック体", "Yu Gothic",
    YuGothic, Meiryo, メイリオ, "MS PGothic", Osaka, arial, sans-serif;
  border-radius: 4px;
`;

class MujicardLinkForm extends Component {
  state = {
    card_number: "",
    card_date: ""
  };

  onHandleChange = event => {
    const { name, value } = event.target;

    this.setState(
      {
        [name]: value
      },
      () => {
        this.props.onChange(this.state);
      }
    );
  };

  render() {
    return (
      <MujicardLayout>
        <MujicardInner>
          <MujicardFormTitle>
            <IntlMessages id="account.page.mujicardLink.formTitle" />
          </MujicardFormTitle>
          <MujicardFormContent>
            <IntlMessages id="account.page.mujicardLink.formCardNumber" />
            <span>
              <a href="#">?</a>
            </span>
          </MujicardFormContent>
          <MujicardInput
            type="tel"
            name="card_number"
            placeholder="01234567891012"
            role="form"
            maxlength="12"
            onChange={this.onHandleChange}
          />
          <MujicardNumberCard>
            <IntlMessages id="account.page.mujicardLink.guideEnterMujicard" />
          </MujicardNumberCard>
          <MujicardFormContent>
            <IntlMessages id="account.page.mujicardLink.formCardDate" />
            <span>
              <a href="#">?</a>
            </span>
          </MujicardFormContent>
          <MujicardInput
            type="text"
            name="card_date"
            placeholder="例 2014年12月07日の場合 20141207"
            role="form"
            maxlength="8"
            onChange={this.onHandleChange}
          />
          <MujicardDateCard>
            <IntlMessages id="account.page.mujicardLink.guideEnterMujicardDate" />
          </MujicardDateCard>
        </MujicardInner>
      </MujicardLayout>
    );
  }
}

export default MujicardLinkForm;
