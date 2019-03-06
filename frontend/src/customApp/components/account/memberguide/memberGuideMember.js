import React, { Fragment } from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

import IntlMessages from "../../../../components/utility/intlMessages";

import Img1 from "../../../../image/account/lst-memberguide-01.png";
import Img2 from "../../../../image/account/lst-memberguide-02.png";
import Img3 from "../../../../image/account/lst-memberguide-03.png";
import Img4 from "../../../../image/account/lst-memberguide-04.png";
import Img5 from "../../../../image/account/lst-memberguide-05.png";
import Img6 from "../../../../image/account/lst-memberguide-06.png";
import Img7 from "../../../../image/account/lst-memberguide-07.png";
import Img8 from "../../../../image/account/lst-memberguide-08.png";
import Img9 from "../../../../image/account/lst-memberguide-09.png";

const MemberGuideMemberCaption = styled.h2`
  color: #585858;
  font-size: 15px;
  font-weight: bold;
  line-height: 19px;
`;

const MemberGuideMemberText = styled.div`
  font-size: 13px;
  margin-top: 13px;
  line-height: 19px;
`;

const MemberGuideMemberList = styled.ul`
  border-top: 1px solid #999;
  list-style: none;
  margin-top: 10px;
  padding: 0px;
`;

const MemberListItem = styled.li`
  border-bottom: 1px solid #999;
  color: #585858;
  font-size: 11px;
  padding: 10px;
`;

const MemberListItemRow = styled(Row)`
  overflow: hidden;
`;

const MemberItemImage = styled.img`
  width: 100%;
`;

const MemberListItemSub = styled.p`
  color: #999;
  margin: 2px 0 0;
`;

const MemberListItemTitle = styled.p`
  font-size: 13px;
  margin: 4px 0 0;
`;

const MemberListItemText = styled.p`
  margin: 12px 0 0;
`;

const MemberGuideMemberTips = styled.p`
  font-size: 11px;
  margin-bottom: 0;
`;

const guideListData = [
  {
    src: Img1,
    sub: "account.memberRegistrationGuideSub1",
    title: "account.memberRegistrationGuideTitle1",
    description: "account.memberRegistrationGuideDescription1"
  },
  {
    src: Img2,
    sub: "account.memberRegistrationGuideSub2",
    title: "account.memberRegistrationGuideTitle2",
    description: "account.memberRegistrationGuideDescription2"
  },
  {
    src: Img3,
    sub: "account.memberRegistrationGuideSub3",
    title: "account.memberRegistrationGuideTitle3",
    description: "account.memberRegistrationGuideDescription3"
  },
  {
    src: Img4,
    sub: "account.memberRegistrationGuideSub4",
    title: "account.memberRegistrationGuideTitle4",
    description: "account.memberRegistrationGuideDescription4"
  },
  {
    src: Img5,
    sub: "account.memberRegistrationGuideSub5",
    title: "account.memberRegistrationGuideTitle5",
    description: "account.memberRegistrationGuideDescription5"
  },
  {
    src: Img6,
    sub: "account.memberRegistrationGuideSub6",
    title: "account.memberRegistrationGuideTitle6",
    description: "account.memberRegistrationGuideDescription6"
  },
  {
    src: Img7,
    sub: "account.memberRegistrationGuideSub7",
    title: "account.memberRegistrationGuideTitle7",
    description: "account.memberRegistrationGuideDescription7"
  },
  {
    src: Img8,
    sub: "account.memberRegistrationGuideSub8",
    title: "account.memberRegistrationGuideTitle8",
    description: "account.memberRegistrationGuideDescription8"
  },
  {
    src: Img9,
    sub: "account.memberRegistrationGuideSub9",
    title: "account.memberRegistrationGuideTitle9",
    description: "account.memberRegistrationGuideDescription9"
  }
];

const MemberGuideMemberListItem = ({ guideItemData }) => {
  const { src, sub, title, description } = guideItemData;
  return (
    <MemberListItem>
      <MemberListItemRow>
        <Col span={7}>
          <MemberItemImage src={src} />
        </Col>
        <Col span={16} offset={1}>
          <MemberListItemSub>
            <IntlMessages id={sub} />
          </MemberListItemSub>
          <MemberListItemTitle>
            <IntlMessages id={title} />
          </MemberListItemTitle>
          <MemberListItemText>
            <IntlMessages id={description} />
          </MemberListItemText>
        </Col>
      </MemberListItemRow>
    </MemberListItem>
  );
};

const MemberGuideMember = () => {
  return (
    <Fragment>
      <MemberGuideMemberCaption>
        <IntlMessages
          id="account.memberGuideMemberHeadCaption"
          values={{ newLine: <br /> }}
        />
      </MemberGuideMemberCaption>
      <MemberGuideMemberText>
        <IntlMessages id="account.memberGuideMemberHeadText" />
      </MemberGuideMemberText>
      <MemberGuideMemberList>
        {guideListData.map((guideItemData, index) => (
          <MemberGuideMemberListItem
            guideItemData={guideItemData}
            key={index}
          />
        ))}
      </MemberGuideMemberList>
      <MemberGuideMemberTips>
        <IntlMessages id="account.memberGuideMemberTips" />
      </MemberGuideMemberTips>
    </Fragment>
  );
};

export default MemberGuideMember;
