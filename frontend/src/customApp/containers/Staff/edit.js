import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import actions from "../../redux/staff/entity/actions";
import Form from "./form";
import RestEdit from "../shared/edit";

class EditEntity extends Component {
  render() {
    return (
      <RestEdit
        name="staff"
        pkName="staff_code"
        baseUrl="/dashboard/staffs"
        errors={ this.props.updateErrors.staff }
        {...this.props}
        formComponent={Form}
      />
    );
  }
}

const {
  fetch,
  update,
} = actions;

const mapStateToProps = (state) => state.Staff.Entity.toJS();

export default withRouter(connect(mapStateToProps, {
  fetchRequest: fetch.request,
  fetchCleanup: fetch.cleanup,
  updateRequest: update.request,
  updateCleanup: update.cleanup,
})(EditEntity));
