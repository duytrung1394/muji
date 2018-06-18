import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from '../../redux/<%= resource_name %>/list/actions';
import RestIndex from '../shared/index';

class Index extends Component {
  render() {
    return (
      <RestIndex
        name="<%= resource_name %>"
        baseUrl="/dashboard/<%= urlbase %>"
        columnNames={['id','name']}
        linkColumn="name"
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return state.<%= ResourceName %>.List.toJS();
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
