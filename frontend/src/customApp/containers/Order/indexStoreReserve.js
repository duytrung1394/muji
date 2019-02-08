import { connect } from "react-redux";
import { ContentAreaLayout } from "../../components/shared/panel/contentLayout";
import { injectIntl, FormattedMessage } from "react-intl";
import { Spin } from "antd";
import { TabSlider } from "../../components/shared/tabSlider";
import actions from "../../redux/order/list/actions";
import StoreReserveItem from "../../components/order/storeReserve/item";
import IntlMessages from "../../../components/utility/intlMessages";
import React, { Component, Fragment } from "react";
import styled from "styled-components";

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
  "order.storeReserve.tab.all",
  "order.storeReserve.tab.complete",
  "order.storeReserve.tab.request"
];

const ItemBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 50px;
`;

const itemKeys = ["all", "complete", "request"];

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
          <IntlMessages id="order.storeReserve.name" />
        </Title>
        <Spin size="large" spinning={fetching}>
          <TabSlider tabNameIds={tabNameIds}>
            {itemKeys.map(itemKey => {
              return (
                <Fragment>
                  <ItemBox>
                    {entities[itemKey] &&
                      entities[itemKey].map((item, index) => {
                        let popoverActions = [];
                        let footerActions = [];

                        switch (item.cancel_type) {
                          case 1:
                            footerActions.push({
                              name: formatMessage({
                                id: "order.storeReserve.cancel"
                              })
                            });
                            break;
                          case 2:
                            footerActions.push({
                              name: formatMessage({
                                id: "order.storeReserve.cancel"
                              })
                            });
                            footerActions.push({
                              name: formatMessage({
                                id: "order.storeReserve.extend"
                              })
                            });
                            break;
                          case 3:
                            footerActions.push({
                              name: formatMessage({
                                id: "order.storeReserve.delete"
                              })
                            });
                            footerActions.push({
                              name: formatMessage({
                                id: "order.storeReserve.reStoreReserve"
                              })
                            });
                            break;
                        }

                        return (
                          <StoreReserveItem
                            item={item}
                            key={index}
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
  fetchRequest: actions.fetchStoreReserve.request,
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
