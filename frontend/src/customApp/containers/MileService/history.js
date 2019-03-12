import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/mile_service/entity/actions";
import { injectIntl } from "react-intl";
import styled from "styled-components";
import { Spin } from "antd";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/shared/panel/contentLayout";
import MileServiceHeader from "../../components/mileService/mileServiceHeader";
import MileServiceList from "../../components/mileService/mileServiceList";
import MileServiceSummary from "../../components/mileService/mileServiceSummary";
import MileServiceFooter from "../../components/mileService/mileServiceFooter";

const ContentLayout = styled(BaseContentLayout)`
  max-width: 732px;
`;

class History extends Component {
  componentDidMount() {
    this.props.fetchRequest("history");
  }

  render() {
    const { entity, fetching, intl } = this.props;
    return (
      <ContentAreaLayout>
        <ContentLayout>
          <Spin spinning={fetching} size="large">
            <MileServiceHeader />
            <MileServiceSummary entity={entity} intl={intl} />
            <MileServiceList miles={entity.miles} intl={intl} />
            <MileServiceFooter />
          </Spin>
        </ContentLayout>
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.MileService.Entity.toJS();
};

const actionCreators = {
  fetchRequest: actions.fetch.request
};

const enhance = C => {
  const connected = connect(
    mapStateToProps,
    actionCreators
  )(C);
  const injected = injectIntl(connected, { withRef: true });
  return injected;
};

export default enhance(History);
