import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import actions from "../../redux/user/entity/actions";
import Form from "./form";
import RestNew from "../shared/new";

class NewEntity extends Component {
  render() {
    return (
      <RestNew
        name="user"
        pkName="id"
        baseUrl="/dashboard/users"
        errors={ this.props.createErrors.user }
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
  return state.User.Entity.toJS();
};

export default withRouter(connect(mapStateToProps, {
  request,
  cleanup,
})(NewEntity));
