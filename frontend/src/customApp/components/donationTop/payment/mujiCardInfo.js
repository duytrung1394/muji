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
      <p>※MUJI GIFT CARDのご利用は、1回の寄付につき1枚までです。</p>
    </Col>
    <Col span={24}>
      <p>
        ※MUJI GIFT CARDご利用の際、MUJIショッピングポイントの併用が可能です。
      </p>
    </Col>
  </StyledCardAnnotation>
);

const StyledLabelItem = styled(Row)`
  background: #f5f5f5;
  border: 1px solid #eeeeee;
`;

const ColLabel = styled(Col)``;

const ColItem = styled(Col)`
  background: #ffffff;
  padding: 20px;
`;

const UseAmount = styled(Row)`
  &&& {
    .use-amount {
      margin-top: 20px;
      padding: 10px 0;
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
          MUJIショッピングポイント／MUJI GIFT CARDの利用
        </Col>
      </StyledRow>

      <CardAnnotation />

      <StyledLabelItem gutter={4} type="flex" align="middle">
        <ColLabel span={6}>MUJIショッピングポイント</ColLabel>
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
                <Col span={24}>有効期限: {couponLimitDate}まで</Col>
                <Col span={24} className="use-amount">
                  <div className="label">MUJInetクーポンご利用額</div>
                  <div>
                    {inputCouponUseAmount}
                    円
                  </div>
                </Col>
              </UseAmount>
            )}
          {!couponAvailableAmount && (
            <div>ご利用可能なショッピングポイントはありあせん</div>
          )}
        </ColItem>
      </StyledLabelItem>

      <StyledLabelItem gutter={4} type="flex" align="middle">
        <ColLabel span={6}>MUJI GIFT CARD</ColLabel>
        <ColItem span={18}>
          <UseAmount>
            <Col span={12}>
              <Col span={24}>残額: {giftCardAvailableAmount}円分</Col>
              <Col span={24} className="gift-card-description">
                ご利用のギフトカード情報をご入力ください。
              </Col>
              <Col span={5} className="label">
                カード番号
              </Col>
              <Col span={18} className="card-no">
                {inputCardNo}
              </Col>
              <Col span={5} className="label">
                PIN番号
              </Col>
              <Col span={18}>{inputPinNo}</Col>
              <Col span={18} offset={5}>
                <Button
                  type="primary"
                  size="small"
                  onClick={() => console.log("clicked")}
                >
                  紹会
                </Button>
              </Col>
            </Col>
            <Col span={12}>
              <img
                src="https://img.muji.net/img/store/cart/cart_giftcard01.jpg"
                alt="カード番号、PIN番号は、ギフトカードの裏面に記載されています。"
              />
            </Col>
            {giftCardAvailableAmount &&
              giftCardAvailableAmount > 0 && (
                <Col span={24} className="use-amount">
                  <div className="label">MUJ GIFT CARDご利用額</div>
                  <div>
                    {inputCouponUseAmount}
                    円
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
