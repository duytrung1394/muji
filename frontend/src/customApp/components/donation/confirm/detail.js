import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";
import Total from "./total";

const Box = styled.div`
  border: 5px solid #ccc;
  padding: 20px;
`;

const RowLabel = styled(Row)`
  border: 1px solid #ccc;
  border-bottom: none;
  border-left: none;
  background: #f5f5f5;
`;

const ColLabel = styled(Col)`
  border-left: 1px solid #ccc;
  text-align: center;
  padding: 5px 0;
  font-weight: bold;
`;

const RowItem = styled(Row)`
  border: 1px solid #ccc;
  border-top: none;
  border-left: none;
`;

const ColItem = styled(Col)`
  border-left: 1px solid #ccc;

  .product-name {
    padding: 20px 20px;
  }

  .unit-price {
    padding: 5px 0px 10px;

    .price-value {
      font-weight: bold;
    }
  }

  .number-of-units {
    padding: 40px 0;
    text-align: center;
  }

  .price {
    padding: 40px 20px;
    text-align: right;
  }
`;

const Detail = ({
  title,
  organization,
  unitPrice,
  quantity,
  total,
  creditUseAmount,
  couponUseAmount,
  giftCardUseAmount,
  img
}) => {
  return (
    <Box>
      <RowLabel type="flex">
        <ColLabel span={16}>
          <IntlMessages id="donation.confirm.detail.label.productName" />
        </ColLabel>
        <ColLabel span={2}>
          <IntlMessages id="donation.confirm.detail.label.numberOfUnits" />
        </ColLabel>
        <ColLabel span={6}>
          <IntlMessages id="donation.confirm.detail.label.subTotal" />
        </ColLabel>
      </RowLabel>
      <RowItem type="flex">
        <ColItem span={16}>
          <Row className="product-name">
            <Col span={4}>
              <img src={img} alt="" />
            </Col>
            <Col span={18} offset={2}>
              <div>{title}</div>
              <div>{organization}</div>
              <div className="unit-price">
                <IntlMessages
                  id="donation.confirm.detail.unitPrice"
                  values={{
                    price: <span className="price-value">{unitPrice}</span>
                  }}
                />
              </div>
            </Col>
          </Row>
        </ColItem>
        <ColItem span={2}>
          <div className="number-of-units">{quantity}</div>
        </ColItem>
        <ColItem span={6}>
          <div className="price">
            <IntlMessages
              id="donation.confirm.detail.price"
              values={{ price: <span className="price-value">{total}</span> }}
            />
          </div>
        </ColItem>
      </RowItem>
      <Total
        total={total}
        creditUseAmount={creditUseAmount}
        couponUseAmount={couponUseAmount}
        giftCardUseAmount={giftCardUseAmount}
      />
    </Box>
  );
};

export default Detail;
