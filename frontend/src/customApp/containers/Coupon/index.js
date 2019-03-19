import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/coupon/list/actions";
import { injectIntl } from "react-intl";
import styled from "styled-components";
import { Spin } from "antd";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/shared/panel/contentLayout";
import CouponHeader from "../../components/coupon/couponHeader";
import CouponHavingCount from "../../components/coupon/index/couponHavingCount";
import CouponList from "../../components/coupon/index/couponList";
import IntlMessages from "../../../components/utility/intlMessages";
import CouponMainGroupButton from "../../components/coupon/index/couponMainGroupButton";

const ContentLayout = styled(BaseContentLayout)`
  max-width: 732px;
  padding: 0 16px 10px;
`;

class Index extends Component {
  componentDidMount() {
    this.props.fetchRequest();
  }

  render() {
    const { entities, fetching } = this.props;
    const couponCount = entities.length;
    return (
      <ContentAreaLayout>
        <ContentLayout>
          <Spin spinning={fetching} size="large">
            <CouponHeader title={<IntlMessages id="coupon.valid.title" />} />
            <CouponHavingCount count={couponCount} />
            <CouponList coupons={entities} />
            <CouponMainGroupButton />
          </Spin>
        </ContentLayout>
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.Coupon.List.toJS();
};

const actionCreators = {
  fetchRequest: actions.fetch.request
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
