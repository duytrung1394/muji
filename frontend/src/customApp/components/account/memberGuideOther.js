import React, { Fragment } from "react";
import styled from "styled-components";

import disc from "../../../image/account/ico-disc-style.png";

const MemberGuideOtherCaption = styled.h2`
  color: #585858;
  font-size: 15px;
  font-weight: bold;
  line-height: 19px;
`;

const MemberGuideOtherTitle = styled.h3`
  border-bottom: 1px solid #999;
  color: #585858;
  font-size: 13px;
  font-weight: bold;
  line-height: 19px;
  margin: 13px 0 0;
  padding-bottom: 10px;
  text-align: justify;
`;

const MemberGuideOtherText = styled.p`
  font-size: 13px;
  margin-top: 13px;
`;

const MemberGuideOtherList = styled.ul`
  font-size: 13px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MemberGuideOtherItem = styled.li`
  margin-top: 13px;
  :before {
    background: url(${disc}) no-repeat;
    background-size: auto;
    background-size: contain;
    content: " ";
    display: inline-block;
    height: 3px;
    margin: 0 5px;
    vertical-align: middle;
    width: 3px;
  }
`;

const MemberGuideOther = ({ Other }) => {
  const { caption, title, text, list } = Other;
  return (
    <Fragment>
      <MemberGuideOtherCaption>{caption}</MemberGuideOtherCaption>
      <MemberGuideOtherTitle>{title}</MemberGuideOtherTitle>
      <MemberGuideOtherText>{text}</MemberGuideOtherText>
      <MemberGuideOtherList>
        {list.map((item, index) => (
          <MemberGuideOtherItem key={index}>{item}</MemberGuideOtherItem>
        ))}
      </MemberGuideOtherList>
    </Fragment>
  );
};

export default MemberGuideOther;
