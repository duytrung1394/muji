import React, {Component} from 'react';
import {connect} from 'react-redux';
import RestShow from '../shared/show';
import actions from '../../redux/store/entity/actions';

class ShowEntity extends Component {

  render() {
    const {
      entity
    } = this.props;

    return (
      <RestShow
        name="store"
        pkName="store_code"
        baseUrl="/dashboard/stores"
        {...this.props}
      >
        <ul>
          
          <li>Lang: {entity.lang}</li>
          <li>StoreCode: {entity.store_code}</li>
          <li>StoreName: {entity.store_name}</li>
          <li>Memo: {entity.memo}</li>
          <li>Details: {entity.details}</li>
          <li>Status: {entity.status}</li>
          <li>StartTimestamp: {entity.start_timestamp}</li>
          <li>EndTimestamp: {entity.end_timestamp}</li>
          <li>StorePickupFlag: {entity.store_pickup_flag}</li>
          <li>StoreShipmentFlag: {entity.store_shipment_flag}</li>
          <li>Tel1: {entity.tel1}</li>
          <li>Tel2: {entity.tel2}</li>
          <li>Hours1: {entity.hours1}</li>
          <li>Hours2: {entity.hours2}</li>
          <li>StoreType: {entity.store_type}</li>
          <li>AssortmentType: {entity.assortment_type}</li>
          <li>ZipCode: {entity.zip_code}</li>
          <li>Country: {entity.country}</li>
          <li>State: {entity.state}</li>
          <li>City: {entity.city}</li>
          <li>Address1: {entity.address1}</li>
          <li>Address2: {entity.address2}</li>
          <li>Latitude: {entity.latitude}</li>
          <li>Longitude: {entity.longitude}</li>
          <li>Access: {entity.access}</li>
          <li>Parking: {entity.parking}</li>
          <li>Settlement: {entity.settlement}</li>
          <li>BrandSiteTitle: {entity.brand_site_title}</li>
          <li>BrandSiteUrl: {entity.brand_site_url}</li>
          <li>StoreSiteTitle: {entity.store_site_title}</li>
          <li>StoreSiteUrl: {entity.store_site_url}</li>
          <li>NewsSiteTitle: {entity.news_site_title}</li>
          <li>NewsSiteUrl: {entity.news_site_url}</li>
          <li>BrandCode: {entity.brand_code}</li>
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
  return state.Store.Entity.toJS();
};

export default connect(mapStateToProps, {
  request,
  cleanup,
  destroy: actions.destroy.request,
  destroyCleanup: actions.destroy.cleanup,
})(ShowEntity);
