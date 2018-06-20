import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import Form from './form';
import actions from "../../redux/<%= resource_name %>/entity/actions";
import RestNew from "../shared/new";

class NewEntity extends Component {
  render() {
    // TODO: if createError で簡単なエラー表示？いらない？
    return (
      <RestNew
        name="<%= resource_name %>"
        baseUrl="/dashboard/<%= urlbase %>"
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
  return state.<%= ResourceName %>.Entity.toJS();
};

export default withRouter(connect(mapStateToProps, {
  request,
  cleanup,
})(NewEntity));
