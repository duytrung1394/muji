import React from "react";
import styled from "styled-components";
import { Checkbox, Row, Col } from "antd";
import { Link } from "../../shared/form/link";
import IntlMessages from "../../../../components/utility/intlMessages";

import ImgCoupon1 from "../../../../image/order/order_procedure/img-coupon-1.png";
import ImgCoupon2 from "../../../../image/order/order_procedure/img-coupon-2.png";

const images = {
  ImgCoupon1: ImgCoupon1,
  ImgCoupon2: ImgCoupon2
};

const Box = styled.div`
  padding: 16px;
  background-color: #fff;
  box-shadow: 0px 1px 3px 0px rgba(153, 153, 153, 0.5);
`;

const Title = styled.h1`
  font-size: 15px;
  font-weight: 600;
  color: rgb(88, 88, 88);
  margin-bottom: 16px;
`;

const StyledCheckbox = styled(Checkbox)`
  & .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #7f0019;
    border-color: #7f0019;
  }
`;

const CouponList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 30px 0 0;
`;

const CouponItem = styled.li`
  padding: 10px;
  border-top: 1px solid rgb(153, 153, 153);
  overflow: hidden;
  position: relative;
  &:last-child {
    border-bottom: 1px solid rgb(153, 153, 153);
  }
`;

const ItemTitle = styled.h2`
  font-size: 13px;
  font-weight: bold;
  color: rgb(88, 88, 88);
  margin-bottom: 16px;
`;

const StyledPeriod = styled.div`
  font-size: 12px;
`;

const StyledRemaining = styled.div`
  font-size: 12px;
  span {
    margin-right: 10px;
  }
  margin-bottom: 5px;
`;

const CheckboxCol = styled(Col)`
  align-self: flex-end;
`;

const ImageCol = styled(Col)`
  img {
    width: 100%;
  }
`;

const DescriptionCol = styled(Col)`
  &&& {
    padding-left: 10px;
  }
`;

const Period = ({ date }) => {
  if (date && date.length > 7) {
    return (
      <StyledPeriod>
        {`〜${date.slice(0, 4)}/${date.slice(4, 6)}/${date.slice(6, 8)}`}
      </StyledPeriod>
    );
  } else {
    return null;
  }
};

const Tag = styled.div`
  max-width: 80px;
  padding: 3px 16px 2px;
  border: 1px solid #8b1a27;
  color: #8b1a27;
  font-size: 11px;
  text-align: center;
`;

const Item = ({ coupon }) => {
  return (
    <Row type="flex">
      <CheckboxCol span={1}>
        <StyledCheckbox disabled={!coupon.activeFlag} />
      </CheckboxCol>
      <ImageCol span={7}>
        <img src={images[coupon.giftImageUrl]} />
      </ImageCol>
      <DescriptionCol span={16}>
        <ItemTitle>{coupon.giftName}</ItemTitle>
        <Period date={coupon.giftEndDate} />
        <StyledRemaining>
          <IntlMessages
            id="order.procedure.coupon.remaining"
            values={{ remaining: coupon.remaining }}
          />
          <Link to={coupon.giftDetailUrl}>
            <IntlMessages id="order.procedure.coupon.detail" />
          </Link>
        </StyledRemaining>
        {!coupon.combined && (
          <Tag>
            <IntlMessages id="order.procedure.coupon.noCombined" />
          </Tag>
        )}
      </DescriptionCol>
    </Row>
  );
};

const Coupon = ({ useCoupon, coupons }) => {
  if (!coupons || coupons.length === 0) {
    return null;
  }

  return (
    <Box>
      <Title>
        <IntlMessages id="order.procedure.coupon.title" />
      </Title>
      <StyledCheckbox>
        <IntlMessages id="order.procedure.coupon.useCoupon" />
      </StyledCheckbox>
      <CouponList>
        {coupons.map((coupon, index) => {
          return (
            <CouponItem key={index}>
              <Item coupon={coupon} />
            </CouponItem>
          );
        })}
      </CouponList>
    </Box>
  );
};

export default Coupon;
