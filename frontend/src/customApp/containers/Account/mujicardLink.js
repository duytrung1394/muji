import React, { Component } from "react";
import styled from "styled-components";
import { injectIntl } from "react-intl";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/shared/panel/contentLayout";

import { connect } from "react-redux";
import actions from "../../redux/account/entity/actions";

import MujicardLinkHeader from "../../components/account/mujicardlink/mujicardLinkHeader";
import MujicardLinkContent from "../../components/account/mujicardlink/mujicardLinkContent";
import MujicardLinkForm from "../../components/account/mujicardlink/mujicardLinkForm";

const AreaLayout = styled(ContentAreaLayout)`
  max-width: 732px;
`;

class Index extends Component {

  onSubmit = (data) => {
    
  };

  render() {
    return (
      <AreaLayout>
        <BaseContentLayout>
          <MujicardLinkHeader />
          <MujicardLinkContent />
          <MujicardLinkForm onSubmit={this.onSubmit} />
        </BaseContentLayout>
      </AreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.Account.Entity.toJS();
};

const actionCreators = {
  postRequest: actions.create.request
};

const enhance = C => {
  const connected = connect(
    mapStateToProps,
    actionCreators
  )(C);
  const injected = injectIntl(connected, { withRef: true });
  return injected;
};

export default enhance(Index);
