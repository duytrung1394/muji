import React, { Component } from "react";
import styled from "styled-components";
import { Radio } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";

const Box = styled.div`
  padding: 16px;
  margin-bottom: 16px;
  background-color: #fff;
  box-shadow: 0px 1px 3px 0px rgba(153, 153, 153, 0.5);
`;

const Title = styled.h1`
  font-size: 15px;
  font-weight: 600;
  color: rgb(88, 88, 88);
  margin-bottom: 16px;
`;

const RadioGroup = styled(Radio.Group)`
  && {
    padding-bottom: 16px;
    .ant-radio-inner {
      border-color: #7f0019;
      :after {
        background-color: #7f0019;
        height: 10px;
        width: 10px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
  }
`;

const radioStyle = {
  display: "block",
  height: "30px"
};

const Note = styled.div`
  padding: 0 28px;
  color: #999;
  font-size: 12px;
`;

class DeliveryOption extends Component {
  state = {
    deliveryOption: this.props.deliveryOption
  };

  onChange = e => {
    const deliveryOptionValue = e.target.value;
    // TODO: 配送オプション変更リクエストを送信. その応答で配送情報部分のみ変更可能にする予定。
    // updateDeliveryOptionRequest({ delivery_option: deliveryOptionValue });
    this.setState({ deliveryOption: deliveryOptionValue });
  };

  render() {
    return (
      <Box>
        <Title>
          <IntlMessages id="order.procedure.deliveryOption.title" />
        </Title>
        <RadioGroup value={this.state.deliveryOption} onChange={this.onChange}>
          <Radio style={radioStyle} value="bulk">
            <IntlMessages id="order.procedure.deliveryOption.radio.bulk" />
          </Radio>
          <Radio style={radioStyle} value="inorder">
            <IntlMessages id="order.procedure.deliveryOption.radio.inorder" />
            <Note>
              <IntlMessages id="order.procedure.deliveryOption.radio.inorder.note" />
            </Note>
          </Radio>
        </RadioGroup>
      </Box>
    );
  }
}

export default DeliveryOption;
