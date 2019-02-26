import React from "react";
import styled from "styled-components";
import NameForm from "./nameForm";

const StyledForms = styled.div`
  background: rgb(242, 242, 242);
  padding: 16px;
  margin: 30px 0;
`;

const Forms = () => (
  <StyledForms>
    <NameForm />
  </StyledForms>
);

export default Forms;
