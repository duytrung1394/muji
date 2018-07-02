import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from '../../redux/task/list/actions';
import RestIndex from '../shared/index';
import IntlMessages from "../../../components/utility/intlMessages";

class Index extends Component {
  render() {
    return (
      <RestIndex
        name="task"
        title={<IntlMessages id="task.name" />}
        pkName="id"
        baseUrl="/dashboard/tasks"
        columnNames={["id","name"]}
        linkColumn="name"
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return state.Task.List.toJS();
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
