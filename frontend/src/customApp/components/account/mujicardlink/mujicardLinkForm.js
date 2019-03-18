import React, { Component } from "react";
import styled from "styled-components";
import { injectIntl } from "react-intl";
import { Form, Input } from "antd";
import { OutlineButton } from "../../shared/form/button";
import actions from "../../../redux/account/entity/actions";
import IntlMessages from "../../../../components/utility/intlMessages";
import { Link } from "../../shared/form/link";
import { connect } from "react-redux";

const ButtonArea = styled.div`
  margin-top: 20px;
  text-align: center;
`;

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
  color : rgb(88, 88, 88);
`;

const MujicardFormCardTitle = styled.h2`
  margin-top: 20px;
  font-size: 13px;
  font-weight: bold;
  color : rgb(88, 88, 88);
`;


const MujicardInput = styled(Input)`
  min-height: 40px;
  border: solid 1px #999;
  box-shadow: 0 1px 3px 0 rgba(88, 88, 88, 0.3) !important;
  color: #585858;
  width: 280px !important;
  font-size: 13px;
`;

const MujicardFormItem = styled(Form.Item)`
  margin-bottom : 0px !important;
`;

const MujicardFormMaxLength = styled.p`
  margin-top: 10px;
  font-size: 12px;
`;


class MujicardLinkForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmit(values);
      }
    });
  };

  render() {
    
    const { intl } = this.props;
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit}>
        <MujicardLayout>
          <MujicardInner>
            <MujicardFormTitle>
              <IntlMessages id="account.page.mujicardLink.formTitle" />
            </MujicardFormTitle>    
            <MujicardFormCardTitle>
              <IntlMessages id="account.page.mujicardLink.formCardNumber" />
              <Link to="#">?</Link>
            </MujicardFormCardTitle>
            <MujicardFormItem>
              {getFieldDecorator('card_number', {
                rules: [{ required: true, message: intl.formatMessage({
                  id: `account.page.mujicardLink.formCardNumberRequired`
                }) }],
              })(
                <MujicardInput  
                  type="tel"
                  placeholder="01234567891012"
                  maxLength={12}
                />
              )} 
            </MujicardFormItem>
            <MujicardFormMaxLength>
                <IntlMessages id="account.page.mujicardLink.guideEnterMujicard" />
            </MujicardFormMaxLength>     
            <MujicardFormCardTitle>
                <IntlMessages id="account.page.mujicardLink.formCardDate" />
                <Link to="#">?</Link>
            </MujicardFormCardTitle>
            <MujicardFormItem>
              {getFieldDecorator('card_date', {
                rules: [],
              })(
                <MujicardInput  
                  type="text"
                  placeholder={intl.formatMessage({
                    id: `account.page.mujicardLink.placeHolderCardDate`
                  })}
                  maxLength={8}
                />
              )}
            </MujicardFormItem>
            <MujicardFormMaxLength>
                <IntlMessages id="account.page.mujicardLink.guideEnterMujicardDate" />
            </MujicardFormMaxLength>
        </MujicardInner>
      </MujicardLayout>
      <ButtonArea>
        <OutlineButton
          color="#7f0119"
          reverse="true"
          htmlType="submit"
        >
          <IntlMessages id="account.page.mujicardLink.register" />
        </OutlineButton>
      </ButtonArea>
      <ButtonArea>
        <OutlineButton>
          <IntlMessages id="account.page.mujicardLink.return" />
        </OutlineButton>
      </ButtonArea>
    </Form>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const actionCreators = {
  fetchRequest: actions.fetch.request
};

const enhance = C => {
  const connected = connect(
    mapStateToProps,
    actionCreators
  )(C);
  const injected = injectIntl(connected, { withRef: true });
  return injected;
};

export default enhance(Form.create()(MujicardLinkForm));
