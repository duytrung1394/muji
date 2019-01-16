import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import { Select } from "antd";

const { Option } = Select;

const yearSelect = {
  minWidth: "calc(4em + 22px + 12px)"
};

const monthSelect = {
  minWidth: "calc(2em + 22px + 12px)"
};

const yearList = ["2014", "2015", "2016", "2017", "2018", "2019"];

const monthList = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12"
];

const Label = styled.label`
  padding: 0 5px;
  vertical-align: bottom;
  font-size: 12px;

  span + span {
    margin-left: 0.5em;
  }
`;

let defaultYear = "";
let defaultMonth = "";

const DateWrapper = styled.div`
  margin-top: 15px;
`;

const DateInput = ({from}) => {
  return (
    <DateWrapper>
      <Select style={yearSelect} defaultValue={defaultYear}>
        {yearList.map((value, index) => {
          return (
            <Option key={index} value={value}>
              {value}
            </Option>
          );
        })}
      </Select>
      <Label>
        <IntlMessages id="order.purchesHistory.searchModal.period.year" />
      </Label>
      <Select style={monthSelect} defaultValue={defaultMonth}>
        {monthList.map((value, index) => {
          return (
            <Option key={index} value={value}>
              {value}
            </Option>
          );
        })}
      </Select>
      <Label>
        <IntlMessages id="order.purchesHistory.searchModal.period.month" />
        {
          from ? (
            <IntlMessages id="order.purchesHistory.searchModal.period.to" />
          ) :
          null
        }
        {/* {" "}
        <IntlMessages id="order.purchesHistory.searchModal.period.to" /> */}
      </Label>
    </DateWrapper>
  );
};
export default DateInput;
