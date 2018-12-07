import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";

const StyledDiv = styled.div`
  margin-bottom: 10px;
`;

const UserIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const StyledSpan = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const UserData = () => {
  return (
    <StyledDiv>
      <UserIcon
        src={"https://www.muji.com/jp/store/review/img/avatar_default.png"}
      />
      <StyledSpan>
        <IntlMessages id="customerReview.list.name" />
      </StyledSpan>
    </StyledDiv>
  );
};

export default UserData;
