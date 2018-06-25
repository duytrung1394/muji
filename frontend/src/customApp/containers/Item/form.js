import React, {Component} from 'react';
import RestForm, {RestFormInput, RestFormSubmit} from '../shared/form';

export default class Form extends Component {
  render() {
    return (
      <RestForm {...this.props}>
        
        <RestFormInput name="lang" />
        <RestFormInput name="item_code" />
        <RestFormInput name="item_label" />
        <RestFormInput name="item_code_alt" />
        <RestFormInput name="reservation_flag" />
        <RestFormInput name="store_receive_flag" />
        <RestFormInput name="priority" />
        <RestFormInput name="status" />
        <RestFormInput name="start_timestamp" />
        <RestFormInput name="end_timestamp" />
        <RestFormInput name="item_name" />
        <RestFormInput name="memo" />
        <RestFormInput name="description" />
        <RestFormInput name="attributes" />
        <RestFormInput name="brand_code" />
        <RestFormInput name="promotion_status" />
        <RestFormInput name="spec_info" />
        <RestFormInput name="size_info" />
        <RestFormInput name="link_urls" />
        <RestFormInput name="branches" />
        <RestFormInput name="badges" />
        <RestFormInput name="addon_service_codes" />
        <RestFormInput name="keywords" />
        <RestFormInput name="tags" />
        <RestFormInput name="access_policy" />
        <RestFormSubmit label="保存" />
      </RestForm>
    );
  }
}
