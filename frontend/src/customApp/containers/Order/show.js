import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/order/list/actions";
import { injectIntl } from "react-intl";
import IntlMessages from "../../../components/utility/intlMessages";
import styled from "styled-components";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/shared/panel/contentLayout";
import UserData from "../../components/order/userData";
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

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: []
    };
  }

  componentDidMount() {
    this.fetchRequest(this.props);
  }

  fetchRequest = props => {
    // ページングもケースバイケースなのでコンポーネント毎に実装する
    props.fetchRequest({
      page: 1,
      filters: JSON.stringify(props.filters || [])
    });
  };

  render() {
    const { entities } = this.props;

    return (
      <ContentAreaLayout>
        <ContentLayout>
          <Title>
            <IntlMessages id="order.procedure.title" />
          </Title>
          <IntlMessages id="order.confirm.notice"/>
          <UserData userData={entities.user_data} />
          <Gift />
          <Delivery deliveryData={entities.delivery} />
          <BillDetails billDetails={entities.bill_detail} />
          <BillFooter />
        </ContentLayout>
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.Order.List.toJS();
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

export default enhance(Show);
