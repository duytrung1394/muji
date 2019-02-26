import React from "react";
import styled from "styled-components";
import Review from "../review/review";

const ListWrapper = styled.div`
  background-color: rgb(242, 242, 242);
  padding: 16px;
`;

const List = ({ entities }) => {
  const { itemDetail } = entities;
  return (
    <ListWrapper>
      {itemDetail &&
        itemDetail.map((itemDetail, index) => {
          return (
            <Review key={index} itemDetail={itemDetail} imageIndex={index} />
          );
        })}
    </ListWrapper>
  );
};

export default List;
