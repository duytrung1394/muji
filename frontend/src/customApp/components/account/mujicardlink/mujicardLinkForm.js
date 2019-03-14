import React, { Component } from "react";
import styled from "styled-components";
import { Form, Input } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";
import { Link } from "../../shared/form/link";

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

const MujicardFormCardTitle = styled(Form.Item)`
  margin-bottom : 0px !important;
  font-size: 13px;
  font-weight: bold;
`;


const MujicardInput = styled(Input)`
  @media screen and (min-width: 860px) {
    width: 100% !important;
    max-width: 320px !important;
  }

  min-height: 40px;
  border: solid 1px #999;
  box-shadow: 0 1px 3px 0 rgba(88, 88, 88, 0.3) !important;
  color: #585858;
`;

const MujicardFormItem = styled(Form.Item)`
  margin-bottom : 0px !important;
`;

const MujicardFormMaxLength = styled(Form.Item)`
  font-size: 12px !important;
  margin-bottom : 0px !important;
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
          
          <Form>
            <MujicardFormCardTitle>
              <IntlMessages id="account.page.mujicardLink.formCardNumber" />
              <Link to="">?</Link>
            </MujicardFormCardTitle>
            
            <MujicardFormItem>
              <MujicardInput 
                type="tel"
                name="card_number"
                placeholder="01234567891012"
                maxLength="12"
                onChange={this.onHandleChange}
              /> 
            </MujicardFormItem>

            <MujicardFormMaxLength>
                <IntlMessages id="account.page.mujicardLink.guideEnterMujicard" />
            </MujicardFormMaxLength>     

            <MujicardFormCardTitle>
                <IntlMessages id="account.page.mujicardLink.formCardDate" />
                <Link to="">?</Link>
            </MujicardFormCardTitle>

            <MujicardFormItem>
              <MujicardInput
                  type="text"
                  name="card_date"
                  placeholder="例 2014年12月07日の場合 20141207"
                  maxLength="8"
                  onChange={this.onHandleChange}
                />            
            </MujicardFormItem>

            <MujicardFormMaxLength>
                <IntlMessages id="account.page.mujicardLink.guideEnterMujicardDate" />
            </MujicardFormMaxLength>
        </Form>
        </MujicardInner>
      </MujicardLayout>
    );
  }
}

export default MujicardLinkForm;
