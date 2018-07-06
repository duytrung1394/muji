import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import actions from "../../redux/item/entity/actions";
import Form from "./form";
import RestNew from "../shared/new";

class NewEntity extends Component {
  render() {
    return (
      <RestNew
        name="item"
        pkName="item_code"
        baseUrl="/dashboard/items"
        errors={this.props.createErrors.item}
        {...this.props}
        formComponent={Form}
      />
    );
  }
}

const { request, cleanup } = actions.create;

const mapStateToProps = state => {
  return state.Item.Entity.toJS();
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
