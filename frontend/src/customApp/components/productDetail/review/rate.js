import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

import fullStar from "../../../../image/product_detail/review/ico-other-red-fullstar.png";
import halfStar from "../../../../image/product_detail/review/ico-other-red-halfstar.png";
import emptyStar from "../../../../image/product_detail/review/ico-other-red-emptystar.png";

const getStarSize = props => {
  switch (props.type) {
    case "small":
      return `
        max-width: calc(11px + ${props.gutter}px);
      `;
    default:
      return `
        max-width: calc(15px + ${props.gutter}px);
      `;
  }
};

const Star = styled(Col)`
  ${props => getStarSize(props)};
`;

const StarImg = styled.img`
  width: 100%;
`;

const Rate = ({ value, type, gutter }) => {
  let maxStar = 5;
  let unit = 0.5;
  let starValue = Math.round(value / unit) * unit;
  let starList = [];

  let fullStarCount = Math.floor(starValue);
  for (var i = 0; i < fullStarCount; i++) {
    starList.push(<StarImg src={fullStar} />);
  }

  let isHalfStar = starValue % 1 > 0;
  if (isHalfStar) {
    starList.push(<StarImg src={halfStar} />);
  }

  let emptyStarCount = Math.floor(maxStar - starValue);
  for (var i = 0; i < emptyStarCount; i++) {
    starList.push(<StarImg src={emptyStar} />);
  }

  return (
    <Row type="flex" gutter={gutter}>
      {starList.map((star, index) => {
        return (
          <Star key={index} type={type} gutter={gutter}>
            {star}
          </Star>
        );
      })}
    </Row>
  );
};

export default Rate;
