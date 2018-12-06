import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Spin } from "antd";
import actions from "../../redux/customer_address/entity/actions";
import { injectIntl } from "react-intl";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/panel/contentLayout";
import IntlMessages from "../../../components/utility/intlMessages";
import PlatformDependentDescription from "../../components/customerAddress/platformDependentDescription";
import Form from "../../components/customerAddress/forms/form";
import AddressHeader from "../../components/customerAddress/addressHeader";

const Wrapper = styled.div`
  width: 700px;
  margin: 0 auto;
  padding: 0 15px;
`;

class New extends Component {
  componentDidMount() {
    if (!this.fromConfirm()) {
      this.props.initCleanup();
      this.props.initRequest();
    }
  }

  fromConfirm = () => {
    if (Object.keys(this.props.entity).length === 0) {
      return false;
    }
    if (this.props.history.action === "POP") {
      // browswer back button , reload
      return true;
    }
    if (this.props.location.state && this.props.location.state.fromConfirm) {
      return true;
    }
    return false;
  };

  render() {
    const { initialized, initializing } = this.props;
    return (
      <ContentAreaLayout>
        <Spin spinning={initializing} size="large">
          <BaseContentLayout>
            <Wrapper>
              <AddressHeader>
                <h1>
                  <IntlMessages id="customerAddress.create.title" />
                </h1>
                <p>
                  <IntlMessages id="customerAddress.create.description" />
                </p>
                <PlatformDependentDescription />
              </AddressHeader>
              {initialized && (
                <Form
                  actionType="new"
                  entity={this.props.entity}
                  requestHandler={entity => {
                    this.props.confirmEntity(entity);
                    this.props.history.push(
                      "/store/cust/address/create/confirm"
                    );
                  }}
                />
              )}
            </Wrapper>
          </BaseContentLayout>
        </Spin>
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.CustomerAddress.Entity.toJS();
};

const actionCreators = {
  initRequest: actions.init.request,
  initCleanup: actions.init.cleanup,
  confirmEntity: actions.confirmEntity
};

const enhance = C => {
  const connected = connect(
    mapStateToProps,
    actionCreators
  )(C);
  const injected = injectIntl(connected, { withRef: true });
  return injected;
};

export default enhance(New);
