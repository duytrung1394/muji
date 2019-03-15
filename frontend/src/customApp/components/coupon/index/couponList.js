import React from "react";
import styled from "styled-components";
import CouponDetail from "./couponDetail";
import { Row } from "antd";

const List = styled(Row)`
  font-size: 12px;
  color: #575757;
  margin-top: 10px;
`;

const CouponList = ({ coupons }) => {
  return (
    <List type="flex" justify="space-between">
      {coupons.map((coupon, index) => {
        return <CouponDetail coupon={coupon} key={index} />;
      })}
    </List>
  );
};

export default CouponList;
