import React from "react";
import styled from "styled-components";
import { Icon, Rate as AntdRate } from "antd";

const getStarSize = props => {
  switch (props.size) {
    case "small":
      return `
        font-size: 11px;
      `;
    case undefined:
      return `
        font-size: 15px;
      `;
    default:
      return `
        font-size: ${props.size};
      `;
  }
};

const StyledRate = styled(AntdRate)`
  && {
    color: ${props => (props.color ? props.color : "#7f0119")};
    ${props => getStarSize(props)};
  }
`;

const Rate = props => {
  let unit = 0.5;
  let defaultValue = Math.round(props.defaultValue / unit) * unit;

  return (
    <StyledRate
      allowHalf
      character={<Icon type="star" theme="filled" />}
      {...props}
      defaultValue={defaultValue}
    />
  );
};

export default Rate;
