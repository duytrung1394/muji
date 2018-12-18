import React, { Fragment } from "react";
import { Select } from "antd";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import ReviewUserProfile from "./reviewUserProfile";

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: baseline;
  padding: 0;
  margin: 0px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
`;

const Total = styled.span`
  font-size: 13px;
  font-weight: 600;
  margin-left: 5px;
`;

const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const FollowingHeader = ({ title, profile }) => {
  return (
    <Fragment>
      <div>{title}</div>
      {profile ? <ReviewUserProfile entity={profile} /> : null}
      <List style={profile ? { backgroundColor: "#eee" } : { border: "none" }}>
        <li>
          <IntlMessages id="customerReview.followingName" />
          <Total>5</Total>
        </li>
      </List>
    </Fragment>
  );
};

export default FollowingHeader;
