import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/mile_service/entity/actions";
import { injectIntl } from "react-intl";
import styled from "styled-components";
import HistoryHeader from "../../components/mileService/mileServiceHeader";
import HistoryInfoList from "../../components/mileService/mileServiceList";
import HistoryInfoSummary from "../../components/mileService/mileServiceSummary";
import HistoryFooter from "../../components/mileService/mileServiceFooter";

const ContentLayout = styled.div`
  max-width: 732px;
  padding: 0 16px 10px;
  margin: 0 auto;
  overflow: hidden;
  color: #585858;
`;

class History extends Component {
  componentDidMount() {
    this.props.fetchRequest("history/" + new Date().getFullYear());
  }

  render() {
    const { entity } = this.props;
    console.log(entity);
    return (
      <ContentLayout>
        <HistoryHeader />
        <HistoryInfoSummary entity={entity} />
        <HistoryInfoList mile_history={entity.miles} />
        <HistoryFooter />
      </ContentLayout>
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
