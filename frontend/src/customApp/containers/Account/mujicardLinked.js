import React, { Component } from "react";
import styled from "styled-components";
import { injectIntl } from "react-intl";
import {
    ContentAreaLayout,
    BaseContentLayout
} from "../../components/shared/panel/contentLayout";
import IntlMessages from "../../../components/utility/intlMessages";
import { OutlineButton } from "../../components/shared/form/button";

const AreaLayout = styled(ContentAreaLayout)`
  max-width: 732px;
`;

const ButtonArea = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const MujicardLinkedHeadTitle = styled.h1`
  color: #000;
  font-size: 19px;
  letter-spacing: 0.25px;
  margin-top: 30px;
`;


const MujicardLinkedHeadDescription1 = styled.p`
  color: #585858;
  margin: 10px 0 0;

  line-height: 19px;
  font-size: 13px;
  letter-spacing: .3px;
  text-align: justify;
`;

const MujicardLinkedHeadDescription2 = styled.p`
  color: #585858;
  letter-spacing: .25px;
  line-height: 15px;
  font-size: 11px;
  margin: 10px 0 0;
  text-align: justify;
`;



const MujicardLinkedHeadDetails = styled.p`
  color: #585858;
  letter-spacing: .25px;
  line-height: 19px;
  font-size: 12px;
  margin: 10px 0 0;
  text-align: justify;
`;

const MujicardLinkedTitle = () => {
    return (
      <MujicardLinkedHeadTitle>
        <IntlMessages id="account.mujicardLinkHeadTitle" />
      </MujicardLinkedHeadTitle>
    );
};

class Index extends Component {
  render() {
    return (
      <AreaLayout>
          <BaseContentLayout>
              <MujicardLinkedTitle />
              <MujicardLinkedHeadDescription1>
                  <IntlMessages id="account.mujicardLinkedText1" />
              </MujicardLinkedHeadDescription1>
              <MujicardLinkedHeadDescription2>
                  <IntlMessages id="account.mujicardLinkedText2" />
              </MujicardLinkedHeadDescription2>
              <MujicardLinkedHeadDetails>
                  <a href="#">
                      <IntlMessages id="account.mujicardLinkedHeadDetails" />
                  </a>
              </MujicardLinkedHeadDetails>
              <ButtonArea>
                  <OutlineButton color="#7f0119" reverse="true">
                      <IntlMessages id="account.mujicardLinkedButton" />
                  </OutlineButton>
              </ButtonArea>
          </BaseContentLayout>
      </AreaLayout>
    );
  }
}

const enhance = C => {
  const injected = injectIntl(C, { withRef: true });
  return injected;
};

export default enhance(Index);

  
