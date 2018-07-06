import React, { Component } from "react";
import { connect } from "react-redux";
import RestShow from "../shared/show";
import actions from "../../redux/category/entity/actions";

class ShowEntity extends Component {
  render() {
    const { entity } = this.props;

    return (
      <RestShow
        name="category"
        pkName="category_code"
        baseUrl="/dashboard/categories"
        {...this.props}
      >
        <ul>
          <li>Lang: {entity.lang}</li>
          <li>CategoryCode: {entity.category_code}</li>
          <li>Status: {entity.status}</li>
          <li>StartTimestamp: {entity.start_timestamp}</li>
          <li>EndTimestamp: {entity.end_timestamp}</li>
          <li>CategoryName: {entity.category_name}</li>
          <li>FacetDispFlag: {entity.facet_disp_flag}</li>
          <li>Memo: {entity.memo}</li>
          <li>CategoryPath: {entity.category_path}</li>
          <li>Priority: {entity.priority}</li>
          <li>Description: {entity.description}</li>
          <li>Attributes: {entity.attributes}</li>
          <li>Branches: {entity.branches}</li>
          <li>Badges: {entity.badges}</li>
          <li>Keywords: {entity.keywords}</li>
          <li>Tags: {entity.tags}</li>
        </ul>
      </RestShow>
    );
  }
}

const { request, cleanup } = actions.fetch;

const mapStateToProps = state => {
  return state.Category.Entity.toJS();
};

export default connect(
  mapStateToProps,
  {
    request,
    cleanup,
    destroy: actions.destroy.request,
    destroyCleanup: actions.destroy.cleanup
  }
)(ShowEntity);
