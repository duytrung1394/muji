import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import TaskForm from './form';
import actions from "../../redux/task/entity/actions";
import RestNew from "../shared/new";

class NewTask extends Component {
  render() {
    // TODO: if createError で簡単なエラー表示？いらない？
    return (
      <RestNew
        name="task" 
        baseUrl="/dashboard/tasks"
        {...this.props}
        formComponent={TaskForm}
      />
    );
  }
}

const {
  request,
  cleanup
} = actions.create;

const mapStateToProps = (state) => {
  return state.Task.Entity.toJS();
};

export default withRouter(connect(mapStateToProps, {
  request,
  cleanup,
})(NewTask));
