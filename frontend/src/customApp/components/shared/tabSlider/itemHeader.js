import React from "react";
import styled from "styled-components";

/* 
これ以上の共通化はコスト高くなるので止めておく
単純にヘッダーに表示したいものを content(ReactNode) に指定するのみ
*/

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
