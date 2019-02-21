import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import IntlMessages from "../../../components/utility/intlMessages";

const LinkWrapper = styled.div`
  float: right;
`;

const StyledLink = styled.a`
  font-size: 12px;
  color: rgb(96, 179, 250);
  :hover {
    color: rgb(96, 179, 250);
  }
`; 

const DeleteLink = () => (
  <LinkWrapper>
    ↓(addressBookNoが0の時以外に反映する)<br />
    <StyledLink>
      <IntlMessages id="delivery.deleteLink.delete" />
    </StyledLink>
  </LinkWrapper>
);

export default DeleteLink;
