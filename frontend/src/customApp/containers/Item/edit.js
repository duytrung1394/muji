import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import actions from "../../redux/item/entity/actions";
import Form from "./form";
import RestEdit from "../shared/edit";

class EditEntity extends Component {
  render() {
    return (
      <RestEdit
        name="item"
        pkName="item_code"
        baseUrl="/dashboard/items"
        errors={this.props.updateErrors.item}
        {...this.props}
        formComponent={Form}
      />
    );
  }
}

const { fetch, update } = actions;

const mapStateToProps = state => state.Item.Entity.toJS();

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
