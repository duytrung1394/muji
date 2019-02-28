import React from "react";
import styled from "styled-components";
import { injectIntl } from "react-intl";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/shared/panel/contentLayout";
import IntlMessages from "../../../components/utility/intlMessages";
import RegistrationButton from "../../components/account/memberguide/registrationButtons";
import MemberGuide from "../../components/account/memberguide/memberGuide";

const AreaLayout = styled(ContentAreaLayout)`
  max-width: 732px;
`;

const MemberGuideHeadTitle = styled.h1`
  color: #000;
  font-size: 19px;
  letter-spacing: 0.25px;
  margin-top: 30px;
`;

const MemberGuideHeadDescription = styled.p`
  color: #585858;
  font-size: 13px;
  letter-spacing: 0.3px;
  line-height: 19px;
  margin: 20px 0 0;
`;

const MemberGuideTitle = () => {
  return (
    <MemberGuideHeadTitle>
      <IntlMessages id="account.memberGuideHeadTitle" />
    </MemberGuideHeadTitle>
  );
};

const MemberGuideDescription = () => {
  return (
    <MemberGuideHeadDescription>
      <IntlMessages id="account.memberGuideHeadText" />
    </MemberGuideHeadDescription>
  );
};

const Index = () => {
  return (
    <AreaLayout>
      <BaseContentLayout>
        <MemberGuideTitle />
        <MemberGuideDescription />
        <RegistrationButton />
        <MemberGuide />
        <RegistrationButton />
      </BaseContentLayout>
    </AreaLayout>
  );
};

const enhance = C => {
  const injected = injectIntl(C, { withRef: true });
  return injected;
};

export default enhance(Index);
