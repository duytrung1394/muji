import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/lottery/list/actions";
import { injectIntl } from "react-intl";
import { Spin } from "antd";
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import { ContentAreaLayout } from "../../components/panel/contentLayout";
import styled from "styled-components";
import LotteryList from "../../components/lottery/list/lotteryList";

const AreaLayout = styled(ContentAreaLayout)`
  width: 960px;
`;

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: []
    };
  }

  componentDidMount() {
    this.props.fetchRequest({
      section_code: this.props.match.params.section_code
    });
  }

  // React.render
  render() {
    console.log(this.props);
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
      <LayoutWrapper>
        <AreaLayout>
          <LotteryList listItems={list_items} />
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

const enhance = C => {
  const connected = connect(
    mapStateToProps,
    actionCreators
  )(C);
  const injected = injectIntl(connected, { withRef: true });
  return injected;
};

export default enhance(Index);
