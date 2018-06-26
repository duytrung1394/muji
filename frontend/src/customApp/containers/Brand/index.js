import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from '../../redux/brand/list/actions';
import RestIndex from '../shared/index';

class Index extends Component {
  render() {
    return (
      <RestIndex
        name="brand"
        pkName="brand_code"
        baseUrl="/dashboard/brands"
        columnNames={["brand_code","brand_name"]}
        linkColumn="brand_code"
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return state.Brand.List.toJS();
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
