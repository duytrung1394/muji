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
    this.props.initCleanup();
    this.props.initRequest();
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    const { created, createCleanup, history } = this.props;

    if (created) {
      this.props.createCleanup();
      history.push("/store/cust/address/confirm");
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
            requestHandler={entity => this.props.createRequest(entity)}
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
  createRequest: create.request,
  createCleanup: create.cleanup
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
