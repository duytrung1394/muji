import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/donation/entity/actions";
import { injectIntl } from "react-intl";
import { Spin } from "antd";
import ContentHeader from "../../components/shared/header/contentHeader";
import { ContentAreaLayout } from "../../components/shared/panel/contentLayout";
import Article from "../../components/donation/article";
import DonationList from "../../components/donation/donationList";
import {
  PerformanceButton,
  FutureButton
} from "../../components/donation/button";

class Index extends Component {
  componentDidMount() {
    this.props.fetchRequest("");
  }

  render() {
    const { entity, fetching } = this.props;
    return (
      <ContentAreaLayout>
        <Spin spinning={fetching} size="large">
          <ContentHeader links={entity.links} />
          <Article article={entity.article} />
          <DonationList donations={entity.donations} />
          <PerformanceButton />
          <FutureButton />
        </Spin>
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.Donation.Entity.toJS();
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

export default enhance(Index);
