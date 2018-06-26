import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import actions from "../../redux/brand/entity/actions";
import Form from "./form";
import RestNew from "../shared/new";

class NewEntity extends Component {
  render() {
    return (
      <RestNew
        name="brand"
        pkName="brand_code"
        baseUrl="/dashboard/brands"
        errors={ this.props.createErrors.brand }
        {...this.props}
        formComponent={Form}
      />
    );
  }
}

const {
  request,
  cleanup
} = actions.create;

const mapStateToProps = (state) => {
  return state.Brand.Entity.toJS();
};

export default withRouter(connect(mapStateToProps, {
  request,
  cleanup,
})(NewEntity));
