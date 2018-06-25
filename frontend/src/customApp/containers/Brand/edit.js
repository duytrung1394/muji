import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import actions from "../../redux/brand/entity/actions";
import Form from "./form";
import RestEdit from "../shared/edit";

class EditEntity extends Component {
  render() {
    return (
      <RestEdit
        name="brand"
        pkName="brand_code"
        baseUrl="/dashboard/brands"
        errors={ this.props.updateErrors.brand }
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

const mapStateToProps = (state) => state.Brand.Entity.toJS();

export default withRouter(connect(mapStateToProps, {
  fetchRequest: fetch.request,
  fetchCleanup: fetch.cleanup,
  updateRequest: update.request,
  updateCleanup: update.cleanup,
})(EditEntity));
