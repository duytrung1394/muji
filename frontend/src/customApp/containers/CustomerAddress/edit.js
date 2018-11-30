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

const Wrapper = styled.div`
  width: 700px;
  margin: 0 auto;
  padding: 0 15px;
`;

class Edit extends Component {
  componentDidMount() {
    if (!this.fromConfirm()) {
      this.props.fetchRequest(this.props.match.params.addressBookNo);
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
    const addressBookNo = this.props.match.params.addressBookNo;
    const { fetched, fetching } = this.props;
    return (
      <ContentAreaLayout>
        <Spin spinning={fetching} size="large">
          <BaseContentLayout>
            <Wrapper>
              <h1>
                <IntlMessages id="customerAddress.edit.title" />
              </h1>
              <p>
                <IntlMessages id="customerAddress.edit.description" />
              </p>
              <PlatformDependentDescription />
              {fetched && (
                <Form
                  actionType="edit"
                  entity={this.props.entity}
                  requestHandler={entity => {
                    this.props.confirmEntity(entity);
                    this.props.history.push(
                      `/store/cust/address/confirmedit/${addressBookNo}`
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

const { request, cleanup } = actions.update;

const actionCreators = {
  fetchRequest: actions.fetch.request,
  fetchCleanup: actions.fetch.cleanup,
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

export default enhance(Edit);
