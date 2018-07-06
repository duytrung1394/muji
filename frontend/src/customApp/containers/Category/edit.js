import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import actions from "../../redux/category/entity/actions";
import Form from "./form";
import RestEdit from "../shared/edit";

class EditEntity extends Component {
  render() {
    return (
      <RestEdit
        name="category"
        pkName="category_code"
        baseUrl="/dashboard/categories"
        errors={this.props.updateErrors.category}
        {...this.props}
        formComponent={Form}
      />
    );
  }
}

const { fetch, update } = actions;

const mapStateToProps = state => state.Category.Entity.toJS();

export default withRouter(
  connect(
    mapStateToProps,
    {
      fetchRequest: fetch.request,
      fetchCleanup: fetch.cleanup,
      updateRequest: update.request,
      updateCleanup: update.cleanup
    }
  )(EditEntity)
);
