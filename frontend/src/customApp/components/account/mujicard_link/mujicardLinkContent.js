import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";

const MujicardContent = styled.div`
  margin-top: 20px;
`;

const PMujicard = styled.p`
  line-height: 19px;
  font-size: 13px;
  letter-spacing: .3px;
  text-align: justify;
`;

const PMujicardTxt = styled.p`
  line-height: 15px;
  font-size: 11px;
  letter-spacing: .25px;
  margin-top: 10px;
`;

const PMujicardLink = styled.p`
  line-height: 19px;
  letter-spacing: .3px;
  text-align: justify;
  font-size: 12px;
  margin-top: 10px;
`;

const MujicardLinkContent = () => {
  return (
      <MujicardContent>
          <PMujicard>
            <IntlMessages id="account.page.mujicardLink.pMujicard1" />
          </PMujicard>
          <PMujicard>
            <IntlMessages id="account.page.mujicardLink.pMujicard2" />
          </PMujicard>
          <PMujicardTxt>
            <IntlMessages id="account.page.mujicardLink.pMujicardTxt" />
          </PMujicardTxt>
          <PMujicardLink>
            <a href="#"><IntlMessages id="account.page.mujicardLink.pMujicardLink" /></a>
          </PMujicardLink>
      </MujicardContent>
  );
};

export default MujicardLinkContent;
