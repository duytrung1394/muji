import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/shared/panel/contentLayout";
import actions from "../../redux/order/list/actions";
import { injectIntl } from "react-intl";
import UserData from "../../components/order/userData";
import Gift from "../../components/order/gift";
import Delivery from "../../components/order/delivery";
import Button from "../../components/order/commonButton";
import BillDetails from "../../components/order/billDetails"

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
    this.fetchRequest(this.props);
  }

  fetchRequest = props => {
    // ページングもケースバイケースなのでコンポーネント毎に実装する
    props.fetchRequest({
      page: 1,
      filters: JSON.stringify(props.filters || [])
    });
  };

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
      <ContentAreaLayout>
        <ContentLayout>
          <Title>
            ご注文手続き
          </Title>
          <UserData />
          <Gift />
          <Delivery />
          <BillDetails />
        </ContentLayout>
      </ContentAreaLayout>
    );
  }
};

const mapStateToProps = state => {
  return state.Order.List.toJS();
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
