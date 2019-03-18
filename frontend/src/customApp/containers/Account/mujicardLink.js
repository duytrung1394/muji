import React, { Component } from "react";
import styled from "styled-components";
import { injectIntl } from "react-intl";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/shared/panel/contentLayout";
import MujicardLinkHeader from "../../components/account/mujicardlink/mujicardLinkHeader";
import MujicardLinkContent from "../../components/account/mujicardlink/mujicardLinkContent";
import MujicardLinkForm from "../../components/account/mujicardlink/mujicardLinkForm";

const ContentLayout = styled(BaseContentLayout)`
    max-width: 732px;
`;

class Index extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data) {

  }

  render() {
    return (
      <ContentAreaLayout>
        <ContentLayout>
          <MujicardLinkHeader />
          <MujicardLinkContent />
          <MujicardLinkForm onSubmit={this.onSubmit} />
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
