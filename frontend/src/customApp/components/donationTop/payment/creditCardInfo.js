import React from "react";
import styled from "styled-components";
import { Row, Col, Popover } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";

const Box = styled.div`
  border: 5px solid #ccc;
  padding: 10px;
  margin: 20px 0px;
  .title {
    font-size: 18px;
    font-weight: bold;
  }
  .label {
    font-weight: bold;
    text-align: right;
  }
  .ant-select {
    width: 40px;
  }
}
`;

const StyledRow = styled(Row)`
  margin-bottom: 20px;
`;

const ExampleLimitYearMonth = styled.span`
  &&& {
    color: #666;
    font-size: 11px;
    margin-left: 10px;
  }
`;

const securityCodeDescription = (
  <div>
    <p>
      <IntlMessages id="donation.payment.creditCardInfo.securityCodeDescription1" />
    </p>
    <p>
      <IntlMessages id="donation.payment.creditCardInfo.securityCodeDescription2" />
    </p>
    <img
      src="https://img.muji.net/img/store/cart/securitycode.png"
      wdith="169"
      height="126"
      alt=""
    />
  </div>
);

const UnderlineSpan = styled.span`
  text-decoration: underline;
  ::after {
    content: " ";
  }
  ::before {
    content: " ";
  }
`;

const StyledCardAnnotation = styled(Row)`
  margin-top: 20px;
  padding: 10px;
  font-size: 11px;
  color: #555;
`;

const CardAnnotation = () => (
  <StyledCardAnnotation type="flex">
    <Col>
      <p>
        <IntlMessages id="donation.payment.creditCardInfo.cardAnnotation1" />
      </p>
    </Col>
    <Col>
      <p>
        <IntlMessages id="donation.payment.creditCardInfo.cardAnnotation2" />
      </p>
    </Col>
  </StyledCardAnnotation>
);

const CreditCardForm = ({
  inputCardNo1,
  inputCardNo2,
  inputCardNo3,
  inputCardNo4,
  selectLimitMonth,
  selectLimitYear,
  inputSecurityCode
}) => {
  return (
    <Box>
      <StyledRow type="flex" gutter={16}>
        <Col span={6} className="title">
          <IntlMessages id="donation.payment.creditCardInfo.title" />
        </Col>
      </StyledRow>

      <StyledRow type="flex" gutter={16}>
        <Col span={6} className="label">
          <IntlMessages id="donation.payment.creditCardInfo.label.cardsAvailable" />
        </Col>
        <Col span={18}>
          <IntlMessages id="donation.payment.creditCardInfo.label.cards" />
        </Col>
        <Col offset={6} span={18}>
          <img src="https://www.muji.net/img/store/cart/creditcards.png" />
        </Col>
      </StyledRow>

      <StyledRow type="flex" gutter={16}>
        <Col span={6} className="label">
          <IntlMessages id="donation.payment.creditCardInfo.label.cardNo" />
        </Col>
        <Col span={18}>
          <Row type="flext" gutter={8}>
            <Col span={2}>{inputCardNo1}</Col>
            <Col span={2}>{inputCardNo2}</Col>
            <Col span={2}>{inputCardNo3}</Col>
            <Col span={2}>{inputCardNo4}</Col>
          </Row>
        </Col>
      </StyledRow>

      <StyledRow type="flex" gutter={16}>
        <Col span={6} className="label">
          <IntlMessages id="donation.payment.creditCardInfo.label.expirationDate" />
        </Col>
        <Col span={18}>
          {selectLimitMonth} / {selectLimitYear}
          <ExampleLimitYearMonth id="example.LimitYearMonth">
            <IntlMessages id="donation.payment.creditCardInfo.label.expirationDateExample" />
          </ExampleLimitYearMonth>
        </Col>
      </StyledRow>

      <StyledRow type="flex" gutter={16}>
        <Col span={6} className="label">
          <IntlMessages id="donation.payment.creditCardInfo.label.securityCode" />
          <Popover content={securityCodeDescription} trigger="hover">
            [
            <UnderlineSpan>?</UnderlineSpan>
            ]
          </Popover>
        </Col>
        <Col span={18}>
          <Row type="flext" gutter={8}>
            <Col span={2}>{inputSecurityCode}</Col>
          </Row>
        </Col>
      </StyledRow>

      <CardAnnotation />
    </Box>
  );
};

export default CreditCardForm;
