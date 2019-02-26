import React from "react";
import styled from "styled-components";

import MemberGuideMember from "./memberGuideMember";
import MemberGuidePassport from "./memberGuidePassport";
import MemberGuideOther from "./memberGuideOther";

const MemberGuideContents = styled.div`
  background-color: #f2f2f2;
  margin-top: 30px;
  padding: 16px;
`;

const ContentBaseLayout = styled.div`
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgba(88, 88, 88, 0.3);
  padding: 16px;
  :not(:first-child) {
    margin-top: 16px;
  }
`;

const Contents = ({ entities }) => {
  const { memberguide_list, passport, other } = entities;
  return (
    <MemberGuideContents>
      <ContentBaseLayout>
        <MemberGuideMember ListData={memberguide_list} />
      </ContentBaseLayout>
      <ContentBaseLayout>
        <MemberGuidePassport Passport={passport} />
      </ContentBaseLayout>
      <ContentBaseLayout>
        <MemberGuideOther Other={other} />
      </ContentBaseLayout>
    </MemberGuideContents>
  );
};

export default Contents;
