import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import actions from "../../redux/discount/entity/actions";
import Form from "./form";
import RestNew from "../shared/new";

class NewEntity extends Component {
  render() {
    return (
      <RestNew
        name="discount"
        pkName="discount_code"
        baseUrl="/dashboard/discounts"
        errors={ this.props.createErrors.discount }
        {...this.props}
        formComponent={Form}
      />
    );
  }
}

const {
  request,
  cleanup
} = actions.create;

const mapStateToProps = (state) => {
  return state.Discount.Entity.toJS();
};

export default withRouter(connect(mapStateToProps, {
  request,
  cleanup,
})(NewEntity));
