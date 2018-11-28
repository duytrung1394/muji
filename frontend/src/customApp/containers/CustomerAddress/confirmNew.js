import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import actions from "../../redux/customer_address/entity/actions";
import { injectIntl } from "react-intl";
import IntlMessages from "../../../components/utility/intlMessages";

class ConfirmNew extends Component {
  render() {
    const { entity } = this.props;
    return (
      <div>
        <p>
          {entity.familyName} {entity.firstName}
        </p>
        <p>
          {entity.familyNameKana} {entity.firstNameKana}
        </p>
        <Link to="/store/cust/address/create">
          <IntlMessages id="customerAddress.link.back"/>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.CustomerAddress.Entity.toJS();
};

const { request, cleanup } = actions.fetch;

const actionCreators = {
  request,
  cleanup
};

const enhance = C => {
  const connected = connect(
    mapStateToProps,
    actionCreators
  )(C);
  const injected = injectIntl(connected, { withRef: true });
  return injected;
};

export default enhance(ConfirmNew);
