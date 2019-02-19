import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import Review from "../review/review";

// const ListWrapper = styled.div`
//   background-color: rgb(242, 242, 242);
//   padding: 16px;
//   margin: 20px 0;
// `;

// const ListArea = styled.div`
//   background-color: rgb(255, 255, 255);
// `;

const List = ({ entities }) => {
  return (
    // <ListWrapper>
      // <ListArea>
        <Review ReviewItems={entities.reviews} />
      // </ListArea>
    // </ListWrapper>
  );
};

export default List;
