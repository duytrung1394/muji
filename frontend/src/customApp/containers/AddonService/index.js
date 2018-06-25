import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from '../../redux/addon_service/list/actions';
import RestIndex from '../shared/index';

class Index extends Component {
  render() {
    return (
      <RestIndex
        name="addon_service"
        pkName="addon_service_code"
        baseUrl="/dashboard/addon-services"
        columnNames={["addon_service_code","addon_service_name"]}
        linkColumn="addon_service_code"
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return state.AddonService.List.toJS();
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
