import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from '../../redux/discount/list/actions';
import RestIndex from '../shared/index';

class Index extends Component {
  render() {
    return (
      <RestIndex
        name="discount"
        pkName="discount_code"
        baseUrl="/dashboard/discounts"
        columnNames={["discount_code","discount_name"]}
        linkColumn="discount_code"
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return state.Discount.List.toJS();
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
