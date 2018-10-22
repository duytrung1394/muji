import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";

const LargeButton = styled.p`
  border: 1px solid #cccccc;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 18px 0;
  cursor: pointer;
  font-size: 16px;
  color: #585858;
`;

export default LargeButton;

export const SeeMoreButton = props => (
  <LargeButton {...props}>
    <IntlMessages id="ec.form.largeButton.seeMore" />
  </LargeButton>
);

const ItemName = styled.span`
  padding: 0 10px;
`;

export const NameWithItemCountButton = props => (
  <LargeButton {...props}>
    <IntlMessages
      id="ec.form.largeButton.nameWithItemCount"
      values={{ name: <ItemName>{props.name}</ItemName>, count: props.count }}
    />
  </LargeButton>
);
