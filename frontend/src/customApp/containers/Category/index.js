import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import actions from "../../redux/category/list/actions";
import RestIndex from "../shared/index";

class Index extends Component {
  render() {
    return (
      <RestIndex
        name="category"
        pkName="category_code"
        baseUrl="/dashboard/categories"
        columnNames={["category_code", "category_name", "status"]}
        linkColumn="category_code"
        {...this.props}
      />
    );
  }
}

const mapStateToProps = state => {
  return state.Category.List.toJS();
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
