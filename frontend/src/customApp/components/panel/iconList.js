import React from "react";
import ItemIcon from "./itemIcon";
import styled from "styled-components";

const ItemIconWrapper = styled.div`
  .ant-card-grid.icon-list {
    width: 16.6%;
    height : 75px;
    padding: 5 5 10 5;
    box-shadow: none;
`;

const IconList = props => {
  return (
    <ItemIconWrapper>
      {props.items &&
        props.items.map((item, index) => {
          return <ItemIcon key={index} className="list-icon" item={item} />;
        })}
    </ItemIconWrapper>
  );
};

export default IconList;
