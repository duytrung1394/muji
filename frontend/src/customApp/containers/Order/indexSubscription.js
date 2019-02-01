import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/order/list/actions";
import { injectIntl } from "react-intl";
import IntlMessages from "../../../components/utility/intlMessages";
import Tabs from "../../components/order/orderTabs";
import styled from "styled-components";
import { ContentAreaLayout } from "../../components/shared/panel/contentLayout";
import { Spin } from "antd";

const Title = styled.h1`
  line-height: 19px;
  width: 100%;
  color: rgb(0, 0, 0);
  font-size: 19px;
  letter-spacing: 0.25px;
  margin: 30px 0px 0px;
  padding: 0 50px;
`;

const tabList = [
  "order.subscription.tab.continue",
  "order.subscription.tab.stop"
];

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: []
    };
  }

  // React methods
  componentDidMount() {
    this.props.fetchRequest();
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
      <ContentAreaLayout>
        <Title>
          <IntlMessages id="order.subscription.name" />
        </Title>
        <Spin size="large" spinning={fetching}>
          <Tabs
            itemList={entities}
            tabList={tabList}
            itemType={"subscription"}
          />
        </Spin>
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.Order.List.toJS();
};

const actionCreators = {
  fetchRequest: actions.fetchSubscription.request,
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
