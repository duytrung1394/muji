import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import actions from "../../redux/customer_address/entity/actions";
import { injectIntl } from "react-intl";
import IntlMessages from "../../../components/utility/intlMessages";

class ConfirmEdit extends Component {
  render() {
    const { entity } = this.props;
    return (
      <div>
        <p>{entity.name}</p>
        <p>{entity.nameKana}</p>
        <Link to={`/store/cust/address/edit/${entity.addressBookNo}`}>
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

export default enhance(ConfirmEdit);
