import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Spin } from "antd";
import actions from "../../redux/donation_top/entity/actions";
import { injectIntl } from "react-intl";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/panel/contentLayout";
import IntlMessages from "../../../components/utility/intlMessages";

const ConfirmHeader = styled.div`
  h1 {
    border-bottom: 1px solid #e6e6e6;
    font-size: 28px;
    font-weight: bold;
  }
`;

class Confirm extends Component {
  render() {
    return (
      <ContentAreaLayout>
        <Spin spinning={false}>
          <BaseContentLayout>
            <ConfirmHeader>
              <h1>寄付内容の確認</h1>
              <p>
                寄付内容をご確認の上、変更がなければ「寄付を確定する」を押してください。
              </p>
            </ConfirmHeader>
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
