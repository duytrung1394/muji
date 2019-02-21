import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";

const HeaderWrapper = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: rgb(0, 0, 0);
`;

const Note = styled.p`
  font-size: 11px;
  margin-bottom: 5px; 
`;

const CancelLink = styled.a`
  font-size: 11px;
  font-weight: bold;
  color: rgb(96, 179, 250);
  :hover {
    color: rgb(96, 179, 250);
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>
        <IntlMessages id="delivery.list.title" />
      </Title>
      <Note>
        <IntlMessages id="delivery.list.note" />
      </Note>
      <CancelLink>
        <IntlMessages id="delivery.list.cancel" />
      </CancelLink>
    </HeaderWrapper>
  );
};

export default Header;