import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from '../../redux/sku/list/actions';
import RestIndex from '../shared/index';

class Index extends Component {
  render() {
    return (
      <RestIndex
        name="sku"
        pkName="sku_code"
        baseUrl="/dashboard/skus"
        columnNames={["sku_code","sku_name"]}
        linkColumn="sku_code"
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return state.Sku.List.toJS();
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
