import React, { Component } from "react";
import { Input, Select, Row, Col, Spin } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";
import CreditCardInfo from "./creditCardInfo";
import MujiCardInfo from "./mujiCardInfo";
import { Button } from "../../shared/form/button";
import IntlMessages from "../../../../components/utility/intlMessages";
import { injectIntl } from "react-intl";

const StyledFormFooter = styled(Row)`
  margin: 20px 0;
  a {
    color: #333333;
    text-decoration: underline;
    :hover {
      color: #7f0019;
    }
  }
`;

const NextButton = styled(Button)`
  &&& {
    width: 160px;
    padding: 5px;
  }
`;

class Form extends Component {
  state = {
    entity: {
      cardNo1: "",
      cardNo2: "",
      cardNo3: "",
      cardNo4: "",
      limitMonth: "",
      limitYear: "",
      securityCode: "",
      couponUseAmount: null,
      cardNo: "",
      pinNo: "",
      giftCardUseAmount: null
    },
    giftcard: {
      cardNo: "",
      pinNo: ""
    }
  };

  componentDidUpdate(prevProps, prevState, prevContext) {
    if (this.props.didGiftcardInquiry) {
      const {
        giftcard: { giftCardAvailableAmount }
      } = this.props;
      const { cardNo, pinNo } = this.state.giftcard;
      this.props.doGiftcardInquiryCleanup();
      const entity = {
        ...this.state.entity,
        cardNo: cardNo,
        pinNo: pinNo,
        giftCardAvailableAmount: giftCardAvailableAmount
      };
      this.setState({ entity: entity });
    }
  }

  updateEntity = (name, value) => {
    const entity = {
      ...this.state.entity,
      [name]: value
    };
    this.setState({ entity: entity });
  };

  updateGiftcard = (name, value) => {
    const giftcard = {
      ...this.state.giftcard,
      [name]: value
    };
    this.setState({ giftcard: giftcard });
  };

  getSelectYearOptions = () => {
    const yearOptions = [];
    for (let i = 0; i < 11; i++) {
      const year = moment()
        .add(i, "years")
        .format("YY");
      yearOptions.push(
        <Select.Option key={i} value={year}>
          {year}
        </Select.Option>
      );
    }
    return yearOptions;
  };

  inquiryHandler = () => {
    this.props.doGiftcardInquiryRequest({
      cardNo: this.state.giftcard.cardNo,
      pinNo: this.state.giftcard.pinNo
    });
  };

  submit = () => {
    const { donationCode, numberOfUnits } = this.props;

    const entity = {
      ...this.state.entity,
      donationCode: donationCode,
      numberOfUnits: numberOfUnits
    };

    this.props.confirmDonationRequest(entity);
  };

  render() {
    const {
      intl,
      donationCode,
      numberOfUnits,
      doingGiftcardInquiry,
      confirmingDonation,
      entity: { couponAvailableAmount, couponLimitDate }
    } = this.props;

    return (
      <div>
        <CreditCardInfo
          inputCardNo1={
            <Input
              size="small"
              value={this.state.entity.cardNo1}
              onChange={e => this.updateEntity("cardNo1", e.target.value)}
            />
          }
          inputCardNo2={
            <Input
              size="small"
              value={this.state.entity.cardNo2}
              onChange={e => this.updateEntity("cardNo2", e.target.value)}
            />
          }
          inputCardNo3={
            <Input
              size="small"
              value={this.state.entity.cardNo3}
              onChange={e => this.updateEntity("cardNo3", e.target.value)}
            />
          }
          inputCardNo4={
            <Input
              size="small"
              value={this.state.entity.cardNo4}
              onChange={e => this.updateEntity("cardNo4", e.target.value)}
            />
          }
          selectLimitMonth={
            <Select
              value={this.state.entity.limitMonth}
              onChange={month => this.updateEntity("limitMonth", month)}
              size="small"
            >
              <Select.Option value="" />
              <Select.Option value="01">01</Select.Option>
              <Select.Option value="02">02</Select.Option>
              <Select.Option value="03">03</Select.Option>
              <Select.Option value="04">04</Select.Option>
              <Select.Option value="05">05</Select.Option>
              <Select.Option value="06">06</Select.Option>
              <Select.Option value="07">07</Select.Option>
              <Select.Option value="08">08</Select.Option>
              <Select.Option value="09">09</Select.Option>
              <Select.Option value="10">10</Select.Option>
              <Select.Option value="11">11</Select.Option>
              <Select.Option value="12">12</Select.Option>
            </Select>
          }
          selectLimitYear={
            <Select
              value={this.state.entity.limitYear}
              onChange={year => this.updateEntity("limitYear", year)}
              size="small"
            >
              <Select.Option value="" />
              {this.getSelectYearOptions()}
            </Select>
          }
          inputSecurityCode={
            <Input
              size="small"
              value={this.state.entity.securityCode}
              onChange={e => this.updateEntity("securityCode", e.target.value)}
            />
          }
        />
        <div>
          <IntlMessages id="donation.payment.form.description.canAlsoUseMujiCard" />
        </div>
        <MujiCardInfo
          intl={intl}
          doingGiftcardInquiry={doingGiftcardInquiry}
          couponAvailableAmount={couponAvailableAmount}
          couponLimitDate={couponLimitDate}
          inputCouponUseAmount={
            <Input
              size="small"
              value={this.state.entity.couponUseAmount}
              onChange={e =>
                this.updateEntity("couponUseAmount", e.target.value)
              }
            />
          }
          giftCardAvailableAmount={this.state.entity.giftCardAvailableAmount}
          cardNo={this.state.entity.cardNo}
          inputCardNo={
            <Input
              size="small"
              value={this.state.giftcard.cardNo}
              onChange={e => this.updateGiftcard("cardNo", e.target.value)}
            />
          }
          inputPinNo={
            <Input
              size="small"
              value={this.state.giftcard.pinNo}
              onChange={e => this.updateGiftcard("pinNo", e.target.value)}
            />
          }
          inputGiftCardUseAmount={
            <Input
              size="small"
              value={this.state.entity.giftCardUseAmount}
              onChange={e =>
                this.updateEntity("giftCardUseAmount", e.target.value)
              }
            />
          }
          buttonInquiry={
            <Button
              type="primary"
              size="small"
              onClick={this.inquiryHandler}
              disabled={doingGiftcardInquiry}
            >
              <IntlMessages id="donation.payment.mujiCardInfo.button.inquiry" />
            </Button>
          }
        />

        <Spin spinning={confirmingDonation} size="large">
          <StyledFormFooter type="flex" jsuttify="start" align="middle">
            <Col span={9}>
              <Link
                to={{
                  pathname: `/store/cmdty/donation/${donationCode}`,
                  search: `?addNum=${numberOfUnits}`
                }}
              >
                <IntlMessages id="donation.payment.link.back" />
              </Link>
            </Col>
            <Col span={15}>
              <NextButton
                onClick={this.submit}
                type="primary"
                disabled={confirmingDonation}
              >
                <IntlMessages id="donation.payment.button.next" />
              </NextButton>
            </Col>
          </StyledFormFooter>
        </Spin>
      </div>
    );
  }
}

export default injectIntl(Form);
