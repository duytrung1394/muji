import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/donation_top/entity/actions";
import { injectIntl } from "react-intl";
import { Spin, Button } from "antd";
import ContentHeader from "../../components/header/contentHeader";
import { ContentAreaLayout } from "../../components/panel/contentLayout";
import Article from "../../components/donationTop/article";
import DonationList from "../../components/donationTop/donationList";
import { Link } from "react-router-dom";
import IntlMessages from "../../../components/utility/intlMessages";
import {
  PerformanceButton,
  FutureButton
} from "../../components/donationTop/button";

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
  return state.DonationTop.Entity.toJS();
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