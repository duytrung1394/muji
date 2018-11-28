import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/customer_address/entity/actions";
import { injectIntl } from "react-intl";
import ContentAreaLayout from "../../components/panel/contentLayout";
import IntlMessages from "../../../components/utility/intlMessages";
import PlatformDependentDescription from "../../components/customerAddress/platformDependentDescription";
import Form from "../../components/customerAddress/forms/form";

class Edit extends Component {
  componentDidMount() {
    if (!this.props.confirmingEntity) {
      this.props.fetchRequest(this.props.match.params.addressBookNo);
    }
  }

  render() {
    const addressBookNo = this.props.match.params.addressBookNo;
    const { fetched, updated } = this.props;
    return (
      <ContentAreaLayout>
        <h1>
          <IntlMessages id="customerAddress.edit.title" />
        </h1>
        <p>
          <IntlMessages id="customerAddress.edit.description" />
        </p>
        <PlatformDependentDescription />
        {fetched &&
          !updated && (
            <Form
              actionType="edit"
              entity={this.props.entity}
              requestHandler={entity => {
                this.props.confirmEntity(entity);
                this.props.history.push("/store/cust/address/confirmedit");
              }}
            />
          )}
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
