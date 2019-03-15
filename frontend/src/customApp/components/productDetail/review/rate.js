import React from "react";
import styled from "styled-components";

import fullStar from "../../../../image/product_detail/review/ico-other-red-fullstar.png";
import halfStar from "../../../../image/product_detail/review/ico-other-red-halfstar.png";
import emptyStar from "../../../../image/product_detail/review/ico-other-red-emptystar.png";

const Stars = styled.ul`
  list-style-type: none;
  width: inherit;
  margin: 0;
  padding: 0;
`;

const getStarSize = props => {
  switch (props.type) {
    case "small":
      return `
        max-width: 11px;
      `;
    default:
      return `
        max-width: 15px;
      `;
  }
};

const Star = styled.li`
  ${props => getStarSize(props)} display: inline-block;
  vertical-align: top;
  line-height: 21px;
  margin-left: 4px;

  &:first-child {
    margin-left: 0;
  }
`;

const StarImg = styled.img`
  width: 100%;
`;

const Rate = ({ value, type }) => {
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
    <Stars>
      {starList.map((star, index) => {
        return (
          <Star key={index} type={type}>
            {star}
          </Star>
        );
      })}
    </Stars>
  );
};

export default Rate;
