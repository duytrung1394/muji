import React, {Component} from 'react';
import RestForm, {RestFormInput, RestFormSubmit} from '../shared/form';

export default class Form extends Component {
  render() {
    return (
      <RestForm {...this.props}>
        
        <RestFormInput name="lang" />
        <RestFormInput name="brand_code" />
        <RestFormInput name="brand_name" />
        <RestFormInput name="status" />
        <RestFormInput name="parent_brand_code" />
        <RestFormInput name="image_url" />
        <RestFormInput name="detail_url" />
        <RestFormInput name="zip_code" />
        <RestFormInput name="country" />
        <RestFormInput name="state" />
        <RestFormInput name="city" />
        <RestFormInput name="address1" />
        <RestFormInput name="address2" />
        <RestFormInput name="tel" />
        <RestFormInput name="deleted" />
        <RestFormInput name="description" />
        <RestFormInput name="attributes" />
        <RestFormInput name="access_policy" />
        <RestFormSubmit label="保存" />
      </RestForm>
    );
  }
}
