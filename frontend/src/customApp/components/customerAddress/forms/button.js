import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  margin: 0 auto;
  padding: 2px 5px;
  ${props => (props["icon"] ? "padding-left: 18px;" : "")} border: 0;
  border-radius: 2px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  background: ${props =>
    props["icon"] === "add"
      ? "url(https://www.muji.net/img/store/common/icon_add_fff.png) no-repeat 5px center #333"
      : "#333"};
  cursor: pointer;
  transition: 0.2s;

  :hover {
    background: ${props =>
      props["icon"] === "add"
        ? "url(https://www.muji.net/img/store/common/icon_add_fff.png) no-repeat 5px center #7f0019"
        : "#7f0019"};
  }

  :focus {
    outline: 0;
  }
`;

export const Button = props => (
  <StyledButton {...props}>{props.children}</StyledButton>
);
