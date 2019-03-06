import React, { Component } from "react";
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
          <ContentsBox>
            <Delivery delivery={entity.delivery} isConfirm={true} />
          </ContentsBox>
          <ContentsBox>
            <Gift giftData={entity.delivery.gift} isConfirm={true} />
            <OrderList orders={entity.orders} isConfirm={true} />
          </ContentsBox>
          <ContentsBox>
            <PaymentSummary summary={entity.paymentSummary} />
            <PaymentMethod isConfirm={true} />
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
