import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Spin, Row, Col } from "antd";
import actions from "../../redux/donation_top/entity/actions";
import { injectIntl } from "react-intl";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/panel/contentLayout";
import IntlMessages from "../../../components/utility/intlMessages";
import Summary from "../../components/donationTop/confirm/summary";
import Detail from "../../components/donationTop/confirm/detail";
import { Button } from "../../components/form/button";

const ConfirmHeader = styled.div`
  h1 {
    border-bottom: 1px solid #e6e6e6;
    font-size: 28px;
    font-weight: bold;
  }
`;

const ConfirmFooter = styled(Row)`
  margin-top: 20px;
  a {
    color: #333333;
    text-decoration: underline;
    :hover {
      color: #7f0019;
    }
  }
`;

const AlignRightCol = styled(Col)`
  text-align: right;
`;

const SubmitButton = styled(Button)`
  &&& {
    width: 190px;
    padding: 10px;
    font-size: 14px;
    height: 40px;
  }
`;

class Confirm extends Component {
  componentDidMount() {
    if (!this.exsitsConfirmationEntity()) {
      // reload
      this.props.history.push(this.getBackPath());
    }
  }

  exsitsConfirmationEntity = () => {
    return (
      this.props.confirmationEntity &&
      Object.keys(this.props.confirmationEntity).length > 0
    );
  };

  getBackPath = () =>
    `/store/cart/donation/payment/${this.props.match.params.donation_code}/${
      this.props.match.params.number_of_units
    }`;

  render() {
    if (this.exsitsConfirmationEntity()) {
      const {
        confirmationEntity: { total, creditUseAmount }
      } = this.props;
      return (
        <ContentAreaLayout>
          <Spin spinning={false}>
            <BaseContentLayout>
              <ConfirmHeader>
                <h1>
                  <IntlMessages id="donation.confirm.title" />
                </h1>
                <p>
                  <IntlMessages id="donation.confirm.description" />
                </p>
              </ConfirmHeader>
              <Row type="flex" gutter={8}>
                <Col span={15}>
                  <Detail {...this.props.confirmationEntity} />
                </Col>
                <Col span={6} offset={2}>
                  <Summary total={total} useCreditCard={creditUseAmount > 0} />
                </Col>
              </Row>
              <ConfirmFooter justify="space-between">
                <Col span={15}>
                  <Link to={this.getBackPath()}>
                    <IntlMessages id="donation.payment.link.back" />
                  </Link>
                </Col>
                <AlignRightCol span={8}>
                  <SubmitButton type="primary">
                    <IntlMessages id="donation.confirm.submit" />
                  </SubmitButton>
                </AlignRightCol>
              </ConfirmFooter>
            </BaseContentLayout>
          </Spin>
        </ContentAreaLayout>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return state.DonationTop.Entity.toJS();
};

const actionCreators = {
  fetchRequest: actions.fetch.request,
  fetchCleanup: actions.fetch.cleanup
};

const enhance = C => {
  const connected = connect(
    mapStateToProps,
    actionCreators
  )(C);
  const injected = injectIntl(connected, { withRef: true });
  return injected;
};

export default enhance(Confirm);
