import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from '../../redux/store/list/actions';
import RestIndex from '../shared/index';

class Index extends Component {
  render() {
    return (
      <RestIndex
        name="store"
        pkName="store_code"
        baseUrl="/dashboard/stores"
        columnNames={["store_code","store_name"]}
        linkColumn="store_code"
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return state.Store.List.toJS();
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
