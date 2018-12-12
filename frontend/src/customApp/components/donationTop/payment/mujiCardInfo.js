import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";
import { Button } from "../../form/button";

const Box = styled.div`
  border: 5px solid #ccc;
  padding: 10px;
  margin: 20px 0px;
  .title {
    font-size: 18px;
    font-weight: bold;
  }
}
`;

const StyledRow = styled(Row)`
  margin-bottom: 20px;
`;

const StyledCardAnnotation = styled(Row)`
  margin-top: 20px;
  padding: 10px;
  font-size: 11px;
  color: #555;
`;

const CardAnnotation = () => (
  <StyledCardAnnotation type="flex">
    <Col span={24}>
      <p>
        <IntlMessages id="donation.payment.mujiCardInfo.cardAnnotation1" />
      </p>
    </Col>
    <Col span={24}>
      <p>
        <IntlMessages id="donation.payment.mujiCardInfo.cardAnnotation2" />
      </p>
    </Col>
  </StyledCardAnnotation>
);

const StyledLabelItem = styled(Row)`
  background: #f5f5f5;
  border: 1px solid #eeeeee;
`;

const ColLabel = styled(Col)`
  div {
    padding: 10px;
  }
`;

const ColItem = styled(Col)`
  background: #ffffff;
  padding: 20px;
`;

const UseAmount = styled(Row)`
  &&& {
    div {
      padding: 2px;
    }
    .use-amount {
      margin-top: 20px;
      padding: 10px;
      background: #f5f5f5;
    }
    .label {
      font-weight: bold;
    }
    .card-no .ant-input {
      width: 160px;
    }
    .ant-input {
      width: 80px;
    }
    .gift-card-description {
      margin-bottom: 10px;
    }
    button {
      margin-top: 10px;
    }
  }
`;

const Price = styled.span`
  font-weight: bold;
`;

const MujiCardForm = ({
  intl,
  couponAvailableAmount,
  couponLimitDate,
  inputCouponUseAmount,
  giftCardAvailableAmount,
  inputCardNo,
  inputPinNo,
  inputGiftCardUseAmount
}) => {
  return (
    <Box>
      <StyledRow type="flex" gutter={16}>
        <Col span={24} className="title">
          <IntlMessages id="donation.payment.mujiCardInfo.title" />
        </Col>
      </StyledRow>

      <CardAnnotation />

      <StyledLabelItem gutter={16} type="flex" align="middle">
        <ColLabel span={6}>
          <div>
            <IntlMessages id="donation.payment.mujiCardInfo.label.shoppingPoint" />
          </div>
        </ColLabel>
        <ColItem span={18}>
          {couponAvailableAmount &&
            couponAvailableAmount > 0 && (
              <UseAmount>
                <Col span={24}>
                  <IntlMessages
                    id="donation.payment.remaining.price"
                    values={{
                      price: <Price>{couponAvailableAmount}</Price>
                    }}
                  />
                </Col>
                <Col span={24}>
                  <IntlMessages
                    id="donation.payment.mujiCardInfo.couponLimitDate"
                    values={{ date: couponLimitDate }}
                  />
                </Col>
                <Col span={24} className="use-amount">
                  <div className="label">
                    <IntlMessages id="donation.payment.mujiCardInfo.label.useCouponAmount" />
                  </div>
                  <div>
                    <IntlMessages
                      id="donation.payment.mujiCardInfo.amountInput"
                      values={{
                        input: inputCouponUseAmount
                      }}
                    />
                  </div>
                </Col>
              </UseAmount>
            )}
          {!couponAvailableAmount && (
            <div>
              <IntlMessages id="donation.payment.mujiCardInfo.label.noPointsAvailable" />
            </div>
          )}
        </ColItem>
      </StyledLabelItem>

      <StyledLabelItem gutter={16} type="flex" align="middle">
        <ColLabel span={6}>
          <div>
            <IntlMessages id="donation.payment.mujiCardInfo.label.mujiGiftCard" />
          </div>
        </ColLabel>
        <ColItem span={18}>
          <UseAmount>
            <Col span={12}>
              <Col span={24}>
                <IntlMessages
                  id="donation.payment.remaining.price"
                  values={{
                    price: <Price>{giftCardAvailableAmount}</Price>
                  }}
                />
              </Col>
              <Col span={24} className="gift-card-description">
                <IntlMessages id="donation.payment.mujiCardInfo.label.giftCardDescription" />
              </Col>
              <Col span={6} className="label">
                <IntlMessages id="donation.payment.mujiCardInfo.label.cardNo" />
              </Col>
              <Col span={18} className="card-no">
                {inputCardNo}
              </Col>
              <Col span={6} className="label">
                <IntlMessages id="donation.payment.mujiCardInfo.label.pinNo" />
              </Col>
              <Col span={18}>{inputPinNo}</Col>
              <Col span={18} offset={6}>
                <Button
                  type="primary"
                  size="small"
                  onClick={() => console.log("clicked")}
                >
                  <IntlMessages id="donation.payment.mujiCardInfo.button.inquiry" />
                </Button>
              </Col>
            </Col>
            <Col span={12}>
              <img
                src="https://img.muji.net/img/store/cart/cart_giftcard01.jpg"
                alt={intl.formatMessage({
                  id: "donation.payment.mujiCardInfo.giftCardDescription"
                })}
              />
            </Col>
            {giftCardAvailableAmount &&
              giftCardAvailableAmount > 0 && (
                <Col span={24} className="use-amount">
                  <div className="label">
                    <IntlMessages id="donation.payment.mujiCardInfo.label.useMujiGiftCardAmount" />
                  </div>
                  <div>
                    <IntlMessages
                      id="donation.payment.mujiCardInfo.amountInput"
                      values={{
                        input: inputGiftCardUseAmount
                      }}
                    />
                  </div>
                </Col>
              )}
          </UseAmount>
        </ColItem>
      </StyledLabelItem>
    </Box>
  );
};

export default MujiCardForm;
