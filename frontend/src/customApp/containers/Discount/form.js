import React, {Component} from 'react';
import RestForm, {RestFormInput, RestFormSubmit} from '../shared/form';

export default class Form extends Component {
  render() {
    return (
      <RestForm {...this.props}>
        
        <RestFormInput name="discount_code" />
        <RestFormInput name="discount_name" />
        <RestFormInput name="start_timestamp" />
        <RestFormInput name="end_timestamp" />
        <RestFormInput name="discount_kind" />
        <RestFormInput name="discount_type" />
        <RestFormInput name="discount_value" />
        <RestFormInput name="description" />
        <RestFormInput name="attributes" />
        <RestFormInput name="item_codes" />
        <RestFormInput name="access_policy" />
        <RestFormSubmit label="保存" />
      </RestForm>
    );
  }
}
