import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import IntlMessages from "../../../components/utility/intlMessages";
import { Button } from "antd";

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

const DonationButton = () => {
  return (
    <div>
      <Div>
        <Link to="">
          <Button icon="caret-right">
            <IntlMessages id="donationTop.performance" />
          </Button>
        </Link>
      </Div>
      <Div>
        <a href="https://www.muji.net/store/pc/user/donation/results.html">
          <Button icon="caret-right">
            <IntlMessages id="donationTop.future" />
          </Button>
        </a>
      </Div>
    </div>
  );
};

export default DonationButton;
