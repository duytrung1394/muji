import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/lottery/entity/actions";
import { injectIntl } from "react-intl";
import { Spin } from "antd";
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import { ContentAreaLayout } from "../../components/panel/contentLayout";
import styled from "styled-components";
import LotteryInfo from "../../components/lottery/list/lotteryInfo";
import LotteryList from "../../components/lottery/list/lotteryList";
import LotteryNotes from "../../components/lottery/list/lotteryNotes";

const AreaLayout = styled(ContentAreaLayout)`
  width: 960px;
`;

const LotteryTitle = styled.h1`
  font-weight: bold;
`;

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: []
    };
  }

  componentDidMount() {
    this.props.fetchRequest(this.props.match.params.section_code);
  }

  // React.render
  render() {
    const {
      // types
      total,
      entity,
      fetching,
      destroying,
      // react-router
      history
    } = this.props;

    const { title, info_data, notes, list_items } = entity;

    return (
      <LayoutWrapper>
        <AreaLayout>
          <LotteryTitle>{title}</LotteryTitle>
          <LotteryInfo infoData={info_data} />
          <LotteryNotes notes={notes} />
          <LotteryList listItems={list_items} />
        </AreaLayout>
      </LayoutWrapper>
    );
  }
}

const mapStateToProps = state => {
  return state.Lottery.Entity.toJS();
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
