import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/order/list/actions";
import { injectIntl } from "react-intl";
import IntlMessages from "../../../components/utility/intlMessages";
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import PurchaseSort from "../../components/order/purchase/sort";
import { Spin } from "antd";
import styled from "styled-components";
import PurchaseItem from "../../components/order/purchase/item";

const Title = styled.h1`
  line-height: 19px;
  width: 100%;
  color: rgb(0, 0, 0);
  font-size: 19px;
  letter-spacing: 0.25px;
  margin: 30px 0px 0px;
  padding: 0 50px;
`;

const ItemListWrapper = styled.div`
  float: left;
  list-style: none;
  position: relative;
  width: 100%;

  max-width: 1590px;
  margin: 10px auto 0;
  padding: 0 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
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
      <Spin size="large" spinning={fetching}>
        <LayoutWrapper>
          <Title>
            <IntlMessages id="order.purchaseHistory.name" />
          </Title>
          <PurchaseSort />
          <ItemListWrapper>
            {entities.map((item, index) => {
              let popoverActions = [];
              let footerActions = [];

              popoverActions.push({
                name: formatMessage({
                  id: "order.purchaseHistory.ellipsisButton.review"
                })
              });
              popoverActions.push({
                name: formatMessage({
                  id: "order.purchaseHistory.ellipsisButton.favorite"
                })
              });
              popoverActions.push({
                name: formatMessage({
                  id: "order.purchaseHistory.ellipsisButton.maintenanceParts"
                })
              });

              switch (item.cancel_type) {
                case 1:
                  footerActions.push({
                    name: formatMessage({
                      id: "order.purchaseHistory.cancel"
                    })
                  });
                  break;
                case 2:
                  footerActions.push({
                    name: formatMessage({
                      id: "order.purchaseHistory.returnProduct"
                    }),
                    disabled: true
                  });
                  break;
                case 3:
                  footerActions.push({
                    name: formatMessage({
                      id: "order.purchaseHistory.returnProduct"
                    })
                  });
                  break;
              }

              footerActions.push({
                name: formatMessage({
                  id: "order.purchaseHistory.itemDetails"
                })
              });

              return (
                <PurchaseItem
                  key={index}
                  item={item}
                  popoverActions={popoverActions}
                  footerActions={footerActions}
                />
              );
            })}
          </ItemListWrapper>
        </LayoutWrapper>
      </Spin>
    );
  }
}

const mapStateToProps = state => {
  return state.Order.List.toJS();
};

const actionCreators = {
  fetchRequest: actions.fetchPurchaseHistory.request,
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
