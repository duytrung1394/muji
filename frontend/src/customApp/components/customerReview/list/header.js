import React, { Fragment } from "react";
import { Select } from "antd";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: baseline;
  padding: 10px 15px;
  margin: 0px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
`;

const SortList = styled.li`
  margin-left: auto;
`;

const StyledSelect = styled(Select)`
  width: 200px;
  .ant-select-selection {
    border: none;
    background: none transparent;
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

const Header = ({
  title,
  profile = null,
  sort,
  listStyle = { border: "none" }
}) => {
  return (
    <Fragment>
      <div>{title}</div>
      {profile}
      <List style={listStyle}>
        <li>
          <IntlMessages id="customerReview.name" />
          <Total>6</Total>
        </li>
        {sort && (
          <SortList>
            <StyledSelect defaultValue="new" onChange={handleChange}>
              <Option value="new">
                <IntlMessages id="customerReview.newOrder" />
              </Option>
              <Option value="highUtility">
                <IntlMessages id="customerReview.usefulOrder" />
              </Option>
              <Option value="highStar">
                <IntlMessages id="customerReview.starManyOrder" />
              </Option>
              <Option value="lowStar">
                <IntlMessages id="customerReview.newFewOrder" />
              </Option>
            </StyledSelect>
          </SortList>
        )}
      </List>
    </Fragment>
  );
};

export default Header;
