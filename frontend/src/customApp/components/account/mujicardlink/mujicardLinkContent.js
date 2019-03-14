import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import { Link } from "../../shared/form/link";

const MujicardLinkDescription = styled.div`
  margin-top: 20px;
`;

const MujicardLinkText = styled.p`
  line-height: 19px;
  font-size: 13px;
  letter-spacing: 0.3px;
  text-align: justify;
`;

const MujicardLinkText1 = styled.p`
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
      <MujicardLinkText>
        <IntlMessages id="account.page.mujicardLink.description_line1" />
        <br />
        <IntlMessages id="account.page.mujicardLink.description_line2" />
      </MujicardLinkText>
      <MujicardLinkText1>
        <IntlMessages id="account.page.mujicardLink.description_line3" />
      </MujicardLinkText1>
      <MujicardLinkDetail>
        <Link to="">
          <IntlMessages id="account.page.mujicardLink.detail" />
        </Link>
      </MujicardLinkDetail>
    </MujicardLinkDescription>
  );
};

export default MujicardLinkContent;
