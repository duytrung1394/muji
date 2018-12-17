import React from "react";
import { Select } from "antd";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: baseline;
  padding: 8px 0 8px 10px;
  background-color: #eee;
  border-top: 2px solid #e5e5e5;
  border-bottom: 2px solid #e5e5e5;
`;

const SortList = styled.li`
  margin-left: auto;
`;

const StyledSelect = styled(Select)`
  width: 200px;
  .ant-select-selection {
    background-color: #eee;
    border: none;
    &:focus {
      box-shadow: none;
    }
  }
`;

const Total = styled.span`
  margin-left: 5px;
  font-weight: bold;
`;

const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const InfoList = props => {
  return (
    <List>
      <li>
        <IntlMessages id="customerReview.name" />
        <Total>3</Total>
      </li>
      <SortList>
        <StyledSelect defaultValue="new" onChange={handleChange}>
          <Option value="new">投稿日の新しい順</Option>
          <Option value="highUtility">役に立った数が多い順</Option>
          <Option value="highStar">星の数が多い順</Option>
          <Option value="lowStar">星の数が少ない順</Option>
        </StyledSelect>
      </SortList>
    </List>
  );
};

export default InfoList;
