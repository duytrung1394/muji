import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";

const Title = styled.h1`
  font-size: 24px;
  color: rgb(0, 0, 0);
`;

const Note = styled.p`
  font-size: 11px;
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
    <div>
      <Title>
        <IntlMessages id="delivery.list.title" />
      </Title>
      <Note>
        <IntlMessages id="delivery.list.note" />
      </Note>
      <CancelLink>
        <IntlMessages id="delivery.list.cancel" />
      </CancelLink>
    </div>
  );
};

export default Header;