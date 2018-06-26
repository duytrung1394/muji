import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import actions from "../../redux/staff/entity/actions";
import Form from "./form";
import RestNew from "../shared/new";

class NewEntity extends Component {
  render() {
    return (
      <RestNew
        name="staff"
        pkName="staff_code"
        baseUrl="/dashboard/staffs"
        errors={ this.props.createErrors.staff }
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
  return state.Staff.Entity.toJS();
};

export default withRouter(connect(mapStateToProps, {
  request,
  cleanup,
})(NewEntity));
