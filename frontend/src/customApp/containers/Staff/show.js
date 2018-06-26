import React, {Component} from 'react';
import {connect} from 'react-redux';
import RestShow from '../shared/show';
import actions from '../../redux/staff/entity/actions';

class ShowEntity extends Component {

  render() {
    const {
      entity
    } = this.props;

    return (
      <RestShow
        name="staff"
        pkName="staff_code"
        baseUrl="/dashboard/staffs"
        {...this.props}
      >
        <ul>
          
          <li>StaffCode: {entity.staff_code}</li>
          <li>Name: {entity.name}</li>
          <li>StoreCode: {entity.store_code}</li>
          <li>Deleted: {entity.deleted}</li>
          <li>Attributes: {entity.attributes}</li>
          <li>AccessPolicy: {entity.access_policy}</li>
        </ul>
      </RestShow>
    );
  }
}

const {
  request,
  cleanup,
} = actions.fetch;


const mapStateToProps = (state) => {
  return state.Staff.Entity.toJS();
};

export default connect(mapStateToProps, {
  request,
  cleanup,
  destroy: actions.destroy.request,
  destroyCleanup: actions.destroy.cleanup,
})(ShowEntity);
