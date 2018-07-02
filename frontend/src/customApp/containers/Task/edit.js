import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import actions from "../../redux/task/entity/actions";
import Form from "./form";
import RestEdit from "../shared/edit";
import IntlMessages from "../../../components/utility/intlMessages";

class EditEntity extends Component {
  render() {
    return (
      <RestEdit
        name="task"
        title={<IntlMessages id="task.name" />}
        pkName="id"
        baseUrl="/dashboard/tasks"
        errors={ this.props.updateErrors.task }
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

const mapStateToProps = (state) => state.Task.Entity.toJS();

export default withRouter(connect(mapStateToProps, {
  fetchRequest: fetch.request,
  fetchCleanup: fetch.cleanup,
  updateRequest: update.request,
  updateCleanup: update.cleanup,
})(EditEntity));
