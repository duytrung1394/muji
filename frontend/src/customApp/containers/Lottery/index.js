import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/lottery/list/actions";
import { injectIntl } from "react-intl";
import { Spin } from "antd";
import { ContentAreaLayout } from "../../components/panel/contentLayout";
import styled from "styled-components";
import LotteryList from "../../components/lottery/list/lotteryList";
import LotteryNotice from "../../components/lottery/notice";

const AreaLayout = styled(ContentAreaLayout)`
  max-width: 960px;
`;

const Dummy = () => {
  const blockStyle = {
    'text-align': 'center',
    'height': '200px',
    'width': '100%',
    'display': 'table',
    'padding-bottom': '30px',
  };
  const textStyle = {
      'color': '#f56c6c',
      'font-weight': 'bold',
      'display': 'table-cell',
      'vertical-align': 'middle',
      'margin': 'auto',
      'width': '100%',
      'background-color': '#eee',
  };

  return (
    <div style={blockStyle}>
      <div style={textStyle}>TODO: インクルードコンテンツ表示</div>
    </div>
  );
};

class Index extends Component {
  componentDidMount() {
    this.props.fetchRequest({
      section_code: this.props.match.params.section_code
    });
  }

  // React.render
  render() {
    const {
      // types
      total,
      entities,
      fetching,
      destroying,
      // react-router
      history
    } = this.props;

    const { list_items } = entities;

    return (
      <AreaLayout>
        <Dummy />
        <LotteryNotice />
        <LotteryList listItems={list_items} />
      </AreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.Lottery.List.toJS();
};

const actionCreators = {
  fetchRequest: actions.fetch.request,
  destroyRequest: actions.destroy.request,
  destroyCleanup: actions.destroy.cleanup
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
