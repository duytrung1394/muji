import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Spin } from "antd";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/shared/panel/contentLayout";
import actions from "../../redux/order/entity/actions";
import { injectIntl } from "react-intl";
import Delivery from "../../components/order/index/delivery";
import Gift from "../../components/order/index/gift";
import ContentsBox from "../../components/order/index/contentsBox";
import OrderItemList from "../../components/order/index/orderItemList";
import OrderButtons from "../../components/order/index/orderButtons";
import PaymentDetails from "../../components/order/index/payment/paymentDetails";
import Title from "../../components/order/title";
import IntlMessages from "../../../components/utility/intlMessages";

const ContentLayout = styled(BaseContentLayout)`
  max-width: 748px;
`;

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentOptions: {
        shoppingPoints: {
          value: 1,
          disableFlg: true,
          inputRef: createRef()
        },
        coins: {
          value: 1,
          disableFlg: true,
          inputRef: createRef()
        },
        partnerSales: {
          value: 1,
          disableFlg: true,
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

  resetPaymentOptionValue = (optionKey, resetFlg) => {
    if (resetFlg) {
      this.state.paymentOptions[optionKey].inputRef.current.input.value = "";
    }
  };

  changeFlg = (optionKey, resetFlg) => {
    let paymentOptions = this.state.paymentOptions;
    paymentOptions[optionKey].disableFlg = !paymentOptions[optionKey]
      .disableFlg;
    this.setState({
      paymentOptions: paymentOptions
    });
    this.resetPaymentOptionValue(optionKey, resetFlg);
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
      return <Spin spinning={fetching} size="large" />;
    }

    const submitInfo = {
      title: <IntlMessages id="order.procedure.orderConfirm" />,
      handleSubmit: this.submit
    };

    return (
      <ContentAreaLayout>
        <ContentLayout>
          <Title title={<IntlMessages id="order.procedure.title" />} />
          <Delivery delivery={entity.delivery} />
          <ContentsBox>
            <Gift giftData={entity.delivery.gift} />
            <OrderItemList orders={entity.orders} delivery={entity.delivery} />
          </ContentsBox>
          <ContentsBox>
            <PaymentDetails
              entity={entity}
              paymentOptions={this.state.paymentOptions}
              optionHandler={{
                onChange: this.onChangePaymentOption,
                resetValue: this.resetPaymentOptionValue,
                changeFlg: this.changeFlg
              }}
            />
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
