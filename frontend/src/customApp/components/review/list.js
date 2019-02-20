import React from "react";
import styled from "styled-components";
import Review from "../review/review";

const ListWrapper = styled.div`
  background-color: rgb(242, 242, 242);
  padding: 16px;
`;

const List = ({ entities }) => {
  const { reviews } = entities;
  return (
    <ListWrapper>
      {reviews &&
        reviews.map((review, index) => {
          return <Review key={index} review={review} imageIndex={index} />;
        })}
    </ListWrapper>
  );
};

export default List;
