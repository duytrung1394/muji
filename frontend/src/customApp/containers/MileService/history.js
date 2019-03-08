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
import HistoryHeader from "../../components/mileService/mileServiceHeader";
import HistoryInfoList from "../../components/mileService/mileServiceList";
import HistoryInfoSummary from "../../components/mileService/mileServiceSummary";
import HistoryFooter from "../../components/mileService/mileServiceFooter";

const ContentLayout = styled(BaseContentLayout)`
  max-width: 732px;
`;

class History extends Component {
  componentDidMount() {
    this.props.fetchRequest("history");
  }

  render() {
    const { entity, fetching } = this.props;
    return (
      <ContentAreaLayout>
        <ContentLayout>
          <Spin spinning={fetching} size="large">
            <HistoryHeader />
            <HistoryInfoSummary entity={entity} />
            <HistoryInfoList miles={entity.miles} />
            <HistoryFooter />
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
