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
import UserData from "../../components/order/confirm/userData";
import Gift from "../../components/order/confirm/gift";
import Delivery from "../../components/order/confirm/delivery";
import BillFooter from "../../components/order/confirm/billFooter";
import BillDetails from "../../components/order/confirm/billDetails";

const ContentLayout = styled(BaseContentLayout)`
  max-width: 748px;
`;

const Title = styled.h1`
  line-height: 19px;
  width: 100%;
  color: rgb(0, 0, 0);
  font-size: 19px;
  letter-spacing: 0.25px;
`;

class Confirmation extends Component {
  componentDidMount() {
    if (!this.props.orderCode) {
      // reload
      this.props.history.push(this.getBackPath());
    }
  }

  getBackPath = () => `/store/order/index`;

  fetchRequest = props => {
    // ページングもケースバイケースなのでコンポーネント毎に実装する
    props.fetchRequest({
      page: 1,
      filters: JSON.stringify(props.filters || [])
    });
  };

  render() {
    const { entity, fetching } = this.props;

    if (Object.keys(entity).length <= 0) {
      return <Spin spinning={fetching} size="large" />;
    }

    return (
      <ContentAreaLayout>
        <ContentLayout>
          <Title>
            <IntlMessages id="order.confirm.title" />
          </Title>
          <IntlMessages id="order.confirm.notice" />
          <UserData userData={entity.user_data} />
          <Gift />
          <Delivery deliveryData={entity.delivery} />
          <BillDetails billDetails={entity.bill_detail} />
          <BillFooter />
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
