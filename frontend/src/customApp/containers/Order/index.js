import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { Spin } from "antd";
import styled from "styled-components";
import actions from "../../redux/order/entity/actions";
import IntlMessages from "../../../components/utility/intlMessages";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/shared/panel/contentLayout";
import Delivery from "../../components/order/index/delivery";
import Gift from "../../components/order/index/gift";
import ContentsBox from "../../components/order/index/contentsBox";
import OrderList from "../../components/order/index/orderList/orderList";
import OrderButtons from "../../components/order/index/orderButtons";
import PaymentOptionList from "../../components/order/index/payment/paymentOptionList";
import PaymentSummary from "../../components/order/index/payment/paymentSummary";
import PaymentMethod from "../../components/order/index/payment/paymentMethod";
import Title from "../../components/order/title";
import StockAlert from "../../components/order/index/stockAlert";

const ContentLayout = styled(BaseContentLayout)`
  max-width: 748px;
`;

const layoutCenterStyle = {
  textAlign: "center"
};

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentOptions: {
        shoppingPoint: {
          value: 1,
          disableFlg: true,
          inquired: false,
          inputRef: createRef()
        },
        giftCard: {
          value: 1,
          disableFlg: true,
          inquired: false,
          inputRef: createRef()
        }
      }
    };
  }

  // React methods
  componentDidMount() {
    this.props.fetchRequest("");
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    if (this.props.savedCart) {
      this.props.saveCartCleanup();
      this.props.history.push("/store/order/confirmation");
    }
  }

  onChangePaymentOption = e => {
    let paymentOptions = this.state.paymentOptions;
    paymentOptions[e.target.name].value = e.target.value;
    this.setState({
      paymentOptions: paymentOptions
    });
  };

  changeFlg = optionKey => {
    let paymentOptions = this.state.paymentOptions;
    paymentOptions[optionKey].disableFlg = !paymentOptions[optionKey]
      .disableFlg;
    paymentOptions[optionKey].value = 1;
    this.setState({
      paymentOptions: paymentOptions
    });
  };

  onInquiry = optionKey => {
    let paymentOptions = this.state.paymentOptions;
    paymentOptions[optionKey].inquired = true;
    this.setState({
      paymentOptions: paymentOptions
    });
  };

  submit = () => {
    // TODO: Add saveShoppingCart API Parameter
    this.props.saveCartRequest();
  };

  // React.render
  render() {
    const {
      // types
      entity,
      fetching,
      destroying,
      // react-router
      history
    } = this.props;

    if (Object.keys(entity).length <= 0) {
      return (
        <ContentAreaLayout>
          <ContentLayout style={layoutCenterStyle}>
            <Spin size="large" />
          </ContentLayout>
        </ContentAreaLayout>
      );
    }

    const submitInfo = {
      title: <IntlMessages id="order.procedure.orderConfirm" />,
      handleSubmit: this.submit
    };

    return (
      <ContentAreaLayout>
        <ContentLayout>
          <Title title={<IntlMessages id="order.procedure.title" />} />
          <StockAlert orders={entity.orders} />
          <ContentsBox>
            <Delivery delivery={entity.delivery} />
          </ContentsBox>
          <ContentsBox>
            <Gift giftData={entity.delivery.gift} />
            <OrderList orders={entity.orders} />
          </ContentsBox>
          <ContentsBox>
            <PaymentOptionList
              paymentDetails={entity.paymentDetails}
              paymentOptions={this.state.paymentOptions}
              optionHandler={{
                onChange: this.onChangePaymentOption,
                onInquiry: this.onInquiry,
                changeFlg: this.changeFlg
              }}
            />
            <PaymentSummary summary={entity.paymentSummary} />
            <PaymentMethod />
          </ContentsBox>
          <OrderButtons submit={submitInfo} backPath={"#"} />
        </ContentLayout>
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.Order.Entity.toJS();
};

const actionCreators = {
  fetchRequest: actions.fetch.request,
  saveCartRequest: actions.saveCart.request,
  saveCartCleanup: actions.saveCart.cleanup,
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
