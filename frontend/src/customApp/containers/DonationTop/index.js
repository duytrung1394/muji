import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/donation_top/list/actions";
import { injectIntl } from "react-intl";
import { Spin } from "antd";
import { ContentAreaLayout } from "../../components/panel/contentLayout";

class Index extends Component {
  componentDidMount() {
    this.props.fetchRequest("");
  }

  render() {
    const { entity, fetching } = this.props;

    return (
      <ContentAreaLayout>
        <Spin spinning={fetching} size="large">
          <div>
            <span>・{entity.title}</span>
          </div>
          <div>募金記事</div>
          <div>募金リスト</div>
          <div>「過去の募金実績」ボタン、「募金券で作れる未来」ボタン</div>
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
