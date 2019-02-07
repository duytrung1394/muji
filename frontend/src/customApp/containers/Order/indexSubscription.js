import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import actions from "../../redux/order/list/actions";
import { injectIntl } from "react-intl";
import IntlMessages from "../../../components/utility/intlMessages";
import SubscriptionItem from "../../components/order/subscription/item";
import styled from "styled-components";
import { ContentAreaLayout } from "../../components/shared/panel/contentLayout";
import { TabSlider } from "../../components/shared/tabSlider";
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

const tabNameIds = [
  "order.subscription.tab.continue",
  "order.subscription.tab.stopped"
];

const itemKeys = ["continue", "stopped"];

const ItemBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 50px;
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
      history,
      intl: { formatMessage }
    } = this.props;

    return (
      <ContentAreaLayout>
        <Title>
          <IntlMessages id="order.subscription.name" />
        </Title>
        <Spin size="large" spinning={fetching}>
          <TabSlider tabNameIds={tabNameIds}>
            {itemKeys.map((itemKey, index) => {
              let popoverActions = [];
              let footerActions = [];

              if (itemKey === "continue") {
                popoverActions.push({
                  name: formatMessage({ id: "order.subscription.ellipsisButton.stop" })
                });
                footerActions.push({
                  name: formatMessage({ id: "order.subscription.skip" })
                });
                footerActions.push({
                  name: formatMessage({ id: "order.subscription.change" })
                });
              } else if (itemKey === "stopped") {
                footerActions.push({
                  name: formatMessage({ id: "order.subscription.delete" })
                });
                footerActions.push({
                  name: formatMessage({ id: "order.subscription.resume" })
                });
              }

              return (
                <Fragment key={index}>
                  <ItemBox>
                    {entities[itemKey] &&
                      entities[itemKey].map((item, index) => {
                        return (
                          <SubscriptionItem
                            key={index}
                            item={item}
                            popoverActions={popoverActions}
                            footerActions={footerActions}
                          />
                        );
                      })}
                  </ItemBox>
                </Fragment>
              );
            })}
          </TabSlider>
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
