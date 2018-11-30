import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "../../components/form/link";
import IntlMessages from "../../../components/utility/intlMessages";
import { Button as AntButton } from "antd";

const Div = styled.div`
  text-align: right;
  margin: 15px 0;
  button {
    color: #191919;
    font-weight: bold;
    border-radius: 0;

    :hover {
      border: 1px solid #7f0019;
      color: #191919;
    }
  }
`;

const Button = ({ to, messagesId }) => {
  return (
    <Div>
      <Link to={to}>
        <AntButton icon="caret-right">
          <IntlMessages id={`donationTop.${messagesId}`} />
        </AntButton>
      </Link>
    </Div>
  );
};

export const PerformanceButton = () => {
  return <Button to="" messagesId="performance" />;
};

export const FutureButton = () => {
  return (
    <Button
      to="https://www.muji.net/store/pc/user/donation/results.html"
      messagesId="future"
    />
  );
};
