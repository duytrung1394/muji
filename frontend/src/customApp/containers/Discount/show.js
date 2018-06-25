import React, {Component} from 'react';
import {connect} from 'react-redux';
import RestShow from '../shared/show';
import actions from '../../redux/discount/entity/actions';

class ShowEntity extends Component {

  render() {
    const {
      entity
    } = this.props;

    return (
      <RestShow
        name="discount"
        pkName="discount_code"
        baseUrl="/dashboard/discounts"
        {...this.props}
      >
        <ul>
          
          <li>DiscountCode: {entity.discount_code}</li>
          <li>DiscountName: {entity.discount_name}</li>
          <li>StartTimestamp: {entity.start_timestamp}</li>
          <li>EndTimestamp: {entity.end_timestamp}</li>
          <li>DiscountKind: {entity.discount_kind}</li>
          <li>DiscountType: {entity.discount_type}</li>
          <li>DiscountValue: {entity.discount_value}</li>
          <li>Description: {entity.description}</li>
          <li>Attributes: {entity.attributes}</li>
          <li>ItemCodes: {entity.item_codes}</li>
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
  return state.Discount.Entity.toJS();
};

export default connect(mapStateToProps, {
  request,
  cleanup,
  destroy: actions.destroy.request,
  destroyCleanup: actions.destroy.cleanup,
})(ShowEntity);
