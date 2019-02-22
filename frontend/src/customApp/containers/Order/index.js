import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Spin } from "antd";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/shared/panel/contentLayout";
import actions from "../../redux/order/entity/actions";
import { injectIntl } from "react-intl";
import UserData from "../../components/order/userData";
import Gift from "../../components/order/gift";
import Delivery from "../../components/order/delivery";
import BillFooter from "../../components/order/billFooter";
import BillDetails from "../../components/order/billDetails";
import IntlMessages from "../../../components/utility/intlMessages";

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

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: []
    };
  }

  // React methods
  componentDidMount() {
    this.props.fetchRequest("");
  }

  // React.render
  render() {
    const {
      // types
      total,
      entity,
      fetching,
      destroying,
      // react-router
      history
    } = this.props;

    if (Object.keys(entity).length <= 0) {
      return <Spin spinning={fetching} size="large" />;
    }

    return (
      <ContentAreaLayout>
        <ContentLayout>
          <Title>
            <IntlMessages id="order.procedure.title" />
          </Title>
          <UserData userData={entity.user_data} />
          <Gift giftData={entity.gift} />
          <Delivery deliveryData={entity.delivery} />
          <BillDetails
            billDetails={entity.bill_detail}
            billingSummary={entity.billing_summary}
          />
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
