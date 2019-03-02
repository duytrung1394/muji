import React, { Fragment, Component } from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import { Checkbox, Select } from "antd";
import CommonButton from "../commonButton";

const GiftWrapper = styled.div`
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

const GiftCheckboxArea = styled.div`
  margin-bottom: 16px;
  & label {
    & .ant-checkbox-checked .ant-checkbox-inner {
      background-color: #7f0019;
      border-color: #7f0019;
    }
  }
`;

const SpecifiedResult = styled.div`
  margin-top: 20px;
  font-size: 13px;
`;

const ButtonArea = styled.div`
  margin-top: 20px;
`;

const SpecifyMessageButton = styled(CommonButton)`
  width: 300px;
  font-size: 12px;
`;

const Option = Select.Option;

class Gift extends Component {
  constructor(props) {
    super(props);
    this.state = {
      useGiftFlg: false
    };
  }

  changeFlg = () => {
    this.setState({
      useGiftFlg: !this.state.useGiftFlg
    });
  };

  render() {
    const { giftData, isConfirm } = this.props;
    if (giftData) {
      return (
        <GiftWrapper>
          <Title>
            <IntlMessages id="order.procedure.GiftWrapping" />
          </Title>
          {isConfirm ? (
            <IntlMessages id="order.confirm.dontWant" />
          ) : (
            <Fragment>
              <GiftCheckboxArea>
                <Checkbox
                  onChange={() => {
                    this.changeFlg();
                  }}
                >
                  <IntlMessages id="order.procedure.useGiftWrapping" />
                </Checkbox>
              </GiftCheckboxArea>
              {this.state.useGiftFlg && (
                <GiftWrappingSettings giftData={giftData} />
              )}
            </Fragment>
          )}
        </GiftWrapper>
      );
    }
    return null;
  }
}

const GiftWrappingSettings = ({ giftData }) => {
  return (
    <Fragment>
      <Select defaultValue={giftData.packTogether} style={{ width: 250 }}>
        <Option value={giftData.packTogether}>
          <IntlMessages id="order.procedure.toPackTogether" />
        </Option>
        <Option value={giftData.packIndividual}>
          <IntlMessages id="order.procedure.toWrapIndividually" />
        </Option>
      </Select>
      <SpecifiedResult>
        <p>
          <IntlMessages id="order.procedure.japaneseGiftWapping" />
          {giftData.wapping_state}
        </p>
        <p>
          <IntlMessages id="order.procedure.GiftMessage" />
          {giftData.message_state}
        </p>
      </SpecifiedResult>
      <ButtonArea>
        <SpecifyMessageButton>
          <IntlMessages id="order.procedure.specifyMessage" />
        </SpecifyMessageButton>
      </ButtonArea>
    </Fragment>
  );
};

export default Gift;
