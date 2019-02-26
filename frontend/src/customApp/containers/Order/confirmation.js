import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/order/entity/actions";
import { injectIntl } from "react-intl";
import IntlMessages from "../../../components/utility/intlMessages";
import styled from "styled-components";
import { Spin } from "antd";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/shared/panel/contentLayout";
import Delivery from "../../components/order/index/delivery";
import Gift from "../../components/order/index/gift";
import ContentsBox from "../../components/order/index/contentsBox";
import OrderItemList from "../../components/order/index/orderItemList";
import OrderButtons from "../../components/order/index/orderButtons";
import PaymentSummary from "../../components/order/index/payment/paymentSummary";
import PaymentMethod from "../../components/order/index/payment/paymentMethod";
import Title from "../../components/order/title";

const ContentLayout = styled(BaseContentLayout)`
  max-width: 748px;
`;

class Confirmation extends Component {
  componentDidMount() {
    if (!this.props.orderCode) {
      // reload
      this.props.history.push(this.getBackPath());
    }
    this.props.confirmOrderRequest("");
  }

  getBackPath = () => `/store/order/index`;

  submit = () => {
    // TODO: API Request
  };

  render() {
    const { entity, fetching } = this.props;

    if (Object.keys(entity).length <= 0) {
      return <Spin spinning={fetching} size="large" />;
    }

    const submitInfo = {
      title: <IntlMessages id="order.confirm.orderEnter" />,
      handleSubmit: this.submit
    };

    return (
      <ContentAreaLayout>
        <ContentLayout>
          <Title title={<IntlMessages id="order.confirm.title" />} />
          <IntlMessages id="order.confirm.notice" />
          <Delivery delivery={entity.delivery} unable={true} />
          <ContentsBox>
            <Gift giftData={entity.delivery.gift} unable={true} />
            <OrderItemList
              orders={entity.orders}
              delivery={entity.delivery}
              unable={true}
            />
          </ContentsBox>
          <ContentsBox>
            <PaymentSummary summary={entity.paymentSummary} />
            <PaymentMethod unable={true} />
          </ContentsBox>
          <OrderButtons submit={submitInfo} backPath={this.getBackPath()} />
        </ContentLayout>
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.Order.Entity.toJS();
};

const actionCreators = {
  confirmOrderRequest: actions.confirmOrder.request,
  destroy: actions.destroy.request,
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

export default enhance(Confirmation);
