import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import { OutlineButton } from "../../shared/form/button";
import { Link } from "../../shared/form/link";
import { Col, Row } from "antd";

const OuterLayout = styled(Row)`
  padding-bottom: 10px;
`;

const OuterButton = styled(Col)`
  text-align: center;
`;
const PrimaryButton = styled(OutlineButton)`
  margin: 30px auto 0;
`;

const colLayout = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 12,
  xl: 12
};

const Button = props => {
  const { link, path } = props;
  return (
    <OuterButton {...colLayout}>
      <PrimaryButton {...props}>
        <Link to={link}>
          <IntlMessages id={path} />
        </Link>
      </PrimaryButton>
    </OuterButton>
  );
};

const CouponMainGroupButton = () => {
  return (
    <OuterLayout type="flex">
      <Button
        color={"#7f0019"}
        link={"/store/coupon/history"}
        path={"coupon.history.button"}
      />
      <Button
        color={"#7f0019"}
        reverse={1}
        link={"/store/coupon/exchange"}
        path={"coupon.exchange.button"}
      />
    </OuterLayout>
  );
};

export default CouponMainGroupButton;
