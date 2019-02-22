import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";

const Wrapper = styled.div`
  position: relative;
`;

const StyledLink = styled.a`
  font-size: 12px;
  font-weight: bold;
  color: rgb(96, 179, 250);
  position: absolute;
  top: 0;
  right: 0;
  :hover {
    color: rgb(96, 179, 250); 
  }
`; 

const DeleteLink = () => (
  <Wrapper>
    <StyledLink>
      <IntlMessages id="delivery.deleteLink.delete" />
    </StyledLink>
  </Wrapper>
);

export default DeleteLink;
