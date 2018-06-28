import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from '../../redux/item/list/actions';
import RestIndex from '../shared/index';
import ItemSearch from './search';

class Index extends Component {
  render() {
    return (
      <RestIndex
        name="アイテム"
        pkName="item_code"
        baseUrl="/dashboard/items"
        columnNames={["item_code","item_name"]}
        linkColumn="item_code"
        SearchComponent={ItemSearch}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return state.Item.List.toJS();
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
