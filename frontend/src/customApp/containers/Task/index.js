import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import actions from "../../redux/task/list/actions";
import RestIndex from "../shared/index";

class Index extends Component {
  render() {
    return (
      <RestIndex
        name="task"
        pkName="id"
        baseUrl="/dashboard/tasks"
        columnNames={["id", "task_code", "name"]}
        linkColumn="name"
        {...this.props}
      />
    );
  }
}

const mapStateToProps = state => {
  return state.Task.List.toJS();
};

const { fetch, destroy } = actions;

export default withRouter(
  connect(
    mapStateToProps,
    {
      fetchRequest: fetch.request,
      destroyRequest: destroy.request,
      destroyCleanup: destroy.cleanup
    }
  )(Index)
);
