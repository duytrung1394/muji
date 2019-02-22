import React from "react";
import styled from "styled-components";
import { Link } from "../shared/form/link";

const Button = styled.button`
  background-color: ${props => (props.white ? "#fff" : "#7f0019")};
  border-color: ${props => (props.white ? "#585858" : "#7f0019")};
  border-style: solid;
  border-width: 1px;
  border-radius: 20px;
  box-shadow: 0 1px 3px rgba(88, 88, 88, 0.3);
  cursor: pointer;
  display: block;
  font-size: 12px;
  height: 40px;
  margin: 20px auto 0;
  max-width: 300px;
  text-align: center;
  width: 100%;
  a {
    color: ${props => (props.white ? "#585858" : "#fff")};
  }
`;

const CommonButton = props => {
  return (
    <Button white={props.white}>
      <Link to="#">{props.children}</Link>
    </Button>
  );
};

export default CommonButton;
