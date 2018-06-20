import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import actions from "../../redux/task/entity/actions";
import TaskForm from "./form";
import RestEdit from "../shared/edit";

class EditTask extends Component {
  render() {
    return (
      <RestEdit
        name="task" 
        baseUrl="/dashboard/tasks"
        {...this.props}
        errors={ this.props.updateErrors.task }
        formComponent={TaskForm}
      />
    );
  }
}

const {
  fetch,
  update,
} = actions;

const mapStateToProps = (state) => state.Task.Entity.toJS();

export default withRouter(connect(mapStateToProps, {
  fetchRequest: fetch.request,
  fetchCleanup: fetch.cleanup,
  updateRequest: update.request,
  updateCleanup: update.cleanup,
})(EditTask));
