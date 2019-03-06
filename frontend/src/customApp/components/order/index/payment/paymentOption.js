import React, { Fragment } from "react";
import styled from "styled-components";
import IntlMessages from "../../../../../components/utility/intlMessages";
import { Radio, Input, Checkbox } from "antd";
import { Link } from "react-router-dom";
import { OutlineButton } from "../../../shared/form/button";
import giftCardImg from "../../../../../image/order/order_procedure/img-cart-giftcard01.png";

const OptionContent = styled.div`
  padding: 16px;
  margin-bottom: 16px;
  background-color: #fff;
  box-shadow: 0px 1px 3px 0px rgba(153, 153, 153, 0.5);
`;

const PaymentTitles = styled.h2`
  display: inline-block;
  font-size: 15px;
  font-weight: 700;
`;

const DetailLink = styled.span`
  margin-left: 16px;
  font-size: 12px;
`;

const CheackBoxArea = styled.div`
  & label {
    & .ant-checkbox-checked .ant-checkbox-inner {
      background-color: #7f0019;
      border-color: #7f0019;
    }
  }
`;

const Prossession = styled.p`
  font-size: 13px;
  padding-left: 24px;
`;

const InputLabel = styled.h2`
  color: #585858;
  margin-top: 20px;
  font-size: 100%;
  marginleft: "10px";
`;

const GiftCardImgBox = styled.div`
  margin-top: 20px;
`;

const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px"
};

const InputStyle = {
  width: "100px",
  marginLeft: "10px"
};

const GiftCardInputStyle = {
  width: "280px",
  height: "32px",
  border: "1px solid #999",
  borderRadius: "5px 5px 5px 5px"
};

const StyledRadio = styled(Radio)`
  & span .ant-radio-inner {
    border-color: #7f0019;
    :after {
      background-color: #7f0019;
      border-color: #7f0019;
      height: 10px;
      width: 10px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const StyledRadioGroup = styled(Radio.Group)`
  &.ant-radio-group {
    padding: 10px 0 10px 30px;
  }
`;

const ButtonArea = styled.div`
  text-align: center;
  margin: 30px auto 0;
`;

const CardBalance = styled.dl`
  margin-top: 30px;
  margin-bottom: 0px;
  display: flex;
  justify-content: space-between;
`;

const CardBalanceLabel = styled.p`
  font-weight: bold;
  font-size: 13px;
  margin-bottom: 0px;
`;

const CardBalanceView = styled.p`
  font-size: 15px;
  margin-bottom: 0px;
`;

const CardBalanceViewCurrency = styled.span`
  font-size: 11px;
  padding: 0px 0px 0px 4px;
  margin-left: 10px;
`;

const intlMessageIds = {
  shoppingPoint: {
    title: "order.procedure.mujiShoppingPoint",
    labelName: "order.procedure.usePoint",
    usedBy: "order.procedure.possessionPoint",
    useItemUnit: "order.procedure.point"
  },
  giftCard: {
    title: "order.procedure.mujiGiftCard",
    labelName: "order.procedure.useGiftCard",
    usedBy: "order.procedure.possessionCoin",
    useItemUnit: "order.procedure.coin"
  }
};

const PaymentOption = props => {
  const { paymentPoints, paymentOption, optionHandler, optionKey } = props;
  const { changeFlg } = optionHandler;
  const intlMessageId = intlMessageIds[optionKey];
  return (
    <OptionContent>
      <div>
        <PaymentTitles>
          <IntlMessages id={intlMessageId.title} />
        </PaymentTitles>
        <Link to="#">
          <DetailLink>
            <IntlMessages id="order.procedure.detail" />
          </DetailLink>
        </Link>
      </div>
      <UseOption
        optionKey={optionKey}
        paymentPoints={paymentPoints}
        changeFlg={changeFlg}
      />
      {paymentOption.disableFlg === false && (
        <Fragment>
          {optionKey === "shoppingPoint" ? (
            <ShoppingPointInput {...props} />
          ) : (
            <MujiCardInput {...props} />
          )}
        </Fragment>
      )}
    </OptionContent>
  );
};

const UseOption = ({ optionKey, paymentPoints, changeFlg }) => {
  const intlMessageId = intlMessageIds[optionKey];
  return (
    <CheackBoxArea>
      <Checkbox
        onChange={() => {
          changeFlg(optionKey);
        }}
      >
        <IntlMessages id={intlMessageId.labelName} />
        {optionKey !== "giftCard" && (
          <Prossession>
            <IntlMessages id="order.procedure.leftBracket" />
            <IntlMessages id={intlMessageId.usedBy} />
            <span>{paymentPoints.possessions}</span>
            <IntlMessages id={intlMessageId.useItemUnit} />
            <IntlMessages id="order.procedure.rightBracket" />
          </Prossession>
        )}
      </Checkbox>
    </CheackBoxArea>
  );
};

const ShoppingPointInput = props => {
  return <PaymentInput {...props} />;
};
const MujiCardInput = props => {
  const { paymentPoints, paymentOption, optionHandler, optionKey } = props;
  const { onInquiry } = optionHandler;
  return (
    <Fragment>
      <div>
        <InputLabel>
          <IntlMessages id="order.procedure.cardNo" />
        </InputLabel>
        <Input
          style={GiftCardInputStyle}
          placeholder={"1234 56778 9012 3456"}
        />
      </div>
      <div>
        <InputLabel>
          <IntlMessages id="order.procedure.pinNo" />
        </InputLabel>
        <Input style={GiftCardInputStyle} placeholder={"1234"} />
      </div>
      <GiftCardImgBox>
        <img src={giftCardImg} />
      </GiftCardImgBox>
      <ButtonArea>
        <OutlineButton
          onClick={() => {
            onInquiry(optionKey);
          }}
          color={"#7f0019"}
          disabled={paymentOption.inquired}
        >
          <IntlMessages id="order.procedure.inquiry" />
        </OutlineButton>
      </ButtonArea>
      {paymentOption.inquired && (
        <Fragment>
          <CardBalance>
            <CardBalanceLabel>
              <IntlMessages id="order.procedure.cardBrance" />
            </CardBalanceLabel>
            <CardBalanceView>
              {paymentPoints.possessions}
              <CardBalanceViewCurrency>
                <IntlMessages id="order.currency" />
              </CardBalanceViewCurrency>
            </CardBalanceView>
          </CardBalance>
          <PaymentInput {...props} />
        </Fragment>
      )}
    </Fragment>
  );
};

const PaymentInput = props => {
  const { paymentPoints, paymentOption, optionHandler, optionKey } = props;
  const { onChange, resetValue } = optionHandler;
  return (
    <div>
      <StyledRadioGroup
        onChange={onChange}
        value={paymentOption.value}
        name={optionKey}
        disabled={paymentOption.disableFlg}
      >
        <StyledRadio style={radioStyle} value={1} onClick={resetValue}>
          <IntlMessages id="order.procedure.useAll" />
        </StyledRadio>
        <StyledRadio style={radioStyle} value={2}>
          <IntlMessages id="order.procedure.usePart" />
          {paymentOption.value === 2 ? (
            <Input style={InputStyle} ref={paymentOption.inputRef} />
          ) : (
            <Input style={InputStyle} ref={paymentOption.inputRef} disabled />
          )}
          {optionKey === "shoppingPoint" ? (
            <IntlMessages id="order.procedure.point" />
          ) : (
            <IntlMessages id="order.currency" />
          )}
        </StyledRadio>
      </StyledRadioGroup>
    </div>
  );
};

export default PaymentOption;
