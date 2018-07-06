import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from '../../redux/<%= resource_name %>/list/actions';
import RestIndex from '../shared/index';

class Index extends Component {
  render() {
    return (
      <RestIndex
        name="<%= resourceName %>"
        pkName="<%= pkName %>"
        baseUrl="/dashboard/<%= urlbase %>"
        columnNames={<%- JSON.stringify(listColumns) %>}
        linkColumn="<%= linkColumnName %>"
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