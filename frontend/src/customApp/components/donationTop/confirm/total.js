import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";

const StyledRow = styled(Row)`
  margin-top: 10px;
  .price {
    text-align: right;
  }
  .total {
    padding-top: 10px;
    border-top: 1px solid #000;
    font-weight: bold;
  }
  .total-price {
    font-weight: bold;
  }
`;

const colLayout = {
  xs: {
    span: 24,
    offset: 0
  },
  sm: {
    span: 24,
    offset: 0
  },
  md: {
    span: 24,
    offset: 0
  },
  lg: {
    span: 12,
    offset: 12
  }
};

const ProductPrice = ({ product, price }) => {
  const priceValue = <span className={`${product}-price`}>{price}</span>;
  return (
    <Row type="flex" className={product}>
      <Col span={18}>
        <IntlMessages id={`donation.confirm.total.product.${product}`} />
      </Col>
      <Col span={6}>
        <div className="price">
          <IntlMessages
            id="donation.confirm.total.price"
            values={{ price: priceValue }}
          />
        </div>
      </Col>
    </Row>
  );
};

const Total = ({
  total,
  creditUseAmount,
  couponUseAmount,
  giftCardUseAmount
}) => {
  return (
    <StyledRow type="flex">
      <Col {...colLayout}>
        <ProductPrice product="credit" price={creditUseAmount} />
        <ProductPrice product="coupon" price={couponUseAmount} />
        <ProductPrice product="giftCard" price={giftCardUseAmount} />
        <ProductPrice product="total" price={total} />
      </Col>
    </StyledRow>
  );
};

export default Total;
