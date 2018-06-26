import React, {Component} from 'react';
import {connect} from 'react-redux';
import RestShow from '../shared/show';
import actions from '../../redux/item/entity/actions';

class ShowEntity extends Component {

  render() {
    const {
      entity
    } = this.props;

    return (
      <RestShow
        name="アイテム"
        pkName="item_code"
        baseUrl="/dashboard/items"
        {...this.props}
      >
        <ul>
          
          <li>Lang: {entity.lang}</li>
          <li>ItemCode: {entity.item_code}</li>
          <li>ItemLabel: {entity.item_label}</li>
          <li>ItemCodeAlt: {entity.item_code_alt}</li>
          <li>ReservationFlag: {entity.reservation_flag}</li>
          <li>StoreReceiveFlag: {entity.store_receive_flag}</li>
          <li>Priority: {entity.priority}</li>
          <li>Status: {entity.status}</li>
          <li>StartTimestamp: {entity.start_timestamp}</li>
          <li>EndTimestamp: {entity.end_timestamp}</li>
          <li>ItemName: {entity.item_name}</li>
          <li>Memo: {entity.memo}</li>
          <li>Description: {entity.description}</li>
          <li>Attributes: {entity.attributes}</li>
          <li>BrandCode: {entity.brand_code}</li>
          <li>PromotionStatus: {entity.promotion_status}</li>
          <li>SpecInfo: {entity.spec_info}</li>
          <li>SizeInfo: {entity.size_info}</li>
          <li>LinkUrls: {entity.link_urls}</li>
          <li>Branches: {entity.branches}</li>
          <li>Badges: {entity.badges}</li>
          <li>AddonServiceCodes: {entity.addon_service_codes}</li>
          <li>Keywords: {entity.keywords}</li>
          <li>Tags: {entity.tags}</li>
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
  return state.Item.Entity.toJS();
};

export default connect(mapStateToProps, {
  request,
  cleanup,
  destroy: actions.destroy.request,
  destroyCleanup: actions.destroy.cleanup,
})(ShowEntity);
