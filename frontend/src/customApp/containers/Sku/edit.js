import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import actions from "../../redux/sku/entity/actions";
import Form from "./form";
import RestEdit from "../shared/edit";

class EditEntity extends Component {
  render() {
    return (
      <RestEdit
        name="sku"
        pkName="sku_code"
        baseUrl="/dashboard/skus"
        errors={ this.props.updateErrors.sku }
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

const mapStateToProps = (state) => state.Sku.Entity.toJS();

export default withRouter(connect(mapStateToProps, {
  fetchRequest: fetch.request,
  fetchCleanup: fetch.cleanup,
  updateRequest: update.request,
  updateCleanup: update.cleanup,
})(EditEntity));
