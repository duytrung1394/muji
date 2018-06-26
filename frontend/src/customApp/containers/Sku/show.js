import React, {Component} from 'react';
import {connect} from 'react-redux';
import RestShow from '../shared/show';
import actions from '../../redux/sku/entity/actions';

class ShowEntity extends Component {

  render() {
    const {
      entity
    } = this.props;

    return (
      <RestShow
        name="sku"
        pkName="sku_code"
        baseUrl="/dashboard/skus"
        {...this.props}
      >
        <ul>
          
          <li>Lang: {entity.lang}</li>
          <li>SkuCode: {entity.sku_code}</li>
          <li>SkuCodeAlt: {entity.sku_code_alt}</li>
          <li>ColorCode: {entity.color_code}</li>
          <li>ColorLabel: {entity.color_label}</li>
          <li>SizeCode: {entity.size_code}</li>
          <li>SizeLabel: {entity.size_label}</li>
          <li>PlannedYear: {entity.planned_year}</li>
          <li>SalesStartTimestamp: {entity.sales_start_timestamp}</li>
          <li>SalesEndTimestamp: {entity.sales_end_timestamp}</li>
          <li>SpecInfo: {entity.spec_info}</li>
          <li>Status: {entity.status}</li>
          <li>StartTimestamp: {entity.start_timestamp}</li>
          <li>EndTimestamp: {entity.end_timestamp}</li>
          <li>SubscriptionStartTimestamp: {entity.subscription_start_timestamp}</li>
          <li>SubscriptionEndTimestamp: {entity.subscription_end_timestamp}</li>
          <li>ItemCode: {entity.item_code}</li>
          <li>SkuName: {entity.sku_name}</li>
          <li>Memo: {entity.memo}</li>
          <li>DeliveryType: {entity.delivery_type}</li>
          <li>Description: {entity.description}</li>
          <li>Attributes: {entity.attributes}</li>
          <li>IncludeUris: {entity.include_uris}</li>
          <li>Msrp: {entity.msrp}</li>
          <li>DeliveryFee: {entity.delivery_fee}</li>
          <li>CurrencyCode: {entity.currency_code}</li>
          <li>MinimumAge: {entity.minimum_age}</li>
          <li>PromotionStatus: {entity.promotion_status}</li>
          <li>GiftWrap: {entity.gift_wrap}</li>
          <li>Reservable: {entity.reservable}</li>
          <li>Branches: {entity.branches}</li>
          <li>Badges: {entity.badges}</li>
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
  return state.Sku.Entity.toJS();
};

export default connect(mapStateToProps, {
  request,
  cleanup,
  destroy: actions.destroy.request,
  destroyCleanup: actions.destroy.cleanup,
})(ShowEntity);
