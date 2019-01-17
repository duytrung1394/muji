import React from "react";
import styled from "styled-components";
import SubscriptionItem from "./item.js";

const SubscriptionItemListWrapper = styled.div`
  float: left;
  list-style: none;
  position: relative;
  width: 100%;

  max-width: 1590px;
  margin: 10px auto 0;
  padding: 0 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const SubscriptionItemList = ({ itemList }) => {
  return (
    <SubscriptionItemListWrapper>
      {itemList.map((item, index) => {
        return <SubscriptionItem key={index} item={item} />;
      })}
    </SubscriptionItemListWrapper>
  );
};

export default SubscriptionItemList;
