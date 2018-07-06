import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import actions from "../../redux/task/entity/actions";
import Form from "./form";
import RestNew from "../shared/new";

class NewEntity extends Component {
  render() {
    return (
      <RestNew
        name="task"
        pkName="id"
        baseUrl="/dashboard/tasks"
        errors={this.props.createErrors.task}
        {...this.props}
        formComponent={Form}
      />
    );
  }
}

const { request, cleanup } = actions.create;

const mapStateToProps = state => {
  return state.Task.Entity.toJS();
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      request,
      cleanup
    }
  )(NewEntity)
);
