import React from "react";
import LargeButton from "../../components/form/largeButton.js";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";

const ButtonWrapper = styled.div`
  padding-top: 10px;
  text-align: center;
`;

const ConfirmButton = styled(LargeButton)`
  width: 400px;
  height:40px
  border: none;
  background-color: #191919;
  border-radius: 24px;
  cursor: pointer;
  font-size: 14px;
  color: #fff;
  margin:24px 0;
  font-weight:600;

  &{
      padding:14px 0;
      border:none;
  }

  &:hover{
    color:#fff;
  }
`;

const InputConfButtton = props => {
  const { changeView } = props;

  return (
    <ButtonWrapper>
      <ConfirmButton onClick={changeView}>
        <IntlMessages id="reviewPost.confirmButton" />
      </ConfirmButton>
    </ButtonWrapper>
  );
};

export default InputConfButtton;
