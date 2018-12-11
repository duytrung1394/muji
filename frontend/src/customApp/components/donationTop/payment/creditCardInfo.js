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
      セキュリティコードとは、クレジットカードの裏面署名欄に印刷されている数字です。
    </p>
    <p>右端3桁（または4桁）の数字を入力してください。</p>
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
        ※有効期限が来月までのクレジットカードはご利用いただけません。有効期限が更新された新しいクレジットカードか、他のクレジットカードをご使用ください。
      </p>
    </Col>
    <Col>
      <p>
        ※アメリカン・エキスプレスの場合は、カード番号が15桁のため、「4桁」「4桁」「4桁」「3桁」にて入力してください。
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
          クレジットカード情報
        </Col>
      </StyledRow>

      <StyledRow type="flex" gutter={16}>
        <Col span={6} className="label">
          ご利用いただけるクレジットカード
        </Col>
        <Col span={18}>
          セゾンカード（MUJI Cardを含む）、 VISA、 MASTER CARD、 JCB、
          アメリカン・エキスプレス
        </Col>
        <Col offset={6} span={18}>
          <img src="https://www.muji.net/img/store/cart/creditcards.png" />
        </Col>
      </StyledRow>

      <StyledRow type="flex" gutter={16}>
        <Col span={6} className="label">
          カード番号
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
          有効期限
        </Col>
        <Col span={18}>
          {selectLimitMonth} / {selectLimitYear}
          <ExampleLimitYearMonth id="example.LimitYearMonth">
            例: (2012年5月の場合) 05/12
          </ExampleLimitYearMonth>
        </Col>
      </StyledRow>

      <StyledRow type="flex" gutter={16}>
        <Col span={6} className="label">
          セキュリティコード [{" "}
          <Popover content={securityCodeDescription} trigger="hover">
            <UnderlineSpan>？</UnderlineSpan>
          </Popover>{" "}
          ]
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
