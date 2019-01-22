import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Spin } from "antd";
import actions from "../../redux/donation_top/entity/actions";
import { injectIntl } from "react-intl";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/shared/panel/contentLayout";
import IntlMessages from "../../../components/utility/intlMessages";
import TotalPrice from "../../components/donationTop/payment/totalPrice";
import Form from "../../components/donationTop/payment/form";

const PaymentHeader = styled.div`
  h1 {
    border-bottom: 1px solid #e6e6e6;
    font-size: 28px;
    font-weight: bold;
  }
`;

class Payment extends Component {
  componentDidMount() {
    this.props.fetchRequest(
      `payment/${this.props.match.params.donation_code}/${
        this.props.match.params.number_of_units
      }`
    );
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    if (this.props.confirmedDonation) {
      this.props.confirmDonationCleanup();
      this.props.history.push(
        `/store/cart/donation/confirm/${
          this.props.match.params.donation_code
        }/${this.props.match.params.number_of_units}`
      );
    }
  }

  render() {
    const {
      fetched,
      fetching,
      entity,
      match: {
        params: { donation_code, number_of_units }
      }
    } = this.props;
    return (
      <ContentAreaLayout>
        <Spin spinning={fetching} size="large">
          <BaseContentLayout>
            <PaymentHeader>
              <h1>
                <IntlMessages id="donation.payment.title" />
              </h1>
              <p>
                <IntlMessages id="donation.payment.description" />
              </p>
            </PaymentHeader>
            {fetched && [
              <TotalPrice key={0} price={entity.total} />,
              <Form
                key={1}
                {...this.props}
                donationCode={donation_code}
                numberOfUnits={number_of_units}
              />
            ]}
          </BaseContentLayout>
        </Spin>
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.DonationTop.Entity.toJS();
};

const actionCreators = {
  fetchRequest: actions.fetch.request,
  fetchCleanup: actions.fetch.cleanup,
  doGiftcardInquiryRequest: actions.doGiftcardInquiry.request,
  doGiftcardInquiryCleanup: actions.doGiftcardInquiry.cleanup,
  confirmDonationRequest: actions.confirmDonation.request,
  confirmDonationCleanup: actions.confirmDonation.cleanup
};

const enhance = C => {
  const connected = connect(
    mapStateToProps,
    actionCreators
  )(C);
  const injected = injectIntl(connected, { withRef: true });
  return injected;
};

export default enhance(Payment);
