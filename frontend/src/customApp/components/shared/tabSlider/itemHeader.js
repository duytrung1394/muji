import React from "react";
import styled from "styled-components";

const ItemHeaderStyle = styled.div`
  margin-top: 20px;
  padding: 0 16px;
  font-size: 10px;
  overflow: hidden;
`;

const ItemHeader = ({ content }) => {
  return <ItemHeaderStyle>{content}</ItemHeaderStyle>;
};

export default ItemHeader;
