import React, { Component } from "react";
import styled from "styled-components";
import { injectIntl } from "react-intl";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/shared/panel/contentLayout";
import IntlMessages from "../../../components/utility/intlMessages";
import { OutlineButton } from "../../components/shared/form/button";
import { Link } from "../../components/shared/form/link";

const ContentLayout = styled(BaseContentLayout)`
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

const BaseDescription = styled.p`
  color: #585858;
  margin-top: 10px;
  text-align: justify;
`;

const MujicardLinkedHeadDescriptionLine1 = styled(BaseDescription)`
  line-height: 19px;
  font-size: 13px;
  letter-spacing: .3px;
  margin-top : 20px;
`;

const MujicardLinkedHeadDescriptionLine2 = styled(BaseDescription)`
  line-height: 15px;
  font-size: 11px;
  letter-spacing: .25px;
`;

const MujicardLinkedHeadDetails = styled(BaseDescription)`
  line-height: 19px;
  font-size: 12px;
  letter-spacing: .25px;
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
      <ContentAreaLayout>
        <ContentLayout>
              <MujicardLinkedTitle />
              <MujicardLinkedHeadDescriptionLine1>
                  <IntlMessages id="account.mujicardLinked.descriptionLine1" />
              </MujicardLinkedHeadDescriptionLine1>
              <MujicardLinkedHeadDescriptionLine2>
                  <IntlMessages id="account.mujicardLinked.descriptionLine2" />
              </MujicardLinkedHeadDescriptionLine2>
              <MujicardLinkedHeadDetails>
                <Link to="#">
                  <IntlMessages id="account.mujicardLinkedHeadDetails" />
                </Link>
              </MujicardLinkedHeadDetails>
              <ButtonArea>
                  <OutlineButton color="#7f0119" reverse="true">
                      <IntlMessages id="account.mujicardLinkedButton" />
                  </OutlineButton>
              </ButtonArea>
          </ContentLayout>
      </ContentAreaLayout>
    );
  }
}

const enhance = C => {
  const injected = injectIntl(C, { withRef: true });
  return injected;
};

export default enhance(Index);