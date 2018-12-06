import React from "react";
import { Select } from "antd";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: baseline;
  padding: 0;
`;

const StyledSpan = styled.span`
  font-weight: 600;
`;

const SortList = styled.li`
  margin-left: auto;
`;

const StyledSelect = styled(Select)`
  width: 200px;
  .ant-select-selection {
    border: none;
    &:focus {
      box-shadow: none;
    }
  }
`;

const Total = styled.span`
  margin-left: 5px;
`;

const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const ClippedSubList = props => {
  return (
    <List>
      <li>
        <IntlMessages id="customerReview.name" />
      <StyledSpan>
        <Total>6</Total>
      </StyledSpan>
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

export default ClippedSubList;