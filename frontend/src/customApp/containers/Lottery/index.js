import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/lottery/list/actions";
import { injectIntl } from "react-intl";
import { Spin } from "antd";
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/panel/contentLayout";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import LotteryInfo from "../../components/lottery/list/lotteryInfo";
import LotteryList from "../../components/lottery/list/lotteryList";
import LotteryNotes from "../../components/lottery/list/lotteryNotes";

const AreaLayout = styled(ContentAreaLayout)`
  max-width: 748px
`;

const BaseLayout = styled(BaseContentLayout)`

`;

const LotteryTitle = styled.h1`

`;


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: []
    };
  }

  // React methods
  componentDidMount() {
    this.props.fetchRequest("");
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

    return (
      <LayoutWrapper>
        <AreaLayout>
          <LotteryTitle>福袋2019</LotteryTitle>
          <LotteryInfo />
          <LotteryNotes />
          <LotteryList />
        </AreaLayout>
      </LayoutWrapper>
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

const enhance = (C) => {
  const connected = connect(mapStateToProps, actionCreators)(C);
  const injected = injectIntl(connected, {withRef: true})
  return injected
}

export default enhance(Index);
