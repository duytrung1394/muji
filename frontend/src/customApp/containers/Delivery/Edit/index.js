import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../../redux/delivery/entity/actions";
import { injectIntl } from "react-intl";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../../components/shared/panel/contentLayout";
import Forms from "../../../components/delivery/add/forms";

const ContentLayout = styled(BaseContentLayout)`
  max-width: 700px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: rgb(0, 0, 0);
  margin-bottom: 0;
`;

class Index extends Component {
  render() {
    return (
      <ContentAreaLayout>
        <ContentLayout>
          <Title>
            <IntlMessages id="delivery.edit.title" />
          </Title>
          <Forms />
        </ContentLayout>
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.Delivery.Entity.toJS();
};

const actionCreators = {};

const enhance = C => {
  const connected = connect(
    mapStateToProps,
    actionCreators
  )(C);
  const injected = injectIntl(connected, { withRef: true });
  return injected;
};

export default enhance(Index);
