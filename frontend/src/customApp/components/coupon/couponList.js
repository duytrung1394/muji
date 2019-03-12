import React from "react";
import styled from "styled-components";
import CouponDetail from "./couponDetail";

const OuterLayout = styled.div`
  padding: 0;
  margin-top: 10px;
`;

const List = styled.ul`
  padding: 0;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  font-size: 12px;
  color: #575757;
`;

const CouponList = ({ coupons }) => {
  return (
    <OuterLayout>
      <List>
        {coupons.map((item, index) => {
          return <CouponDetail coupon={item} key={index} />;
        })}
      </List>
    </OuterLayout>
  );
};

export default CouponList;
