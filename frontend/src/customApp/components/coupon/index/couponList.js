import React from "react";
import styled from "styled-components";
import CouponDetail from "./couponDetail";
import { Row, Col } from "antd";

const List = styled(Row)`
  font-size: 12px;
  color: #575757;
  margin-top: 24px;
`;
const StyledCol = styled(Col)`
  && {
    display: flex;
  }
`;

const colLayout = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 12,
  xl: 12
};

const CouponList = ({ coupons }) => {
  return (
    <List type="flex" justify="start" gutter={24}>
      {coupons.map((coupon, index) => {
        return (
          <StyledCol {...colLayout}>
            <CouponDetail coupon={coupon} key={index} />
          </StyledCol>
        );
      })}
    </List>
  );
};

export default CouponList;
