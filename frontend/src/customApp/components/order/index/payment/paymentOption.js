import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../../components/utility/intlMessages";
import { Radio, Input, Checkbox } from "antd";
import { Link } from "react-router-dom";

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

const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px"
};

const InputStyle = {
  width: "100px",
  marginLeft: "10px"
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

const RadioGroup = Radio.Group;

const PaymentOption = props => {
  const {
    title,
    labelName,
    usedBy,
    useItemUnit,
    paymentPoints,
    paymentOption,
    resetFlg,
    optionHandler,
    optionKey
  } = props;
  const { possessions, inputFlg } = paymentPoints;
  const { onChange, resetValue, changeFlg } = optionHandler;

  return (
    <OptionContent>
      <div>
        <PaymentTitles>
          <IntlMessages id={title} />
        </PaymentTitles>
        <Link to="#">
          <DetailLink>
            <IntlMessages id="order.procedure.detail" />
          </DetailLink>
        </Link>
      </div>
      <CheackBoxArea>
        <Checkbox
          onChange={() => {
            changeFlg(optionKey, resetFlg);
          }}
        >
          <IntlMessages id={labelName} />
          <Prossession>
            <IntlMessages id="order.procedure.leftBracket" />
            <IntlMessages id={usedBy} />
            <span>{possessions}</span>
            <IntlMessages id={useItemUnit} />
            <IntlMessages id="order.procedure.rightBracket" />
          </Prossession>
        </Checkbox>
      </CheackBoxArea>
      <div>
        <RadioGroup
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
            {inputFlg ? (
              paymentOption.value === 2 &&
              paymentOption.disableFlg === false ? (
                <Input style={InputStyle} ref={paymentOption.inputRef} />
              ) : (
                <Input
                  style={InputStyle}
                  ref={paymentOption.inputRef}
                  disabled
                />
              )
            ) : null}
          </StyledRadio>
        </RadioGroup>
      </div>
    </OptionContent>
  );
};

export default PaymentOption;
