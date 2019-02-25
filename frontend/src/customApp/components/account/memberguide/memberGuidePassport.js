import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "../../shared/form/link";
import { Row, Col } from "antd";

import Img10 from "../../../../image/account/lst-memberguide-10.png";

const MemberGuidePassportCaption = styled.h2`
  color: #585858;
  font-size: 15px;
  font-weight: bold;
  line-height: 19px;
`;

const MemberGuidePassportList = styled.ul`
  border-top: 1px solid #999;
  list-style: none;
  margin-top: 10px;
  padding: 0px;
`;

const PassportListItem = styled.li`
  border-bottom: 1px solid #999;
  color: #585858;
  font-size: 11px;
  padding: 10px;
`;

const PassportListItemRow = styled(Row)`
  overflow: hidden;
`;

const PassportItemImage = styled.img`
  width: 100%;
`;

const PassportListItemText = styled.p`
  margin: 2px 0 0;
`;

const MemberGuidePassportText = styled.p`
  font-size: 13px;
  line-height: 19px;
  margin-top: 12px;
`;

const ToMujiPassport = styled(Link)`
  color: #60b3fa;
  font-size: 12px;
  font-weight: bold;
`;

const ListImages = {
  src10: Img10
};

const MemberGuidePassportListItem = ({ ItemData }) => {
  return (
    <PassportListItem>
      <PassportListItemRow>
        <Col span={7}>
          <PassportItemImage src={ListImages[ItemData.src]} />
        </Col>
        <Col span={16} offset={1}>
          <PassportListItemText>{ItemData.text}</PassportListItemText>
        </Col>
      </PassportListItemRow>
    </PassportListItem>
  );
};

const MemberGuidePassport = ({ Passport }) => {
  const { caption, list, texts, link_text } = Passport;
  return (
    <Fragment>
      <MemberGuidePassportCaption>{caption}</MemberGuidePassportCaption>
      <MemberGuidePassportList>
        {list.map((itemData, index) => (
          <MemberGuidePassportListItem ItemData={itemData} key={index} />
        ))}
      </MemberGuidePassportList>
      {texts.map((text, index) => (
        <MemberGuidePassportText key={index}>{text}</MemberGuidePassportText>
      ))}
      <ToMujiPassport to="#">{link_text}</ToMujiPassport>
    </Fragment>
  );
};

export default MemberGuidePassport;
