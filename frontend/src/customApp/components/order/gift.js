import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import { Checkbox, Select } from "antd";
import CommonButton from "./commonButton";

const GiftWrapper = styled.div`
  padding: 16px;
  margin-top: 30px;
  background-color: #f2f2f2;
`;

const GiftStyle = styled.div`
  padding: 16px;
  background-color: #fff;
  box-shadow: 0px 1px 3px 0px rgba(153, 153, 153, 0.5);
`;

const GiftTitle = styled.h1`
  font-size: 15px;
  font-weight: 600;
  color: rgb(88, 88, 88);
  margin-bottom: 0;
`;

const GiftCheckboxArea = styled.div`
  margin: 20px 0;
`;

const GiftCheckbox = styled(Checkbox)`
  && {
    font-size: 13px;
  }
  .ant-checkbox-inner {
    border: 2px solid #999;
  }
  .ant-checkbox-checked {
    border: 2px solid #7f0119;
  }
`;

const SpecifiedResult = styled.div`
  margin-top: 20px;
  font-size: 13px;
`;

const StyledSpan = styled.span`
  padding-right: 30px;
`;

const ButtonArea = styled.div`
  margin-top: 20px;
`;

const SpecifyMessageButton = styled(CommonButton)`
  width: 300px;
  font-size: 12px;
`;

const Option = Select.Option;

const Gift = ({ giftData }) => {
  if (giftData) {
    return (
      <GiftWrapper>
        <GiftStyle>
          <GiftTitle>
            <IntlMessages id="order.procedure.GiftWrapping" />
          </GiftTitle>
          <GiftCheckboxArea>
            <GiftCheckbox>
              <IntlMessages id="order.procedure.useGiftWrapping" />
            </GiftCheckbox>
          </GiftCheckboxArea>
          <Select style={{ width: 250 }}>
            <Option value="まとめて包装する">
              <IntlMessages id="order.procedure.toPackTogether" />
            </Option>
            <Option value="個々に包装する">
              <IntlMessages id="order.procedure.toWrapIndividually" />
            </Option>
          </Select>
          <SpecifiedResult>
            <StyledSpan>
              <IntlMessages id="order.procedure.japaneseGiftWapping" />
              {giftData.wapping_state}
            </StyledSpan>
            <IntlMessages id="order.procedure.GiftMessage" />
            {giftData.message_state}
          </SpecifiedResult>
          <ButtonArea>
            <SpecifyMessageButton>
              <IntlMessages id="order.procedure.specifyMessage" />
            </SpecifyMessageButton>
          </ButtonArea>
        </GiftStyle>
      </GiftWrapper>
    );
  }
  return null;
};

export default Gift;
