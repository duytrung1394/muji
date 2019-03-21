import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import { Link } from "../../shared/form/link";

const MujicardLinkDescription = styled.div`
  margin-top: 20px;
  color: #585858;
`;

const MujicardLinkInfo = styled.p`
  line-height: 19px;
  font-size: 13px;
  letter-spacing: 0.3px;
  text-align: justify;
`;

const MujicardLinkTextReward = styled.p`
  line-height: 15px;
  font-size: 11px;
  letter-spacing: 0.25px;
  margin-top: 10px;
`;

const MujicardLinkDetail = styled.p`
  line-height: 19px;
  letter-spacing: 0.3px;
  text-align: justify;
  font-size: 12px;
  margin-top: 10px;
`;

const MujicardLinkContent = () => {
  return (
    <MujicardLinkDescription>
      <MujicardLinkInfo>
        <IntlMessages id="account.page.mujicardLink.descriptionLine1" />
        <br />
        <IntlMessages id="account.page.mujicardLink.descriptionLine2" />
      </MujicardLinkInfo>
      <MujicardLinkTextReward>
        <IntlMessages id="account.page.mujicardLink.descriptionLine3" />
      </MujicardLinkTextReward>
      <MujicardLinkDetail>
        <Link to="#">
          <IntlMessages id="account.page.mujicardLink.detail" />
        </Link>
      </MujicardLinkDetail>
    </MujicardLinkDescription>
  );
};

export default MujicardLinkContent;
