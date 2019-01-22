import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Row, Col } from "antd";
import { injectIntl } from "react-intl";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/shared/panel/contentLayout";
import IntlMessages from "../../../components/utility/intlMessages";

const CompleteHeader = styled.div`
  h1 {
    border-bottom: 1px solid #e6e6e6;
    font-size: 28px;
    font-weight: bold;
  }
`;

const CompleteInfo = styled(Row)`
  background: #f5f5f5;
  padding: 10px;
  margin: 20px 0;
  .order-id-label {
    border-right: 1px solid #ccc;
    text-align: center;
    font-weight: bold;
  }
  .order-id-value {
    padding-left: 10px;
  }
`;

const CompleteFooter = styled.div`
  margin-top: 20px;
  text-align: center;
  a {
    color: #333333;
    text-decoration: underline;
    :hover {
      color: #7f0019;
    }
  }
`;

class Complete extends Component {
  componentDidMount() {
    if (!this.props.orderCode) {
      // reload
      this.props.history.push("/store/cmdty/donation");
    }
  }

  render() {
    const { orderCode } = this.props;
    return (
      <ContentAreaLayout>
        <BaseContentLayout>
          <CompleteHeader>
            <h1>
              <IntlMessages id="donation.complete.title" />
            </h1>
            <p>
              <IntlMessages id="donation.complete.description1" />
            </p>
          </CompleteHeader>
          <CompleteInfo type="flex">
            <Col span={2} className="order-id-label">
              <IntlMessages id="donation.complete.attributes.orderId" />
            </Col>
            <Col span={22} className="order-id-value">
              {orderCode}
            </Col>
          </CompleteInfo>
          <div>
            <IntlMessages id="donation.complete.description2" />
          </div>
          <div>
            <IntlMessages id="donation.complete.description3" />
          </div>
          <CompleteFooter>
            <Link to="/store/cmdty/donation">
              <IntlMessages id="donation.complete.link.back" />
            </Link>
          </CompleteFooter>
        </BaseContentLayout>
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.DonationTop.Entity.toJS();
};

const enhance = C => {
  const connected = connect(mapStateToProps)(C);
  const injected = injectIntl(connected, { withRef: true });
  return injected;
};

export default enhance(Complete);
