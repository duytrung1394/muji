import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/order_history/list/actions";
import { injectIntl } from "react-intl";
import IntlMessages from "../../../components/utility/intlMessages";
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import PurchesSort from "../../components/order/purchaseSort";
import PurchaseItemList from "../../components/order/purchaseItemList";
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

class IndexPurchaseHistory extends Component {
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
      <LayoutWrapper>
        test
        <Title><IntlMessages id="orderHistory.name" /></Title>
        <PurchesSort/>
        <PurchaseItemList
          purchaseItemList={entities}
        />
      </LayoutWrapper>
    );
  }
}

const mapStateToProps = state => {
  return state.PurchaseHistory.List.toJS();
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

export default enhance(IndexPurchaseHistory);
