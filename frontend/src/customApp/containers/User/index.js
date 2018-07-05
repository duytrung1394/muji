import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from '../../redux/user/list/actions';
import RestIndex from '../shared/index';

class Index extends Component {
  render() {
    return (
      <RestIndex
        name="user"
        pkName="id"
        baseUrl="/dashboard/users"
        columnNames={["id","username"]}
        linkColumn="username"
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return state.User.List.toJS();
};

const {
  fetch,
  destroy
} = actions;

export default withRouter(connect(mapStateToProps, {
  fetchRequest: fetch.request,
  destroyRequest: destroy.request,
  destroyCleanup: destroy.cleanup,
})(Index));
