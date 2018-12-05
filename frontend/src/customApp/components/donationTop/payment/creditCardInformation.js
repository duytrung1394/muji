import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col, Input, Select, Popover, Button } from "antd";
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

const Price = styled.span`
  font-weight: bold;
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
    セキュリティコードとは、クレジットカードの裏面署名欄に印刷されている数字です。
    <br />
    右端3桁（または4桁）の数字を入力してください。
    <br />
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
  div {
    margin-bottom: 10px;
    text-indent: -1em;
  }
`;

const CardAnnotation = () => (
  <StyledCardAnnotation type="flex">
    <Col>
      ※有効期限が来月までのクレジットカードはご利用いただけません。有効期限が更新された新しいクレジットカードか、
      <br />
      他のクレジットカードをご使用ください。
    </Col>
    <Col>
      ※アメリカン・エキスプレスの場合は、カード番号が15桁のため、「4桁」「4桁」「4桁」「3桁」にて入力してください。
    </Col>
  </StyledCardAnnotation>
);

class CreditCardInformation extends Component {
  updateEntity = (name, value) => {
    this.props.updateEntity(name, value);
  };

  render() {
    const {
      entity: { limitMonth, limitYear }
    } = this.props;

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
              <Col span={2}>
                <Input size="small" />
              </Col>
              <Col span={2}>
                <Input size="small" />
              </Col>
              <Col span={2}>
                <Input size="small" />
              </Col>
              <Col span={2}>
                <Input size="small" />
              </Col>
            </Row>
          </Col>
        </StyledRow>

        <StyledRow type="flex" gutter={16}>
          <Col span={6} className="label">
            有効期限
          </Col>
          <Col span={18}>
            <Select
              value={limitMonth}
              onChange={month => this.updateEntity("limitMonth", month)}
              size="small"
            >
              <Select.Option value="" />
              <Select.Option value="1">1</Select.Option>
              <Select.Option value="2">2</Select.Option>
              <Select.Option value="3">3</Select.Option>
              <Select.Option value="4">4</Select.Option>
              <Select.Option value="5">5</Select.Option>
              <Select.Option value="6">6</Select.Option>
              <Select.Option value="7">7</Select.Option>
              <Select.Option value="8">8</Select.Option>
              <Select.Option value="9">9</Select.Option>
              <Select.Option value="10">10</Select.Option>
              <Select.Option value="11">11</Select.Option>
              <Select.Option value="12">12</Select.Option>
            </Select>{" "}
            /{" "}
            <Select
              value={limitYear}
              onChange={year => this.updateEntity("limitYear", year)}
              size="small"
            >
              <Select.Option value="" />
              <Select.Option value="18">18</Select.Option>
              <Select.Option value="19">19</Select.Option>
              <Select.Option value="20">20</Select.Option>
              <Select.Option value="21">21</Select.Option>
              <Select.Option value="22">22</Select.Option>
              <Select.Option value="23">23</Select.Option>
              <Select.Option value="24">24</Select.Option>
              <Select.Option value="25">25</Select.Option>
              <Select.Option value="26">26</Select.Option>
              <Select.Option value="27">27</Select.Option>
              <Select.Option value="28">28</Select.Option>
            </Select>
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
              <Col span={2}>
                <Input size="small" />
              </Col>
            </Row>
          </Col>
        </StyledRow>

        <CardAnnotation />
      </Box>
    );
  }
}

export default CreditCardInformation;
