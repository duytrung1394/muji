import React, {Component} from 'react';
import RestForm, {RestFormInput, RestFormSubmit} from '../shared/form';

export default class Form extends Component {
  render() {
    return (
      <RestForm {...this.props}>
        
        <RestFormInput name="lang" />
        <RestFormInput name="sku_code" />
        <RestFormInput name="sku_code_alt" />
        <RestFormInput name="color_code" />
        <RestFormInput name="color_label" />
        <RestFormInput name="size_code" />
        <RestFormInput name="size_label" />
        <RestFormInput name="planned_year" />
        <RestFormInput name="sales_start_timestamp" />
        <RestFormInput name="sales_end_timestamp" />
        <RestFormInput name="spec_info" />
        <RestFormInput name="status" />
        <RestFormInput name="start_timestamp" />
        <RestFormInput name="end_timestamp" />
        <RestFormInput name="subscription_start_timestamp" />
        <RestFormInput name="subscription_end_timestamp" />
        <RestFormInput name="item_code" />
        <RestFormInput name="sku_name" />
        <RestFormInput name="memo" />
        <RestFormInput name="delivery_type" />
        <RestFormInput name="description" />
        <RestFormInput name="attributes" />
        <RestFormInput name="include_uris" />
        <RestFormInput name="msrp" />
        <RestFormInput name="delivery_fee" />
        <RestFormInput name="currency_code" />
        <RestFormInput name="minimum_age" />
        <RestFormInput name="promotion_status" />
        <RestFormInput name="gift_wrap" />
        <RestFormInput name="reservable" />
        <RestFormInput name="branches" />
        <RestFormInput name="badges" />
        <RestFormInput name="keywords" />
        <RestFormInput name="tags" />
        <RestFormInput name="access_policy" />
        <RestFormSubmit label="保存" />
      </RestForm>
    );
  }
}
