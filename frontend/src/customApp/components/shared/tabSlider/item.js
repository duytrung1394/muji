import React from "react";
import styled from "styled-components";

const ItemStyle = styled.div`
  width: calc((100% - 60px) / 3);
  margin: 20px 30px 0 0;
  &:nth-child(3n) {
    margin-right: 0;
  }
  min-width: 0;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgb(0, 0, 0, 0.65);
  box-sizing: border-box;
  font-size: 12px;

  display: flex;
  flex-direction: column;

  a,
  a:hover,
  a:focus {
    text-decoration: none;
  }
`;

const TabSliderItem = props => {
  const { header, main, footer } = props;
  return (
    <ItemStyle {...props}>
      {header}
      {main}
      {footer}
    </ItemStyle>
  );
};

export default TabSliderItem;
