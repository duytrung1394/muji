import React from "react";
import styled from "styled-components";

const Range = styled.div`
  font-size: 12px;
  line-height: 14px;
  text-align: left;
  padding: 10px;
`;

const Size = styled.span`
  border: 1px solid #999;
  padding: 0 5px;
`;

const SizeRange = ({ minSize, maxSize }) => {
  return (
    <Range>
      <Size>{minSize}</Size> 〜 <Size>{maxSize}</Size>
    </Range>
  );
};

export default SizeRange;
