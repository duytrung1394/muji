import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from '../../redux/staff/list/actions';
import RestIndex from '../shared/index';

class Index extends Component {
  render() {
    return (
      <RestIndex
        name="staff"
        pkName="staff_code"
        baseUrl="/dashboard/staffs"
        columnNames={["staff_code","name"]}
        linkColumn="staff_code"
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return state.Staff.List.toJS();
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
