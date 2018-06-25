import React, {Component} from 'react';
import RestForm, {RestFormInput, RestFormSubmit} from '../shared/form';

export default class Form extends Component {
  render() {
    return (
      <RestForm {...this.props}>
        
        <RestFormInput name="lang" />
        <RestFormInput name="store_code" />
        <RestFormInput name="store_name" />
        <RestFormInput name="memo" />
        <RestFormInput name="details" />
        <RestFormInput name="status" />
        <RestFormInput name="start_timestamp" />
        <RestFormInput name="end_timestamp" />
        <RestFormInput name="store_pickup_flag" />
        <RestFormInput name="store_shipment_flag" />
        <RestFormInput name="tel1" />
        <RestFormInput name="tel2" />
        <RestFormInput name="hours1" />
        <RestFormInput name="hours2" />
        <RestFormInput name="store_type" />
        <RestFormInput name="assortment_type" />
        <RestFormInput name="zip_code" />
        <RestFormInput name="country" />
        <RestFormInput name="state" />
        <RestFormInput name="city" />
        <RestFormInput name="address1" />
        <RestFormInput name="address2" />
        <RestFormInput name="latitude" />
        <RestFormInput name="longitude" />
        <RestFormInput name="access" />
        <RestFormInput name="parking" />
        <RestFormInput name="settlement" />
        <RestFormInput name="brand_site_title" />
        <RestFormInput name="brand_site_url" />
        <RestFormInput name="store_site_title" />
        <RestFormInput name="store_site_url" />
        <RestFormInput name="news_site_title" />
        <RestFormInput name="news_site_url" />
        <RestFormInput name="brand_code" />
        <RestFormInput name="attributes" />
        <RestFormInput name="access_policy" />
        <RestFormSubmit label="保存" />
      </RestForm>
    );
  }
}
