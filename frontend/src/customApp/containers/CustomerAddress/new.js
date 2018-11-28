import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/customer_address/entity/actions";
import { injectIntl } from "react-intl";
import ContentAreaLayout from "../../components/panel/contentLayout";
import IntlMessages from "../../../components/utility/intlMessages";
import PlatformDependentDescription from "../../components/customerAddress/platformDependentDescription";
import Form from "../../components/customerAddress/forms/form";

class New extends Component {
  componentDidMount() {
    if (!this.props.confirmingEntity) {
      this.props.initCleanup();
      this.props.initRequest();
    }
  }

  render() {
    const { initialized } = this.props;
    return (
      <ContentAreaLayout>
        <h1>
          <IntlMessages id="customerAddress.create.title" />
        </h1>
        <p>
          <IntlMessages id="customerAddress.create.description" />
        </p>
        <PlatformDependentDescription />
        {initialized && (
          <Form
            actionType="new"
            entity={this.props.entity}
            requestHandler={entity => {
              this.props.confirmEntity(entity);
              this.props.history.push("/store/cust/address/confirmnew");
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

const { init, create } = actions;

const actionCreators = {
  initRequest: init.request,
  initCleanup: init.cleanup,
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
