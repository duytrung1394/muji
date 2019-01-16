import React, { Component } from "react";
import { Radio } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";
import styled from "styled-components";

const Group = styled(Radio.Group)`
  label {
    height: 55px;
  }
`;

const StyledRadio = styled(Radio.Button)`
  text-align: center;
  width: 200px;
  box-shadow: none;
  border-radius: 0 !important;
  margin-right: 15px !important;
  span {
    line-height: 1.9;
    user-select: none;
  }
  &:hover {
    border: 3px solid #7f0019 !important;
    color: #333 !important;
  }
  & {
    border: 3px solid #ccc !important;
    box-shadow: none !important;
    color: #333;
  }
  &.ant-radio-button-wrapper-checked:first-child {
    border: 3px solid #7f0019 !important;
  }
`;

const RadioGroup = () => {
  return (
    <Group defaultValue="a" buttonStyle="solid">
      <StyledRadio value="a">
        <IntlMessages id="donationShow.unit" />
        <br />
        <IntlMessages id="donationShow.ten" />
        <IntlMessages id="donationShow.yen" />
      </StyledRadio>
      <StyledRadio value="b">
        <IntlMessages id="donationShow.unit" />
        <br />
        <IntlMessages id="donationShow.hundred" />
        <IntlMessages id="donationShow.yen" />
      </StyledRadio>
    </Group>
  );
};

export default RadioGroup;
