import React, { Fragment } from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import { Row, Col } from "antd";

import Img1 from "../../../image/account/lst-memberguide-01.png";
import Img2 from "../../../image/account/lst-memberguide-02.png";
import Img3 from "../../../image/account/lst-memberguide-03.png";
import Img4 from "../../../image/account/lst-memberguide-04.png";
import Img5 from "../../../image/account/lst-memberguide-05.png";
import Img6 from "../../../image/account/lst-memberguide-06.png";
import Img7 from "../../../image/account/lst-memberguide-07.png";
import Img8 from "../../../image/account/lst-memberguide-08.png";
import Img9 from "../../../image/account/lst-memberguide-09.png";

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

const ListImages = {
  src1: Img1,
  src2: Img2,
  src3: Img3,
  src4: Img4,
  src5: Img5,
  src6: Img6,
  src7: Img7,
  src8: Img8,
  src9: Img9
};

const MemberGuideMemberListItem = ({ ItemData }) => {
  return (
    <MemberListItem>
      <MemberListItemRow>
        <Col span={7}>
          <MemberItemImage src={ListImages[ItemData.src]} />
        </Col>
        <Col span={16} offset={1}>
          <MemberListItemSub>{ItemData.sub}</MemberListItemSub>
          <MemberListItemTitle>{ItemData.title}</MemberListItemTitle>
          <MemberListItemText>{ItemData.text}</MemberListItemText>
        </Col>
      </MemberListItemRow>
    </MemberListItem>
  );
};

const MemberGuideMember = ({ ListData }) => {
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
        {ListData.map((itemData, index) => (
          <MemberGuideMemberListItem ItemData={itemData} key={index} />
        ))}
      </MemberGuideMemberList>
      <MemberGuideMemberTips>
        <IntlMessages id="account.memberGuideMemberTips" />
      </MemberGuideMemberTips>
    </Fragment>
  );
};

export default MemberGuideMember;
