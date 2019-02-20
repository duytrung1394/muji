import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  width: 30%;
  margin: 0;
  line-height: 16px;
  font-size: 13px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(0, 0, 0, 0.65);
`;

const StoreReserveState = styled.div`
  width: 70%;
  text-align: right;
  font-size: 11px;
`;

const StoreReserveHeader = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`;

const ItemHeader = ({ item }) => {
  const { order_state, store_name } = item;
  return (
    <StoreReserveHeader>
      <Title>{store_name}</Title>
      <StoreReserveState>{order_state}</StoreReserveState>
    </StoreReserveHeader>
  );
};

export default ItemHeader;
