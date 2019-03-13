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
import MujicardLinkButtons from "../../components/account/mujicardlink/mujicardLinkButtons";

const AreaLayout = styled(ContentAreaLayout)`
  max-width: 732px;
`;

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card_number: "",
      card_date: ""
    };
  }

  onChange = data => {
    this.setState({
      card_number: data["card_number"],
      card_date: data["card_date"]
    });
  };

  onSubmit = () => {
    // register new card
  };

  render() {
    return (
      <AreaLayout>
        <BaseContentLayout>
          <MujicardLinkHeader />
          <MujicardLinkContent />
          <MujicardLinkForm onChange={this.onChange} />
          <MujicardLinkButtons onSubmit={this.onSubmit} />
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
