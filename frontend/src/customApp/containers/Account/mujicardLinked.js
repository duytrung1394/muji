import React, { Component } from "react";
import styled from "styled-components";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/shared/panel/contentLayout";
import IntlMessages from "../../../components/utility/intlMessages";
import { OutlineButton } from "../../components/shared/form/button";
import { Link } from "../../components/shared/form/link";

const ContentLayout = styled(BaseContentLayout)`
  max-width: 732px;
  padding: 0 16px 10px;
  margin: 28px auto;
`;

const ButtonArea = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const MujicardLinkedHeadTitle = styled.h1`
  color: #000;
  font-size: 19px;
  letter-spacing: 0.25px;
  margin: 0;
`;

const BaseLine = styled.p`
  color: #585858;
  margin: 10px 0 0;
  line-height: 19px;
`;

const DescriptionLine = styled(BaseLine)`
  font-size: 13px;
  letter-spacing: 0.3px;
  margin-top: 20px;
`;

const GlossaryLine = styled(BaseLine)`
  line-height: 15px;
  font-size: 11px;
  letter-spacing: 0.25px;
`;

const LinkDetail = styled(BaseLine)`
  font-size: 12px;
  letter-spacing: 0.25px;
`;

class MujicarLinked extends Component {
  render() {
    return (
      <ContentAreaLayout>
        <ContentLayout>
          <MujicardLinkedHeadTitle>
            <IntlMessages id="account.mujicardLinkHeadTitle" />
          </MujicardLinkedHeadTitle>
          <DescriptionLine>
            <IntlMessages id="account.mujicardLinked.description" />
          </DescriptionLine>
          <GlossaryLine>
            <IntlMessages id="account.mujicardLinked.glossary" />
          </GlossaryLine>
          <LinkDetail>
            <Link to="#">
              <IntlMessages id="account.mujicardLinkedHeadDetails" />
            </Link>
          </LinkDetail>
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

export default MujicarLinked;
