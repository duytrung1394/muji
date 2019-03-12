import React from "react";
import styled from "styled-components";
import CouponDetail from "./couponDetail";
import IntlMessages from "../../../components/utility/intlMessages";
import { OutlineButton } from "../shared/form/button";
import { Link } from "../shared/form/link";

const OuterLayout = styled.div`
  padding-bottom: 10px;

  @media screen and (min-width: 769px) {
    flex-direction: row-reverse;
  }

  @media screen and (min-width: 860px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

const PrimaryButtonStyled = styled(OutlineButton)`
  background-color: #7f0019 !important;
  border: 1px solid #7f0019 !important;
  color: #fff !important;
  display: block !important;
  width: 300px !important;
  margin: 30px auto 0;
`;

const DefaultButtonStyled = styled(OutlineButton)`
  border: 1px solid #7f0019 !important;
  color: #7f0019 !important;
  display: block !important;
  width: 300px !important;
  margin: 30px auto 0;
`;

const RedirectLink = ({ linkPath, pathName }) => {
  return <Link to={linkPath}>{pathName}</Link>;
};

const CouponMainGroupButton = () => {
  return (
    <OuterLayout>
      <PrimaryButtonStyled>
        <RedirectLink
          linkPath="/store/coupon/exchange"
          pathName={<IntlMessages id="coupon.exchange.button" />}
        />
      </PrimaryButtonStyled>
      <DefaultButtonStyled>
        <RedirectLink
          linkPath="/store/coupon/history"
          pathName={<IntlMessages id="coupon.history.button" />}
        />
      </DefaultButtonStyled>
    </OuterLayout>
  );
};

export default CouponMainGroupButton;
